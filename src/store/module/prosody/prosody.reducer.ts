import { createSlice } from "@reduxjs/toolkit";
import { getProsody } from "./prosody.actions";

type ProsodyState = {
	loading: boolean;
	imgResult: string | null;
};

const initialState: ProsodyState = {
	loading: false,
	imgResult: null,
};

const slice = createSlice({
	name: "Preferences",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProsody.rejected, (state) => {
			state.loading = false;
			state.imgResult = null;
		});

		builder.addCase(getProsody.fulfilled, (state, action) => {
			state.loading = false;
			state.imgResult = action.payload;
		});

		builder.addCase(getProsody.pending, (state, action) => {
			state.loading = true;
		});
	},
});

export const prosodyReducer = slice.reducer;
