import { z } from 'zod';
import { createRouter } from '../createRouter';

export const ChatRouter = createRouter()
    .query('hello', {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
            };
        },
    });
