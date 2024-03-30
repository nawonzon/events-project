import { useEffect, useState } from 'react'
import { Event, EventListType } from '../models/event.model'
import { getEvents } from '../services/get-events.service'
import { saveEvent } from '../services/save-event.service'

export function useEvents() {
  const [events, setEvents] = useState<EventListType>([])

  useEffect(() => {
    getEvents().then((data) => setEvents(data))
  }, [])

  const addEvent = (data: Event) => saveEvent(data).then((event) => setEvents([...events, event]))

  return {
    events,
    addEvent
  }
}
