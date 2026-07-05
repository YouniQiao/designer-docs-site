# getAllBundleResourceInfo

## getAllBundleResourceInfo

```TypeScript
function getAllBundleResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<BundleResourceInfo>>): void
```

根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | int | Yes | 指定返回的BundleResourceInfo所包含的信息。 |
| callback | AsyncCallback&lt;Array&lt;BundleResourceInfo>> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，当获取成功时，err为  undefined，data为获取到的BundleResourceInfo数组；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

## getAllBundleResourceInfo

```TypeScript
function getAllBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>
```

根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceFlags | int | Yes | 指定返回的BundleResourceInfo所包含的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;BundleResourceInfo>> | Promise对象，返回BundleResourceInfo数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |

