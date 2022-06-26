import { createSlice } from "@reduxjs/toolkit";

export const expanderEditorSlice = createSlice({
    name: 'expanderEditor',
    initialState: {value: false},
    reducers: {
        setExpandEditor: (state) => {
            state.value = !state.value
        },
    }
})

export const {setExpandEditor} = expanderEditorSlice.actions
export default expanderEditorSlice.reducer