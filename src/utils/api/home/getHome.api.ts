export const GetHomeList = async () => {
  const url = `${process.env.URL}/home/get`;
  console.log(url);

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const homeList = await res.json();
  // console.log(homeList);

  return homeList.data;
};
