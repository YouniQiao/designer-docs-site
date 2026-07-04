# TCPSocketServer

Defines a TCPSocket server connection.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## close

```TypeScript
close(): Promise<void>
```

Close the TCPSocketServer. Close the TCPSocketServer listening port.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

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
let listenAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.on('connect', (connection: socket.TCPSocketConnection) => {
  console.info("connection clientId: " + connection.clientId);
  // Logical processing
  tcpServer.close(); // Stop event listening.
  connection.close(); // Close the current connection.
});
tcpServer.listen(listenAddr).then(() => {
  console.info('listen success');
}).catch((err: BusinessError) => {
  console.error('listen fail: ' + err.code);
});

```

## getLocalAddress

```TypeScript
getLocalAddress(): Promise<NetAddress>
```

Obtains the local address of a TCPSocketServer connection.

**Since:** 24

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
  address: '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr).then(() => {
  tcpServer.getLocalAddress().then((localAddress: socket.NetAddress) => {
    console.info("SUCCESS! Address:" + JSON.stringify(localAddress));
  }).catch((err: BusinessError) => {
    console.error("FerrorAILED! Error:" + JSON.stringify(err));
  })
}).catch((err: BusinessError) => {
  console.error('listen fail');
});

```

## getSocketFd

```TypeScript
getSocketFd(): Promise<number>
```

Obtains the file descriptor of the TCPSocketServer.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returns the file descriptor of the TCP socket server. |

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
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr).then(() => {
  console.info('listen success');
  tcpServer.getSocketFd().then((fd: number) => {
    console.info(`Socket FD: ${fd}`);
  }).catch((err: BusinessError) => {
    console.error(`getSocketFd fail: ${err.message}, errorCode: ${err.code}`);
  });
}).catch((err: BusinessError) => {
  console.error('listen fail');
});

```

## getState

```TypeScript
getState(callback: AsyncCallback<SocketStateBase>): void
```

Obtains the status of the TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;SocketStateBase&gt; | Yes | The callback of getState. |

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
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
})
tcpServer.getState((err: BusinessError, data: socket.SocketStateBase) => {
  if (err) {
    console.error('getState fail');
    return;
  }
  console.info('getState success:' + JSON.stringify(data));
})

```

## getState

```TypeScript
getState(): Promise<SocketStateBase>
```

Obtains the status of the TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SocketStateBase&gt; | The promise returned by the function. |

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
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
})
tcpServer.getState().then((data: socket.SocketStateBase) => {
  console.info('getState success' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error('getState fail');
});

```

## listen

```TypeScript
listen(address: NetAddress, callback: AsyncCallback<void>): void
```

Binds the IP address and port number, the port number can be specified or randomly allocated by the system. <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads for accept processing and uses poll multiplex to process client connections.</p>

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | NetAddress | Yes | Network address information {@link NetAddress}. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of listen. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |
| [2303109](../errorcode-net-socket.md#2303109-error-file-number) | Bad file number. |
| [2303111](../errorcode-net-socket.md#2303111-requested-resource-temporarily-unavailable) | Resource temporarily unavailable. Try again. |
| [2303198](../errorcode-net-socket.md#2303198-network-address-already-in-use) | Address already in use. |
| [2303199](../errorcode-net-socket.md#2303199-failed-to-assign-the-requested-address) | Cannot assign requested address. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
})

```

## listen

```TypeScript
listen(address: NetAddress): Promise<void>
```

Binds the IP address and port number, the port number can be specified or randomly allocated by the system. <p>Listens for a TCPSocket connection to be made to this socket and accepts it. This interface uses multiple threads for accept processing and uses poll multiplex to process client connections.</p>

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | NetAddress | Yes | Network address information {@link NetAddress}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2300002](../errorcode-net-socket.md#2300002-system-internal-error) | System internal error. |
| [2303109](../errorcode-net-socket.md#2303109-error-file-number) | Bad file number. |
| [2303111](../errorcode-net-socket.md#2303111-requested-resource-temporarily-unavailable) | Resource temporarily unavailable. Try again. |
| [2303198](../errorcode-net-socket.md#2303198-network-address-already-in-use) | Address already in use. |
| [2303199](../errorcode-net-socket.md#2303199-failed-to-assign-the-requested-address) | Cannot assign requested address. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr).then(() => {
  console.info('listen success');
}).catch((err: BusinessError) => {
  console.error('listen fail');
});

```

## off('connect')

```TypeScript
off(type: 'connect', callback?: Callback<TCPSocketConnection>): void
```

Cancels listening for connect events of the TCPSocketServer connection.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | Indicates Event name. |
| callback | Callback&lt;TCPSocketConnection&gt; | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
  let callback = (data: socket.TCPSocketConnection) => {
    console.info('on connect message: ' + JSON.stringify(data));
  }
  tcpServer.on('connect', callback);
  // You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
  tcpServer.off('connect', callback);
  tcpServer.off('connect');
})

```

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for error events of the TCPSocketServer connection.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | ErrorCallback | No | The callback of off. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
  let callback = (err: BusinessError) => {
    console.error("on error, err:" + JSON.stringify(err));
  }
  tcpServer.on('error', callback);
  // You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
  tcpServer.off('error', callback);
  tcpServer.off('error');
})

```

## on('connect')

```TypeScript
on(type: 'connect', callback: Callback<TCPSocketConnection>): void
```

Listens for connect events of the TCPSocketServer connection.

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' | Yes | Indicates Event name. |
| callback | Callback&lt;TCPSocketConnection&gt; | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
  tcpServer.on('connect', (data: socket.TCPSocketConnection) => {
    console.info(JSON.stringify(data))
  });
})

```

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Listens for error events of the TCPSocketServer connection.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | ErrorCallback | Yes | The callback of on. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();

let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
  tcpServer.on('error', (err: BusinessError) => {
    console.error("on error, err:" + JSON.stringify(err))
  });
})

