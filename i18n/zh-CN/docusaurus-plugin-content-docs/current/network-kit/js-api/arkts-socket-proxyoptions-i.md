# ProxyOptions

Define parameters for the proxy connection.

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## password

```TypeScript
password?: string
```

Specify password, if the proxy server supports user-password authentication.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## address

```TypeScript
address: NetAddress
```

Proxy server address.

**类型：** NetAddress

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## type

```TypeScript
type: ProxyTypes
```

Proxy types.

**类型：** ProxyTypes

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

## username

```TypeScript
username?: string
```

Specify username, if the proxy server supports user-password authentication.

**类型：** string

**起始版本：** 18

**系统能力：** SystemCapability.Communication.NetStack

