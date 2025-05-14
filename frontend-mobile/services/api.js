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

export const fetchPlantDetails = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/1/get-flowers/1");
    if (!response.ok) throw new Error("Fel vid hämtning av data.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
