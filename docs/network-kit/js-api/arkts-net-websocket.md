# @ohos.net.webSocket

Provides WebSocket APIs.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createWebSocket](arkts-network-createwebsocket-f.md#createwebsocket-1) | Creates a web socket connection. |
| [createWebSocketServer](arkts-network-createwebsocketserver-f.md#createwebsocketserver-1) | Creates a web socket Server. |

### Interfaces

| Name | Description |
| --- | --- |
| [ClientCert](arkts-network-clientcert-i.md) | The clientCert field of the client certificate, which includes three attributes: client certificate (certPath) and only support PEM format, certificate private key (keyPath), and passphrase (keyPassword). |
| [CloseResult](arkts-network-closeresult-i.md) | The result for closing a WebSocket connection. |
| [ServerCert](arkts-network-servercert-i.md) | The serverCert field of the server certificate, which includes two attributes: File paths of server certificate (certPath) and certificate private key (keyPath). Only support PEM format. |
| [WebSocket](arkts-network-websocket-i.md) | &lt;p&gt;Defines a WebSocket object. Before invoking WebSocket APIs, you need to call webSocket.createWebSocket to create a WebSocket object.&lt;/p&gt; |
| [WebSocketCloseOptions](arkts-network-websocketcloseoptions-i.md) | Defines the optional parameters carried in the request for closing a WebSocket connection. |
| [WebSocketConnection](arkts-network-websocketconnection-i.md) | Info about the connection from each specific client. |
| [WebSocketMessage](arkts-network-websocketmessage-i.md) | Info about the message received from a specific client. |
| [WebSocketOpenInfo](arkts-network-websocketopeninfo-i.md) | The result for open info of a WebSocket connection. |
| [WebSocketRequestOptions](arkts-network-websocketrequestoptions-i.md) | Defines the optional parameters carried in the request for establishing a WebSocket connection. |
| [WebSocketServer](arkts-network-websocketserver-i.md) | &lt;p&gt;Defines a WebSocketServer object. Before invoking WebSocketServer APIs, you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.&lt;/p&gt; |
| [WebSocketServerConfig](arkts-network-websocketserverconfig-i.md) | Defines parameters for a WebSocket Server. |

### Enums

| Name | Description |
| --- | --- |
| [TlsProtocol](arkts-network-tlsprotocol-e.md) | Enumerates TLS protocols. |

### Types

| Name | Description |
| --- | --- |
| [ClientConnectionCloseCallback](arkts-network-clientconnectionclosecallback-t.md) | Callback function when a client connection is closed. |
| [HttpProxy](arkts-network-httpproxy-t.md) |  |
| [ProxyConfiguration](arkts-network-proxyconfiguration-t.md) | HTTP proxy configuration. system: means that use system proxy configuration. no-proxy: means do not use proxy. object of @type {connection.HttpProxy} means providing custom proxy settings |
| [ResponseHeaders](arkts-network-responseheaders-t.md) | HTTP response headers. |

