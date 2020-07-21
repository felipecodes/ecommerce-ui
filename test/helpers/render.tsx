import React from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router';
import { render as renderTLR, RenderOptions } from '@testing-library/react';

const render = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
  memoryRouterProps: MemoryRouterProps = {}
) =>
  renderTLR(
    <MemoryRouter {...memoryRouterProps}>
      {ui}
    </MemoryRouter>,
    options
  );

export default render;
