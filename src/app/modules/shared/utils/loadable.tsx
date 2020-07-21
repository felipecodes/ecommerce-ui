import React, { Suspense } from 'react';

interface Options {
  fallback: NonNullable<React.ReactNode> | null;
  testid?: string;
}

interface Loadable {
  (importFunc: () => Promise<any>, options: Options): React.FC<any>;
}

/**
 * This loads dynamically anyone React Component.
 */

const loadable: Loadable = (importFunc, options) => {
  const LazyComponent = React.lazy(importFunc);

  const LoadableComponent: React.FC<any> = (props: any) => (
    <Suspense fallback={options.fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return LoadableComponent;
};

export default loadable;
