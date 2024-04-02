import { expect, test, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import { Input } from '../input'

describe('<Input />', () => {
  test('should render without error', () => {
    render(<Input />)

    screen.debug()
  })
})