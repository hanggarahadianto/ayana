export const GetHomeList = async () => {
  const res = await fetch("http://localhost:7000/home/get", {
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
