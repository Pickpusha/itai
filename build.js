const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    outfile: 'dist/bundle.js',
    platform: 'browser',
    sourcemap: true
}).catch(() => process.exit(1));
