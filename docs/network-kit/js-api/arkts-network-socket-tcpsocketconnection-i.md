# TCPSocketConnection

Defines the connection of the TCPSocket client and server.

**Since:** 24

<!--Device-socket-export interface TCPSocketConnection--><!--Device-socket-export interface TCPSocketConnection-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="close"></a>
## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes a TCPSocket client connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-close(callback: AsyncCallback<void>): void--><!--Device-TCPSocketConnection-close(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.close((err: BusinessError) => {
    if (err) {
      console.error('close fail');
      return;
    }
    console.info('close success');
  });
});

```

<a id="close-1"></a>
## close

```TypeScript
close(): Promise<void>
```

Closes a TCPSocket client connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-close(): Promise<void>--><!--Device-TCPSocketConnection-close(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.close().then(() => {
    console.info('close success');
  }).catch((err: BusinessError) => {
    console.error('close fail');
  });
});

```

<a id="getlocaladdress"></a>
## getLocalAddress

```TypeScript
getLocalAddress(): Promise<NetAddress>
```

Obtains the local address of a TCPSocketServer connection.

**Since:** 24

<!--Device-TCPSocketConnection-getLocalAddress(): Promise<NetAddress>--><!--Device-TCPSocketConnection-getLocalAddress(): Promise<NetAddress>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetAddress&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |
| [2301009](../errorcode-net-socket.md#2301009-bad-file-descriptor) | Bad file descriptor. |
| [2303188](../errorcode-net-socket.md#2303188-socket-operations-on-nonsockets) | Socket operation on non-socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let listenAddr: socket.NetAddress = {
  address: "192.168.xx.xx",
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
  let netAddress: socket.NetAddress = {
    address: "192.168.xx.xx",
    port: 8080
  }
  let options: socket.TCPConnectOptions = {
    address: netAddress,
    timeout: 6000
  }
  tcp.connect(options, (err: BusinessError) => {
    if (err) {
      console.error('connect fail');
      return;
    }
    console.info('connect success!');
  })
  tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
    client.getLocalAddress().then((localAddress: socket.NetAddress) => {
      console.info("Family IP Port: " + JSON.stringify(localAddress));
    }).catch((err: BusinessError) => {
      console.error('Error:' + JSON.stringify(err));
    });
  })
})

```

<a id="getremoteaddress"></a>
## getRemoteAddress

```TypeScript
getRemoteAddress(callback: AsyncCallback<NetAddress>): void
```

Obtains the peer address of a TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-getRemoteAddress(callback: AsyncCallback<NetAddress>): void--><!--Device-TCPSocketConnection-getRemoteAddress(callback: AsyncCallback<NetAddress>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetAddress&gt; | Yes | The callback of getRemoteAddress. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |
| [2303188](../errorcode-net-socket.md#2303188-socket-operations-on-nonsockets) | Socket operation on non-socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.getRemoteAddress((err: BusinessError, data: socket.NetAddress) => {
    if (err) {
      console.error('getRemoteAddress fail');
      return;
    }
    console.info('getRemoteAddress success:' + JSON.stringify(data));
  });
});

```

<a id="getremoteaddress-1"></a>
## getRemoteAddress

```TypeScript
getRemoteAddress(): Promise<NetAddress>
```

Obtains the peer address of a TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-getRemoteAddress(): Promise<NetAddress>--><!--Device-TCPSocketConnection-getRemoteAddress(): Promise<NetAddress>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetAddress&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |
| [2303188](../errorcode-net-socket.md#2303188-socket-operations-on-nonsockets) | Socket operation on non-socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.getRemoteAddress().then(() => {
    console.info('getRemoteAddress success');
  }).catch((err: BusinessError) => {
    console.error('getRemoteAddress fail');
  });
});

```

<a id="getsocketfd"></a>
## getSocketFd

```TypeScript
getSocketFd(): Promise<number>
```

Obtains the file descriptor of the TCPSocketConnection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-getSocketFd(): Promise<int>--><!--Device-TCPSocketConnection-getSocketFd(): Promise<int>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returns the file descriptor of the TCP socket connection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let listenAddr: socket.NetAddress = {
  address: "192.168.xx.xx",
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
    client.getSocketFd().then((fd: number) => {
      console.info(`Socket FD: ${fd}`);
    }).catch((err: BusinessError) => {
      console.error(`getSocketFd fail: ${err.message}, errorCode: ${err.code}`);
    });
  })
}).catch((err: BusinessError) => {
  console.error('listen fail');
});

```

<a id="off"></a>
## off('message')

```TypeScript
off(type: 'message', callback?: Callback<SocketMessageInfo>): void
```

Cancels listening for message receiving events of the TCPSocketConnection.

**Since:** 12

