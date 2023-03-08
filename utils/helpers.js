export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const addOrUpdateItem = (arr, item) => {
  let tempArr = [];
  const tempItem = arr.find((currentItem) => currentItem.id === item.id);
  if (tempItem) {
    tempArr = arr.map((currentItem) => {
      if (currentItem.id === item.id) currentItem = item;
      return currentItem;
    });
  } else {
    tempArr = [...arr, item];
  }
  return tempArr;
};

export const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    let searchData = localStorage.getItem("formData");
    return searchData ? JSON.parse(searchData) : {};
  }
};
export const getLocalStoragePax = () => {
  if (typeof window !== "undefined") {
    let paxData = localStorage.getItem("passengersData");
    return paxData ? JSON.parse(paxData) : [];
  }
};
