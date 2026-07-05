# getPreferredNetwork

## getPreferredNetwork

```TypeScript
function getPreferredNetwork(slotId: int, callback: AsyncCallback<PreferredNetworkMode>): void
```

Get the preferred network for the specified SIM card slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;PreferredNetworkMode> | Yes | Indicates the callback for getting  the preferred network mode to obtain. |

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
radio.getPreferredNetwork(slotId, (err: BusinessError, data: radio.PreferredNetworkMode) => {
    if (err) {
        console.error(`getPreferredNetwork failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getPreferredNetwork success, callback: data->${JSON.stringify(data)}`);
});

```

## getPreferredNetwork

```TypeScript
function getPreferredNetwork(slotId: int): Promise<PreferredNetworkMode>
```

Get the preferred network for the specified SIM card slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PreferredNetworkMode> | Returns the callback for getting the preferred network mode to obtain. |

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
radio.getPreferredNetwork(slotId).then((data: radio.PreferredNetworkMode) => {
    console.info(`getPreferredNetwork success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getPreferredNetwork failed, promise: err->${JSON.stringify(err)}`);
});

```

