import { RouteObject } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { CozinhaVelhaCambinda } from '@/pages/CozinhaVelhaCambinda';
import { FilhasDaTerra } from '@/pages/FilhasDaTerra';
import { Gallery } from '@/pages/Gallery';
import { Donations } from '@/pages/Donations';
import { Contact } from '@/pages/Contact';

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <About /> },
      { path: '/cozinha-velha-cambinda', element: <CozinhaVelhaCambinda /> },
      { path: '/filhas-da-terra', element: <FilhasDaTerra /> },
      { path: '/galeria', element: <Gallery /> },
      { path: '/doacoes', element: <Donations /> },
      { path: '/contato', element: <Contact /> },
    ],
  },
];
