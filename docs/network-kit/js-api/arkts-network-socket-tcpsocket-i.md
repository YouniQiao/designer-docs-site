# TCPSocket

Defines a TCPSocket connection.

**Since:** 10

<!--Device-socket-export interface TCPSocket--><!--Device-socket-export interface TCPSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="bind"></a>
## bind

```TypeScript
bind(address: NetAddress, callback: AsyncCallback<void>): void
```

Binds the IP address and port number. The port number can be specified or randomly allocated by the system.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-bind(address: NetAddress, callback: AsyncCallback<void>): void--><!--Device-TCPSocket-bind(address: NetAddress, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Destination address. {@link NetAddress} |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of bind. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
tcp.bind(bindAddr, (err: BusinessError) => {
  if (err) {
    console.error('bind fail');
    return;
  }
  console.info('bind success');
})

```

<a id="bind-1"></a>
## bind

```TypeScript
bind(address: NetAddress): Promise<void>
```

Binds the IP address and port number. The port number can be specified or randomly allocated by the system.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-bind(address: NetAddress): Promise<void>--><!--Device-TCPSocket-bind(address: NetAddress): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Destination address. {@link NetAddress} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
tcp.bind(bindAddr).then(() => {
  console.info('bind success');
}).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

<a id="close"></a>
## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-close(callback: AsyncCallback<void>): void--><!--Device-TCPSocket-close(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

tcp.close((err: BusinessError) => {
  if (err) {
    console.error('close fail');
    return;
  }
  console.info('close success');
})

```

<a id="close-1"></a>
## close

```TypeScript
close(): Promise<void>
```

Closes a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-close(): Promise<void>--><!--Device-TCPSocket-close(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();

tcp.close().then(() => {
  console.info('close success');
}).catch((err: BusinessError) => {
  console.error('close fail');
});

```

<a id="connect"></a>
## connect

```TypeScript
connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void
```

Sets up a connection to the specified IP address and port number.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void--><!--Device-TCPSocket-connect(options: TCPConnectOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPConnectOptions](arkts-network-socket-tcpconnectoptions-i.md) | Yes | Optional parameters {@link TCPConnectOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of connect. |

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

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions, (err: BusinessError) => {
  if (err) {
    console.error('connect fail');
    return;
  }
  console.info('connect success');
})

```

Example (with socket proxy):

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
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
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000,
  proxy: proxyOptions,
}
tcp.connect(tcpconnectoptions, (err: BusinessError) => {
  if (err) {
    console.error('connect fail');
    return;
  }
  console.info('connect success');
})

```

<a id="connect-1"></a>
## connect

```TypeScript
connect(options: TCPConnectOptions): Promise<void>
```

Sets up a connection to the specified IP address and port number.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-connect(options: TCPConnectOptions): Promise<void>--><!--Device-TCPSocket-connect(options: TCPConnectOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPConnectOptions](arkts-network-socket-tcpconnectoptions-i.md) | Yes | Optional parameters {@link TCPConnectOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

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

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions).then(() => {
  console.info('connect success')
}).catch((err: BusinessError) => {
  console.error('connect fail');
});

```

Example (with socket proxy):

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
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
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000,
  proxy: proxyOptions,
}
tcp.connect(tcpconnectoptions).then(() => {
  console.info('connect success')
}).catch((err: BusinessError) => {
  console.error('connect fail');
});

