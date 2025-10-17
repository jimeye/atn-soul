#!/usr/bin/env node

const { spawn } = require('child_process');

// Force l'utilisation de Webpack en désactivant Turbopack
process.env.NEXT_TURBO = '0';
process.env.NEXT_EXPERIMENTAL_TURBO = '0';

console.log('🚀 Starting build with Webpack (Turbopack disabled)...');

const build = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NEXT_TURBO: '0',
    NEXT_EXPERIMENTAL_TURBO: '0'
  }
});

build.on('close', (code) => {
  process.exit(code);
});
