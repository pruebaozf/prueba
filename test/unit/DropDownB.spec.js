import { expect } from 'chai'
import { mount } from 'avoriaz'
import { sinon } from 'sinon'
import { cloneDeep } from 'lodash'
import DropDownB from '../../src/components/DropDownB.vue'
import Vue from 'vue'
describe('DropDownB.vue', () => {
    it('has a element with class dropdown-button', () => {
      const wrapper = mount(DropDownB)
      const element = wrapper.find('.dropdown-selector')[0]
      expect(element.is('div')).to.equal(true)
    })
    it('input get values', () => {
      const wrapper = mount(DropDownB)
      wrapper.setData({selected : "Alabama"})
      const input = wrapper.find('input')[0]
      expect(input.value()).to.equal("Alabama")
    })
  })