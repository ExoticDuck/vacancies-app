import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
import { vacanciesAPI } from "../api/api";
import { RootState } from "..";
// import { fetchUsers } from "./ActionCreators"

type AccessTokenResponse = {
  access_token: string
  expires_in: number
  refresh_token: string
  reg_user_resumes_count: number
  token_type: string
  ttl: number
}

export const fetchToken = createAsyncThunk<AccessTokenResponse, undefined, { rejectValue: string }>( //* 1 - return value, 2 - argument, 3 - типизация rejectValue или state и тд
  'vacancies/fetchToken',
  async function (_, { rejectWithValue }) {
    const response = await vacanciesAPI.getToken();
    debugger
    if (response.status !== 200) {
      return rejectWithValue("Token error")
    }
    console.log(response.data);

    return response.data;
  }
);

export type Positions = {
  title_rus: string;
  url_rus: string;
  title: string;
  id_parent: number;
  key: number;
}

export type CataloguesResponseType = {
  key: number; 
  positions: Positions[]; 
  title: string; 
  title_rus: string;
  title_trimmed: string;
  url_rus: string;
}
export const fetchCatalogues = createAsyncThunk<CataloguesResponseType[], undefined, { rejectValue: string, state: RootState }>(
  'vacancies/fetchCatalogues',
  async function (_, { rejectWithValue, getState }) {
    let token = getState().vacancies.token;
    debugger
    if(token) {
      const response = await vacanciesAPI.getCatalogues(token);
      debugger
      if (response.status !== 200) {
        return rejectWithValue("Catalogues error")
      }
      console.log(response.data);
  
      return response.data;
    } else {
      return rejectWithValue('Token error')
    }
  }
);

export type UserType = { id: number, name: string | undefined, email: string }

type UserState = {
  catalogues: any[],
  token: string
  isLoading: boolean,
  error: string
}

const initialState: UserState = {
  catalogues: [],
  token: '',
  isLoading: false,
  error: ""
}

export const vacanciesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // addUser(state, action: PayloadAction<string>) {
    //     state.users.push({ id: state.users.length + 1, name: names.at(Math.round(Math.random() * 10)), email: "test@mail.ru" })
    // },
    // clearUsers(state, action) {
    //     state.users = []
    // },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.access_token;
      })
      .addCase(fetchCatalogues.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchCatalogues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalogues = action.payload
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
    })
  },
})


function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}


// export const fetchPassword = createAsyncThunk(
//     "vacancies/fetchPassword",
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.
//             return response.data
//         } catch (error) {
//             return thunkAPI.rejectWithValue("Some error occured")
//         }
//     }
// )
// export const {} = vacanciesSlice.actions;
export const vacanciesReducer = vacanciesSlice.reducer;