```

<a id="getlocaladdress"></a>
## getLocalAddress

```TypeScript
getLocalAddress(): Promise<NetAddress>
```

Obtains the local address of a TCPSocket connection.

**Since:** 24

<!--Device-TCPSocket-getLocalAddress(): Promise<NetAddress>--><!--Device-TCPSocket-getLocalAddress(): Promise<NetAddress>-End-->

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

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  family: 1,
  port: 8080
}
tcp.bind(bindAddr).then(() => {
  tcp.getLocalAddress().then((localAddress: socket.NetAddress) => {
    console.info("SUCCESS! Address:" + JSON.stringify(localAddress));
  }).catch((err: BusinessError) => {
    console.error("FAILED! Error:" + JSON.stringify(err));
  })
}).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

<a id="getremoteaddress"></a>
## getRemoteAddress

```TypeScript
getRemoteAddress(callback: AsyncCallback<NetAddress>): void
```

Obtains the peer address of a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-getRemoteAddress(callback: AsyncCallback<NetAddress>): void--><!--Device-TCPSocket-getRemoteAddress(callback: AsyncCallback<NetAddress>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;NetAddress&gt; | Yes | the callback of getRemoteAddress. {@link NetAddress} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  tcp.getRemoteAddress((err: BusinessError, data: socket.NetAddress) => {
    if (err) {
      console.error('getRemoteAddressfail');
      return;
    }
    console.info('getRemoteAddresssuccess:' + JSON.stringify(data));
  })
});

```

<a id="getremoteaddress-1"></a>
## getRemoteAddress

```TypeScript
getRemoteAddress(): Promise<NetAddress>
```

Obtains the peer address of a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-getRemoteAddress(): Promise<NetAddress>--><!--Device-TCPSocket-getRemoteAddress(): Promise<NetAddress>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetAddress&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions).then(() => {
  console.info('connect success');
  tcp.getRemoteAddress().then(() => {
    console.info('getRemoteAddress success');
  }).catch((err: BusinessError) => {
    console.error('getRemoteAddressfail');
  });
}).catch((err: BusinessError) => {
  console.error('connect fail');
});

```

<a id="getsocketfd"></a>
## getSocketFd

```TypeScript
getSocketFd(callback: AsyncCallback<number>): void
```

Obtains the file descriptor of the TCPSocket connection.

**Since:** 24

<!--Device-TCPSocket-getSocketFd(callback: AsyncCallback<int>): void--><!--Device-TCPSocket-getSocketFd(callback: AsyncCallback<int>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | The callback returns the file descriptor of the TCPSocket connection. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let bindAddr: socket.NetAddress = {
  address: '192.168.xx.xxx',
  // Bind the specified network API.
}
tcp.bind(bindAddr)
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions)
tcp.getSocketFd((err: BusinessError, data: number) => {
  console.error("getSocketFd failed: " + err);
  console.info("socketFd: " + data);
})

```

<a id="getsocketfd-1"></a>
## getSocketFd

```TypeScript
getSocketFd(): Promise<number>
```

Obtains the file descriptor of the TCPSocket connection.

**Since:** 24

<!--Device-TCPSocket-getSocketFd(): Promise<int>--><!--Device-TCPSocket-getSocketFd(): Promise<int>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returns the file descriptor of the TCPSocket connection. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let bindAddr: socket.NetAddress = {
    address: '192.168.xx.xxx',
  // Bind the specified network API.
}
tcp.bind(bindAddr)
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions)
tcp.getSocketFd().then((data: number) => {
  console.info("socketFd: " + data);
})

```

<a id="getstate"></a>
## getState

```TypeScript
getState(callback: AsyncCallback<SocketStateBase>): void
```

Obtains the status of the TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-getState(callback: AsyncCallback<SocketStateBase>): void--><!--Device-TCPSocket-getState(callback: AsyncCallback<SocketStateBase>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;SocketStateBase&gt; | Yes | the callback of getState. {@link SocketStateBase} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  tcp.getState((err: BusinessError, data: socket.SocketStateBase) => {
    if (err) {
      console.error('getState fail');
      return;
    }
    console.info('getState success:' + JSON.stringify(data));
  });
});

```

<a id="getstate-1"></a>
## getState

```TypeScript
getState(): Promise<SocketStateBase>
```

Obtains the status of the TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-getState(): Promise<SocketStateBase>--><!--Device-TCPSocket-getState(): Promise<SocketStateBase>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SocketStateBase&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions).then(() => {
  console.info('connect success');
  tcp.getState().then(() => {
    console.info('getState success');
  }).catch((err: BusinessError) => {
    console.error('getState fail');
  });
}).catch((err: BusinessError) => {
  console.error('connect fail');
});

