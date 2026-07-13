# setAppShareOptions (System API)

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## setAppShareOptions

```TypeScript
function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void
```

Sets the [ShareOptions](arkts-arkdata-shareoptions-e.md) for the application data. Currently, only the drag-
and-drop data channel is supported.

**Since:** 14

**Required permissions:** 
- API version 14+: ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intention | Intention | Yes | Type of the data channel. Currently, only the data channel of the **DRAG** typeis supported. |
| shareOptions | ShareOptions | Yes | Usage scope of the[UnifiedData](arkts-arkdata-unifieddataproperties-c.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed, application which is not a system application usessystem API.<br>**Applicable version:** 12 - 13 |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types;3. Parameter verification failed. |
| [20400001](../errorcode-udmf.md#20400001-settings-already-exist) | Settings already exist. To reconfigure, remove the existing sharing options. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION".<br>**Applicable version:** 14 and later |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  unifiedDataChannel.setAppShareOptions(unifiedDataChannel.Intention.DRAG, unifiedDataChannel.ShareOptions.IN_APP);
  console.info(`[UDMF]setAppShareOptions success. `);
}catch (e){
  let error: BusinessError = e as BusinessError;
  console.error(`[UDMF]setAppShareOptions throws an exception. code is ${error.code}, message is ${error.message} `);
}

```

