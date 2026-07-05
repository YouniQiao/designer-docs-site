# setPreferredNetwork

## setPreferredNetwork

```TypeScript
function setPreferredNetwork(slotId: int, networkMode: PreferredNetworkMode, callback: AsyncCallback<void>): void
```

Set the preferred network for the specified SIM card slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| networkMode | PreferredNetworkMode | Yes | Indicates that you want to set the preferred network mode. |
| callback | AsyncCallback&lt;void> | Yes | The callback of setPreferredNetwork. |

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
let mode: radio.PreferredNetworkMode = radio.PreferredNetworkMode.PREFERRED_NETWORK_MODE_GSM;
radio.setPreferredNetwork(slotId, mode, (err: BusinessError) => {
    if (err) {
        console.error(`setPreferredNetwork failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`setPreferredNetwork success.`);
});

```

## setPreferredNetwork

```TypeScript
function setPreferredNetwork(slotId: int, networkMode: PreferredNetworkMode): Promise<void>
```

Set the preferred network for the specified SIM card slot.

**Since:** 8

**Required permissions:** 

 ohos.permission.SET_TELEPHONY_STATE

**System capability:** SystemCapability.Telephony.CoreService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slotId | int | Yes | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| networkMode | PreferredNetworkMode | Yes | Indicates that you want to set the preferred network mode. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the setPreferredNetwork. |

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
let mode: radio.PreferredNetworkMode = radio.PreferredNetworkMode.PREFERRED_NETWORK_MODE_GSM;
radio.setPreferredNetwork(slotId, mode).then(() => {
    console.info(`setPreferredNetwork success.`);
}).catch((err: BusinessError) => {
    console.error(`setPreferredNetwork failed, promise: err->${JSON.stringify(err)}`);
});

```