```

<a id="off"></a>
## off('message')

```TypeScript
off(type: 'message', callback?: Callback<SocketMessageInfo>): void
```

Cancels listening for message receiving events of the TCPSocket connection.

**Since:** 11

<!--Device-TCPSocket-off(type: 'message', callback?: Callback<SocketMessageInfo>): void--><!--Device-TCPSocket-off(type: 'message', callback?: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SocketMessageInfo&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
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
tcp.on('message', callback);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('message', callback);
tcp.off('message');

```

<a id="off-1"></a>
## off('connect' | 'close')

```TypeScript
off(type: 'connect' | 'close', callback?: Callback<void>): void
```

Cancels listening for connection or close events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-off(type: 'connect' | 'close', callback?: Callback<void>): void--><!--Device-TCPSocket-off(type: 'connect' | 'close', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let callback1 = () => {
  console.info("on connect success");
}
tcp.on('connect', callback1);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('connect', callback1);
tcp.off('connect');
let callback2 = () => {
  console.info("on close success");
}
tcp.on('close', callback2);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('close', callback2);
tcp.off('close');

```

<a id="off-2"></a>
## off('connect' | 'close')

```TypeScript
off(type: 'connect' | 'close', callback?: Callback<void>): void
```

Cancels listening for connection or close events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-off(type: 'connect' | 'close', callback?: Callback<void>): void--><!--Device-TCPSocket-off(type: 'connect' | 'close', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | No | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let callback1 = () => {
  console.info("on connect success");
}
tcp.on('connect', callback1);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('connect', callback1);
tcp.off('connect');
let callback2 = () => {
  console.info("on close success");
}
tcp.on('close', callback2);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('close', callback2);
tcp.off('close');

```

<a id="off-3"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Cancels listening for error events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-off(type: 'error', callback?: ErrorCallback): void--><!--Device-TCPSocket-off(type: 'error', callback?: ErrorCallback): void-End-->

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

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let callback = (err: BusinessError) => {
  console.error("on error, err:" + JSON.stringify(err));
}
tcp.on('error', callback);
// You can pass the callback of the on function if you want to cancel listening for a certain type of events. If you do not pass the callback, you will cancel listening for all events.
tcp.off('error', callback);
tcp.off('error');

```

<a id="on"></a>
## on('message')

```TypeScript
on(type: 'message', callback: Callback<SocketMessageInfo>): void
```

Listens for message receiving events of the TCPSocket connection.

**Since:** 11

<!--Device-TCPSocket-on(type: 'message', callback: Callback<SocketMessageInfo>): void--><!--Device-TCPSocket-on(type: 'message', callback: Callback<SocketMessageInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'message' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SocketMessageInfo&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
tcp.on('message', (value: socket.SocketMessageInfo) => {
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

<a id="on-1"></a>
## on('connect' | 'close')

```TypeScript
on(type: 'connect' | 'close', callback: Callback<void>): void
```

Listens for connection or close events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-on(type: 'connect' | 'close', callback: Callback<void>): void--><!--Device-TCPSocket-on(type: 'connect' | 'close', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
tcp.on('connect', () => {
  console.info("on connect success")
});
tcp.on('close', () => {
  console.info("on close success")
});

```

<a id="on-2"></a>
## on('connect' | 'close')

```TypeScript
on(type: 'connect' | 'close', callback: Callback<void>): void
```

Listens for connection or close events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-on(type: 'connect' | 'close', callback: Callback<void>): void--><!--Device-TCPSocket-on(type: 'connect' | 'close', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'connect' \| 'close' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;void&gt; | Yes | the callback used to return the result. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
tcp.on('connect', () => {
  console.info("on connect success")
});
tcp.on('close', () => {
  console.info("on close success")
});

```

<a id="on-3"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Listens for error events of the TCPSocket connection.

**Since:** 10

<!--Device-TCPSocket-on(type: 'error', callback: ErrorCallback): void--><!--Device-TCPSocket-on(type: 'error', callback: ErrorCallback): void-End-->

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

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
tcp.on('error', (err: BusinessError) => {
  console.error("on error, err:" + JSON.stringify(err))
});

```

<a id="send"></a>
## send

```TypeScript
send(options: TCPSendOptions, callback: AsyncCallback<void>): void
```

Sends data over a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-send(options: TCPSendOptions, callback: AsyncCallback<void>): void--><!--Device-TCPSocket-send(options: TCPSendOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPSendOptions](arkts-network-socket-tcpsendoptions-i.md) | Yes | Optional parameters {@link TCPSendOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of send. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  let tcpSendOptions: socket.TCPSendOptions = {
    data: 'Hello, server!'
  }
  tcp.send(tcpSendOptions, (err: BusinessError) => {
    if (err) {
      console.error('send fail');
      return;
    }
    console.info('send success');
  })
})

```

<a id="send-1"></a>
## send

```TypeScript
send(options: TCPSendOptions): Promise<void>
```

Sends data over a TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-send(options: TCPSendOptions): Promise<void>--><!--Device-TCPSocket-send(options: TCPSendOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPSendOptions](arkts-network-socket-tcpsendoptions-i.md) | Yes | Optional parameters {@link TCPSendOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}
tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  let tcpSendOptions: socket.TCPSendOptions = {
    data: 'Hello, server!'
  }
  tcp.send(tcpSendOptions).then(() => {
    console.info('send success');
  }).catch((err: BusinessError) => {
    console.error('send fail');
  });
})

```

<a id="setextraoptions"></a>
## setExtraOptions

```TypeScript
setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void
```

Sets other attributes of the TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void--><!--Device-TCPSocket-setExtraOptions(options: TCPExtraOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPExtraOptions](arkts-network-socket-tcpextraoptions-i.md) | Yes | Optional parameters {@link TCPExtraOptions}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | the callback of setExtraOptions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}

