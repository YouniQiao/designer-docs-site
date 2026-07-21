# MulticastSocket

Defines a UDP MulticastSocket connection.

**Inheritance/Implementation:** MulticastSocket extends [UDPSocket](arkts-network-socket-udpsocket-i.md)

**Since:** 12

<!--Device-socket-export interface MulticastSocket extends UDPSocket--><!--Device-socket-export interface MulticastSocket extends UDPSocket-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

<a id="addmembership"></a>
## addMembership

```TypeScript
addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void
```

Add the socket to the multicast group.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

<!--Device-MulticastSocket-addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void--><!--Device-MulticastSocket-addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multicastAddress | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Multicast address information. {@link NetAddress}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of addMembership. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let addr: socket.NetAddress = {
  address: '239.255.0.1',
  port: 8080
}
multicast.addMembership(addr, (err: Object) => {
  if (err) {
    console.error('add membership fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('add membership success');
})

```

<a id="addmembership-1"></a>
## addMembership

```TypeScript
addMembership(multicastAddress: NetAddress): Promise<void>
```

Add the socket to the multicast group.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

<!--Device-MulticastSocket-addMembership(multicastAddress: NetAddress): Promise<void>--><!--Device-MulticastSocket-addMembership(multicastAddress: NetAddress): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multicastAddress | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Multicast address information. {@link NetAddress}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let addr: socket.NetAddress = {
  address: '239.255.0.1',
  port: 8080
}
multicast.addMembership(addr).then(() => {
  console.info('addMembership success');
}).catch((err: Object) => {
  console.error('addMembership fail');
});

```

<a id="dropmembership"></a>
## dropMembership

```TypeScript
dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void
```

Drop the socket from the multicast group.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

<!--Device-MulticastSocket-dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void--><!--Device-MulticastSocket-dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multicastAddress | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Multicast address information. {@link NetAddress}. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of dropMembership. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let addr: socket.NetAddress = {
  address: '239.255.0.1',
  port: 8080
}
multicast.dropMembership(addr, (err: Object) => {
  if (err) {
    console.error('drop membership fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('drop membership success');
})

```

<a id="dropmembership-1"></a>
## dropMembership

```TypeScript
dropMembership(multicastAddress: NetAddress): Promise<void>
```

Drop the socket from the multicast group.

**Since:** 12

**Required permissions:** ohos.permission.INTERNET

<!--Device-MulticastSocket-dropMembership(multicastAddress: NetAddress): Promise<void>--><!--Device-MulticastSocket-dropMembership(multicastAddress: NetAddress): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| multicastAddress | [NetAddress](arkts-network-connection-netaddress-i.md) | Yes | Multicast address information. {@link NetAddress}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let addr: socket.NetAddress = {
  address: '239.255.0.1',
  port: 8080
}
multicast.dropMembership(addr).then(() => {
  console.info('drop membership success');
}).catch((err: Object) => {
  console.error('drop membership fail');
});

```

<a id="getloopbackmode"></a>
## getLoopbackMode

```TypeScript
getLoopbackMode(callback: AsyncCallback<boolean>): void
```

Get the loopback mode of the socket.

**Since:** 12

<!--Device-MulticastSocket-getLoopbackMode(callback: AsyncCallback<boolean>): void--><!--Device-MulticastSocket-getLoopbackMode(callback: AsyncCallback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;boolean&gt; | Yes | The callback of getLoopbackMode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getLoopbackMode((err: Object, value: Boolean) => {
  if (err) {
    console.error('get loopback mode fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('get loopback mode success, value: ' + JSON.stringify(value));
})

```

<a id="getloopbackmode-1"></a>
## getLoopbackMode

```TypeScript
getLoopbackMode(): Promise<boolean>
```

Get the loopback mode of the socket.

**Since:** 12

<!--Device-MulticastSocket-getLoopbackMode(): Promise<boolean>--><!--Device-MulticastSocket-getLoopbackMode(): Promise<boolean>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getLoopbackMode().then((value: Boolean) => {
  console.info('loopback mode: ', JSON.stringify(value));
}).catch((err: Object) => {
  console.error('get loopback mode failed');
});

```

<a id="getmulticastttl"></a>
## getMulticastTTL

```TypeScript
getMulticastTTL(callback: AsyncCallback<number>): void
```

Get the TTL value of socket multicast packet.

**Since:** 12

<!--Device-MulticastSocket-getMulticastTTL(callback: AsyncCallback<number>): void--><!--Device-MulticastSocket-getMulticastTTL(callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;number&gt; | Yes | The callback of getMulticastTTL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getMulticastTTL((err: Object, value: Number) => {
  if (err) {
    console.error('set ttl fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('set ttl success, value: ' + JSON.stringify(value));
})

```

<a id="getmulticastttl-1"></a>
## getMulticastTTL

```TypeScript
getMulticastTTL(): Promise<number>
```

Get the TTL value of socket multicast packet.

**Since:** 12

<!--Device-MulticastSocket-getMulticastTTL(): Promise<number>--><!--Device-MulticastSocket-getMulticastTTL(): Promise<number>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getMulticastTTL().then((value: Number) => {
  console.info('ttl: ', JSON.stringify(value));
}).catch((err: Object) => {
  console.error('set ttl failed');
});

```

<a id="getsocketfd"></a>
## getSocketFd

```TypeScript
getSocketFd(): Promise<number>
```

Obtains the file descriptor of the MulticastSocket.

**Since:** 24

**Required permissions:** ohos.permission.INTERNET

**Model restriction:** This API can be used only in the stage model.

<!--Device-MulticastSocket-getSocketFd(): Promise<int>--><!--Device-MulticastSocket-getSocketFd(): Promise<int>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | The promise returns the file descriptor of the Multicast socket. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let bindAddr: socket.NetAddress = {
    address: '192.168.xx.xxx',
    port: 8080
}
multicast.bind(bindAddr)
  .then(() => {
    console.info('bind success');
    multicast.getSocketFd().then((fd: number) => {
      console.info(`Socket FD: ${fd}`);
    }).catch((err: BusinessError) => {
      console.error(`getSocketFd fail: ${err.message}, errorCode: ${err.code}`);
    });
  }).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

<a id="setloopbackmode"></a>
## setLoopbackMode

```TypeScript
setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void
```

Set the loopback mode for the socket.

**Since:** 12

<!--Device-MulticastSocket-setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void--><!--Device-MulticastSocket-setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | boolean | Yes | Whether to enable loopback mode. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of setLoopbackMode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.setLoopbackMode(false, (err: Object) => {
  if (err) {
    console.error('set loopback mode fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('set loopback mode success');
})

```

<a id="setloopbackmode-1"></a>
## setLoopbackMode

```TypeScript
setLoopbackMode(flag: boolean): Promise<void>
```

Set the loopback mode for the socket.

**Since:** 12

<!--Device-MulticastSocket-setLoopbackMode(flag: boolean): Promise<void>--><!--Device-MulticastSocket-setLoopbackMode(flag: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | boolean | Yes | Whether to enable loopback mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.setLoopbackMode(false).then(() => {
  console.info('set loopback mode success');
}).catch((err: Object) => {
  console.error('set loopback mode failed');
});

```

<a id="setmulticastttl"></a>
## setMulticastTTL

```TypeScript
setMulticastTTL(ttl: number, callback: AsyncCallback<void>): void
```

Set the TTL value for socket multicast packets.

**Since:** 12

<!--Device-MulticastSocket-setMulticastTTL(ttl: number, callback: AsyncCallback<void>): void--><!--Device-MulticastSocket-setMulticastTTL(ttl: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ttl | number | Yes | The TTL value to set. Valid range is typically 0 to 255. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | The callback of setMulticastTTL. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let ttl = 8
multicast.setMulticastTTL(ttl, (err: Object) => {
  if (err) {
    console.error('set ttl fail, err: ' + JSON.stringify(err));
    return;
  }
  console.info('set ttl success');
})

```

<a id="setmulticastttl-1"></a>
## setMulticastTTL

```TypeScript
setMulticastTTL(ttl: number): Promise<void>
```

Set the TTL value for socket multicast packet.

**Since:** 12

<!--Device-MulticastSocket-setMulticastTTL(ttl: number): Promise<void>--><!--Device-MulticastSocket-setMulticastTTL(ttl: number): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ttl | number | Yes | The TTL value to set. Valid range is typically 0 to 255. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.setMulticastTTL(8).then(() => {
  console.info('set ttl success');
}).catch((err: Object) => {
  console.error('set ttl failed');
});

```

<a id="setreuseaddress"></a>
## setReuseAddress

```TypeScript
setReuseAddress(reuse: boolean): void
```

Sets whether the multicast socket supports address reuse.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-MulticastSocket-setReuseAddress(reuse: boolean): void--><!--Device-MulticastSocket-setReuseAddress(reuse: boolean): void-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reuse | boolean | Yes | whether the multicast socket supports address reuse. |

**Example**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let bindAddr: socket.NetAddress = {
  // 0.0.0.0 indicates that port 8080 on all IPv4 network APIs of the local host is bound. This is commonly used to receive data from this port in multicast scenarios.
  address: '0.0.0.0',
  port: 8080
}

try {
  multicast.setReuseAddress(true);
  multicast.bind(bindAddr).then(() => {
    console.info('setReuseAddress success');
  }).catch((err: BusinessError) => {
    console.error(`bind failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`setReuseAddress failed, code is ${error.code}, message is ${error.message}`);
}

```

