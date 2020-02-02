import { mount } from '@vue/test-utils'
import Subcalc from '@/components/Subcalc.vue'

describe('Subcalc', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Subcalc)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
