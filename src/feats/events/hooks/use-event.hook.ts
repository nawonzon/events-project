import { useEffect, useState } from 'react'
import { getEventById } from '../services/get-event-by-id.service'
import { Event } from '../models/event.model'

export function useEvent(id: string) {
  const [event, setEvent] = useState<Event>()

  useEffect(() => {
    getEventById(id!).then((event) => setEvent(event))
  }, [])

  return event
}
