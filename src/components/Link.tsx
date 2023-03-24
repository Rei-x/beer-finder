import React from "react";
import NextLink from "next/link";
import { Link as DaisyLink } from "react-daisyui";
import { LinkProps } from "next/link";
export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <NextLink {...props}>
      <DaisyLink>{children}</DaisyLink>
    </NextLink>
  );
};
