import React from 'react'

import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ReactalChild from '../ReactalChild'

Enzyme.configure({
  adapter: new Adapter(),
})

describe('<ReactalChild />', () => {
  it('クリックでインクリメントされる', () => {
    const wrapper = mount(<ReactalChild level={0} />)
    expect(wrapper.render().html()).toMatchInlineSnapshot(
      `"<button class=\\"cell\\">0</button>"`
    )
    const button = wrapper.find('button')
    expect(button.text()).toMatchInlineSnapshot(`"0"`)
    button.simulate('click')
    expect(button.render().text()).toMatchInlineSnapshot(`"1"`)
    button.simulate('click')
    expect(button.render().text()).toMatchInlineSnapshot(`"2"`)
  })
})
