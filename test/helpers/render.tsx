import React from 'react';
import { MemoryRouter, MemoryRouterProps } from 'react-router';
import {
  render as renderTLR,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
  memoryRouterProps: MemoryRouterProps = {},
): RenderResult =>
  renderTLR(<MemoryRouter {...memoryRouterProps}>{ui}</MemoryRouter>, options);

export default render;
