import { mount } from '@vue/test-utils'
import BigCard from '@/components/BigCard.vue'

describe('BigCard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BigCard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})