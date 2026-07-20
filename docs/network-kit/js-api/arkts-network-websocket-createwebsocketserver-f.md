# createWebSocketServer

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## createWebSocketServer

```TypeScript
function createWebSocketServer(): WebSocketServer
```

Creates a web socket Server.

**Since:** 23

<!--Device-webSocket-function createWebSocketServer(): WebSocketServer--><!--Device-webSocket-function createWebSocketServer(): WebSocketServer-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [WebSocketServer](arkts-network-websocket-websocketserver-i.md) | the WebSocketServer Object. |

**Example**

```TypeScript
let ws: webSocket.WebSocketServer = webSocket.createWebSocketServer();

```

