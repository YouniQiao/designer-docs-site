# @ohos.net.mdns

Provides interfaces to discover DNS based services on a local network over Multicast DNS.

**Since:** 11

**System capability:** SystemCapability.Communication.NetManager.MDNS

## Modules to Import

```TypeScript
import { mdns } from '@ohos.net.mdns';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addLocalService](arkts-network-addlocalservice-f.md#addlocalservice-1) | Adds an mDNS service. |
| [addLocalService](arkts-network-addlocalservice-f.md#addlocalservice-2) | Adds an mDNS service. |
| [createDiscoveryService](arkts-network-creatediscoveryservice-f.md#creatediscoveryservice-1) | Create an mDNS based discovery service with context and serviceType. |
| [removeLocalService](arkts-network-removelocalservice-f.md#removelocalservice-1) | Removes an mDNS service. |
| [removeLocalService](arkts-network-removelocalservice-f.md#removelocalservice-2) | Removes an mDNS service. |
| [resolveLocalService](arkts-network-resolvelocalservice-f.md#resolvelocalservice-1) | Resolves an mDNS service. |
| [resolveLocalService](arkts-network-resolvelocalservice-f.md#resolvelocalservice-2) | Resolves an mDNS service. |

### Interfaces

| Name | Description |
| --- | --- |
| [DiscoveryEventInfo](arkts-network-discoveryeventinfo-i.md) | Defines the discovery events information of mDNS services. |
| [DiscoveryService](arkts-network-discoveryservice-i.md) | Defines a DiscoveryService object for discovering mDNS services of the specified type. |
| [LocalServiceInfo](arkts-network-localserviceinfo-i.md) | Defines the mDNS service information. |
| [ServiceAttribute](arkts-network-serviceattribute-i.md) | Defines the mDNS service attribute information. |

### Enums

| Name | Description |
| --- | --- |
| [MdnsError](arkts-network-mdnserror-e.md) | Defines the mDNS error information. |

### Types

| Name | Description |
| --- | --- |
| [NetAddress](arkts-network-netaddress-t.md) | Get a network address. |

