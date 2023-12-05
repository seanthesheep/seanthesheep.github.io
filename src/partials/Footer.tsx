import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';
const year = new Date().getFullYear()

const Footer = () => (
  <Section>
    &copy; {year} Sean Sullivan
  </Section>
);

export { Footer };
