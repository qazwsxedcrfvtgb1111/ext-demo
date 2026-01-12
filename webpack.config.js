// webpack.config.js
module.exports = {
    mode: 'production',
    entry: {
        background: './background.js',
        devtools: './devtools.js',
        'browser-polyfill': './polyfills.js',
        ['background-worker']: './background-worker.js',
        content: './content.js',
    },
    output: {
        filename: f => `${f.chunk.name}.bundle.js`,
    },
}
