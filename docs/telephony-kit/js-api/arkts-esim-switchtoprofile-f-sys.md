# switchToProfile

## switchToProfile

```TypeScript
function switchToProfile(slotId: int, portIndex: int, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>
```

Switch to (enable) the given profile on the eUICC.

**Since:** 18

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |
| portIndex | int | Yes | Index of the port for the slot. |
| iccid | string | Yes | The iccid of the profile to switch to. |
| forceDisableProfile | boolean | Yes | If true, the active profile must be disabled in order to perform the  operation. Otherwise, the resultCode should return {@link RESULT_MUST_DISABLE_PROFILE} to allow  the user to agree to this operation first. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode> | Returns the response to switch profile. |

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

eSIM.switchToProfile(1, 0, 'testId', true).then(() => {
    console.info(`switchToProfile invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`switchToProfile, ErrorState: err->${JSON.stringify(err)}`);
});

```

