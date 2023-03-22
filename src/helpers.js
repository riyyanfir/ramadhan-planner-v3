import { v4 as uuidv4 } from "uuid";

// Fetch
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Create
export const createUserName = (name) => {
  return localStorage.setItem("userName", JSON.stringify(name));
};

export const createChallenge = ({ name }) => {
  const newItem = {
    id: uuidv4(),
    name,
    createdAt: Date.now(),
  };

  const existingChallenge = fetchData("challenge") ?? [];
  return localStorage.setItem("challenge", JSON.stringify([...existingChallenge, newItem]));
};

export const createDailyAmal = ({ daysTo, date, act, write }) => {
  const newItem = {
    id: uuidv4(),
    daysTo,
    date,
    act,
    write,
    createdAt: Date.now(),
  };

  const existingDailyAmal = fetchData("dailyAmal") ?? [];
  return localStorage.setItem("dailyAmal", JSON.stringify([...existingDailyAmal, newItem]));
};

export const createKhatam = ({ day, juz, fromSurah, ayat1, toSurah, ayat2 }) => {
  const newItem = {
    id: uuidv4(),
    day,
    juz,
    fromSurah,
    ayat1,
    toSurah,
    ayat2,
    createdAt: Date.now(),
  };

  const existingKhatamQuran = fetchData("khatamQuran") ?? [];
  return localStorage.setItem("khatamQuran", JSON.stringify([...existingKhatamQuran, newItem]));
};

// Delete
export const deleteItem = ({ key, id }) => {
  if (id) {
    const existingData = fetchData(key);
    const filterData = existingData.filter((x) => x.id !== id);
    return localStorage.setItem(key, JSON.stringify(filterData));
  }

  return localStorage.removeItem(key);
};

// Date Format
export const dateFormat = (blogDate) => {
  const date = new Date(blogDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const newDate = date.toLocaleDateString("id-ID", options);

  return newDate;
};

export const dateFormatOnlyDay = (blogDate) => {
  const date = new Date(blogDate);
  const options = { weekday: "long" };
  const newDate = date.toLocaleDateString("id-ID", options);
  return newDate;
};

export const selisihHari = (day) => {
  let date1 = new Date(day);
  let date2 = new Date(Date.now());
  let diffInTime = date2.getTime() - date1.getTime();
  let diffInDays = diffInTime / (1000 * 3600 * 24);
  return Math.floor(diffInDays);
};
