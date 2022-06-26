import { configureStore } from "@reduxjs/toolkit";
import expanderEditorReducer from '../features/expander/expanderEditorSlice'
import expanderPreviewerReducer from "../features/expander/expanderPreviewerSlice";
import markerReducer from '../features/marker/markerSlice'

export const store =  configureStore({
    reducer: {
        expanderEditor: expanderEditorReducer,
        expanderPreviewer: expanderPreviewerReducer,
        marker: markerReducer
    }
})