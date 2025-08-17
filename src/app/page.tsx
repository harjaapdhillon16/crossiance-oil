'use client';

import * as React from 'react';
import '@/lib/env';

import { HeroSection } from '@/components/landingpage/hero';
import { HeaderSection } from '@/components/landingpage/header';
export default function HomePage() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
    </>
  );
}
