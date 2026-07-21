# getBundleInstaller (System API)

## Modules to Import

```TypeScript
import { installer } from '@kit.AbilityKit';
```

<a id="getbundleinstaller"></a>
## getBundleInstaller

```TypeScript
function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void
```

Obtains a BundleInstaller object. This API uses an asynchronous callback to return the result.

**Since:** 9

<!--Device-installer-function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void--><!--Device-installer-function getBundleInstaller(callback: AsyncCallback<BundleInstaller>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInstaller&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md) used to return the result. If the operation is successful, **err** is **null** and **data** is the BundleInstaller object obtained; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |


<a id="getbundleinstaller-1"></a>
## getBundleInstaller

```TypeScript
function getBundleInstaller(): Promise<BundleInstaller>
```

Obtains a BundleInstaller object. This API uses a promise to return the result.

**Since:** 9

<!--Device-installer-function getBundleInstaller(): Promise<BundleInstaller>--><!--Device-installer-function getBundleInstaller(): Promise<BundleInstaller>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInstaller&gt; | BundleInstaller object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |

