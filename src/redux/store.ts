import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import  taskReducer  from "./features/tasks/taskSlice";


export const store = configureStore({
  reducer: {
    // todo : taskReducer,
    [baseApi.reducerPath] : baseApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
}) ;



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch