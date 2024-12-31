import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
    DATABASE_URL: string; // Ensure type `string` is used
}

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {
        // Initialize Prisma Client with Accelerate
        const prisma = new PrismaClient({
            datasources: {
                db: {
                    url: env.DATABASE_URL, // Pass the DATABASE_URL
                },
            },
        }).$extends(withAccelerate());

        try {
            // Create a log entry in the database
            const response = await prisma.log.create({
                data: {
                    level: 'Info',
                    message: 'Log message example',
                    meta: {
                        headers: JSON.stringify(Object.fromEntries(request.headers.entries())),
                    },
                },
            });

            // Return the created log entry as a JSON response
            return Response.json(response);
        } catch (error) {
            console.error('Error creating log entry:', error);
            return new Response('Failed to create log entry', { status: 500 });
        } finally {
            // Ensure Prisma Client is disconnected to avoid resource leaks
            await prisma.$disconnect();
        }
    },
};
