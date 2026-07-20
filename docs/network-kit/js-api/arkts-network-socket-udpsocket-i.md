# UDPSocket

Defines a UDPSocket connection.

**Since:** 10

<!--Device-socket-export interface UDPSocket--><!--Device-socket-export interface UDPSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## bind

```TypeScript
bind(address: NetAddress, callback: AsyncCallback<void>): void
```

Binds the IP address and port number. The port number can be specified or randomly allocated by the system.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-bind(address: NetAddress, callback: AsyncCallback<void>): void--><!--Device-UDPSocket-bind(address: NetAddress, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Destination address. {@link NetAddress} |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of bind. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 1234
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
});

```

## bind

```TypeScript
bind(address: NetAddress): Promise<void>
```

Binds the IP address and port number. The port number can be specified or randomly allocated by the system.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-bind(address: NetAddress): Promise<void>--><!--Device-UDPSocket-bind(address: NetAddress): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Destination address. {@link NetAddress} |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 8080
}
udp.bind(bindAddr).then(() => {
  console.info('bind success');
}).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes a UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-close(callback: AsyncCallback<void>): void--><!--Device-UDPSocket-close(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
udp.close((err: BusinessError) => {
  if (err) {
    console.error('close fail');
    return;
  }
  console.info('close success');
})

```

## close

```TypeScript
close(): Promise<void>
```

Closes a UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-close(): Promise<void>--><!--Device-UDPSocket-close(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
udp.close().then(() => {
  console.info('close success');
}).catch((err: BusinessError) => {
  console.error('close fail');
});

```

## getLocalAddress

```TypeScript
getLocalAddress(): Promise<NetAddress>
```

Obtains the local address of a UDPSocket connection.

**Since:** 24

<!--Device-UDPSocket-getLocalAddress(): Promise<NetAddress>--><!--Device-UDPSocket-getLocalAddress(): Promise<NetAddress>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NetAddress> | The promise returned by the function. |

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

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();

let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
udp.bind(bindAddr).then(() => {
  console.info('bind success');
  udp.getLocalAddress().then((localAddress: socket.NetAddress) => {
        console.info("UDP_Socket get SUCCESS! Address: " + JSON.stringify(localAddress));
      }).catch((err: BusinessError) => {
        console.error("UDP_Socket get FAILED! Error: " + JSON.stringify(err));
      })
}).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

## getSocketFd

```TypeScript
getSocketFd(): Promise<number>
```

Obtains the file descriptor of the UDPSocket.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-getSocketFd(): Promise<int>--><!--Device-UDPSocket-getSocketFd(): Promise<int>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | The promise returns the file descriptor of the UDP socket. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
    address: '192.168.xx.xxx',
    port: 8080
}
udp.bind(bindAddr)
  .then(() => {
    udp.getSocketFd()
      .then((fd: number) => {
        console.info(`Socket FD: ${fd}`);
      }).catch((err: BusinessError) => {
      console.error(`getSocketFd fail: ${err.message}, errorCode: ${err.code}`);
    });
  }).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

## getState

```TypeScript
getState(callback: AsyncCallback<SocketStateBase>): void
```

Obtains the status of the UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-getState(callback: AsyncCallback<SocketStateBase>): void--><!--Device-UDPSocket-getState(callback: AsyncCallback<SocketStateBase>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<SocketStateBase> | Yes | the callback of getState. {@link SocketStateBase}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.error('bind success');
  udp.getState((err: BusinessError, data: socket.SocketStateBase) => {
    if (err) {
      console.error('getState fail');
      return;
    }
    console.info('getState success:' + JSON.stringify(data));
  })
})

```

## getState

```TypeScript
getState(): Promise<SocketStateBase>
```

Obtains the status of the UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-getState(): Promise<SocketStateBase>--><!--Device-UDPSocket-getState(): Promise<SocketStateBase>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<SocketStateBase> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
  udp.getState().then((data: socket.SocketStateBase) => {
    console.info('getState success:' + JSON.stringify(data));
  }).catch((err: BusinessError) => {
    console.error('getState fail' + JSON.stringify(err));
  });
});

```

## off('message')

```TypeScript
off(type: 'message', callback?: Callback<SocketMessageInfo>): void
```

Cancels listening for message receiving events of the UDPSocket connection.

**Since:** 11

<!--Device-UDPSocket-off(type: 'message', callback?: Callback<SocketMessageInfo>): void--><!--Device-UDPSocket-off(type: 'message', callback?: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SocketMessageInfo> | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let messageView = '';
let callback = (value: socket.SocketMessageInfo) => {
  for (let i: number = 0; i < value.message.byteLength; i++) {
    let uint8Array = new Uint8Array(value.message) 
    let messages = uint8Array[i]
    let message = String.fromCharCode(messages);
    messageView += message;
  }
  console.info('on message message: ' + JSON.stringify(messageView));
  console.info('remoteInfo: ' + JSON.stringify(value.remoteInfo));
}
udp.on('message', callback);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('message', callback);
udp.off('message');

```

## off('listening' | 'close')

