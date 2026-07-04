---
last_update:
  date: 2026-07-04
---

# WebSocketMessage

Info about the message received from a specific client.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@ohos.net.webSocket';
```

## clientConnection

```TypeScript
clientConnection: WebSocketConnection
```

The connection where the message comes from.

**Type:** WebSocketConnection

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## data

```TypeScript
data: string | ArrayBuffer
```

Contend of the message.

**Type:** string | ArrayBuffer

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

