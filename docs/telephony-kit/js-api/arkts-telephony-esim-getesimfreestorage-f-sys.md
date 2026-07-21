# getEsimFreeStorage (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

<a id="getesimfreestorage"></a>
## getEsimFreeStorage

```TypeScript
function getEsimFreeStorage(): Promise<number>
```

Returns the remaining storage space in KB for the eUICC hardware.

**Since:** 23

**Required permissions:** ohos.permission.GET_TELEPHONY_ESIM_STATE

<!--Device-eSIM-function getEsimFreeStorage(): Promise<int>--><!--Device-eSIM-function getEsimFreeStorage(): Promise<int>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the size of the remaining storage space in KB for the eUICC. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Nonsystem applications use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [3120001](../errorcode-telephony.md#3120001-service-connection-error) | Service connection failed. |
| [3120002](../errorcode-telephony.md#3120002-system-internal-error) | System internal error. |

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

