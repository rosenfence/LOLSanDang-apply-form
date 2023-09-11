import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '../../getQueryClient';
import { getList } from '@/function/getList';
import List from './List';

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['list'], getList);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <List />
    </Hydrate>
  );
}
