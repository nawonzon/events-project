import { EventListType } from '../models/event.model'
import { EventItem } from './event-item'
import { useNavigate } from 'react-router-dom'

type EventListProps = {
  events: EventListType
}

export function EventList({ events }: EventListProps) {
  const navigate = useNavigate()

  return (
    <div>
      <h1>List event</h1>
      {events.map((event) => (
        <EventItem
          key={event.id}
          name={event.name}
          onClick={() => navigate(`/events/${event.id}`)}
        />
      ))}
    </div>
  )
}
