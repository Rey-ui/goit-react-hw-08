import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddContact,
  requestDeleteContact,
  requestGetContacts,
} from "../../services/api";
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await requestGetContacts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (formData, thunkAPI) => {
    try {
      const data = await requestAddContact(formData);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
