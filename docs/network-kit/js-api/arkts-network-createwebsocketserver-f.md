# createWebSocketServer

## Modules to Import

```TypeScript
import { webSocket } from '@ohos.net.webSocket';
```

## createWebSocketServer

```TypeScript
function createWebSocketServer(): WebSocketServer
```

Creates a web socket Server.

**Since:** 23

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| WebSocketServer | the WebSocketServer Object. |

**Example**

```TypeScript
let ws: webSocket.WebSocketServer = webSocket.createWebSocketServer();

```

