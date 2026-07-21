# setDefaultSmdpAddress (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

<a id="setdefaultsmdpaddress"></a>
## setDefaultSmdpAddress

```TypeScript
function setDefaultSmdpAddress(slotId: number, address: string): Promise<ResultCode>
```

Set or update the default SM-DP+ address stored in an eUICC.

**Since:** 18

**Required permissions:** ohos.permission.SET_TELEPHONY_ESIM_STATE

<!--Device-eSIM-function setDefaultSmdpAddress(slotId: int, address: string): Promise<ResultCode>--><!--Device-eSIM-function setDefaultSmdpAddress(slotId: int, address: string): Promise<ResultCode>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |
| address | string | Yes | The default SM-DP+ address to set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ResultCode&gt; | Returns the result code. |

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

eSIM.setDefaultSmdpAddress(1, 'testAddress').then(() => {
    console.info(`setDefaultSmdpAddress invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`setDefaultSmdpAddress, ErrorState: err->${JSON.stringify(err)}`);
});

```

