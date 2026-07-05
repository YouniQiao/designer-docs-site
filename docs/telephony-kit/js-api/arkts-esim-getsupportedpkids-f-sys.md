# getSupportedPkids

## getSupportedPkids

```TypeScript
function getSupportedPkids(slotId: int) : Promise<string>
```

Get supported pkids

**Since:** 20

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**System capability:** SystemCapability.Telephony.CoreService.Esim

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the supported pkids. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**Example**

```TypeScript
import { eSIM } from '@kit.TelephonyKit';

try {
    let supportedPkids: string = await eSIM.getSupportedPkids(1);
    console.info(`supported pkids is:` + supportedPkids);
} catch (err) {
    console.error(`getSupportedPkids, promise: err->${JSON.stringify(err)}`)
}

```

