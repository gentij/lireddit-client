import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}
export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>

        <NextLink href="/register">
          <Link href="/register">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Box display="flex">
        <Box mr={2}>{data?.me?.username}</Box>
        <Button variant="link">Logout</Button>
      </Box>
    );
  }

  return (
    <Box display="flex" p={4} bg="tomato" ml="auto">
      <Box color="#f3f3f3" ml="auto" mr={2}>
        {body}
      </Box>
    </Box>
  );
};
