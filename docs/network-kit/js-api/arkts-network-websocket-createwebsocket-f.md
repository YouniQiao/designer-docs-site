# createWebSocket

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

<a id="createwebsocket"></a>
## createWebSocket

```TypeScript
function createWebSocket(): WebSocket
```

Creates a web socket connection.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-webSocket-function createWebSocket(): WebSocket--><!--Device-webSocket-function createWebSocket(): WebSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [WebSocket](arkts-network-websocket-websocket-i.md) | the WebSocket of the createWebSocket. |

**Example**

```TypeScript
let ws: webSocket.WebSocket = webSocket.createWebSocket();

```

