# getAllApplicationInfo

## Modules to Import

```TypeScript
import { bundle } from '@kit.AbilityKit';
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

<!--Device-bundle-function getAllApplicationInfo(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void--><!--Device-bundle-function getAllApplicationInfo(bundleFlags: number,
    userId: number, callback: AsyncCallback<Array<ApplicationInfo>>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the application information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| userId | number | Yes | User ID. The default value is the user ID of the caller. The value must be greater than or equal to 0. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<ApplicationInfo>> | Yes | Callback used to return the application information. |


## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void
```

Obtains the information about all applications of the current user. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-bundle-function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void--><!--Device-bundle-function getAllApplicationInfo(bundleFlags: number, callback: AsyncCallback<Array<ApplicationInfo>>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the application information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<ApplicationInfo>> | Yes | Callback used to return the application information. |


## getAllApplicationInfo

```TypeScript
function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>
```

Obtains the information about all applications of the specified user. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

<!--Device-bundle-function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>--><!--Device-bundle-function getAllApplicationInfo(bundleFlags: number, userId?: number): Promise<Array<ApplicationInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of information that will be returned. For details about the available enumerated values, see the application information flags in [BundleFlag](arkts-ability-bundle-bundleflag-e.md). |
| userId | number | No | User ID. The default value is the user ID of the caller. The value must be greater than or equal to 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<ApplicationInfo>> | Promise used to return the application information. |

