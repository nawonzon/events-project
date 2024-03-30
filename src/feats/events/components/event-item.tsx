import React from 'react'
import { Event } from '../models/event.model'

interface EventItemProps extends Pick<Event, 'name'>, React.HTMLAttributes<HTMLParagraphElement> {}

export function EventItem({ name, ...restProps }: EventItemProps) {
  return <p {...restProps}>{name}</p>
}
