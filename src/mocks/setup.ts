export function setupMock() {
  const context = require.context('./endpoints', true, /\.ts/)
  context.keys().forEach((filename) => context(filename))
}
