import { PrismaClient } from "../prisma-client/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

function createPrismaClient(): PrismaClient | null {
  try {
    return new PrismaClient({} as any);
  } catch {
    return null;
  }
}

export const prisma: PrismaClient =
  (globalForPrisma.prisma ?? createPrismaClient()) as PrismaClient;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
