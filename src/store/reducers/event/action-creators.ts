import { AppDispatch } from "../.."
import { IEvent } from "../../../models/IEvent"
import { IUser } from "../../../models/IUser"
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types"
import UserService from "../../../api/UserService"

export const EventActionCreators = {

  setGuest: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),

  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),


  
  fetchGuest: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUseres()
      dispatch(EventActionCreators.setGuest(response.data))
    } catch (e) {
      console.log(e)
    }
  },

  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    const events = localStorage.getItem("events") || "[]"
    if (events !== null) {
      const json = JSON.parse(events) as IEvent[]
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem("events", JSON.stringify(json))
    }
  },

  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]"
      const json = JSON.parse(events) as IEvent[]

      const currentUserEvents = json.filter(
        (ev) => ev.author === username || ev.guest === username
      )

      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e)
    }
  },
}
