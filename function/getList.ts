export async function getList(listId: string) {
  const GET_LIST_URL = `/api/lists/getList?listId=${listId}`;

  let response;
  await fetch(GET_LIST_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      response = data;
    })
    .catch((err) => console.log(err));
  return response;
}
