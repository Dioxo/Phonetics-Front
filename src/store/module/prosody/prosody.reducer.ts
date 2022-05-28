import { createSlice } from "@reduxjs/toolkit";
import { getProsody } from "./prosody.actions";

type ProsodyState = {
	loading: boolean;
	imgResult: string[];
};

const initialState: ProsodyState = {
	loading: false,
	imgResult: [],
};

const slice = createSlice({
	name: "Preferences",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProsody.rejected, (state) => {
			state.loading = false;
			state.imgResult = [];
		});

		builder.addCase(getProsody.fulfilled, (state, action) => {
			state.loading = false;
			state.imgResult[action.payload.exerciceNumber] = action.payload.img;
		});

		builder.addCase(getProsody.pending, (state, action) => {
			state.loading = true;
		});
	},
});

export const prosodyReducer = slice.reducer;