<!--Device-TCPSocketConnection-off(type: 'message', callback?: Callback<SocketMessageInfo>): void--><!--Device-TCPSocketConnection-off(type: 'message', callback?: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SocketMessageInfo&gt; | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let callback = (value: socket.SocketMessageInfo) => {
  let messageView = '';
  for (let i: number = 0; i < value.message.byteLength; i++) {
    let uint8Array = new Uint8Array(value.message) 
    let messages = uint8Array[i]
    let message = String.fromCharCode(messages);
    messageView += message;
  }
  console.info('on message message: ' + JSON.stringify(messageView));
  console.info('remoteInfo: ' + JSON.stringify(value.remoteInfo));
}
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('message', callback);
  // You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
  client.off('message', callback);
  client.off('message');
});

```

<a id="off-1"></a>
## off('close')

```TypeScript
off(type: 'close', callback?: Callback<void>): void
```

Cancels listening for close events of the TCPSocketConnection.

**Since:** 24

<!--Device-TCPSocketConnection-off(type: 'close', callback?: Callback<void>): void--><!--Device-TCPSocketConnection-off(type: 'close', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let callback = () => {
  console.info("on close success");
}
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('close', callback);
  // You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
  client.off('close', callback);
  client.off('close');
});

```

<a id="off-2"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for error events of the TCPSocketConnection.

**Since:** 10

<!--Device-TCPSocketConnection-off(type: 'error', callback?: ErrorCallback): void--><!--Device-TCPSocketConnection-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let callback = (err: BusinessError) => {
  console.error("on error, err:" + JSON.stringify(err));
}
let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('error', callback);
  // You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
  client.off('error', callback);
  client.off('error');
});

```

<a id="on"></a>
## on('message')

```TypeScript
on(type: 'message', callback: Callback<SocketMessageInfo>): void
```

Listens for message receiving events of the TCPSocketConnection.

**Since:** 12

<!--Device-TCPSocketConnection-on(type: 'message', callback: Callback<SocketMessageInfo>): void--><!--Device-TCPSocketConnection-on(type: 'message', callback: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SocketMessageInfo&gt; | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('message', (value: socket.SocketMessageInfo) => {
    let messageView = '';
    let uint8Array = new Uint8Array(value.message); 
    for (let i: number = 0; i < value.message.byteLength; i++) {
      let messages = uint8Array[i];
      let message = String.fromCharCode(messages);
      messageView += message;
    }
    console.info('on message message: ' + JSON.stringify(messageView));
    console.info('remoteInfo: ' + JSON.stringify(value.remoteInfo));
  });
});

```

<a id="on-1"></a>
## on('close')

```TypeScript
on(type: 'close', callback: Callback<void>): void
```

Listens for close events of the TCPSocketConnection.

**Since:** 24

<!--Device-TCPSocketConnection-on(type: 'close', callback: Callback<void>): void--><!--Device-TCPSocketConnection-on(type: 'close', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('close', () => {
    console.info("on close success")
  });
});

```

<a id="on-2"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Listens for error events of the TCPSocketConnection.

**Since:** 10

<!--Device-TCPSocketConnection-on(type: 'error', callback: ErrorCallback): void--><!--Device-TCPSocketConnection-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  client.on('error', (err: BusinessError) => {
    console.error("on error, err:" + JSON.stringify(err))
  });
});

```

<a id="send"></a>
## send

```TypeScript
send(options: TCPSendOptions, callback: AsyncCallback<void>): void
```

Sends data over a TCPSocketServer connection to client.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-send(options: TCPSendOptions, callback: AsyncCallback<void>): void--><!--Device-TCPSocketConnection-send(options: TCPSendOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPSendOptions](arkts-network-socket-tcpsendoptions-i.md) | Yes | Parameters for sending data {@link TCPSendOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  let tcpSendOption: socket.TCPSendOptions = {
    data: 'Hello, client!'
  }
  client.send(tcpSendOption, () => {
    console.info('send success');
  });
});

```

<a id="send-1"></a>
## send

```TypeScript
send(options: TCPSendOptions): Promise<void>
```

Sends data over a TCPSocketServer connection to client.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocketConnection-send(options: TCPSendOptions): Promise<void>--><!--Device-TCPSocketConnection-send(options: TCPSendOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPSendOptions](arkts-network-socket-tcpsendoptions-i.md) | Yes | Parameters for sending data {@link TCPSendOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

tcpServer.on('connect', (client: socket.TCPSocketConnection) => {
  let tcpSendOption: socket.TCPSendOptions = {
    data: 'Hello, client!'
  }
  client.send(tcpSendOption).then(() => {
    console.info('send success');
  }).catch((err: BusinessError) => {
    console.error('send fail');
  });
});

```

## clientId

```TypeScript
clientId: number
```

The id of a client connects to the TCPSocketServer.

**Type:** number

**Since:** 24

<!--Device-TCPSocketConnection-clientId: int--><!--Device-TCPSocketConnection-clientId: int-End-->

**System capability:** SystemCapability.Communication.NetStack

