import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    initialState: null,
    name: "connection",
    reducers: {
        addConnections: (state, action) => {
            return action.payload;
        },
        removeConnections:()=>null
    },
});

export const { addConnections,removeConnections } = connectionSlice.actions;
export default connectionSlice.reducer;

