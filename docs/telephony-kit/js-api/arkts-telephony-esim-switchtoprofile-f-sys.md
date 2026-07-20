# switchToProfile (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

## switchToProfile

```TypeScript
function switchToProfile(slotId: number, portIndex: number, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>
```

Switch to (enable) the given profile on the eUICC.

**Since:** 18

**Required permissions:** ohos.permission.SET_TELEPHONY_ESIM_STATE

<!--Device-eSIM-function switchToProfile(slotId: int, portIndex: int, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>--><!--Device-eSIM-function switchToProfile(slotId: int, portIndex: int, iccid: string,
                           forceDisableProfile: boolean): Promise<ResultCode>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |
| portIndex | number | Yes | Index of the port for the slot. |
| iccid | string | Yes | The iccid of the profile to switch to. |
| forceDisableProfile | boolean | Yes | If true, the active profile must be disabled in order to perform the operation. Otherwise, the resultCode should return {@link RESULT_MUST_DISABLE_PROFILE} to allow the user to agree to this operation first. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ResultCode> | Returns the response to switch profile. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1. Mandatory parameters are left unspecified.2. Incorrect parameter types.3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3120001](../errorcode-telephony.md#3120001-service-connection-error) | Service connection failed. |
| [3120002](../errorcode-telephony.md#3120002-system-internal-error) | System internal error. |

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

