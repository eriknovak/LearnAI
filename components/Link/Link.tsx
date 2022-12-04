import NextLink, { LinkProps } from "next/link";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface ChidrenProps {
  children: React.ReactNode;
}

const Link: React.FunctionComponent<ChidrenProps & LinkProps> = ({
  children,
  ...props
}) => {
  return (
    <NextLink
      {...props}
      as={`${publicRuntimeConfig.basePath || ""}${props.href}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;