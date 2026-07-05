# @ohos.net.mdns

Provides interfaces to discover DNS based services on a local network over Multicast DNS.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## 导入模块

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [addLocalService](arkts-mdns-addlocalservice-f.md#addLocalService-1) | Adds an mDNS service. |
| [addLocalService](arkts-mdns-addlocalservice-f.md#addLocalService-2) | Adds an mDNS service. |
| [createDiscoveryService](arkts-mdns-creatediscoveryservice-f.md#createDiscoveryService-1) | Create an mDNS based discovery service with context and serviceType. |
| [removeLocalService](arkts-mdns-removelocalservice-f.md#removeLocalService-1) | Removes an mDNS service. |
| [removeLocalService](arkts-mdns-removelocalservice-f.md#removeLocalService-2) | Removes an mDNS service. |
| [resolveLocalService](arkts-mdns-resolvelocalservice-f.md#resolveLocalService-1) | Resolves an mDNS service. |
| [resolveLocalService](arkts-mdns-resolvelocalservice-f.md#resolveLocalService-2) | Resolves an mDNS service. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [DiscoveryEventInfo](arkts-mdns-discoveryeventinfo-i.md) | Defines the discovery events information of mDNS services. |
| [DiscoveryService](arkts-mdns-discoveryservice-i.md) | Defines a DiscoveryService object for discovering mDNS services of the specified type. |
| [LocalServiceInfo](arkts-mdns-localserviceinfo-i.md) | Defines the mDNS service information. |
| [ServiceAttribute](arkts-mdns-serviceattribute-i.md) | Defines the mDNS service attribute information. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [NetAddress](arkts-mdns-netaddress-t.md) | Get a network address. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [MdnsError](arkts-mdns-mdnserror-e.md) | Defines the mDNS error information. |

