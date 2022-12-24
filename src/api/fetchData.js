async function fetchData(keyword) {
  const options = {
    method: "GET"[("Content-Type", "application/json")],
  };
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${keyword}`,
      options
    );
    return await response.json();
  } catch (error) {
    return null;
  }
}

export default fetchData;
