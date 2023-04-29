import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { fetchUsers } from "./ActionCreators"

export type UserType = {id: number, name: string | undefined, email: string}

type UserState = {
    users: UserType[],
    isLoading: boolean,
    error: string
}

const names = ["Ivan", "Petya", "Sasha", "Anna", "Liza", "Eugeny", "Igor", "Vlad", "Semyon", "Kolya"]

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ""
}

export const vacanciesSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<string>) {
            state.users.push({ id: state.users.length + 1, name: names.at(Math.round(Math.random() * 10)), email: "test@mail.ru" })
        },
        clearUsers(state, action) {
            state.users = []
        },

    },
    extraReducers: {
        // [fetchUsers.fulfilled.type]: (state, action: PayloadAction<{id: number, name: string | undefined, email: string}[]>) => {
        //     state.isLoading = false;
        //     state.users = action.payload;
        //     state.error = "";
        // },
        // [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
        // [fetchUsers.pending.type]: (state, action: PayloadAction<{id: number, name: string | undefined, email: string}[]>) => {
        //     state.isLoading = true;
        // },
    }
})
export const { addUser, clearUsers} = vacanciesSlice.actions;
export const vacanciesReducer = vacanciesSlice.reducer;
