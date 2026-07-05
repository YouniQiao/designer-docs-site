# reserveProfilesForFactoryRestore

## reserveProfilesForFactoryRestore

```TypeScript
function reserveProfilesForFactoryRestore(slotId: int): Promise<ResultCode>
```

Ensure that profiles will be retained on the next factory reset.

**Since:** 18

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode> | Returns the result code. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.reserveProfilesForFactoryRestore(1).then(() => {
    console.info(`reserveProfilesForFactoryRestore invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`reserveProfilesForFactoryRestore, ErrorState: err->${JSON.stringify(err)}`);
});

```

