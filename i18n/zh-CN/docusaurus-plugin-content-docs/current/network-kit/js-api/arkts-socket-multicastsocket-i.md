# MulticastSocket

Defines a UDP MulticastSocket connection.

**继承实现关系：** MulticastSocket继承自：UDPSocket。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## addMembership

```TypeScript
addMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void
```

Add the socket to the multicast group.

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| multicastAddress | NetAddress | 是 | Multicast address information. {@link NetAddress}. |
| callback | AsyncCallback&lt;void> | 是 | The callback of addMembership. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**示例：**

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

## addMembership

```TypeScript
addMembership(multicastAddress: NetAddress): Promise<void>
```

Add the socket to the multicast group.

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| multicastAddress | NetAddress | 是 | Multicast address information. {@link NetAddress}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**示例：**

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

## dropMembership

```TypeScript
dropMembership(multicastAddress: NetAddress, callback: AsyncCallback<void>): void
```

Drop the socket from the multicast group.

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| multicastAddress | NetAddress | 是 | Multicast address information. {@link NetAddress}. |
| callback | AsyncCallback&lt;void> | 是 | The callback of dropMembership. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**示例：**

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

## dropMembership

```TypeScript
dropMembership(multicastAddress: NetAddress): Promise<void>
```

Drop the socket from the multicast group.

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERNET

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| multicastAddress | NetAddress | 是 | Multicast address information. {@link NetAddress}. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. |
| 2301088 | Not a socket. |
| 2301098 | Address in use. |

**示例：**

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

## getLoopbackMode

```TypeScript
getLoopbackMode(callback: AsyncCallback<boolean>): void
```

Get the loopback mode of the socket.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | The callback of getLoopbackMode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

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

## getLoopbackMode

```TypeScript
getLoopbackMode(): Promise<boolean>
```

Get the loopback mode of the socket.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getLoopbackMode().then((value: Boolean) => {
  console.info('loopback mode: ', JSON.stringify(value));
}).catch((err: Object) => {
  console.error('get loopback mode failed');
});

```

## getMulticastTTL

```TypeScript
getMulticastTTL(callback: AsyncCallback<number>): void
```

Get the TTL value of socket multicast packet.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;number> | 是 | The callback of getMulticastTTL. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

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

## getMulticastTTL

```TypeScript
getMulticastTTL(): Promise<number>
```

Get the TTL value of socket multicast packet.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.getMulticastTTL().then((value: Number) => {
  console.info('ttl: ', JSON.stringify(value));
}).catch((err: Object) => {
  console.error('set ttl failed');
});

```

## getSocketFd

```TypeScript
getSocketFd(): Promise<int>
```

Obtains the file descriptor of the MulticastSocket.

**起始版本：** 24

**需要权限：** 

 ohos.permission.INTERNET

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | The promise returns the file descriptor of the Multicast socket. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

**示例：**

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
      console.info(`Socket FD：${fd}`);
    }).catch((err: BusinessError) => {
      console.error(`getSocketFd fail: ${err.message}, errorCode: ${err.code}`);
    });
  }).catch((err: BusinessError) => {
  console.error('bind fail');
});

```

## setLoopbackMode

```TypeScript
setLoopbackMode(flag: boolean, callback: AsyncCallback<void>): void
```

Set the loopback mode for the socket.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flag | boolean | 是 | Whether to enable loopback mode. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setLoopbackMode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

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

## setLoopbackMode

```TypeScript
setLoopbackMode(flag: boolean): Promise<void>
```

Set the loopback mode for the socket.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flag | boolean | 是 | Whether to enable loopback mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301088 | Not a socket. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.setLoopbackMode(false).then(() => {
  console.info('set loopback mode success');
}).catch((err: Object) => {
  console.error('set loopback mode failed');
});

```

## setMulticastTTL

```TypeScript
setMulticastTTL(ttl: number, callback: AsyncCallback<void>): void
```

Set the TTL value for socket multicast packets.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ttl | number | 是 | The TTL value to set. Valid range is typically 0 to 255. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setMulticastTTL. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |

**示例：**

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

## setMulticastTTL

```TypeScript
setMulticastTTL(ttl: number): Promise<void>
```

Set the TTL value for socket multicast packet.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ttl | number | 是 | The TTL value to set. Valid range is typically 0 to 255. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. |
| 2301022 | Invalid argument. |
| 2301088 | Not a socket. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
multicast.setMulticastTTL(8).then(() => {
  console.info('set ttl success');
}).catch((err: Object) => {
  console.error('set ttl failed');
});

```

## setReuseAddress

```TypeScript
setReuseAddress(reuse: boolean): void
```

Sets whether the multicast socket supports address reuse.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reuse | boolean | 是 | whether the multicast socket supports address reuse. |

**示例：**

```TypeScript
import { socket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let multicast: socket.MulticastSocket = socket.constructMulticastSocketInstance();
let bindAddr: socket.NetAddress = {
  // 0.0.0.0 表示绑定本机所有IPv4网络接口上的 8080 端口，常用于多播场景接收该端口的数据。
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

