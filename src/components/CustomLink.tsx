import React, { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const CustomLink = ({ href, text }: CustomLinkProps) => {
  return (
    <span className="underline cursor-pointer hover:text-white transition duration-300">
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </span>
  );
};

export default CustomLink;
