export interface GlobalState {
    letters: Letter[],
    search: '',
}

export interface Letter {
    key: string,
    name: string,
}