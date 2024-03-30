import { useParams } from 'react-router-dom'
import { ShowEventItem, useEvent } from '../feats/events'

export function ShowEventPage() {
  const { id } = useParams()
  const event = useEvent(id!)

  return <ShowEventItem {...event!} />
}
