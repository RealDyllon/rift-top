import { z } from 'zod';
import { createRouter } from '../createRouter';

export const GameMapRouter = createRouter()
  .query('getGameMap', {
    input: z
      .object({
        username: z.string().nullish(),
      })
      .nullish(),
    // eslint-disable-next-line no-unused-vars
    resolve({ input }) {
      return {
        biomes: ['red', 'blue', 'green', 'purple', 'teal', 'yellow',
        ],
      };
    },
  });
