import { createStore } from "redux";
import {PayloadType} from "../components/types";

interface StoreTypes {
	[propName: string]: number[]
}

export function addCards(cards: PayloadType) {
	return {
		type: "ADD_CARDS",
		payload: cards,
	};
}

function cardsReducer<StoreTypes>(state: StoreTypes, action: any) {
	if (action.payload) {
		const {
			payload: { name, cards },
		} = action;

		return { ...state, [name]: cards };
	}
}

export const storeCards = createStore(cardsReducer);
