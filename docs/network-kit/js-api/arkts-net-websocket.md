# @ohos.net.webSocket

Provides WebSocket APIs.

**Since:** 11

<!--Device-unnamed-declare namespace webSocket--><!--Device-unnamed-declare namespace webSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createWebSocket](arkts-network-websocket-createwebsocket-f.md#createwebsocket-1) | Creates a web socket connection. |
| [createWebSocketServer](arkts-network-websocket-createwebsocketserver-f.md#createwebsocketserver-1) | Creates a web socket Server. |

### Interfaces

| Name | Description |
| --- | --- |
| [ClientCert](arkts-network-websocket-clientcert-i.md) | The clientCert field of the client certificate, which includes three attributes:client certificate (certPath) and only support PEM format, certificate private key (keyPath),and passphrase (keyPassword). |
| [CloseResult](arkts-network-websocket-closeresult-i.md) | The result for closing a WebSocket connection. |
| [ServerCert](arkts-network-websocket-servercert-i.md) | The serverCert field of the server certificate, which includes two attributes:File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format. |
| [WebSocket](arkts-network-websocket-websocket-i.md) | &lt;p&gt;Defines a WebSocket object. Before invoking WebSocket APIs,you need to call webSocket.createWebSocket to create a WebSocket object.&lt;/p&gt; |
| [WebSocketCloseOptions](arkts-network-websocket-websocketcloseoptions-i.md) | Defines the optional parameters carried in the request for closing a WebSocket connection. |
| [WebSocketConnection](arkts-network-websocket-websocketconnection-i.md) | Info about the connection from each specific client. |
| [WebSocketMessage](arkts-network-websocket-websocketmessage-i.md) | Info about the message received from a specific client. |
| [WebSocketOpenInfo](arkts-network-websocket-websocketopeninfo-i.md) | The result for open info of a WebSocket connection. |
| [WebSocketRequestOptions](arkts-network-websocket-websocketrequestoptions-i.md) | Defines the optional parameters carried in the request for establishing a WebSocket connection. |
| [WebSocketServer](arkts-network-websocket-websocketserver-i.md) | &lt;p&gt;Defines a WebSocketServer object. Before invoking WebSocketServer APIs,you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.&lt;/p&gt; |
| [WebSocketServerConfig](arkts-network-websocket-websocketserverconfig-i.md) | Defines parameters for a WebSocket Server. |

### Enums

| Name | Description |
| --- | --- |
| [TlsProtocol](arkts-network-websocket-tlsprotocol-e.md) | Enumerates TLS protocols. |

### Types

| Name | Description |
| --- | --- |
| [ClientConnectionCloseCallback](arkts-network-websocket-clientconnectionclosecallback-t.md) | Callback function when a client connection is closed. |
| [HttpProxy](arkts-network-websocket-httpproxy-t.md) |  |
| [ProxyConfiguration](arkts-network-websocket-proxyconfiguration-t.md) | HTTP proxy configuration.system: means that use system proxy configuration.no-proxy: means do not use proxy.object of @type {connection.HttpProxy} means providing custom proxy settings |
| [ResponseHeaders](arkts-network-websocket-responseheaders-t.md) | HTTP response headers. |

