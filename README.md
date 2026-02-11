# WebClaw

![Cover](https://raw.githubusercontent.com/ibelick/webclaw/main/apps/webclaw/public/cover.jpg)

Fast web client for OpenClaw.

[webclaw.dev](https://webclaw.dev)

Currently in beta.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- [pnpm](https://pnpm.io/) 9.x

If you don't have pnpm installed, you can install it with:

```bash
npm install -g pnpm
```

## Setup

### Quick Start (Recommended)

```bash
node setup.js
```

This will check prerequisites, install dependencies, and guide you through the setup.

### Manual Setup

1. Create `apps/webclaw/.env.local` with your gateway credentials:

```bash
CLAWDBOT_GATEWAY_URL=ws://127.0.0.1:18789
CLAWDBOT_GATEWAY_TOKEN=your_token_here
```

These map to your OpenClaw Gateway auth (`gateway.auth.token` or `gateway.auth.password`).
Alternatively, use `CLAWDBOT_GATEWAY_PASSWORD` instead of `CLAWDBOT_GATEWAY_TOKEN`.
Default URL is `ws://127.0.0.1:18789`. Docs: https://docs.openclaw.ai/gateway

2. Install dependencies and start:

```bash
pnpm install
pnpm dev
```

The app will be available at `http://localhost:3000`

## Development

### Local Development

```bash
pnpm dev
```

This starts the dev server on `localhost` only.

### LAN Access (Allow access from other devices on your network)

**Option 1: Using the npm script (recommended)**
```bash
pnpm -C apps/webclaw dev:host
```

**Option 2: Using environment variable**

Add to `apps/webclaw/.env.local`:
```bash
VITE_HOST=0.0.0.0
```

Then run `pnpm dev` as usual.

The server will be accessible at:
- `http://localhost:3000` (local)
- `http://192.168.x.x:3000` (LAN - use your machine's IP address)

To find your IP address:
- **Windows**: `ipconfig` (look for IPv4 Address)
- **macOS/Linux**: `ifconfig` or `ip addr`

## Troubleshooting

**Connection issues**: Make sure your OpenClaw Gateway is running and the credentials in `.env.local` match your gateway configuration.

**Port already in use**: Vite will automatically try the next available port.
