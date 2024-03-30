import { Event } from "../models/event.model"
import { doPost } from "../../../plugins/http.plugin"

const baseUrl = 'http://localhost:3000/events'

type SaveEventBody = Omit<Event, 'id'>

export function saveEvent(body: SaveEventBody) {
  return doPost<Event>(baseUrl, body)
}