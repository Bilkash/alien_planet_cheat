export type VictimType = {
	name: string;
};

export type VolitionType = {
	changeVolition: (add: boolean) => void;
	volition: number;
};

export type DefineArrIt = {
	id: number;
	available: boolean;
};

export type PayloadType = {
	name: string,
	cards: number[]
}
