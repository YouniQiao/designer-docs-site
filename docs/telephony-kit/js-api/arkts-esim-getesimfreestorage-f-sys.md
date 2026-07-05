# getEsimFreeStorage

## getEsimFreeStorage

```TypeScript
function getEsimFreeStorage(): Promise<int>
```

Returns the remaining storage space in KB for the eUICC hardware.

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Returns the size of the remaining storage space in KB for the eUICC. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.getEsimFreeStorage().then((data) => {
    console.info(`getEsimFreeStorage invoking succeeded.freeStorage: ${data}`);
}).catch((err: BusinessError<void>) => {
    console.error(`getEsimFreeStorage , promise: err->${JSON.stringify(err)}`);
});

```

