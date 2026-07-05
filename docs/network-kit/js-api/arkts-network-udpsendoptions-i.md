# UDPSendOptions

Defines the parameters for sending data over the UDPSocket connection.

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

Destination address.

**Type:** NetAddress

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## data

```TypeScript
data: string | ArrayBuffer
```

Data to send.

**Type:** string | ArrayBuffer

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

