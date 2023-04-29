import { configureStore, combineReducers, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { vacanciesReducer } from './reducers/VacanciesSlice'
import { vacanciesAPI } from './services/VacanciesService'

const rootReducer = combineReducers({
    vacancies: vacanciesReducer,
    [vacanciesAPI.reducerPath]: vacanciesAPI.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vacanciesAPI.middleware)
})

// export type AppDispatch = ThunkDispatch<RootStateType,unknown,AppActionType>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState,unknown,any>
export const useAppDispatch: () => AppDispatch = useDispatch