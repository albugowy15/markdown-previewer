import { createSlice } from "@reduxjs/toolkit";

export const expanderPreviewerSlice = createSlice({
    name: 'expanderPreviewer',
    initialState: {value: false},
    reducers: {
        setExpandPreviewer: (state) => {
            state.value = !state.value
        },
    }
})

export const {setExpandPreviewer} = expanderPreviewerSlice.actions
export default expanderPreviewerSlice.reducer