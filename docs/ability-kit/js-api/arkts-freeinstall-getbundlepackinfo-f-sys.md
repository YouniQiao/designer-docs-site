# getBundlePackInfo

## getBundlePackInfo

```TypeScript
function getBundlePackInfo(bundleName: string, 
    bundlePackFlag : BundlePackFlag, callback: AsyncCallback<BundlePackInfo>): void
```

基于bundleName和bundlePackFlag来获取bundlePackInfo。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| bundlePackFlag | BundlePackFlag | Yes | 指示要查询的应用包标志。 |
| callback | AsyncCallback&lt;BundlePackInfo> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当函数调用成功，err为undefined，  data为获取到的BundlePackInfo信息。否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |

## getBundlePackInfo

```TypeScript
function getBundlePackInfo(bundleName: string, bundlePackFlag : BundlePackFlag): Promise<BundlePackInfo>
```

基于bundleName和BundlePackFlag来获取bundlePackInfo。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用程序Bundle名称。 |
| bundlePackFlag | BundlePackFlag | Yes | 指示要查询的应用包标志。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundlePackInfo> | Promise对象，返回BundlePackInfo信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |

