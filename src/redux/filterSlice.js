import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    contactsFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { contactsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;