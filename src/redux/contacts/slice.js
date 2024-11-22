import { createSlice } from "@reduxjs/toolkit";
import {
  addContacts,
  deleteContact,
  fetchContacts,
  patchContact,
} from "./operations";

const initialState = {
  contacts: {
    items: null,
    loading: false,
    error: null,
  },
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })
      .addCase(addContacts.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.items.push(payload);
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== payload
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      })

      .addCase(patchContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(patchContact.fulfilled, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.map((item) => {
          if (item.id === payload.id) {
            return payload;
          } else {
            return item;
          }
        });
      })
      .addCase(patchContact.rejected, (state, { payload }) => {
        state.contacts.loading = false;
        state.contacts.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
