# setAppShareOptions

## setAppShareOptions

```TypeScript
function setAppShareOptions(intention: Intention, shareOptions: ShareOptions): void
```

Sets the [ShareOptions]unifiedDataChannel.ShareOptions for the application data. Currently, only the drag- and-drop data channel is supported.

**Since:** 12

**Required permissions:** 

- API version14 and later: ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intention | Intention | Yes | Type of the data channel. Currently, only the data channel of the DRAG type  is supported. |
| shareOptions | ShareOptions | Yes | Usage scope of the  [UnifiedData]unifiedDataChannel.UnifiedDataProperties. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application uses  system API. [since 12 - 13] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 20400001 | Settings already exist. To reconfigure, remove the existing sharing options. |
| 201 | Permission denied. Interface caller does not have permission "  ohos.permission.MANAGE_UDMF_APP_SHARE_OPTION". [since 14] |

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

