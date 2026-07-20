# getAllBundleResourceInfo (System API)

## Modules to Import

```TypeScript
import { bundleResourceManager } from '@kit.AbilityKit';
```

## getAllBundleResourceInfo

```TypeScript
function getAllBundleResourceInfo(resourceFlags: number, callback: AsyncCallback<Array<BundleResourceInfo>>): void
```

Obtains the bundle resource information of all applications based on the given resource flags. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

<!--Device-bundleResourceManager-function getAllBundleResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<BundleResourceInfo>>): void--><!--Device-bundleResourceManager-function getAllBundleResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<BundleResourceInfo>>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | number | Yes | Type of the resource information to obtain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<Array<BundleResourceInfo>> | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md) used to return the result. If the information is successfully obtained, **err** is **null** and **data** is a BundleResourceInfo array. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |


## getAllBundleResourceInfo

```TypeScript
function getAllBundleResourceInfo(resourceFlags: number): Promise<Array<BundleResourceInfo>>
```

Obtains the bundle resource information of all applications based on the given resource flags. This API uses a promise to return the result.

**Since:** 11

**Required permissions:** ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

<!--Device-bundleResourceManager-function getAllBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>--><!--Device-bundleResourceManager-function getAllBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | number | Yes | Type of the resource information to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<BundleResourceInfo>> | Promise used to return the BundleResourceInfo array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

