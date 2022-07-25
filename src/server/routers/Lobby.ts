import { z } from 'zod';
import { createRouter } from '../createRouter';

export const LobbyRouter = createRouter()
  .query('getLobby', {
    input: z
      .object({
        username: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        Rooms: [
          { id: '001', name: 'Experienced DM', book: 'book 1', description: 'Beginners welcomed', player: '5' },
          { id: '002', name: 'Fun times', book: 'book 5', description: 'Easy going chill dnd sess', player: '7' },
          { id: '003', name: 'Hardcore! Experienced players only', book: 'book 3', description: 'serious dungeon dwellers only', player: '4' },
        ],
      };
    },
  });
