import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import LIMIT from '../../constants/pagination-limit';

export interface CounterState {
  objects: Item[],
  current: Item[],
  currentItems: Item[],
  page:number,
  limit: number
}

const initialState: CounterState = {
  objects: [],
  current: [],
  currentItems: [],
  page: 1,
  limit: LIMIT
}

export const objectsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setObjects: (state, action: PayloadAction<Item[]>) => {
      const items = action.payload;
      

      state.objects = items
      state.current = items.slice(0, 1)
      state.currentItems = items.slice(0, LIMIT);
    },

    setCurrentObject: (state, action: PayloadAction<number>) => {
      const newCurrent = state.currentItems.filter((item) =>  Number(item.id) === action.payload)
      
      state.current = newCurrent;
    },
    nextPage: (state) => {
       const items = state.objects;
       const newPage = state.page + 1;

       const offset = (newPage - 1) * LIMIT

      state.currentItems = items.slice(offset, offset + LIMIT);
      state.page = newPage
      
    },
     prevPage: (state) => {
      const items = state.objects;
      const newPage = state.page - 1;

       const offset = (newPage - 1) * LIMIT

      state.currentItems = items.slice(offset, offset + LIMIT);
      state.page = newPage
    },
    setPage: (state, action: PayloadAction<number>) =>{
      const items = state.objects;
      const newPage = action.payload;
      
      const offset = (newPage - 1) * LIMIT

      state.page = newPage;

      state.currentItems = items.slice(offset, offset + LIMIT);
    },
   
  },
})


export const { setObjects, setCurrentObject, nextPage, prevPage, setPage } = objectsSlice.actions

export default objectsSlice.reducer