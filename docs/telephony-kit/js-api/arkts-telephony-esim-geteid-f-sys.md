# getEid (System API)

## Modules to Import

```TypeScript
import { eSIM } from '@kit.TelephonyKit';
```

<a id="geteid"></a>
## getEid

```TypeScript
function getEid(slotId: number): Promise<string>
```

Returns the EID identifying for the eUICC hardware.

**Since:** 18

**Required permissions:** ohos.permission.GET_TELEPHONY_ESIM_STATE

<!--Device-eSIM-function getEid(slotId: int): Promise<string>--><!--Device-eSIM-function getEid(slotId: int): Promise<string>-End-->

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | number | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Returns the EID. When eUICC is not ready, the return value may be null. |

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
import { eSIM } from '@kit.TelephonyKit';

eSIM.getEid(1).then((eid) => {
    console.info(`the EID is:` + eid);
}).catch((err:BusinessError<void>) => {
    console.error(`getEid, promise: err->${JSON.stringify(err)}`)
});

```

