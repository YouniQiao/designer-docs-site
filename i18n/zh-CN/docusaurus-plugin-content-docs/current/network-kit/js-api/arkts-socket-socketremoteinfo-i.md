# SocketRemoteInfo

Defines information about the socket connection.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## address

```TypeScript
address: string
```

Bound IP address.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## size

```TypeScript
size: number
```

Length of the server response message, in bytes.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## port

```TypeScript
port: number
```

Port number. The value ranges from 0 to 65535.

**类型：** number

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## family

```TypeScript
family: 'IPv4' | 'IPv6'
```

Network protocol type. The options are as follows: IPv4, IPv6.

**类型：** 'IPv4' | 'IPv6'

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

