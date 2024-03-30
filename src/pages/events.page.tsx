import { AddEventForm, EventList, useEvents } from '../feats/events'

export function EventsPage() {
  const { events, addEvent } = useEvents()

  return (
    <>
      <AddEventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </>
  )
}
