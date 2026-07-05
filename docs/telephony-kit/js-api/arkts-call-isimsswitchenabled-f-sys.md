# isImsSwitchEnabled

## isImsSwitchEnabled

```TypeScript
function isImsSwitchEnabled(slotId: int, callback: AsyncCallback<boolean>): void
```

Judge whether the Ims switch is enabled.

**Since:** 8

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;boolean> | Yes | The callback of isImsSwitchEnabled.  Returns {@code true} If the ims switch is on; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.isImsSwitchEnabled(0, (err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`isImsSwitchEnabled fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`isImsSwitchEnabled success, data->${JSON.stringify(data)}`);
    }
});

```

## isImsSwitchEnabled

```TypeScript
function isImsSwitchEnabled(slotId: int): Promise<boolean>
```

Judge whether the Ims switch is enabled.

**Since:** 8

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} If the ims switch is on; returns {@code false} otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.isImsSwitchEnabled(0).then((data: boolean) => {
    console.info(`isImsSwitchEnabled success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`isImsSwitchEnabled fail, promise: err->${JSON.stringify(err)}`);
});

```

