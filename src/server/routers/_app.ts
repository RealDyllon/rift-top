/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
import { createRouter } from '../createRouter';
import { indexRouter } from './index';
import { roomsRouter } from './rooms';

export const appRouter = createRouter()
/**
     * Optionally do custom error (type safe!) formatting
     * @link https://trpc.io/docs/error-formatting
     */
// .formatError(({ shape, error }) => { })
/**
     * Add a health check endpoint to be called with `/api/trpc/healthz`
     */
  .query('healthz', {
    async resolve() {
      return 'yay!';
    },
  })
/**
     * Merge `indexRouter` under `index.`
     */
  .merge('index.', indexRouter)
  .merge('rooms.', roomsRouter);

export type AppRouter = typeof appRouter;
