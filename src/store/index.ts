import { createStore } from "redux";

export function addCards(cards: any) {
	return {
		type: "ADD_CARDS",
		payload: cards,
	};
}

function cardsReducer(state: any = {}, action: any) {
	if (action.payload) {
		const {
			payload: { name, cards },
		} = action;

		return { ...state, [name]: cards };
	}
}

//store
export const storeCards = createStore(cardsReducer);
