import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Thumbnail from '../Thumbnail.vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from '../../App.vue';
describe('Thumbnail', () => {
  const pinia = createPinia();
  const app = createApp(App);
  app.use(pinia);
  it('renders properly', () => {
    const wrapper = mount(Thumbnail, { props: { productId: 1 } })
    expect(wrapper.text()).toContain('');
  })
});
