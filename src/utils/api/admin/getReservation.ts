export const GetReservationList = async () => {
  const res = await fetch("http://localhost:7000/reservation/get", {
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
