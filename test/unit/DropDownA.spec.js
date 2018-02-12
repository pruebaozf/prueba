import { expect } from 'chai'
import { mount } from 'avoriaz'
import { sinon } from 'sinon'
import DropDownA from '../../src/components/DropDownA.vue'
import Vue from 'vue'
describe('DropDownA.vue', () => {
    it('has a element with class dropdown-button', () => {
      const wrapper = mount(DropDownA)
      const element = wrapper.find('.dropdown-selector')[0]
      expect(element.is('div')).to.equal(true)
    })
    it('input get values', () => {
      const wrapper = mount(DropDownA)
      wrapper.setData({selected : "Alabama"})
      const input = wrapper.find('input')[0]
      expect(input.value()).to.equal("Alabama")
    })
  })