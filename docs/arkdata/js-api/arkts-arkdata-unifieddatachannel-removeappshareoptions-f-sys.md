# removeAppShareOptions (System API)

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## removeAppShareOptions

```TypeScript
function removeAppShareOptions(intention: Intention): void
```

Removes the data control information set by [setAppShareOptions](arkts-arkdata-unifieddatachannel-setappshareoptions-f-sys.md#setappshareoptions-1).

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION

**Model restriction:** This API can be used only in the stage model.

<!--Device-unifiedDataChannel-function removeAppShareOptions(intention: Intention): void--><!--Device-unifiedDataChannel-function removeAppShareOptions(intention: Intention): void-End-->

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intention | [Intention](arkts-arkdata-unifieddatachannel-intention-e-sys.md) | Yes | Type of the data channel. Currently, only the data channel of the **DRAG** type is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, application which is not a system application uses system API.<br>**Applicable version:** 12 - 13 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION".<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try {
  unifiedDataChannel.removeAppShareOptions(unifiedDataChannel.Intention.DRAG);
  console.info(`[UDMF]removeAppShareOptions success.`);
} catch (e) {
  let error: BusinessError = e as BusinessError;
  console.error(`[UDMF]removeAppShareOptions throws an exception. code is ${error.code}, message is ${error.message}`);
}

```

