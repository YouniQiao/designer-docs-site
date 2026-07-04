# getAllApplicationInfo

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains the information about all applications. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| userId | number | Yes | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo&gt;&gt; | Yes | Callback used to return the application information. |


## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains the information about all applications of the current user. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| callback | AsyncCallback&lt;Array&lt;ApplicationInfo&gt;&gt; | Yes | Callback used to return the application information. |


## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>
```

Obtains the information about all applications of the specified user. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| userId | number | No | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;ApplicationInfo&gt;&gt; | Promise used to return the application information. |

