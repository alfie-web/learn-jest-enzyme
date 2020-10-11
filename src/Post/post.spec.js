import { shallow } from 'enzyme';
import React from 'react';
import Post from './post';

const setUp = (props) => shallow(<Post {...props} />)		// shallow - отрисовывает компонент поверхностно (без дочерних) для теста

describe('should render Post component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	})

	it('should contain .post wrapper', () => {
		// const component = setUp();	
		const wrapper = component.find('.post');	// ищем элемент с классов .post
		expect(wrapper.length).toBe(1);		// проверяем, что такой элемент всего 1
	})
	
	it('should contain link', () => {
		// const component = setUp();
		const wrapper = component.find('a');	// так же можно  проверить, что есть ссылка
		expect(wrapper.length).toBe(1);		// проверяем, что такой элемент всего 1
	})

	it('should render created date', () => {
		const created_at = '01-03-2020';
		component = setUp({ created_at });
		const date = component.find('.date');
		expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
	})
})