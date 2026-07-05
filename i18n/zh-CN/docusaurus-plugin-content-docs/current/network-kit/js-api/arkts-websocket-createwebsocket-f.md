# createWebSocket

## createWebSocket

```TypeScript
function createWebSocket(): WebSocket
```

Creates a web socket connection.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WebSocket | the WebSocket of the createWebSocket. |

**示例：**

```TypeScript
let ws: webSocket.WebSocket = webSocket.createWebSocket();

```

