# getBundleResourceInfo

## getBundleResourceInfo

```TypeScript
function getBundleResourceInfo(bundleName: string, resourceFlags?: int): BundleResourceInfo
```

以同步方法根据给定的bundleName和resourceFlags获取当前应用的BundleResourceInfo。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定查询应用的包名。 |
| resourceFlags | int | No | 指定返回的BundleResourceInfo所包含的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| BundleResourceInfo | 返回指定应用的BundleResourceInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |

## getBundleResourceInfo

```TypeScript
function getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): BundleResourceInfo
```

以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的BundleResourceInfo。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_BUNDLE_RESOURCES

**System capability:** SystemCapability.BundleManager.BundleFramework.Resource

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定查询应用的包名。 |
| resourceFlags | int | No |  |
| appIndex | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| BundleResourceInfo | 返回指定应用的BundleResourceInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 17700001 | The specified bundleName is not found. |
| 17700061 | AppIndex not in valid range or not found. |

