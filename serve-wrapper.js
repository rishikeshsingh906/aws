// serve-wrapper.js
(async () => {
    const serve = await import('serve');
    serve.default('dist', { port: 2000 });
  })();
  