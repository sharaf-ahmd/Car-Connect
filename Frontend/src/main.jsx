import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { Provider as UIProvider } from './components/ui/provider.jsx'
import App from './App.jsx'
import store from './store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <UIProvider>
        <App />
      </UIProvider>
    </Provider>
  </StrictMode>,
)
