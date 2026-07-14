# getAllBundleInfo

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
```

## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, userId: number, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains the information of all bundles of the specified user. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Type of information that will be returned. For details about the availableenumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | Yes | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | Callback used to return the information of all bundles. |


## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, callback: AsyncCallback<Array<BundleInfo>>): void
```

Obtains the information of all bundles of the current user. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Type of information that will be returned. For details about the availableenumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| callback | AsyncCallback&lt;Array&lt;BundleInfo&gt;&gt; | Yes | Callback used to return the information of all bundles. |


## getAllBundleInfo

```TypeScript
function getAllBundleInfo(bundleFlag: BundleFlag, userId?: number): Promise<Array<BundleInfo>>
```

Obtains the information of all bundles of the specified user. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlag | BundleFlag | Yes | Type of information that will be returned. For details about the availableenumerated values, see the bundle information flags in [BundleFlag](arkts-ability-bundleflag-e.md). |
| userId | number | No | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleInfo&gt;&gt; | Promise used to return the information of all bundles. |

