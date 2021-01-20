import { atom } from 'recoil'

export const test = atom<string>({
  key: 'test',
  default: 'hello',
})
