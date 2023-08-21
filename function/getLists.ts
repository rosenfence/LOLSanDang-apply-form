import { ListType } from '@/interface/interface';

const GET_LISTS_URL = '/api/lists/getLists';

export async function getLists() {
  let response: ListType[] = new Array();
  await fetch(GET_LISTS_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((err) => console.log(err));
  return response;
}
