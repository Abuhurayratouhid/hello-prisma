import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const getAllUsers = await prisma.user.findMany();
  // console.log(getAllUsers);
  // const postUser = await prisma.user.create({
  //   data: {
  //     email: "example4@gmail.com",
  //     name: "Abu Hurayra4",
  //     role: 'Student'
  //   },
  // });
  // console.log(postUser);
}

main();
