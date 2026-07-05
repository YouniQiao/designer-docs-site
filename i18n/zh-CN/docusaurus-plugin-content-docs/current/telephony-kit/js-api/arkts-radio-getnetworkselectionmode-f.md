# getNetworkSelectionMode

## getNetworkSelectionMode

```TypeScript
function getNetworkSelectionMode(slotId: int, callback: AsyncCallback<NetworkSelectionMode>): void
```

Obtains the network search mode of the SIM card in a specified slot.

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;NetworkSelectionMode> | 是 | Indicates the callback for getting  the network search mode of the SIM card. Available values are as follows:   {@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}  {@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}  {@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

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

**起始版本：** 6

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NetworkSelectionMode> | Returns the network search mode of the SIM card.  Available values are as follows:   {@link NetworkSelectionMode#NETWORK_SELECTION_UNKNOWN}  {@link NetworkSelectionMode#NETWORK_SELECTION_AUTOMATIC}  {@link NetworkSelectionMode#NETWORK_SELECTION_MANUAL} |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNetworkSelectionMode(slotId).then((data: radio.NetworkSelectionMode) => {
    console.info(`getNetworkSelectionMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNetworkSelectionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

