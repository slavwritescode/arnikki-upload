import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: null
}
export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateUserInfo } = userInfo.actions;

export default userInfo.reducer;