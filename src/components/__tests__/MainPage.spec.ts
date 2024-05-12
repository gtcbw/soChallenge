import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainPage from '../MainPage.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '../../App.vue';
describe('MainPage', () => {
  const pinia = createPinia();
  const app = createApp(App);
  app.use(pinia);
  it('renders properly', () => {
    const wrapper = mount(MainPage);
    expect(wrapper.text()).toContain('')
  })
});
