# WebSocketServer

<p>Defines a WebSocketServer object. Before invoking WebSocketServer APIs,you need to call webSocketServer.createWebSocketServer to create a WebSocket Server.</p>

**Since:** 24

<!--Device-webSocket-export interface WebSocketServer--><!--Device-webSocket-export interface WebSocketServer-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

<a id="close"></a>
## close

```TypeScript
close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>
```

Close a given WebSocket connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-WebSocketServer-close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>--><!--Device-WebSocketServer-close(connection: WebSocketConnection, options?: webSocket.WebSocketCloseOptions): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | [WebSocketConnection](arkts-network-websocket-websocketconnection-i.md) | Yes | which on to be closed. |
| options | webSocket.WebSocketCloseOptions | No | Optional parameters {@link WebSocketCloseOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Indicating whether the connection is closed sucessfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 2302006 | websocket connection does not exist. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer: webSocket.WebSocketServer;
let config: webSocket.WebSocketServerConfig = {
  serverPort: 8080, // Listening port
  maxConcurrentClientsNumber: 10,
  maxConnectionsForOneClient: 10,
}

localServer = webSocket.createWebSocketServer();
localServer.start(config).then((success: boolean) => {
  if (success) {
    console.info('webSocket server start success');
  } else {
    console.error('websocket server start failed');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);
});

localServer.on('connect', (connection: webSocket.WebSocketConnection) => {
  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);
  localServer.close(connection).then((success: boolean) => {
    if (success) {
      console.info('close client successfully');
    } else {
      console.error('close client failed');
    }
  });
});

```

<a id="listallconnections"></a>
## listAllConnections

```TypeScript
listAllConnections(): WebSocketConnection[]
```

List all alive connections.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-WebSocketServer-listAllConnections(): WebSocketConnection[]--><!--Device-WebSocketServer-listAllConnections(): WebSocketConnection[]-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [WebSocketConnection](arkts-network-websocket-websocketconnection-i.md)[] | an array consists connections from all clients. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let connections: webSocket.WebSocketConnection[] = [];
let localServer: webSocket.WebSocketServer;
let config: webSocket.WebSocketServerConfig = {
  serverPort: 8080, // Listening port
  maxConcurrentClientsNumber: 10,
  maxConnectionsForOneClient: 10,
}

localServer = webSocket.createWebSocketServer();
localServer.start(config).then((success: boolean) => {
  if (success) {
    console.info('webSocket server start success');
  } else {
    console.error('websocket server start failed');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);
});

localServer.on('connect', async (connection: webSocket.WebSocketConnection) => {
  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);
  try {
    connections = await localServer.listAllConnections();
    if (connections.length === 0) {
      console.info('client list is empty');
    } else {
      console.info(`client list cnt: ${connections.length}, client connections list is: ${connections}`);
    }
  } catch (error) {
    console.error(`Failed to listAllConnections. Code: ${error.code}, message: ${error.message}`);
  }
});

```

<a id="off"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for the error events of a WebSocket Server.

**Since:** 24

<!--Device-WebSocketServer-off(type: 'error', callback?: ErrorCallback): void--><!--Device-WebSocketServer-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | event indicating that the WebSocket Server has encountered an error. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.off('error');

```

<a id="off-1"></a>
## off('connect')

```TypeScript
off(type: 'connect', callback?: Callback<WebSocketConnection>): void
```

Cancels listening for events that a client requested to connect the server.

**Since:** 24

<!--Device-WebSocketServer-off(type: 'connect', callback?: Callback<WebSocketConnection>): void--><!--Device-WebSocketServer-off(type: 'connect', callback?: Callback<WebSocketConnection>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | event indicating that a client requested to connect the server. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WebSocketConnection&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.off('connect');

```

<a id="off-2"></a>
## off('close')

```TypeScript
off(type: 'close', callback?: ClientConnectionCloseCallback): void
```

Cancels listening for events that a connection from a given client has been closed.

**Since:** 24

