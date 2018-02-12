import { expect } from 'chai'
import { mount } from 'avoriaz'
import { sinon } from 'sinon'
import { cloneDeep } from 'lodash'
import DropDownC from '../../src/components/DropDownC.vue'
import Vue from 'vue'
describe('DropDownC.vue', () => {
    it('has a element with class dropdown-button', () => {
      const wrapper = mount(DropDownC)
      const element = wrapper.find('.dropdown-selector')[0]
      expect(element.is('div')).to.equal(true)
    })
  })