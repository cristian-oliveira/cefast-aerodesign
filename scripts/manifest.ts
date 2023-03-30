/* eslint-disable no-console */
import loadCurrentTheme from '../src/theme/currentTheme';
import { join, resolve } from 'path';
import {
  PLAY_STORE_APP_LINK,
  APPLE_STORE_APP_LINK,
  DEFAULT_PAGE_TITLE,
} from '../src/services/Constants';
import { writeFileSync } from 'fs';

const theme = loadCurrentTheme();

const generateManifest = async () => {
  const manifest = {
    name: DEFAULT_PAGE_TITLE,
    short_name: 'Martins Atacado',
    start_url: '/',
    display: 'fullscreen',
    background_color: theme.background,
    theme_color: theme.primary,
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
      {
        platform: 'play',
        url: PLAY_STORE_APP_LINK,
        id: 'com.martins_app',
      },
      {
        platform: 'apps',
        url: APPLE_STORE_APP_LINK,
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
