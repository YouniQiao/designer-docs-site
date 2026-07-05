# ConnectionExtraInfo

Information details of the HTTP request

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { http } from '@ohos.net.http';
```

## cipherSuite

```TypeScript
cipherSuite?: CipherSuite
```

The cipher suite used to fetch the resource.

**Type:** CipherSuite

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## isCacheHit

```TypeScript
isCacheHit: boolean
```

A Boolean value that indicates whether the http request hit cache.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## isProxyConnection

```TypeScript
isProxyConnection: boolean
```

A Boolean value that indicastes whether the task used a proxy connection to fetch the resource.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## isReusedConnection

```TypeScript
isReusedConnection: boolean
```

The HTTP request is a reused connection or not.

**Type:** boolean

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## localAddress

```TypeScript
localAddress: string
```

localAddress of the HTTP request.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## localPort

```TypeScript
localPort: number
```

localPort of the HTTP request. -1 for unknown.

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## networkProtocolName

```TypeScript
networkProtocolName: string
```

The network protocol used to fetch the resource.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## redirectCount

```TypeScript
redirectCount: number
```

The HTTP request redirect count.

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## remoteAddress

```TypeScript
remoteAddress: string
```

remoteAddress of the HTTP request.

**Type:** string

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## remotePort

```TypeScript
remotePort: number
```

remotePort of the HTTP request. -1 for unknown.

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

## tlsVersion

```TypeScript
tlsVersion?: TlsVersion
```

The tls version used to fetch the resource.

**Type:** TlsVersion

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetStack

