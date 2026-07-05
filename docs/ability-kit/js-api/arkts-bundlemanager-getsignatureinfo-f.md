# getSignatureInfo

## getSignatureInfo

```TypeScript
function getSignatureInfo(uid: int): SignatureInfo
```

根据给定的uid获取对应应用的[签名信息]bundleManager/BundleInfo:SignatureInfo。

**Since:** 18

**Required permissions:** 

 ohos.permission.GET_SIGNATURE_INFO

**System capability:** SystemCapability.BundleManager.BundleFramework.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uid | int | Yes | 表示应用程序的UID。 |

**Return value:**

| Type | Description |
| --- | --- |
| SignatureInfo | 返回SignatureInfo对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 17700021 | The uid is not found. |

**Example**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let uid = 20010005; // Replace uid with the UID of the corresponding application.
try {
  let data = bundleManager.getSignatureInfo(uid);
  hilog.info(0x0000, 'testTag', 'getSignatureInfo successfully. Data: %{public}s', JSON.stringify(data));
} catch (err) {
  let message = (err as BusinessError).message;
  hilog.error(0x0000, 'testTag', 'getSignatureInfo failed. Cause: %{public}s', message);
}

```

