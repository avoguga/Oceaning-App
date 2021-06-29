export const searchName = async (name) => {
  try {
    let url = ` http://localhost:3333/name${name}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const searchSkills = async (skills) => {
  try {
    let url = ` http://localhost:3333/skills${skills}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};