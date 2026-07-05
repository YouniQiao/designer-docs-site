# getSignalInformation

## getSignalInformation

```TypeScript
function getSignalInformation(slotId: int, callback: AsyncCallback<Array<SignalInformation>>): void
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;Array&lt;SignalInformation>> | 是 | Indicates the callback for getting  the instance list of the child classes derived from {@link SignalInformation}. |

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
radio.getSignalInformation(slotId, (err: BusinessError, data: Array<radio.SignalInformation>) => {
    if (err) {
        console.error(`getSignalInformation failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getSignalInformation success, callback: data->${JSON.stringify(data)}`);
});

```

## getSignalInformation

```TypeScript
function getSignalInformation(slotId: int): Promise<Array<SignalInformation>>
```

Obtains the list of signal strength information of the registered network corresponding to a specified SIM card.

**起始版本：** 7

**系统能力：** SystemCapability.Telephony.CoreService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;SignalInformation>> | Returns the callback for getting the instance list of  the child classes derived from {@link SignalInformation}. |

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
radio.getSignalInformation(slotId).then((data: Array<radio.SignalInformation>) => {
    console.info(`getSignalInformation success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSignalInformation failed, promise: err->${JSON.stringify(err)}`);
});

```

