# getRemoteAbilityInfo (System API)

## Modules to Import

```TypeScript
import { distributedBundle } from '@kit.AbilityKit';
```

<a id="getremoteabilityinfo"></a>
## getRemoteAbilityInfo

```TypeScript
function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void
```

Obtains the information about the remote ability that matches the given element name. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-distributedBundle-function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void--><!--Device-distributedBundle-function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | [ElementName](arkts-ability-bundlemanager-elementname-t.md) | Yes | **ElementName**. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;RemoteAbilityInfo&gt; | Yes | Callback used to return the remote ability information. |


<a id="getremoteabilityinfo-1"></a>
## getRemoteAbilityInfo

```TypeScript
function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>
```

Obtains the information about the remote ability that matches the given element name. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-distributedBundle-function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>--><!--Device-distributedBundle-function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>-End-->

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | [ElementName](arkts-ability-bundlemanager-elementname-t.md) | Yes | **ElementName**. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RemoteAbilityInfo&gt; | Promise used to return the remote ability information. |

