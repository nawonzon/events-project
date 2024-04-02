import { required } from '../../../rules/required.rule'
import { useForm } from 'react-hook-form'
import { Event } from '../models/event.model'
import { Input } from '../../../components/input'
import styled from '@emotion/styled'

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
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
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
      </InputContainer>
      <InputContainer>
        <Input title="start date:" {...register('startDate')} />
        <Input title="end date:" {...register('endDate')} />
      </InputContainer>

      <SaveButton type="submit">Save</SaveButton>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  border: 2px solid #000;
  padding: 20px;
`
const InputContainer = styled.div`
  margin-bottom: 20px;
`
const SaveButton = styled.button`
  color: #fff;
  background-color: #000;
  padding: 7px;
  width: 130px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`