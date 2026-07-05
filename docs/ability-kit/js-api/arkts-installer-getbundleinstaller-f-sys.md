# getBundleInstaller

## getBundleInstaller

```TypeScript
function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void
```

获取BundleInstaller对象。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;BundleInstaller> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)，获取BundleInstaller对象，err  为undefined，data为获取到的BundleInstaller对象；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |

## getBundleInstaller

```TypeScript
function getBundleInstaller(): Promise<BundleInstaller>
```

获取BundleInstaller对象。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInstaller> | BundleInstaller object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

