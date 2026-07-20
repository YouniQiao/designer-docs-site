# SocketRemoteInfo

Defines information about the socket connection.

**Since:** 10

<!--Device-socket-export interface SocketRemoteInfo--><!--Device-socket-export interface SocketRemoteInfo-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## address

```TypeScript
address: string
```

Bound IP address.

**Type:** string

**Since:** 10

<!--Device-SocketRemoteInfo-address: string--><!--Device-SocketRemoteInfo-address: string-End-->

**System capability:** SystemCapability.Communication.NetStack

## family

```TypeScript
family: 'IPv4' | 'IPv6'
```

Network protocol type. The options are as follows: IPv4, IPv6.

**Type:** 'IPv4' | 'IPv6'

**Since:** 10

<!--Device-SocketRemoteInfo-family: 'IPv4' | 'IPv6'--><!--Device-SocketRemoteInfo-family: 'IPv4' | 'IPv6'-End-->

**System capability:** SystemCapability.Communication.NetStack

## port

```TypeScript
port: number
```

Port number. The value ranges from 0 to 65535.

**Type:** number

**Since:** 10

<!--Device-SocketRemoteInfo-port: number--><!--Device-SocketRemoteInfo-port: number-End-->

**System capability:** SystemCapability.Communication.NetStack

## size

```TypeScript
size: number
```

Length of the server response message, in bytes.

**Type:** number

**Since:** 10

<!--Device-SocketRemoteInfo-size: number--><!--Device-SocketRemoteInfo-size: number-End-->

**System capability:** SystemCapability.Communication.NetStack

