import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Helper } from "../core/utils/helper";
import { Container } from "inversify";
import { prosodyReducer } from "./module/prosody/prosody.reducer";

const reducer = combineReducers({
	prosodyReducer,
});

const store = configureStore({
	reducer: reducer,
	devTools: Helper.isDev(),
});

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export type ExtraTrunkParams = { container: Container };

export function createAppStore(container: Container) {
	return configureStore({
		reducer: reducer,
		middleware: (getDefaultMiddleware) => [
			...getDefaultMiddleware({ thunk: { extraArgument: { container } } }),
		],
	});
}
