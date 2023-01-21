import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  name: 'Anar'
}

const A = createSlice({
  name: 'A',
  initialState,
  reducers: {
    mutni: state => console.log(state.name)
  }
})

export default A.reducer
export const {mutni} = A.actions