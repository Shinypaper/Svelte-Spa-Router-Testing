import { render } from '@testing-library/svelte';
import App from './App.svelte';

test('It should run the test', async () => {
  const app = render(App)
  expect(app).toBeTruthy()
});