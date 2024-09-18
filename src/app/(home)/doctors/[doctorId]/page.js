// doctorId]
const { BASEURL } = require("../../page");

const getDoctor = async (doctorId) => {
  try {
    const result = await fetch(`${BASEURL}/api/doctor/${doctorId}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Details = async ({ params }) => {
  const getData = await getDoctor(params?.doctorId);
  console.log("getData:", getData);
  return (
    <div>
      <h1>{params?.doctorId}</h1>
    </div>
  );
};
export default Details;
