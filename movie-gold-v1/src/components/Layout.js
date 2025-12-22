// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

export default function Layout() {
  return (
    <div>
    
      <main>
        <Outlet />
      </main>
    </div>
  );
}
