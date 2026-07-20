# UDPSendOptions

Defines the parameters for sending data over the UDPSocket connection.

**Since:** 10

<!--Device-socket-export interface UDPSendOptions--><!--Device-socket-export interface UDPSendOptions-End-->

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## address

```TypeScript
address: NetAddress
```

Destination address.

**Type:** NetAddress

**Since:** 10

<!--Device-UDPSendOptions-address: NetAddress--><!--Device-UDPSendOptions-address: NetAddress-End-->

**System capability:** SystemCapability.Communication.NetStack

## data

```TypeScript
data: string | ArrayBuffer
```

Data to send.

**Type:** string | ArrayBuffer

**Since:** 10

<!--Device-UDPSendOptions-data: string | ArrayBuffer--><!--Device-UDPSendOptions-data: string | ArrayBuffer-End-->

**System capability:** SystemCapability.Communication.NetStack

## proxy

```TypeScript
proxy?: ProxyOptions
```

Set this option for the proxy feature.

**Type:** ProxyOptions

**Since:** 18

<!--Device-UDPSendOptions-proxy?: ProxyOptions--><!--Device-UDPSendOptions-proxy?: ProxyOptions-End-->

**System capability:** SystemCapability.Communication.NetStack

