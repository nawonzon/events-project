import styled from '@emotion/styled'
import { AddEventForm, EventList, useEvents } from '../feats/events'
import { Box } from '../components/box'

export function EventsPage() {
  const { events, addEvent } = useEvents()

  return (
    <Container>
      <AddEventForm onAddEvent={addEvent} />
      <EventList events={events} />
    </Container>
  )
}

const Container = styled(Box)`
`