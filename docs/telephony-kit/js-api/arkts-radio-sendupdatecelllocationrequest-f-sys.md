# sendUpdateCellLocationRequest

## sendUpdateCellLocationRequest

```TypeScript
function sendUpdateCellLocationRequest(slotId: int, callback: AsyncCallback<void>): void
```

Actively requests to update location information.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;void> | Yes | The callback of sendUpdateCellLocationRequest. |

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
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.sendUpdateCellLocationRequest(slotId, (err: BusinessError) => {
    if (err) {
        console.error(`sendUpdateCellLocationRequest failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`sendUpdateCellLocationRequest success.`);
});

```

## sendUpdateCellLocationRequest

```TypeScript
function sendUpdateCellLocationRequest(slotId?: int): Promise<void>
```

Actively requests to update location information.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | No | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the sendUpdateCellLocationRequest. |

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
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.sendUpdateCellLocationRequest(slotId).then(() => {
    console.info(`sendUpdateCellLocationRequest success.`);
}).catch((err: BusinessError) => {
    console.error(`sendUpdateCellLocationRequest failed, promise: err->${JSON.stringify(err)}`);
});

```

## sendUpdateCellLocationRequest

```TypeScript
function sendUpdateCellLocationRequest(callback: AsyncCallback<void>): void
```

Actively requests to update location information.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of sendUpdateCellLocationRequest. |

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
import { BusinessError } from '@kit.BasicServicesKit';

radio.sendUpdateCellLocationRequest((err: BusinessError) => {
    if (err) {
        console.error(`sendUpdateCellLocationRequest failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`sendUpdateCellLocationRequest success.`);
});

```

