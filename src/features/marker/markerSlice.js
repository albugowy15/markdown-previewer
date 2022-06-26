import { createSlice } from "@reduxjs/toolkit";
export const markerSlice = createSlice({
    name: 'marker',
    initialState: {value: ""},
    reducers: {
        setMarker: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setMarker} = markerSlice.actions
export default markerSlice.reducer