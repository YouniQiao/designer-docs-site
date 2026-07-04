# createWebSocket

## Modules to Import

```TypeScript
import { webSocket } from '@ohos.net.webSocket';
```

## createWebSocket

```TypeScript
function createWebSocket(): WebSocket
```

Creates a web socket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| WebSocket | the WebSocket of the createWebSocket. |

**Example**

```TypeScript
let ws: webSocket.WebSocket = webSocket.createWebSocket();

```

