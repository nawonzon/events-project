import { required } from '../../../rules/required.rule'
import { useForm } from 'react-hook-form'
import { Event } from '../models/event.model'
import { Input } from '../../../components/input'

type AddEventFormProps = {
  onAddEvent: (event: Event) => void
}

export function AddEventForm({ onAddEvent }: AddEventFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Event>()

  const onSubmit = (data: Event) => {
    onAddEvent(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="name :"
        {...register('name', { validate: required })}
        error={errors.name?.message}
      />
      <Input
        title="description:"
        {...register('description', { validate: required })}
        error={errors.description?.message}
      />
      <Input title="start date:" {...register('startDate')} />
      <Input title="end date:" {...register('endDate')} />
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}
