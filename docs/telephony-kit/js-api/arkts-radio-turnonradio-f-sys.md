# turnOnRadio

## turnOnRadio

```TypeScript
function turnOnRadio(slotId: int, callback: AsyncCallback<void>): void
```

Turn on the radio service.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;void> | Yes | The callback of turnOnRadio. |

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
radio.turnOnRadio(slotId, (err: BusinessError) => {
    if (err) {
        console.error(`turnOnRadio failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`turnOnRadio success.`);
});

```

## turnOnRadio

```TypeScript
function turnOnRadio(slotId?: int): Promise<void>
```

Turn on the radio service.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | No | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the turnOnRadio. |

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
radio.turnOnRadio(slotId).then(() => {
    console.info(`turnOnRadio success.`);
}).catch((err: BusinessError) => {
    console.error(`turnOnRadio failed, promise: err->${JSON.stringify(err)}`);
});

```

## turnOnRadio

```TypeScript
function turnOnRadio(callback: AsyncCallback<void>): void
```

Turn on the radio service.

**Since:** 7

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | The callback of turnOnRadio. |

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

radio.turnOnRadio((err: BusinessError) => {
    if (err) {
        console.error(`turnOnRadio failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`turnOnRadio success.`);
});

```

