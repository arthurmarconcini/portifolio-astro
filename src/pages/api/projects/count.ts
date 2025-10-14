import type { APIRoute } from 'astro';
import { prismaClient } from '@/lib/prisma';

export const GET: APIRoute = async () => {
  try {
    const count = await prismaClient.project.count();
    return new Response(JSON.stringify({ count }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch project count:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch project count' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};