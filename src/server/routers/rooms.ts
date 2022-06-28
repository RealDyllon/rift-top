import { z } from 'zod';
import { createRouter } from '../createRouter';

export const roomsRouter = createRouter()
  .query('getRooms', {
    input: z
      .object({
        username: z.string().nullish(),
      })
      .nullish(),
    // eslint-disable-next-line no-unused-vars
    resolve({ input }) {
      return {
        rooms: [
          { id: '001', name: 'Beer Pong Friends' },
          { id: '002', name: 'Saturday Night Dnd' },
        ],
      };
    },
  });