```TypeScript
off(type: 'listening' | 'close', callback?: Callback<void>): void
```

Cancels listening for data packet message events or close events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-off(type: 'listening' | 'close', callback?: Callback<void>): void--><!--Device-UDPSocket-off(type: 'listening' | 'close', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'listening' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let callback1 = () => {
  console.info("on listening, success");
}
udp.on('listening', callback1);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('listening', callback1);
udp.off('listening');
let callback2 = () => {
  console.info("on close, success");
}
udp.on('close', callback2);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('close', callback2);
udp.off('close');

```

## off('listening' | 'close')

```TypeScript
off(type: 'listening' | 'close', callback?: Callback<void>): void
```

Cancels listening for data packet message events or close events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-off(type: 'listening' | 'close', callback?: Callback<void>): void--><!--Device-UDPSocket-off(type: 'listening' | 'close', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'listening' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let callback1 = () => {
  console.info("on listening, success");
}
udp.on('listening', callback1);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('listening', callback1);
udp.off('listening');
let callback2 = () => {
  console.info("on close, success");
}
udp.on('close', callback2);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('close', callback2);
udp.off('close');

```

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for error events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-off(type: 'error', callback?: ErrorCallback): void--><!--Device-UDPSocket-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let callback = (err: BusinessError) => {
  console.error("on error, err:" + JSON.stringify(err));
}
udp.on('error', callback);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
udp.off('error', callback);
udp.off('error');

```

## on('message')

```TypeScript
on(type: 'message', callback: Callback<SocketMessageInfo>): void
```

Listens for message receiving events of the UDPSocket connection.

**Since:** 11

<!--Device-UDPSocket-on(type: 'message', callback: Callback<SocketMessageInfo>): void--><!--Device-UDPSocket-on(type: 'message', callback: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<SocketMessageInfo> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();

udp.on('message', (value: socket.SocketMessageInfo) => {
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

```

## on('listening' | 'close')

```TypeScript
on(type: 'listening' | 'close', callback: Callback<void>): void
```

Listens for data packet message events or close events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-on(type: 'listening' | 'close', callback: Callback<void>): void--><!--Device-UDPSocket-on(type: 'listening' | 'close', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'listening' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
udp.on('listening', () => {
  console.info("on listening success");
});
udp.on('close', () => {
  console.info("on close success");
});

```

## on('listening' | 'close')

```TypeScript
on(type: 'listening' | 'close', callback: Callback<void>): void
```

Listens for data packet message events or close events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-on(type: 'listening' | 'close', callback: Callback<void>): void--><!--Device-UDPSocket-on(type: 'listening' | 'close', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'listening' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
udp.on('listening', () => {
  console.info("on listening success");
});
udp.on('close', () => {
  console.info("on close success");
});

```

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Listens for error events of the UDPSocket connection.

**Since:** 10

<!--Device-UDPSocket-on(type: 'error', callback: ErrorCallback): void--><!--Device-UDPSocket-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Indicates Event name. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
udp.on('error', (err: BusinessError) => {
  console.error("on error, err:" + JSON.stringify(err))
});

```

## send

```TypeScript
send(options: UDPSendOptions, callback: AsyncCallback<void>): void
```

Sends data over a UDPSocket connection.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-send(options: UDPSendOptions, callback: AsyncCallback<void>): void--><!--Device-UDPSocket-send(options: UDPSendOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [UDPSendOptions](arkts-network-socket-udpsendoptions-i.md) | Yes | Optional parameters {@link UDPSendOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | the callback of send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2301206](../errorcode-net-socket.md#2301206-failed-to-connect-to-the-proxy-server-via-socks5) | Socks5 failed to connect to the proxy server. |
| [2301207](../errorcode-net-socket.md#2301207-invalid-user-name-or-password-for-socks5-authentication) | Socks5 username or password is invalid. |
| [2301208](../errorcode-net-socket.md#2301208-failed-to-connect-to-the-remote-server-via-socks5) | Socks5 failed to connect to the remote server. |
| [2301209](../errorcode-net-socket.md#2301209-authentication-mode-negotiation-failed-for-socks5) | Socks5 failed to negotiate the authentication method. |
| [2301210](../errorcode-net-socket.md#2301210-failed-to-send-messages-via-socks5) | Socks5 failed to send the message. |
| [2301211](../errorcode-net-socket.md#2301211-failed-to-receive-messages-via-socks5) | Socks5 failed to receive the message. |
| [2301212](../errorcode-net-socket.md#2301212-failed-to-serialize-messages-for-socks5) | Socks5 serialization error. |
| [2301213](../errorcode-net-socket.md#2301213-failed-to-deserialize-messages-for-socks5) | Socks5 deserialization error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 1234
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
});
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',  // Peer IP address
  port: 8080
}
let sendOptions: socket.UDPSendOptions = {
  data: 'Hello, server!',
  address: netAddress
}
udp.send(sendOptions, (err: BusinessError) => {
  if (err) {
    console.error('send fail');
    return;
  }
  console.info('send success');
});

```

Example (with socket proxy):

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 1234
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
});
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',  // Peer IP address
  port: 8080
}
let socks5Server: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let proxyOptions: socket.ProxyOptions = {
  type : 1,
  address: socks5Server,
  username: "xxx",
  password: "xxx"
}
let sendOptions: socket.UDPSendOptions = {
  data: 'Hello, server!',
  address: netAddress,
  proxy: proxyOptions,
}
udp.send(sendOptions, (err: BusinessError) => {
  if (err) {
    console.error('send fail');
    return;
  }
  console.info('send success');
});

