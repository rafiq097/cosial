import React from "react";
import { Box, VStack, Flex, Text, Link } from "@chakra-ui/layout";
import { Avatar, Portal, MenuList, MenuItem } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Menu, MenuButton } from "@chakra-ui/menu";
import { toast } from "react-hot-toast";

const UserHeader = () => {
  const copyURL = () => {
    const URL = window.location.href;
    navigator.clipboard
      .writeText(URL)
      .then(() => toast.success("Copied"))
      .catch(() => toast.error("Error copying"));
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            SAD BRO
          </Text>
          <Flex gap={"2"} alignItems={"center"}>
            <Text fontSize={"sm"}>sad</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="SAD BRO" src="/sadbro.png" size={"xl"} />
        </Box>
      </Flex>
      <Text>Poor, Bro</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>0.0 followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>Instagram.com</Link>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"dark.gray"}>
                  <MenuItem bg={"dark.gray"} onClick={copyURL}>
                    Copy Link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb={3}
          cursor={"pointer"}
        >
            <Text fontWeight={"bold"}>Posts / Tweets</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          pb={3}
          color={"gray.light"}
          cursor={"pointer"}
        >
            <Text fontWeight={"bold"}>Replies / Likes</Text></Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
