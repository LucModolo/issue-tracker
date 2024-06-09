import NextLink from "next/link";
import  { Link as RadixLink } from '@radix-ui/themes';

interface Probs {
    href:string;
    children:string;
}

const Link = ({href,children}: Probs) => {
  return (
    <NextLink href= {href} passHref legacyBehavior>
    <RadixLink>{children}</RadixLink>
    </NextLink>
    
  )
}

export default Link