# TCPConnectOptions

Defines TCPSocket connection parameters.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@ohos.net.socket';
```

## address

```TypeScript
address: NetAddress
```

Bound IP address and port number.

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

## timeout

```TypeScript
timeout?: number
```

Timeout duration of the TCPSocket connection, in milliseconds.

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

