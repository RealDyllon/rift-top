import { z } from 'zod';
import { createRouter } from '../createRouter';

export const profilesRouter = createRouter()
  .query('getProfile', {
    input: z
      .object({
        username: z.string().nullish(),
      })
      .nullish(),
    // eslint-disable-next-line no-unused-vars
    resolve({ input }) {
      return {
        Profile: [
          {
            id: '001',
            name: 'User1',
            dm: '0',
            last_login: 'Yesterday',
            status: 'Away',
            followers: '999',
            dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrorsQm_0UkKM-a0gERrV9xJ9gV3fJ1hYCa2z59jCClmFps7rydFkStYMQzXZEwcnRXoU&usqp=CAU',
          },
        ],
      };
    },
  });
