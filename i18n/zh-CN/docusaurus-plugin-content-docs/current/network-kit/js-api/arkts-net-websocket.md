# @ohos.net.webSocket

Provides WebSocket APIs.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createWebSocket](arkts-websocket-createwebsocket-f.md#createWebSocket-1) | Creates a web socket connection. |
| [createWebSocketServer](arkts-websocket-createwebsocketserver-f.md#createWebSocketServer-1) | Creates a web socket Server. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [ClientCert](arkts-websocket-clientcert-i.md) | The clientCert field of the client certificate, which includes three attributes: client certificate (certPath) and only support PEM format, certificate private key (keyPath), and passphrase (keyPassword). |
| [CloseResult](arkts-websocket-closeresult-i.md) | The result for closing a WebSocket connection. |
| [OpenResult](arkts-websocket-openresult-i.md) | The result for connect status a WebSocket connection. |
| [ServerCert](arkts-websocket-servercert-i.md) | The serverCert field of the server certificate, which includes two attributes: File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format. |
| [WebSocket](arkts-websocket-websocket-i.md) | <p>Defines a WebSocket object. Before invoking WebSocket APIs, you need to call webSocket.createWebSocket to create a WebSocket object.</p> |
| [WebSocketCloseOptions](arkts-websocket-websocketcloseoptions-i.md) | Defines the optional parameters carried in the request for closing a WebSocket connection. |
| [WebSocketConnection](arkts-websocket-websocketconnection-i.md) | Info about the connection from each specific client. |
| [WebSocketMessage](arkts-websocket-websocketmessage-i.md) | Info about the message received from a specific client. |
| [WebSocketOpenInfo](arkts-websocket-websocketopeninfo-i.md) | The result for open info of a WebSocket connection. |
| [WebSocketRequestOptions](arkts-websocket-websocketrequestoptions-i.md) | Defines the optional parameters carried in the request for establishing a WebSocket connection. |
| [WebSocketServer](arkts-websocket-websocketserver-i.md) | <p>Defines a WebSocketServer object. Before invoking WebSocketServer APIs, you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.</p> |
| [WebSocketServerConfig](arkts-websocket-websocketserverconfig-i.md) | Defines parameters for a WebSocket Server. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [ClientConnectionCloseCallback](arkts-websocket-clientconnectionclosecallback-t.md) | Callback function when a client connection is closed. |
| [HttpProxy](arkts-websocket-httpproxy-t.md) |  |
| [ProxyConfiguration](arkts-websocket-proxyconfiguration-t.md) | HTTP proxy configuration. system: means that use system proxy configuration. no-proxy: means do not use proxy. object of @type {connection.HttpProxy} means providing custom proxy settings |
| [ResponseHeaders](arkts-websocket-responseheaders-t.md) | HTTP response headers. |
| [ResponseHeaders](arkts-websocket-responseheaders-t.md) | HTTP response headers. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [TlsProtocol](arkts-websocket-tlsprotocol-e.md) | Enumerates TLS protocols. |

