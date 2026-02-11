#!/usr/bin/env node

/**
 * Setup script for WebClaw
 * Checks for prerequisites and guides setup
 */

import { exec, execSync } from 'child_process'
import { existsSync } from 'fs'
import { promisify } from 'util'

const execAsync = promisify(exec)

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[36m',
}

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`)
}

async function checkCommand(command, name) {
  try {
    await execAsync(`${command} --version`)
    return true
  } catch {
    return false
  }
}

async function main() {
  log('\n🦞 WebClaw Setup\n', colors.blue)

  // Check Node.js
  log('Checking prerequisites...', colors.blue)
  const nodeVersion = process.version
  log(`✓ Node.js ${nodeVersion}`, colors.green)

  // Check pnpm
  const hasPnpm = await checkCommand('pnpm', 'pnpm')
  if (!hasPnpm) {
    log('✗ pnpm not found', colors.red)
    log('\nTo install pnpm, run:', colors.yellow)
    log('  npm install -g pnpm\n')
    process.exit(1)
  }
  log('✓ pnpm installed', colors.green)

  // Check .env.local
  const envPath = 'apps/webclaw/.env.local'
  if (!existsSync(envPath)) {
    log(`\n⚠ Missing ${envPath}`, colors.yellow)
    log('\nCreate this file with your gateway credentials:', colors.yellow)
    log('  CLAWDBOT_GATEWAY_URL=ws://127.0.0.1:18789')
    log('  CLAWDBOT_GATEWAY_TOKEN=your_token_here\n')
    log('See README.md for details.\n')
  } else {
    log(`✓ ${envPath} exists`, colors.green)
  }

  // Install dependencies
  log('\nInstalling dependencies...', colors.blue)
  try {
    execSync('pnpm install', { stdio: 'inherit' })
    log('✓ Dependencies installed', colors.green)
  } catch (error) {
    log('✗ Failed to install dependencies', colors.red)
    process.exit(1)
  }

  // Done
  log('\n✓ Setup complete!', colors.green)
  log('\nTo start the development server:', colors.blue)
  log('  pnpm dev\n')
}

main().catch((error) => {
  log(`\n✗ Setup failed: ${error.message}`, colors.red)
  process.exit(1)
})