```

## setExtraOptions

```TypeScript
setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void
```

Sets other attributes of the TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TCPExtraOptions | Yes | Parameters of the attributes {@link TCPExtraOptions}. |
| callback | AsyncCallback&lt;void&gt; | Yes | The callback of setExtraOptions. |

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
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}
tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
})

interface SocketLinger {
  on: boolean;
  linger: number;
}

let tcpExtraOptions: socket.TCPExtraOptions = {
  keepAlive: true,
  OOBInline: true,
  TCPNoDelay: true,
  socketLinger: { on: true, linger: 10 } as SocketLinger,
  receiveBufferSize: 8192,
  sendBufferSize: 8192,
  reuseAddress: true,
  socketTimeout: 3000
}
tcpServer.setExtraOptions(tcpExtraOptions, (err: BusinessError) => {
  if (err) {
    console.error('setExtraOptions fail');
    return;
  }
  console.info('setExtraOptions success');
});

```

## setExtraOptions

```TypeScript
setExtraOptions(options: TCPExtraOptions): Promise<void>
```

Sets other attributes of the TCPSocketServer connection.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TCPExtraOptions | Yes | Parameters of the attributes {@link TCPExtraOptions}. |

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
| [2303188](../errorcode-net-socket.md#2303188-socket-operations-on-nonsockets) | Socket operation on non-socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcpServer: socket.TCPSocketServer = socket.constructTCPSocketServerInstance();
let listenAddr: socket.NetAddress = {
  address:  '192.168.xx.xxx',
  port: 8080,
  family: 1
}

interface SocketLinger {
  on: boolean;
  linger: number;
}

tcpServer.listen(listenAddr, (err: BusinessError) => {
  if (err) {
    console.error("listen fail");
    return;
  }
  console.info("listen success");
})

let tcpExtraOptions: socket.TCPExtraOptions = {
  keepAlive: true,
  OOBInline: true,
  TCPNoDelay: true,
  socketLinger: { on: true, linger: 10 } as SocketLinger,
  receiveBufferSize: 8192,
  sendBufferSize: 8192,
  reuseAddress: true,
  socketTimeout: 3000
}
tcpServer.setExtraOptions(tcpExtraOptions).then(() => {
  console.info('setExtraOptions success');
}).catch((err: BusinessError) => {
  console.error('setExtraOptions fail');
});

```

