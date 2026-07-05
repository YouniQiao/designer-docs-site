# WebSocketRequestOptions

Defines the optional parameters carried in the request for establishing a WebSocket connection.

**Since:** 11

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { webSocket } from '@kit.NetworkKit';
```

## pingInterval

```TypeScript
pingInterval?: int
```

Self defined interval of ping frame. default: 30. disable: 0. max: 30000. unit:second. Ping is performed at every pingInterval.

**Type:** int

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## proxy

```TypeScript
proxy?: ProxyConfiguration
```

HTTP proxy configuration. Use 'system' if this field is not set.

**Type:** ProxyConfiguration

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## clientCert

```TypeScript
clientCert?: ClientCert
```

Client cert.

**Type:** ClientCert

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## protocol

```TypeScript
protocol?: string
```

Self defined protocol.

**Type:** string

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## minSupportTlsProtocol

```TypeScript
minSupportTlsProtocol?: TlsProtocol
```

The minimum support version of TLS protocol.

**Type:** TlsProtocol

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

## pongTimeout

```TypeScript
pongTimeout?: int
```

Self defined timeout of pong frame. default: 30. max: 30000. unit:second. The value must be less than or equal to pingInterval. If no pong is received within the pongTimeout period, the websocket connection will be disconnected.

**Type:** int

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## header

```TypeScript
header?: Object
```

HTTP request header.

**Type:** Object

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Communication.NetStack

```TypeScript
header?: Record<string, string>
```

HTTP request header.

**Type:** Record<string, string>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

## skipServerCertVerification

```TypeScript
skipServerCertVerification?: boolean
```

Whether or not to skip the verification of the server's certification.

**Type:** boolean

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## supportOriginPort

```TypeScript
supportOriginPort?: boolean
```

The option of supporting origin port.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetStack

## caPath

```TypeScript
caPath?: string
```

File path for client cert.

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

