import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import appConfig from './configs/app.config';

async function bootstrap() {
  if (import.meta.env.DEV && appConfig.enableMock) {
    const { mockServer } = await import('./mock/mock');
    const server = mockServer();
    import.meta.hot?.dispose(() => server.shutdown());
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
}

void bootstrap();
