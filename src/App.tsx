import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Sidebar, Navbar } from './assets/components';

function App() {
  useEffect(() => {
    themeChange(true);
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
