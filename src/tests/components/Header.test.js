
import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header.js'

test('should render Header correctly', () => {
	const wrapper = shallow(<Header />)	
	expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', () => {
	const startLogout = jest.fn()
	const wrapper = shallow(<Header startLogout = { startLogout } />)
	wrapper.find('button').simulate('click')	
	expect(startLogout).toHaveBeenCalled()	
})