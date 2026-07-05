# ConnectionExtraInfo

Information details of the HTTP request

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { http } from '@kit.NetworkKit';
```

## redirectCount

```TypeScript
redirectCount: int
```

The HTTP request redirect count.

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## isReusedConnection

```TypeScript
isReusedConnection: boolean
```

The HTTP request is a reused connection or not.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## localPort

```TypeScript
localPort: int
```

localPort of the HTTP request. -1 for unknown.

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## localAddress

```TypeScript
localAddress: string
```

localAddress of the HTTP request.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## networkProtocolName

```TypeScript
networkProtocolName: string
```

The network protocol used to fetch the resource.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## tlsVersion

```TypeScript
tlsVersion?: TlsVersion
```

The tls version used to fetch the resource.

**类型：** TlsVersion

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## remotePort

```TypeScript
remotePort: int
```

remotePort of the HTTP request. -1 for unknown.

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## isProxyConnection

```TypeScript
isProxyConnection: boolean
```

A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## isCacheHit

```TypeScript
isCacheHit: boolean
```

A Boolean value that indicates whether the http request hit cache.

**类型：** boolean

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## cipherSuite

```TypeScript
cipherSuite?: CipherSuite
```

The cipher suite used to fetch the resource.

**类型：** CipherSuite

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## remoteAddress

```TypeScript
remoteAddress: string
```

remoteAddress of the HTTP request.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

