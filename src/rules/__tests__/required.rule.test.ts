import { expect, test, describe } from 'vitest'
import { required } from '../required.rule'


describe('required.rule', () => {
  test('should return error', () => {
    expect(required('')).toBe('This field is required')
  })

  test('should exec without error', () => {
    expect(required('moud')).toBe(undefined)
  })
})