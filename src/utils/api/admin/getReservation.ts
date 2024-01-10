export const GetReservationList = async () => {
  const url = `${process.env.URL}/reservation/get`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const reservationList = await res.json();
  // console.log(homeList);

  return reservationList.data;
};
