import React, { Component } from 'react';
import report from 'app/modules/shared/utils/error-report';

type Props = Record<string, unknown>;

class ErrorBoundary extends Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    report(error, errorInfo);
  }

  render(): React.ReactElement | React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <a href="/">back to homepage</a>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
