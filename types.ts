
import React from 'react';

export interface SlideProps {
  id: number;
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  pageNumber: number;
  totalPageCount: number;
}

export interface Scenario {
  name: string;
  volume: string;
  items: { label: string; value: string }[];
  total: string;
  annual: string;
  unitPrice: string;
  aiRatio: string;
  infraRatio: string;
}
