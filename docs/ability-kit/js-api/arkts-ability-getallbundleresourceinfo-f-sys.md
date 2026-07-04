# getAllBundleResourceInfo (System API)

## Modules to Import

```TypeScript
import { bundleResourceManager } from '@ohos.bundle.bundleResourceManager';
```

## getAllBundleResourceInfo

```TypeScript
function getAllBundleResourceInfo(resourceFlags: number, callback: AsyncCallback<Array<BundleResourceInfo>>): void
```

Obtains the bundle resource information of all applications based on the given resource flags. This API uses an asynchronous callback to return the result.

**Since:** 11

**Required permissions:** ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | number | Yes | Type of the resource information to obtain. |
| callback | AsyncCallback&lt;Array&lt;BundleResourceInfo&gt;&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback) used toreturn the result. If the information is successfully obtained, **err** is **null** and **data** is aBundleResourceInfo array. Otherwise, **err** is an error object. |

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

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | number | Yes | Type of the resource information to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleResourceInfo&gt;&gt; | Promise used to return the BundleResourceInfo array. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

