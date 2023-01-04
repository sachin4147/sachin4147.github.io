import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { HiDownload } from "react-icons/hi";

export const Resume = () => {
  return (
    <Link
      onClick={() =>
        window.open(
          "https://drive.google.com/file/d/1MmZYueobAPsLi02WEcTZ-sPgLEA4IMa5/view?usp=share_link"
        )
      }
      download
      style={{ textDecoration: "none" }}
    >
      <Flex alignItems="center" gap="5px">
        <Text>Resume</Text>
        <HiDownload />
      </Flex>
    </Link>
  );
};
