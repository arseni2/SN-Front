import {InferActionsTypes} from "./store";

let InitialState = {
    url: '/'
}
type ActionsType = InferActionsTypes<typeof actions>
const InitialReducer = (state = InitialState, action: ActionsType) => {
    switch (action.type) {
        case 'URL':
            return {
                ...state,
                url: action.url
            }

        default:
            return state;
    }
}

export const actions = {
    switchUrl: (url: string) => ({type: 'URL', url} as const)
}

export {InitialReducer}