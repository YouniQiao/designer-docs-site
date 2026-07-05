# getCellInformation

## getCellInformation

```TypeScript
function getCellInformation(slotId: int, callback: AsyncCallback<Array<CellInformation>>): void
```

Get the current cell information.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;Array&lt;CellInformation>> | Yes | Indicates the callback for getting cell information. |

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
radio.getCellInformation(slotId, (err: BusinessError, data: Array<radio.CellInformation>) => {
    if (err) {
        console.error(`getCellInformation failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getCellInformation success, callback: data->${JSON.stringify(data)}`);
});

```

## getCellInformation

```TypeScript
function getCellInformation(slotId?: int): Promise<Array<CellInformation>>
```

Get the current cell information.

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
| Promise&lt;Array&lt;CellInformation>> | Returns the current cell information. |

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
radio.getCellInformation(slotId).then((data: Array<radio.CellInformation>) => {
    console.info(`getCellInformation success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCellInformation failed, promise: err->${JSON.stringify(err)}`);
});

```

## getCellInformation

```TypeScript
function getCellInformation(callback: AsyncCallback<Array<CellInformation>>): void
```

Get the current cell information.

**Since:** 8

**Required permissions:** 

 ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;CellInformation>> | Yes | Indicates the callback for getting cell information. |

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

radio.getCellInformation((err: BusinessError, data: Array<radio.CellInformation>) => {
    if (err) {
        console.error(`getCellInformation failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getCellInformation success, callback: data->${JSON.stringify(data)}`);
});

```

