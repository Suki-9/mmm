const s = require('child_process').spawn;

async function exec(command, args = [], options = {}) {
  return new Promise(r => s(command, args, {
    ...options,
    shell: true,
    stdio: 'inherit'
  }).on('close', () => r()));
}

