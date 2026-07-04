# getRemoteAbilityInfos (System API)

## Modules to Import

```TypeScript
import { distributedBundle } from '@ohos.distributedBundle';
```

## getRemoteAbilityInfos

```TypeScript
function getRemoteAbilityInfos(elementNames: Array<ElementName>,
    callback: AsyncCallback<Array<RemoteAbilityInfo>>): void
```

Obtains the information about remote abilities that match the given element names. This API uses an asynchronous callback to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementNames | Array&lt;ElementName&gt; | Yes | **ElementName** array, whose maximum length is 10. |
| callback | AsyncCallback&lt;Array&lt;RemoteAbilityInfo&gt;&gt; | Yes | Callback used to return an array of the remoteability information. |


## getRemoteAbilityInfos

```TypeScript
function getRemoteAbilityInfos(elementNames: Array<ElementName>): Promise<Array<RemoteAbilityInfo>>
```

Obtains the information about remote abilities that match the given element names. This API uses a promise to return the result.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [null]

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.DistributedBundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementNames | Array&lt;ElementName&gt; | Yes | **ElementName** array, whose maximum length is 10. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;RemoteAbilityInfo&gt;&gt; | Promise used to return an array of the remote ability information. |

