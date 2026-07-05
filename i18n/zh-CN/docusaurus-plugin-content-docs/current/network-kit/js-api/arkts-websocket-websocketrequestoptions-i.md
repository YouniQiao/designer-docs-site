# WebSocketRequestOptions

Defines the optional parameters carried in the request for establishing a WebSocket connection.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## pingInterval

```TypeScript
pingInterval?: int
```

Self defined interval of ping frame. default: 30. disable: 0. max: 30000. unit:second. Ping is performed at every pingInterval.

**类型：** int

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## proxy

```TypeScript
proxy?: ProxyConfiguration
```

HTTP proxy configuration. Use 'system' if this field is not set.

**类型：** ProxyConfiguration

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## clientCert

```TypeScript
clientCert?: ClientCert
```

Client cert.

**类型：** ClientCert

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

## protocol

```TypeScript
protocol?: string
```

Self defined protocol.

**类型：** string

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## minSupportTlsProtocol

```TypeScript
minSupportTlsProtocol?: TlsProtocol
```

The minimum support version of TLS protocol.

**类型：** TlsProtocol

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## pongTimeout

```TypeScript
pongTimeout?: int
```

Self defined timeout of pong frame. default: 30. max: 30000. unit:second. The value must be less than or equal to pingInterval. If no pong is received within the pongTimeout period, the websocket connection will be disconnected.

**类型：** int

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## header

```TypeScript
header?: Object
```

HTTP request header.

**类型：** Object

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetStack

```TypeScript
header?: Record<string, string>
```

HTTP request header.

**类型：** Record<string, string>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## skipServerCertVerification

```TypeScript
skipServerCertVerification?: boolean
```

Whether or not to skip the verification of the server's certification.

**类型：** boolean

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## supportOriginPort

```TypeScript
supportOriginPort?: boolean
```

The option of supporting origin port.

**类型：** boolean

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetStack

## caPath

```TypeScript
caPath?: string
```

File path for client cert.

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

