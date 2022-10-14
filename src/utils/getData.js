const URL = "http://localhost:3000";

export const getData = async () => {
  try {
    const response = await fetch(`${URL}/channels`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};
