import { requestPostListType } from '@/interface/interface';

const POST_LISTS_URL = '/api/lists/postLists';

export async function postLists(req: requestPostListType) {
  await fetch(POST_LISTS_URL, {
    method: 'POST',
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
