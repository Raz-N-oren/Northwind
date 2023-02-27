import { createStore } from 'redux';
import UserModel from "../Models/UserModel";

// 1.Auth State
export class AuthState {
    public user: UserModel
}

// 2. Auth Action type
export enum AuthActionType {
    Register,
    Login,
    Logout
}

// 3. Auth Action
export interface AuthAction {
    type: AuthActionType;
    payload: any;
}

// 4. Auth Reducer
export function authReducer(currentState = new AuthState(), action: AuthAction): AuthState {

    //Duplicate current state:
    const newState = { ...currentState };

    //Perform the needed operation:
    switch (action.type) {
        case AuthActionType.Register:

            break;

        case AuthActionType.Login:

            break;

        case AuthActionType.Logout:

            break;
    }

    // Return the new state:
    return newState;
}

// 5. Auth Store
export const authStore = createStore(authReducer);