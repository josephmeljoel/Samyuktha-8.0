import axios from "axios";

async function checkRegisteration(name: string) {
  const response = await axios.post("/api/register", {
    value: name,
  });

  const responseData = response.data;
  return response;

  console.log();
}

export default checkRegisteration;