<!--Device-WebSocketServer-off(type: 'close', callback?: ClientConnectionCloseCallback): void--><!--Device-WebSocketServer-off(type: 'close', callback?: ClientConnectionCloseCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | event indicating that a connection from a given client has been closed. |
| callback | [ClientConnectionCloseCallback](arkts-network-websocket-clientconnectionclosecallback-t.md) | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.off('close');

```

<a id="off-3"></a>
## off('messageReceive')

```TypeScript
off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void
```

Cancels listening for events that the server received a message.

**Since:** 24

<!--Device-WebSocketServer-off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void--><!--Device-WebSocketServer-off(type: 'messageReceive', callback?: Callback<WebSocketMessage>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'messageReceive' | Yes | event indicating that the server received a message. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WebSocketMessage&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.off('messageReceive');

```

<a id="on"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Enables listening for the error events of a WebSocket Server.

**Since:** 24

<!--Device-WebSocketServer-on(type: 'error', callback: ErrorCallback): void--><!--Device-WebSocketServer-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | event indicating that the WebSocket Server has encountered an error. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wsServer: webSocket.WebSocketServer = webSocket.createWebSocketServer();
wsServer.on('error', (err: BusinessError) => {
  console.error(`error. Code: ${err.code}, message: ${err.message}`);
});

```

<a id="on-1"></a>
## on('connect')

```TypeScript
on(type: 'connect', callback: Callback<WebSocketConnection>): void
```

Enables listening for events that a client requested to connect the server.

**Since:** 24

<!--Device-WebSocketServer-on(type: 'connect', callback: Callback<WebSocketConnection>): void--><!--Device-WebSocketServer-on(type: 'connect', callback: Callback<WebSocketConnection>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | event indicating that a client requested to connect the server. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WebSocketConnection&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.on('connect', (connection: webSocket.WebSocketConnection) => {
  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);
});

```

<a id="on-2"></a>
## on('messageReceive')

```TypeScript
on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void
```

Enables listening for events that the server received a message.

**Since:** 24

<!--Device-WebSocketServer-on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void--><!--Device-WebSocketServer-on(type: 'messageReceive', callback: Callback<WebSocketMessage>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'messageReceive' | Yes | event indicating that the server received a message. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;WebSocketMessage&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError, Callback } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.on('messageReceive', (message: webSocket.WebSocketMessage) => {
  console.info(`on message received, client: ${message.clientConnection}, data: ${message.data}`);
});

```

<a id="on-3"></a>
## on('close')

```TypeScript
on(type: 'close', callback: ClientConnectionCloseCallback): void
```

Enables listening for events that a connection from a given client has been closed.

**Since:** 24

<!--Device-WebSocketServer-on(type: 'close', callback: ClientConnectionCloseCallback): void--><!--Device-WebSocketServer-on(type: 'close', callback: ClientConnectionCloseCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | event indicating that a connection from a given client has been closed. |
| callback | [ClientConnectionCloseCallback](arkts-network-websocket-clientconnectionclosecallback-t.md) | Yes | the callback function when a client connection is closed. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer = webSocket.createWebSocketServer();
localServer.on('close', (clientConnection: webSocket.WebSocketConnection, closeReason: webSocket.CloseResult) => {
  console.info(`client close, client: ${clientConnection}, closeReason: Code: ${closeReason.code}, reason: ${closeReason.reason}`);
});

```

<a id="send"></a>
## send

```TypeScript
send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>
```

Send a message using a specific connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-WebSocketServer-send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>--><!--Device-WebSocketServer-send(data: string | ArrayBuffer, connection: WebSocketConnection): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | string \| ArrayBuffer | Yes | What to send. It can be a string or an ArrayBuffer. |
| connection | [WebSocketConnection](arkts-network-websocket-websocketconnection-i.md) | Yes | Where to sent. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Indicating whether the message is sent sucessfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 2302006 | websocket connection does not exist. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer: webSocket.WebSocketServer;
let config: webSocket.WebSocketServerConfig = {
  serverPort: 8080, // Listening port
  maxConcurrentClientsNumber: 10,
  maxConnectionsForOneClient: 10,
}

localServer = webSocket.createWebSocketServer();
localServer.start(config).then((success: boolean) => {
  if (success) {
    console.info('webSocket server start success');
  } else {
    console.error('websocket server start failed');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);
});

localServer.on('connect', async (connection: webSocket.WebSocketConnection) => {
  console.info(`New client connected! Client ip: ${connection.clientIP}, Client port: ${connection.clientPort}`);
  // Use send() to send data to the client when the on('connect') event is received.
  localServer.send("Hello, I'm server!", connection).then((success: boolean) => {
    if (success) {
      console.info('message send successfully');
    } else {
      console.error('message send failed');
    }
  }).catch((error: BusinessError) => {
    console.error(`message send failed, Code: ${error.code}, message: ${error.message}`);
  });
});

```

<a id="start"></a>
## start

```TypeScript
start(config: WebSocketServerConfig): Promise<boolean>
```

Start the WebSocket Server, and listen to a given port.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-WebSocketServer-start(config: WebSocketServerConfig): Promise<boolean>--><!--Device-WebSocketServer-start(config: WebSocketServerConfig): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [WebSocketServerConfig](arkts-network-websocket-websocketserverconfig-i.md) | Yes | setting for the server, such as ip address and port to listen to. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Indicating whether the server starts sucessfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2302002](../errorcode-net-webSocket.md#2302002-websocket-certificate-does-not-exist) | Websocket certificate file does not exist. |
| [2302004](../errorcode-net-webSocket.md#2302004-listening-failed-on-the-specified-nic) | Can't listen on the given NIC. |
| [2302005](../errorcode-net-webSocket.md#2302005-listening-failed-on-the-specified-port) | Can't listen on the given Port. |
| [2302007](../errorcode-net-webSocket.md#2302007-listening-port-already-occupied) | Websocket port already occupied. |
| [2302999](../errorcode-net-webSocket.md#2302999-internal-error) | Websocket other unknown error. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer: webSocket.WebSocketServer;
let config: webSocket.WebSocketServerConfig = {
  serverPort: 8080, // Listening port
  maxConcurrentClientsNumber: 10,
  maxConnectionsForOneClient: 10,
}

localServer = webSocket.createWebSocketServer();
localServer.start(config).then((success: boolean) => {
  if (success) {
    console.info('webSocket server start success');
  } else {
    console.error('websocket server start failed');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);
});

```

<a id="stop"></a>
## stop

```TypeScript
stop(): Promise<boolean>
```

Stop listening.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-WebSocketServer-stop(): Promise<boolean>--><!--Device-WebSocketServer-stop(): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The Indicating whether the server stops sucessfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let localServer: webSocket.WebSocketServer;
let config: webSocket.WebSocketServerConfig = {
  serverPort: 8080, // Listening port
  maxConcurrentClientsNumber: 10,
  maxConnectionsForOneClient: 10,
}

localServer = webSocket.createWebSocketServer();
localServer.start(config).then((success: boolean) => {
  if (success) {
    console.info('webSocket server start success');
  } else {
    console.error('websocket server start failed');
  }
}).catch((error: BusinessError) => {
  console.error(`Failed to start. Code: ${error.code}, message: ${error.message}`);
});

localServer.stop().then((success: boolean) => {
  if (success) {
    console.info('server stop service successfully');
  } else {
    console.error('server stop service failed');
  }
});

```

