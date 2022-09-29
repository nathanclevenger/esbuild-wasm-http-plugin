import esbuild from 'esbuild'
import { httpPlugin } from './http-plugin.js'


esbuild.build({
    entryPoints: ['worker.js'],
    bundle: true,
    outfile: 'index.js',
    plugins: [httpPlugin],
  }).catch(() => process.exit(1))