# setProfileNickname (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@ohos.telephony.esim';
```

## setProfileNickname

```TypeScript
function setProfileNickname(slotId: number, iccid: string, nickname: string): Promise<ResultCode>
```

Adds or updates the given profile nickname.

**Since:** 18

**Required permissions:** ohos.permission.SET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |
| iccid | string | Yes | The iccid of the profile. |
| nickname | string | Yes | The nickname of the profile. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode&gt; | Returns the result of the set nickname operation. |

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

eSIM.setProfileNickname(1, 'testId', 'testName').then(() => {
    console.info(`setProfileNickname invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`setProfileNickname, ErrorState: err->${JSON.stringify(err)}`);
});

```

