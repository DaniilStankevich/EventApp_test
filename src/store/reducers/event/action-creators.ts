import axios from "axios";
import { AppDispatch } from "../..";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import UserService from "../../../api/UserService";

export const EventActionCreators = {
    setGuest: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),


    fetchGuest: () => async (dispatch: AppDispatch) => {

        try {
            const response = await UserService.getUseres()
            dispatch(EventActionCreators.setGuest(response.data))
        } catch (e) {
            console.log(e)
        }



    }

}