import { createSelector } from "@reduxjs/toolkit";
//import { statusFilters } from './constants';
export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.filters && state.filters.name;
export const selectFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
