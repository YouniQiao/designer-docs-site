# getIMEISV

## getIMEISV

```TypeScript
function getIMEISV(slotId: int): string
```

Obtains the software version number of a specified card slot of the device.

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number  supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the IMEISV. Returns an empty string if the IMEISV does not exist. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
let slotId: number = 0;
let data: string = radio.getIMEISV(slotId);
console.info(`IMEISV is:` + data);

```

