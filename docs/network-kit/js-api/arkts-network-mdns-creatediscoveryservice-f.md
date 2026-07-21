# createDiscoveryService

## Modules to Import

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

<a id="creatediscoveryservice"></a>
## createDiscoveryService

```TypeScript
function createDiscoveryService(context: Context, serviceType: string): DiscoveryService
```

Create an mDNS based discovery service with context and serviceType.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-mdns-function createDiscoveryService(context: Context, serviceType: string): DiscoveryService--><!--Device-mdns-function createDiscoveryService(context: Context, serviceType: string): DiscoveryService-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| serviceType | string | Yes | The service type being discovered. |

**Return value:**

| Type | Description |
| --- | --- |
| [DiscoveryService](arkts-network-mdns-discoveryservice-i.md) | the DiscoveryService of the createDiscoveryService. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

Stage model:

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the application context.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;

let serviceType = "_print._tcp";
let discoveryService : Object = mdns.createDiscoveryService(context, serviceType);

```

