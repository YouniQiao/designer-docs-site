# off (System API)

## Modules to Import

```TypeScript
import { BundleStatusCallback } from '@kit.AbilityKit';
```

<a id="off"></a>
## off('BundleStatusChange')

```TypeScript
function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void
```

Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> This API has been supported since API version 8 and deprecated since API version 9. You are advised to use  
> [off](@ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>))  
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

<!--Device-innerBundleManager-function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void--><!--Device-innerBundleManager-function off(type: 'BundleStatusChange', callback: AsyncCallback<string>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | Event type. Only **BundleStatusChange** is supported. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;string&gt; | Yes | Callback used to return a successful result or error information. |


<a id="off-1"></a>
## off

```TypeScript
function off(type: 'BundleStatusChange'): Promise<string>
```

Unregisters the callback that receives bundle status changes. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> This API has been supported since API version 8 and deprecated since API version 9. You are advised to use  
> [off](@ohos.bundle.bundleMonitor:bundleMonitor.off(type: BundleChangedEvent, callback?: Callback<BundleChangedInfo>))  
> instead.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** off

**Required permissions:** ohos.permission.LISTEN_BUNDLE_CHANGE

<!--Device-innerBundleManager-function off(type: 'BundleStatusChange'): Promise<string>--><!--Device-innerBundleManager-function off(type: 'BundleStatusChange'): Promise<string>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'BundleStatusChange' | Yes | Event type. Only **BundleStatusChange** is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return a successful result or error information. |

