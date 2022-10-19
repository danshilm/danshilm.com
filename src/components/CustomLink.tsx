import React, { AnchorHTMLAttributes } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const CustomLink = ({ href, text }: CustomLinkProps) => {
  return (
    <span className="underline transition duration-300 cursor-pointer dark:hover:text-white hover:text-black">
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </span>
  );
};

export default CustomLink;
