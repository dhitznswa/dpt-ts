import { prisma } from "./prisma";

export default async function loggingTool(toolName: string, ipAddr: string) {
  try {
    const log = prisma.log.create({
      data: {
        tool: toolName,
        ipAddr,
        used_at: new Date().toISOString(),
      },
    });

    return log;
  } catch (e) {
    console.log("Error Logging Tool : ", e);
  }
}
