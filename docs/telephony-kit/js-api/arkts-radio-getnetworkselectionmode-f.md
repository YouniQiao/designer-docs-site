# getNetworkSelectionMode

## getNetworkSelectionMode

```TypeScript
function getNetworkSelectionMode(slotId: int, callback: AsyncCallback<NetworkSelectionMode>): void
```

Obtains the network search mode of the SIM card in a specified slot.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;NetworkSelectionMode> | Yes | Indicates the callback for getting  the network search mode of the SIM card. Available values are as follows:   {@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}  {@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}  {@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNetworkSelectionMode(slotId, (err: BusinessError, data: radio.NetworkSelectionMode) => {
    if (err) {
        console.error(`getNetworkSelectionMode failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNetworkSelectionMode success, callback: data->${JSON.stringify(data)}`);
});

```

## getNetworkSelectionMode

```TypeScript
function getNetworkSelectionMode(slotId: int): Promise<NetworkSelectionMode>
```

Obtains the network search mode of the SIM card in a specified slot.

**Since:** 6

**System capability:** SystemCapability.Telephony.CoreService

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;NetworkSelectionMode> | Returns the network search mode of the SIM card.  Available values are as follows:   {@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}  {@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}  {@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNetworkSelectionMode(slotId).then((data: radio.NetworkSelectionMode) => {
    console.info(`getNetworkSelectionMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkSelectionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