```

## send

```TypeScript
send(options: UDPSendOptions): Promise<void>
```

Sends data over a UDPSocket connection.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-send(options: UDPSendOptions): Promise<void>--><!--Device-UDPSocket-send(options: UDPSendOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [UDPSendOptions](arkts-network-socket-udpsendoptions-i.md) | Yes | Optional parameters {@link UDPSendOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2301206](../errorcode-net-socket.md#2301206-failed-to-connect-to-the-proxy-server-via-socks5) | Socks5 failed to connect to the proxy server. |
| [2301207](../errorcode-net-socket.md#2301207-invalid-user-name-or-password-for-socks5-authentication) | Socks5 username or password is invalid. |
| [2301208](../errorcode-net-socket.md#2301208-failed-to-connect-to-the-remote-server-via-socks5) | Socks5 failed to connect to the remote server. |
| [2301209](../errorcode-net-socket.md#2301209-authentication-mode-negotiation-failed-for-socks5) | Socks5 failed to negotiate the authentication method. |
| [2301210](../errorcode-net-socket.md#2301210-failed-to-send-messages-via-socks5) | Socks5 failed to send the message. |
| [2301211](../errorcode-net-socket.md#2301211-failed-to-receive-messages-via-socks5) | Socks5 failed to receive the message. |
| [2301212](../errorcode-net-socket.md#2301212-failed-to-serialize-messages-for-socks5) | Socks5 serialization error. |
| [2301213](../errorcode-net-socket.md#2301213-failed-to-deserialize-messages-for-socks5) | Socks5 deserialization error. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 8080
}
udp.bind(bindAddr).then(() => {
  console.info('bind success');
}).catch((err: BusinessError) => {
  console.error('bind fail');
  return;
});
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx', // Peer IP address
  port: 8080
}
let sendOptions: socket.UDPSendOptions = {
  data: 'Hello, server!',
  address: netAddress
}
udp.send(sendOptions).then(() => {
  console.info('send success');
}).catch((err: BusinessError) => {
  console.error('send fail');
});

```

Example (with socket proxy):

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx', // Local IP address
  port: 8080
}
udp.bind(bindAddr).then(() => {
  console.info('bind success');
}).catch((err: BusinessError) => {
  console.error('bind fail');
  return;
});
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx', // Peer IP address
  port: 8080
}
let socks5Server: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let proxyOptions: socket.ProxyOptions = {
  type : 1,
  address: socks5Server,
  username: "xxx",
  password: "xxx"
}
let sendOptions: socket.UDPSendOptions = {
  data: 'Hello, server!',
  address: netAddress,
  proxy: proxyOptions,
}
udp.send(sendOptions).then(() => {
  console.info('send success');
}).catch((err: BusinessError) => {
  console.error('send fail');
});

```

## setExtraOptions

```TypeScript
setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void
```

Sets other attributes of the UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void--><!--Device-UDPSocket-setExtraOptions(options: UDPExtraOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [UDPExtraOptions](arkts-network-socket-udpextraoptions-i.md) | Yes | Optional parameters {@link UDPExtraOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();

let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
  let udpextraoptions: socket.UDPExtraOptions = {
    receiveBufferSize: 8192,
    sendBufferSize: 8192,
    reuseAddress: false,
    socketTimeout: 6000,
    broadcast: true
  }
  udp.setExtraOptions(udpextraoptions, (err: BusinessError) => {
    if (err) {
      console.error('setExtraOptions fail');
      return;
    }
    console.info('setExtraOptions success');
  })
})

```

## setExtraOptions

```TypeScript
setExtraOptions(options: UDPExtraOptions): Promise<void>
```

Sets other attributes of the UDPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-UDPSocket-setExtraOptions(options: UDPExtraOptions): Promise<void>--><!--Device-UDPSocket-setExtraOptions(options: UDPExtraOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [UDPExtraOptions](arkts-network-socket-udpextraoptions-i.md) | Yes | Optional parameters {@link UDPExtraOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let udp: socket.UDPSocket = socket.constructUDPSocketInstance();

let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
udp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
  let udpextraoptions: socket.UDPExtraOptions = {
    receiveBufferSize: 8192,
    sendBufferSize: 8192,
    reuseAddress: false,
    socketTimeout: 6000,
    broadcast: true
  }
  udp.setExtraOptions(udpextraoptions).then(() => {
    console.info('setExtraOptions success');
  }).catch((err: BusinessError) => {
    console.error('setExtraOptions fail');
  });
})

```

