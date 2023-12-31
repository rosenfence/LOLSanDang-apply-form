export async function getList(listId: string) {
  const GET_LIST_URL = `/api/lists/getList?listId=${listId}`;

  let response;
  await fetch(GET_LIST_URL, { cache: 'no-store' })
    .then((res) => res.json())
    .then((data) => {
      response = data;
    })
    .catch((err) => console.log(err));
  return response;
}
