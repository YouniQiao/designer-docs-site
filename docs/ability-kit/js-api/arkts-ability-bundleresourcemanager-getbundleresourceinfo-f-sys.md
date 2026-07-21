# getBundleResourceInfo (System API)

## Modules to Import

```TypeScript
import { bundleResourceManager } from '@kit.AbilityKit';
```

<a id="getbundleresourceinfo"></a>
## getBundleResourceInfo

```TypeScript
function getBundleResourceInfo(bundleName: string, resourceFlags?: number): BundleResourceInfo
```

Obtains the resource information of an application based on the given bundle name and resource flags. This API returns the result synchronously.

**Since:** 11

**Required permissions:** ohos.permission.GET_BUNDLE_RESOURCES

<!--Device-bundleResourceManager-function getBundleResourceInfo(bundleName: string, resourceFlags?: int): BundleResourceInfo--><!--Device-bundleResourceManager-function getBundleResourceInfo(bundleName: string, resourceFlags?: int): BundleResourceInfo-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| resourceFlags | number | No | Type of the resource information to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| [BundleResourceInfo](arkts-ability-bundleresourceinfo-i-sys.md) | Resource information of the application obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |


<a id="getbundleresourceinfo-1"></a>
## getBundleResourceInfo

```TypeScript
function getBundleResourceInfo(bundleName: string, resourceFlags?: number, appIndex?: number): BundleResourceInfo
```

Obtains the resource information of an application based on the given bundle name, resource flags, and app index.This API returns the result synchronously.

**Since:** 12

**Required permissions:** ohos.permission.GET_BUNDLE_RESOURCES

<!--Device-bundleResourceManager-function getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): BundleResourceInfo--><!--Device-bundleResourceManager-function getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): BundleResourceInfo-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. |
| resourceFlags | number | No | Type of the resource information to obtain. |
| appIndex | number | No | Index of the application clone. The default value is **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| [BundleResourceInfo](arkts-ability-bundleresourceinfo-i-sys.md) | Resource information of the application obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundleName is not found. |
| [17700061](../errorcode-bundle.md#17700061-appindex-for-a-clone-is-invalid) | AppIndex not in valid range or not found. |

