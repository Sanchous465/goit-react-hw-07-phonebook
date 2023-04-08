import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactsInitialState = { items: [] };

const constacsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.some(contact => contact.name === action.payload.name)
          ? alert(
              `${action.payload.name}, Contact with such name is already exists!`
            ) :
          state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            id: nanoid(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
      // const index = state.findIndex(contact => contact.id === action.payload);
      // state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  constacsSlice.actions;
export const contactsReducer = constacsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }
// export const persistedReducer = persistReducer(persistConfig, contactsReducer)