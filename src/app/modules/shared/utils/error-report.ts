const report = (error, errorInfo) =>
  window.newrelic.noticeError(error, errorInfo);

export default report;
