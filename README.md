# WebClaw

![Cover](https://raw.githubusercontent.com/ibelick/webclaw/main/apps/webclaw/public/cover.jpg)

Fast web client for OpenClaw.

[webclaw.dev](https://webclaw.dev)

Currently in beta.

## Setup

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

## Troubleshooting

**Connection issues**: Make sure your OpenClaw Gateway is running and the credentials in `.env.local` match your gateway configuration.

**Port already in use**: Vite will automatically try the next available port.