interface SocketLinger {
  on: boolean;
  linger: number;
}

tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  let tcpExtraOptions: socket.TCPExtraOptions = {
    keepAlive: true,
    OOBInline: true,
    TCPNoDelay: true,
    socketLinger: { on: true, linger: 10 } as SocketLinger,
    receiveBufferSize: 8192,
    sendBufferSize: 8192,
    reuseAddress: true,
    socketTimeout: 3000,
    tcpFastOpen: false
  }
  tcp.setExtraOptions(tcpExtraOptions, (err: BusinessError) => {
    if (err) {
      console.error('setExtraOptions fail');
      return;
    }
    console.info('setExtraOptions success');
  });
});

```

<a id="setextraoptions-1"></a>
## setExtraOptions

```TypeScript
setExtraOptions(options: TCPExtraOptions): Promise<void>
```

Sets other attributes of the TCPSocket connection.

**Since:** 10

**Required permissions:** ohos.permission.INTERNET

<!--Device-TCPSocket-setExtraOptions(options: TCPExtraOptions): Promise<void>--><!--Device-TCPSocket-setExtraOptions(options: TCPExtraOptions): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [TCPExtraOptions](arkts-network-socket-tcpextraoptions-i.md) | Yes | Optional parameters {@link TCPExtraOptions}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tcp: socket.TCPSocket = socket.constructTCPSocketInstance();
let netAddress: socket.NetAddress = {
  address: '192.168.xx.xxx',
  port: 8080
}
let tcpconnectoptions: socket.TCPConnectOptions = {
  address: netAddress,
  timeout: 6000
}

interface SocketLinger {
  on: boolean;
  linger: number;
}

tcp.connect(tcpconnectoptions, () => {
  console.info('connect success');
  let tcpExtraOptions: socket.TCPExtraOptions = {
    keepAlive: true,
    OOBInline: true,
    TCPNoDelay: true,
    socketLinger: { on: true, linger: 10 } as SocketLinger,
    receiveBufferSize: 8192,
    sendBufferSize: 8192,
    reuseAddress: true,
    socketTimeout: 3000,
    tcpFastOpen: false
  }
  tcp.setExtraOptions(tcpExtraOptions).then(() => {
    console.info('setExtraOptions success');
  }).catch((err: BusinessError) => {
    console.error('setExtraOptions fail');
  });
});

```

