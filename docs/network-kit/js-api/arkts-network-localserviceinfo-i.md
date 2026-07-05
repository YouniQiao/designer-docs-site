# LocalServiceInfo

Defines the mDNS service information.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.MDNS

## Modules to Import

```TypeScript
import { mdns } from '@ohos.net.mdns';
```

## host

```TypeScript
host?: NetAddress
```

IP address of the host.

**Type:** NetAddress

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

## port

```TypeScript
port?: number
```

Port number.

**Type:** number

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceAttribute

```TypeScript
serviceAttribute?: Array<ServiceAttribute>
```

DNS-SD TXT record pairs.

**Type:** Array<ServiceAttribute>

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceName

```TypeScript
serviceName: string
```

Service name.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

## serviceType

```TypeScript
serviceType: string
```

Service type. Use an underscore (_) as the prefix, for example, _http._tcp.

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

