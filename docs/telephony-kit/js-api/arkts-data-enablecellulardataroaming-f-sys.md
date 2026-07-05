# enableCellularDataRoaming

## enableCellularDataRoaming

```TypeScript
function enableCellularDataRoaming(slotId: int, callback: AsyncCallback<void>): void
```

Enable cellular data roaming.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |
| callback | AsyncCallback&lt;void> | Yes | The callback of enableCellularDataRoaming. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularDataRoaming(0, (err: BusinessError) => {
    if(err) {
        console.error(`enableCellularDataRoaming fail. code: ${err.code}, message: ${err.message}`);
    } else {
        console.info(`enableCellularDataRoaming success`);
    }
});

```

## enableCellularDataRoaming

```TypeScript
function enableCellularDataRoaming(slotId: int): Promise<void>
```

Enable cellular data roaming.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CellularData

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the ID of a card slot.  The value {@code 0} indicates card 1, and the value {@code 1} indicates card 2. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the enableCellularDataRoaming. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Internal error. |

**Example**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

data.enableCellularDataRoaming(0).then(() => {
    console.info(`enableCellularDataRoaming success.`);
}).catch((err: BusinessError) => {
    console.error(`enableCellularDataRoaming fail. code: ${err.code}, message: ${err.message}`);
});

```

