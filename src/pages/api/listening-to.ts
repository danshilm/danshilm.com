import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface ListenBrainzResponse {
  payload: {
    count: number;
    latest_listen_ts: number;
    listens: {
      inserted_at: number;
      listened_at: number;
      recording_msid: string;
      track_metadata: {
        additional_info: {
          artist_msid?: any;
          listening_from: string;
          recording_msid: string;
          release_msid?: any;
        };
        artist_name: string;
        mbid_mapping?: {
          artist_mbids: string[];
          recording_mbid: string;
          release_mbid: string;
        };
        release_name: string;
        track_name: string;
      };
      user_name: string;
    }[];
    user_id: string;
  };
}

interface CoverImageResponse {
  images: {
    types: string[];
    front: boolean;
    back: boolean;
    edit: number;
    image: string;
    comment: string;
    approved: boolean;
    id: string;
    thumbnails: {
      250: string;
      500: string;
      1200: string;
      small: string;
      large: string;
    };
  }[];
  release: string;
}

export interface ListenResponse {
  artist: string;
  song: string;
  album: string;
  albumArtUrl?: string;
  lastListenedTo: number;
  isLive: boolean;
}

// give or take 3 minutes
const isListeningTo = (time: number) => {
  const now = new Date();
  const twoMinutes = 3 * 60 * 1000;

  return now.getTime() - time * 1000 < twoMinutes;
};

const getListen = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<ListenBrainzResponse>(
      'https://api.listenbrainz.org/1/user/CrazyMonk/listens?count=1',
      {
        headers: {
          Authorization: process.env.LISTENBRAINZ_USER_TOKEN,
        },
      }
    );

    const lastListenedTo = response.data.payload.listens[0];

    if (!lastListenedTo) {
      throw new Error('Nothing was previously listened to');
    }

    const data: ListenResponse = {
      album: lastListenedTo.track_metadata.release_name,
      artist: lastListenedTo.track_metadata.artist_name,
      song: lastListenedTo.track_metadata.track_name,
      lastListenedTo: lastListenedTo.listened_at,
      isLive: isListeningTo(lastListenedTo.listened_at),
    };

    if (lastListenedTo.track_metadata.mbid_mapping?.release_mbid) {
      const coverImageResponse = await axios.get<CoverImageResponse>(
        `https://coverartarchive.org/release/${lastListenedTo.track_metadata.mbid_mapping.release_mbid}`
      );

      if (coverImageResponse.data.images[0].image) {
        data.albumArtUrl = coverImageResponse.data.images[0].image;
      }
    }

    res.status(200).json(data);
  } catch (e) {
    console.log(`Something went wrong: ${e}`);
    res.status(500).json({ error: `Something went wrong: ${e}` });
  }
};

export default getListen;
