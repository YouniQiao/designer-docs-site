# TCPConnectOptions

Defines TCPSocket connection parameters.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## proxy

```TypeScript
proxy?: ProxyOptions
```

Set this option for the proxy feature.

**类型：** ProxyOptions

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## address

```TypeScript
address: NetAddress
```

Bound IP address and port number.

**类型：** NetAddress

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## timeout

```TypeScript
timeout?: number
```

Timeout duration of the TCPSocket connection, in milliseconds.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

