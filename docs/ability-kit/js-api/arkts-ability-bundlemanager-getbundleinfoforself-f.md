# getBundleInfoForSelf

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
```

<a id="getbundleinfoforself"></a>
## getBundleInfoForSelf

```TypeScript
function getBundleInfoForSelf(bundleFlags: number): Promise<BundleInfo>
```

Obtains the bundle information of the current application based on the given bundle flags. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-bundleManager-function getBundleInfoForSelf(bundleFlags: int): Promise<BundleInfo>--><!--Device-bundleManager-function getBundleInfoForSelf(bundleFlags: int): Promise<BundleInfo>-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of the bundle information to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;BundleInfo&gt; | Promise used to return the bundle information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
// Obtain the bundle information, which contains the application information including a metadata array.
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags =
  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_METADATA;

try {
  bundleManager.getBundleInfoForSelf(bundleFlags).then((data) => {
    hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
}

```


<a id="getbundleinfoforself-1"></a>
## getBundleInfoForSelf

```TypeScript
function getBundleInfoForSelf(bundleFlags: number, callback: AsyncCallback<BundleInfo>): void
```

Obtains the bundle information of the current application based on the given bundle flags. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-bundleManager-function getBundleInfoForSelf(bundleFlags: int, callback: AsyncCallback<BundleInfo>): void--><!--Device-bundleManager-function getBundleInfoForSelf(bundleFlags: int, callback: AsyncCallback<BundleInfo>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFlags | number | Yes | Type of the bundle information to obtain. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;BundleInfo&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md) used to return the result. If the information is successfully obtained, **err** is **null** and **data** is the bundle information of the current application. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |

**Example**

```TypeScript
// Obtain the bundle information, which contains the ability information including permissions.
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundleFlags =
  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_HAP_MODULE | bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_ABILITY |
  bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_REQUESTED_PERMISSION;

try {
  bundleManager.getBundleInfoForSelf(bundleFlags, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getBundleInfoForSelf successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleInfoForSelf failed: %{public}s', message);
}

```

