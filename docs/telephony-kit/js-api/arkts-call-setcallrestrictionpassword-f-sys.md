# setCallRestrictionPassword

## setCallRestrictionPassword

```TypeScript
function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string, callback: AsyncCallback<void>): void
```

Set call barring password.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| oldPassword | string | Yes | Indicates the call restriction old password. |
| newPassword | string | Yes | Indicates the call restriction new password. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setCallRestrictionPassword. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallRestrictionPassword(0, "123456", "654321", (err: BusinessError) => {
    if (err) {
        console.error(`setCallRestrictionPassword fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setCallRestrictionPassword success.`);
    }
});

```

## setCallRestrictionPassword

```TypeScript
function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string): Promise<void>
```

Set call barring password.

**Since:** 10

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| oldPassword | string | Yes | Indicates the call restriction old password. |
| newPassword | string | Yes | Indicates the call restriction new password. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setCallRestrictionPassword. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallRestrictionPassword(0, "123456", "654321").then(() => {
    console.info(`setCallRestrictionPassword success.`);
}).catch((err: BusinessError) => {
    console.error(`setCallRestrictionPassword fail, promise: err->${JSON.stringify(err)}`);
});

```

