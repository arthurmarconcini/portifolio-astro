import type { APIRoute } from 'astro';
import { prismaClient } from '@/lib/prisma';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') ?? '1', 10);
  const limit = parseInt(url.searchParams.get('limit') ?? '6', 10);
  const term = url.searchParams.get('term');

  if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
    return new Response(
      JSON.stringify({ message: 'Invalid page or limit parameter' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const skip = (page - 1) * limit;

  try {
    let projects;
    const queryOptions = {
      orderBy: {
        created_at: 'desc',
      },
    };

    if (term) {
      projects = await prismaClient.project.findMany({
        ...queryOptions,
        where: {
          title: {
            contains: term,
            mode: 'insensitive',
          },
        },
      });
    } else {
      projects = await prismaClient.project.findMany({
        ...queryOptions,
        skip: skip,
        take: limit,
      });
    }

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch projects' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};