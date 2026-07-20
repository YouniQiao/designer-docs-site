# LocalServiceInfo

Defines the mDNS service information.

**Since:** 11

<!--Device-mdns-export interface LocalServiceInfo--><!--Device-mdns-export interface LocalServiceInfo-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## Modules to Import

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## host

```TypeScript
host?: NetAddress
```

IP address of the host.

**Type:** NetAddress

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LocalServiceInfo-host?: NetAddress--><!--Device-LocalServiceInfo-host?: NetAddress-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## port

```TypeScript
port?: number
```

Port number.

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LocalServiceInfo-port?: number--><!--Device-LocalServiceInfo-port?: number-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceAttribute

```TypeScript
serviceAttribute?: Array<ServiceAttribute>
```

DNS-SD TXT record pairs.

**Type:** Array<ServiceAttribute>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LocalServiceInfo-serviceAttribute?: Array<ServiceAttribute>--><!--Device-LocalServiceInfo-serviceAttribute?: Array<ServiceAttribute>-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceName

```TypeScript
serviceName: string
```

Service name.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LocalServiceInfo-serviceName: string--><!--Device-LocalServiceInfo-serviceName: string-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceType

```TypeScript
serviceType: string
```

Service type. Use an underscore (_) as the prefix, for example, _http._tcp.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-LocalServiceInfo-serviceType: string--><!--Device-LocalServiceInfo-serviceType: string-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

