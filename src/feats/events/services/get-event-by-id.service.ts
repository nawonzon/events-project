import { Event } from '../models/event.model'
import { doGet } from '../../../plugins/http.plugin'

const baseUrl = 'http://localhost:3000/events'

export function getEventById(id: string) {
  const url = `${baseUrl}/${id}`

  return doGet<Event>(url)
}
