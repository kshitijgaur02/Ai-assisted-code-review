import { prisma }
  from "../lib/prisma";

const test = async () => {
  const analyses =
    await prisma.analysis.findMany();

  console.log(
    analyses
  );

  await prisma.$disconnect();
};

test();