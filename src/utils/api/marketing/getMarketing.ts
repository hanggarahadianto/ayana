export const GetMarketingList = async () => {
  const url = `http://localhost:8080/marketing/get`;
  // const url = `${process.env.URL}/marketing/get`;
  console.log(url);

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const marketingList = await res.json();
  // console.log(homeList);

  return marketingList.data;
};
