# getCallRestrictionStatus

## getCallRestrictionStatus

```TypeScript
function getCallRestrictionStatus(slotId: int, type: CallRestrictionType, callback: AsyncCallback<RestrictionStatus>): void
```

Get call barring status.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | CallRestrictionType | Yes | Indicates which type of call restriction to obtain. |
| callback | AsyncCallback&lt;RestrictionStatus> | Yes | Indicates the callback for getting the call restriction status. |

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

call.getCallRestrictionStatus(0, 1, (err: BusinessError, data: call.RestrictionStatus) => {
    if (err) {
        console.error(`getCallRestrictionStatus fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`getCallRestrictionStatus success, data->${JSON.stringify(data)}`);
    }
});

```

## getCallRestrictionStatus

```TypeScript
function getCallRestrictionStatus(slotId: int, type: CallRestrictionType): Promise<RestrictionStatus>
```

Get call barring status.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CallManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | CallRestrictionType | Yes | Indicates which type of call restriction to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RestrictionStatus> | Returns the call restriction status. |

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

call.getCallRestrictionStatus(0, 1).then((data: call.RestrictionStatus) => {
    console.info(`getCallRestrictionStatus success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getCallRestrictionStatus fail, promise: err->${JSON.stringify(err)}`);
});

```

