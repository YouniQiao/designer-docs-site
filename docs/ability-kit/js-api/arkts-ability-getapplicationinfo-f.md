# getApplicationInfo

## Modules to Import

```TypeScript
import { bundle } from '@ohos.bundle';
```

## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string,
    bundleFlags: number, userId: number, callback: AsyncCallback<ApplicationInfo>): void
```

Obtains the application information of the specified user based on a given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| userId | number | Yes | User ID. The value must be greater than or equal to 0. |
| callback | AsyncCallback&lt;ApplicationInfo&gt; | Yes | Callback used to return the application information. |


## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string, bundleFlags: number, callback: AsyncCallback<ApplicationInfo>): void
```

Obtains the application information based on a given bundle name. This API uses an asynchronous callback to return the result. No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| callback | AsyncCallback&lt;ApplicationInfo&gt; | Yes | Callback used to return the application information. |


## getApplicationInfo

```TypeScript
function getApplicationInfo(bundleName: string, bundleFlags: number, userId?: number): Promise<ApplicationInfo>
```

Obtains the application information based on a given bundle name. This API uses a promise to return the result. No permission is required for obtaining the caller's own information.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the availableenumerated values, see the application information flags in [BundleFlag](arkts-ability-bundleflag-e.md#bundleflag). |
| userId | number | No | User ID. The default value is the user ID of the caller. The value must be greater thanor equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ApplicationInfo&gt; | Promise used to return the application information. |

