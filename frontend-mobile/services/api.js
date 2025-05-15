export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/get-users");
    if (!response.ok) throw new Error("Fel vid hämtning av användare.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchPlants = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/1/get-flowers");
    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addPlant = async (name) => {
  try {
    const response = await fetch("http://localhost:3000/api/1/add-flower", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ "flower_name": name }),
    });
    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
