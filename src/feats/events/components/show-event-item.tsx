import { Event } from '../models/event.model'

export function ShowEventItem(event: Event) {
  return (
    <>
      <p>{event?.name}</p>
      <p>{event?.description}</p>
      <p>{event?.startDate}</p>
      <p>{event?.endDate}</p>
    </>
  )
}
