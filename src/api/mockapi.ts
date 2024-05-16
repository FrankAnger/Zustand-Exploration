import axios from "axios";

export interface IMockItem {
	name: string;
	category: string;
	value: number | string;
	id: string
}

export const fetchMock = (): Promise<IMockItem[]> =>
	axios.get('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete').then((response) => response.data)