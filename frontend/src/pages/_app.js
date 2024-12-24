import { CssBaseline } from '@mui/material';
import 'D:/kavy-github/Proj-1/frontend/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
