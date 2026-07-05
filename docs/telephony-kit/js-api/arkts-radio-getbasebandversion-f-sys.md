# getBasebandVersion

## getBasebandVersion

```TypeScript
function getBasebandVersion(slotId: int, callback: AsyncCallback<string>): void
```

Get the version of Baseband.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot index number  supported by the device. |
| callback | AsyncCallback&lt;string> | Yes | Indicates the callback for getting the baseband version. |

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
radio.getBasebandVersion(slotId, (err: BusinessError, data: string) => {
    if (err) {
        console.error(`getBasebandVersion failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getBasebandVersion success, callback: data->${JSON.stringify(data)}`);
});

```

## getBasebandVersion

```TypeScript
function getBasebandVersion(slotId: int): Promise<string>
```

Get the version of Baseband.

**Since:** 10

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
| Promise&lt;string> | Returns the baseband version. |

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
radio.getBasebandVersion(slotId).then((data: string) => {
    console.info(`getBasebandVersion success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getBasebandVersion failed, promise: err->${JSON.stringify(err)}`);
});

```

