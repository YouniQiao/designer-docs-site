# UDPSendOptions

Defines the parameters for sending data over the UDPSocket connection.

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

Destination address.

**类型：** NetAddress

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## data

```TypeScript
data: string | ArrayBuffer
```

Data to send.

**类型：** string | ArrayBuffer

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

