import { z } from 'zod';
import { createRouter } from '../createRouter';

export const SettingsRouter = createRouter()
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
