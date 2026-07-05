# getMEID

## getMEID

```TypeScript
function getMEID(slotId: int, callback: AsyncCallback<string>): void
```

Obtains the MEID of a specified card slot of the device.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;string> | Yes | Indicates the callback for getting the MEID.  Returns an empty string if the MEID does not exist. |

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
radio.getMEID(slotId, (err: BusinessError, data: string) => {
    if (err) {
        console.error(`getMEID failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getMEID success, callback: data->${JSON.stringify(data)}`);
});

```

## getMEID

```TypeScript
function getMEID(slotId?: int): Promise<string>
```

Obtains the MEID of a specified card slot of the device.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | No | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the MEID. Returns an empty string if the MEID does not exist. |

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
radio.getMEID(slotId).then((data: string) => {
    console.info(`getMEID success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getMEID failed, promise: err->${JSON.stringify(err)}`);
});

```

## getMEID

```TypeScript
function getMEID(callback: AsyncCallback<string>): void
```

Obtains the MEID of a specified card slot of the device.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | Indicates the callback for getting the MEID.  Returns an empty string if the MEID does not exist. |

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

radio.getMEID((err: BusinessError, data: string) => {
    if (err) {
        console.error(`getMEID failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getMEID success, callback: data->${JSON.stringify(data)}`);
});

```

