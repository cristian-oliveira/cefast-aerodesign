/* eslint-disable no-console */
import { join, resolve } from 'path';
import { writeFileSync } from 'fs';
import { factoryMui } from '../src/theme/theme';

const theme = factoryMui();

const generateManifest = async () => {
  const manifest = {
    name: 'CEFAST AERODESIGN: A maior equipe de competição de aeronaves do Brasil',
    short_name: 'Cefast AeroDesing',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#ffff',
    theme_color: '#000000',
    orientation: 'portrait',
    icons: [
      {
        src: '/images/logo_martins.png',
        type: 'image/png',
        sizes: '72x72',
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: process.env.NEXT_PUBLIC_URL,
      },
    ],
  };
  // eslint-disable-next-line no-undef
  const pathWrite = resolve(join(__dirname, '..', 'public'));

  console.info('Gerando Manifest...');
  const jsonManifest = JSON.stringify(manifest, null, '\t');
  writeFileSync(join(pathWrite, 'manifest.json'), jsonManifest);
  writeFileSync(join(pathWrite, 'site.webmanifest'), jsonManifest);

  console.info('Finalizando Manifest.');
};

generateManifest();
