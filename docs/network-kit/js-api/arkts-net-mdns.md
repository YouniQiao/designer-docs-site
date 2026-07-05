# @ohos.net.mdns

Provides interfaces to discover DNS based services on a local network over Multicast DNS.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.MDNS

## Modules to Import

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addLocalService](arkts-mdns-addlocalservice-f.md#addLocalService-1) | Adds an mDNS service. |
| [addLocalService](arkts-mdns-addlocalservice-f.md#addLocalService-2) | Adds an mDNS service. |
| [createDiscoveryService](arkts-mdns-creatediscoveryservice-f.md#createDiscoveryService-1) | Create an mDNS based discovery service with context and serviceType. |
| [removeLocalService](arkts-mdns-removelocalservice-f.md#removeLocalService-1) | Removes an mDNS service. |
| [removeLocalService](arkts-mdns-removelocalservice-f.md#removeLocalService-2) | Removes an mDNS service. |
| [resolveLocalService](arkts-mdns-resolvelocalservice-f.md#resolveLocalService-1) | Resolves an mDNS service. |
| [resolveLocalService](arkts-mdns-resolvelocalservice-f.md#resolveLocalService-2) | Resolves an mDNS service. |

### Interfaces

| Name | Description |
| --- | --- |
| [DiscoveryEventInfo](arkts-mdns-discoveryeventinfo-i.md) | Defines the discovery events information of mDNS services. |
| [DiscoveryService](arkts-mdns-discoveryservice-i.md) | Defines a DiscoveryService object for discovering mDNS services of the specified type. |
| [LocalServiceInfo](arkts-mdns-localserviceinfo-i.md) | Defines the mDNS service information. |
| [ServiceAttribute](arkts-mdns-serviceattribute-i.md) | Defines the mDNS service attribute information. |

### Types

| Name | Description |
| --- | --- |
| [NetAddress](arkts-mdns-netaddress-t.md) | Get a network address. |

### Enums

| Name | Description |
| --- | --- |
| [MdnsError](arkts-mdns-mdnserror-e.md) | Defines the mDNS error information. |

