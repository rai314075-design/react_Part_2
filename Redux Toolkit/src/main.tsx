
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.tsx'
import { store } from './App/store/store'

// Entry point for the React app.
// createRoot attaches the React component tree to the HTML element with id="root".
// Provider wraps the app and makes the Redux store available to all child components.
createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
)
