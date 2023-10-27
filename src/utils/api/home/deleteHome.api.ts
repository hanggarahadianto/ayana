const api_URL = "http://localhost:7000/home/deleteById";
export const DeleteHome = async (id: string) => {
  const response = await fetch(`${api_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    console.log("failed to fetch");
    return;
  }

  console.log("delete success");
  return;
};
