import { create } from "zustand";

const store = create((set) => ({
  countries: [],
  activeCountry: null,
  getCountriesData: async () => {
    try {
      // რექვესთის გაგზავნა
      set({ countries: [] /* რექვესთიდან დაბრუნებულ მონაცემები*/ });
    } catch (error) {
      console.log(error);
    }
  },
  getActiveCountryData: async () => {
    try {
      // რექვესთის გაგზავნა
      set({ countries: [] /* რექვესთიდან დაბრუნებულ მონაცემები*/ });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default store;
