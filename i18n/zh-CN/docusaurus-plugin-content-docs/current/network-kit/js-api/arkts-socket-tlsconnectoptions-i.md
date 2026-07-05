# TLSConnectOptions

Defines TLS connection options.

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

## ALPNProtocols

```TypeScript
ALPNProtocols?: Array<string>
```

Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"

**类型：** Array<string>

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## skipRemoteValidation

```TypeScript
skipRemoteValidation?: boolean
```

Skip identity verification for remote servers. The default value is false.

**类型：** boolean

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## address

```TypeScript
address: NetAddress
```

Gateway address.

**类型：** NetAddress

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## secureOptions

```TypeScript
secureOptions: TLSSecureOptions
```

Protocol http2TLS security related operations.

**类型：** TLSSecureOptions

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## timeout

```TypeScript
timeout?: int
```

Timeout duration of the TLSSocket connection, in milliseconds.

**类型：** int

**起始版本：** 22

**系统能力：** SystemCapability.Communication.NetStack

