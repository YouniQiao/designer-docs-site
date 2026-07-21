# DiscoveryService

Defines a DiscoveryService object for discovering mDNS services of the specified type.

**Since:** 11

<!--Device-mdns-export interface DiscoveryService--><!--Device-mdns-export interface DiscoveryService-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

## Modules to Import

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

<a id="off"></a>
## off('discoveryStart')

```TypeScript
off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void
```

Cancels listening for discoveryStart events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void--><!--Device-DiscoveryService-off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoveryStart' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DiscoveryEventInfo&gt; | No | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

discoveryService.off('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

```

<a id="off-1"></a>
## off('discoveryStop')

```TypeScript
off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void
```

Cancels listening for discoveryStop events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void--><!--Device-DiscoveryService-off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoveryStop' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DiscoveryEventInfo&gt; | No | the callback used to return the result. |

<a id="off-2"></a>
## off('serviceFound')

```TypeScript
off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void
```

Cancels listening for serviceFound events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void--><!--Device-DiscoveryService-off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceFound' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;LocalServiceInfo&gt; | No | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info('serviceFound', JSON.stringify(data));
  mdns.resolveLocalService(context, data, (error: BusinessError, resolveData: mdns.LocalServiceInfo) =>  {
    console.info('serviceFound', JSON.stringify(resolveData));
  });
});

discoveryService.stopSearchingMDNS();

discoveryService.off('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

<a id="off-3"></a>
## off('serviceLost')

```TypeScript
off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void
```

Cancels listening for serviceLost events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void--><!--Device-DiscoveryService-off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceLost' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;LocalServiceInfo&gt; | No | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

discoveryService.off('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

<a id="on"></a>
## on('discoveryStart')

```TypeScript
on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void
```

Enables listening for discoveryStart events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void--><!--Device-DiscoveryService-on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoveryStart' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DiscoveryEventInfo&gt; | Yes | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

<a id="on-1"></a>
## on('discoveryStop')

```TypeScript
on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void
```

Enables listening for discoveryStop events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void--><!--Device-DiscoveryService-on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'discoveryStop' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DiscoveryEventInfo&gt; | Yes | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStop', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

<a id="on-2"></a>
## on('serviceFound')

```TypeScript
on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void
```

Enables listening for serviceFound events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void--><!--Device-DiscoveryService-on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceFound' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;LocalServiceInfo&gt; | Yes | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info('serviceFound', JSON.stringify(data));
  mdns.resolveLocalService(context, data, (error: BusinessError, resolveData: mdns.LocalServiceInfo) =>  {
    console.info('serviceFound', JSON.stringify(resolveData));
  });
});

discoveryService.stopSearchingMDNS();

```

<a id="on-3"></a>
## on('serviceLost')

```TypeScript
on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void
```

Enables listening for serviceLost events of mDNS services.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void--><!--Device-DiscoveryService-on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'serviceLost' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;LocalServiceInfo&gt; | Yes | the callback used to return the result. |

**Example**

In the sample code provided in this topic, this.context is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// See mdns.createDiscoveryService.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

<a id="startsearchingmdns"></a>
## startSearchingMDNS

```TypeScript
startSearchingMDNS(): void
```

Starts searching for mDNS services on the LAN.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-startSearchingMDNS(): void--><!--Device-DiscoveryService-startSearchingMDNS(): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Example**

Stage model:

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the application context.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

```

<a id="stopsearchingmdns"></a>
## stopSearchingMDNS

```TypeScript
stopSearchingMDNS(): void
```

Stops searching for mDNS services on the LAN.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-DiscoveryService-stopSearchingMDNS(): void--><!--Device-DiscoveryService-stopSearchingMDNS(): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Example**

Stage model:

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the application context.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.stopSearchingMDNS();

```

