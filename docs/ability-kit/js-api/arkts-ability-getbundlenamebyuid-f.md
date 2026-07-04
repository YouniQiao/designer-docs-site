# getBundleNameByUid

## Modules to Import

```TypeScript
import { bundleManager } from '@ohos.bundle.bundleManager';
```

## getBundleNameByUid

```TypeScript
function getBundleNameByUid(uid: number, callback: AsyncCallback<string>): void
```

Obtains the bundle name based on the given UID. This API uses an asynchronous callback to return the result.

**Since:** 14

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | UID of the application. |
| callback | AsyncCallback&lt;string&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback) used to return the result.If the information is successfully obtained, **err** is **null** and **data** is the bundle name. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700021](../errorcode-bundle.md#17700021-invalid-uid) | The uid is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;
try {
  bundleManager.getBundleNameByUid(uid, (err, data) => {
    if (err) {
      hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed: %{public}s', err.message);
    } else {
      hilog.info(0x0000, 'testTag', 'getBundleNameByUid successfully: %{public}s', JSON.stringify(data));
    }
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed: %{public}s', message);
}

```


## getBundleNameByUid

```TypeScript
function getBundleNameByUid(uid: number): Promise<string>
```

Obtains the bundle name based on the given UID. This API uses a promise to return the result.

**Since:** 14

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED or ohos.permission.GET_BUNDLE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | number | Yes | UID of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the bundle name obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [17700021](../errorcode-bundle.md#17700021-invalid-uid) | The uid is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005;
try {
  bundleManager.getBundleNameByUid(uid).then((data) => {
    hilog.info(0x0000, 'testTag', 'getBundleNameByUid successfully. Data: %{public}s', JSON.stringify(data));
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed. Cause: %{public}s', err.message);
  });
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getBundleNameByUid failed. Cause: %{public}s', message);
}

```

