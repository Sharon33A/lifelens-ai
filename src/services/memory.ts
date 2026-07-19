import { MemoryClient } from "mem0ai";

const client = new MemoryClient({
  apiKey: process.env.MEM0_API_KEY!,
});

export async function saveMemory(userId: string, memory: string) {
  return await client.add(
    [
      {
        role: "user",
        content: memory,
      },
    ],
    {
      user_id: userId,
    }
  );
}

