import { EventListType } from '../models/event.model'
import { doGet } from '../../../plugins/http.plugin'

const baseUrl = 'http://localhost:3000/events'

export function getEvents() {
  return doGet<EventListType>(baseUrl)
}
