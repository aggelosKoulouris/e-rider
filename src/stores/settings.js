import { writable } from "svelte/store";

const storedLang = localStorage.getItem("app:lang");
const storedTheme = localStorage.getItem("app:theme");

export const appLang = writable(storedLang);
export const appTheme = writable(storedTheme);

appLang.subscribe(value => {
  if(!value) value = 'el-GR';
  localStorage.setItem("app:lang", value);
});


appTheme.subscribe(value => {
  localStorage.setItem("app:theme", value === 'dark' ? 'dark' : 'light');
});
