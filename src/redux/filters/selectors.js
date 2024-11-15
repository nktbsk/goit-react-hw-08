import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    if (Array.isArray(items) && items.length > 0) {
      return items.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
          contact.number.includes(filter.trim())
      );
    }
    return [];
  }
);
