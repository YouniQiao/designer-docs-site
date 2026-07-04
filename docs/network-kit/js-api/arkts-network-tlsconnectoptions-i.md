# TLSConnectOptions

Defines TLS connection options.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## ALPNProtocols

```TypeScript
ALPNProtocols?: Array<string>
```

Application layer protocol negotiation extension, such as "spdy/1", "http/1.1", "h2"

**Type:** Array<string>

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## address

```TypeScript
address: NetAddress
```

Gateway address.

**Type:** NetAddress

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## proxy

```TypeScript
proxy?: ProxyOptions
```

Set this option for the proxy feature.

**Type:** ProxyOptions

**Since:** 18

**System capability:** SystemCapability.Communication.NetStack

## secureOptions

```TypeScript
secureOptions: TLSSecureOptions
```

Protocol http2TLS security related operations.

**Type:** TLSSecureOptions

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## skipRemoteValidation

```TypeScript
skipRemoteValidation?: boolean
```

Skip identity verification for remote servers. The default value is false.

**Type:** boolean

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## timeout

```TypeScript
timeout?: number
```

Timeout duration of the TLSSocket connection, in milliseconds.

**Type:** number

**Since:** 22

**System capability:** SystemCapability.Communication.NetStack

