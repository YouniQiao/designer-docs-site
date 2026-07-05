# getNetworkCapability

## getNetworkCapability

```TypeScript
function getNetworkCapability(slotId: int, type: NetworkCapabilityType,
    callback: AsyncCallback<NetworkCapabilityState>): void
```

Get the network capability state according to the specified capability type.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | NetworkCapabilityType | Yes | Indicates the service type of the {@link NetworkCapabilityType}. |
| callback | AsyncCallback&lt;NetworkCapabilityState> | Yes | Indicates the callback for getting  the network capability state. |

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
let type: radio.NetworkCapabilityType = radio.NetworkCapabilityType.SERVICE_TYPE_NR;
radio.getNetworkCapability(slotId, type, (err: BusinessError, data: radio.NetworkCapabilityState) => {
    if (err) {
        console.error(`getNetworkCapability failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkCapability success, callback: err->${JSON.stringify(err)}`);
});

```

## getNetworkCapability

```TypeScript
function getNetworkCapability(slotId: int, type: NetworkCapabilityType): Promise<NetworkCapabilityState>
```

Get the network capability state according to the specified capability type.

**Since:** 10

**Required permissions:** 

 ohos.permission.GET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| type | NetworkCapabilityType | Yes | Indicates the service type of the {@link NetworkCapabilityType}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkCapabilityState> | Returns the callback for getting the network capability state. |

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
let type: radio.NetworkCapabilityType = radio.NetworkCapabilityType.SERVICE_TYPE_NR;
radio.getNetworkCapability(slotId, type).then((data: radio.NetworkCapabilityState) => {
    console.info(`getNetworkCapability success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkCapability failed, promise: err->${JSON.stringify(err)}`);
});

```

