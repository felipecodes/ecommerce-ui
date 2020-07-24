interface Window {
  dataLayer: any[];
  newrelic: {
    noticeError(error: Error, errorInfo: Record<string, string>): void;
  };
}
