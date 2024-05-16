import { create } from 'zustand'
import {IMockItem} from "../api/mockapi";
import { MultiValue } from "react-select";

export interface IOption extends IMockItem {
	label: string;
}

type Store = {
	input: MultiValue<IOption>;
	result: number | null;
	values: (string | number)[] | null;
	updateInput: (input: MultiValue<IOption>) => void;
	calculate: () => void;
}

export const useStore = create<Store>((set) => ({
	input: [],
	result: null,
	values: null,
	updateInput: (input) => set((state) => ({ input: [...input]})),
	calculate: () => set((state) => {
		const values = state.input.map((el) => el.value);
		const expressionString = values.join(" ");
		try {
			const result = eval(expressionString);
			return { ...state, result, values }
		} catch {}
		return state
	})
}))
