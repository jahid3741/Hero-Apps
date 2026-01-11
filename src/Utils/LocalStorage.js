const STORAGE_KEY = "installed";

// -------------------- GET --------------------
export const loadInstalled = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Failed to load installed apps:", error);
    return [];
  }
};

// -------------------- CHECK --------------------
export const isInstalled = (id) => {
  const installed = loadInstalled();
  return installed.some((app) => String(app.id) === String(id));
};

// -------------------- SAVE --------------------
export const addToInstalled = (app) => {
  try {
    const installed = loadInstalled();

    const isDuplicate = installed.some(
      (item) => String(item.id) === String(app.id)
    );

    if (isDuplicate) {
      return false; // already installed
    }

    const updatedInstalled = [...installed, app];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInstalled));
    return true;
  } catch (error) {
    console.error("Failed to add app:", error);
    return false;
  }
};

// -------------------- REMOVE --------------------
export const removeFromInstalled = (id) => {
  try {
    const installed = loadInstalled();
    const updatedInstalled = installed.filter(
      (app) => String(app.id) !== String(id)
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedInstalled));
    return true;
  } catch (error) {
    console.error("Failed to remove app:", error);
    return false;
  }
};
