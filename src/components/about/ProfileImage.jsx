import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import profileImage from "./profileImage.jpeg";
export const ProfileImage = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} flex={1}>
      <Image w="60%" rounded={"full"} alt="sandip maurya" src="https://avatars.githubusercontent.com/u/112936404?v=4" />
    </Flex>
  );
};
