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
