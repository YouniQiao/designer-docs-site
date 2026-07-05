# getNrOptionMode

## getNrOptionMode

```TypeScript
function getNrOptionMode(slotId: int, callback: AsyncCallback<NrOptionMode>): void
```

Get the option mode of NR.

**起始版本：** 8

**废弃版本：** 10

**替代接口：** telephony.radio#getNROptionMode

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |
| callback | AsyncCallback&lt;NrOptionMode> | 是 | Indicates the callback for getting the selection mode of NR. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNrOptionMode(slotId, (err: BusinessError, data: radio.NrOptionMode) => {
    if (err) {
        console.error(`getNrOptionModecallback failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNrOptionModecallback success, callback: data->${JSON.stringify(data)}`);
});

```

## getNrOptionMode

```TypeScript
function getNrOptionMode(slotId?: int): Promise<NrOptionMode>
```

Get the option mode of NR.

**起始版本：** 8

**废弃版本：** 10

**替代接口：** telephony.radio#getNROptionMode

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 否 | Indicates the card slot index number, ranging from 0 to the maximum card slot  index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NrOptionMode> | Returns the selection mode of NR. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
radio.getNrOptionMode(slotId).then((data: radio.NrOptionMode) => {
    console.info(`getNrOptionMode success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getNrOptionMode failed, promise: err->${JSON.stringify(err)}`);
});

```

## getNrOptionMode

```TypeScript
function getNrOptionMode(callback: AsyncCallback<NrOptionMode>): void
```

Get the option mode of NR.

**起始版本：** 8

**废弃版本：** 10

**替代接口：** telephony.radio#getNROptionMode

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;NrOptionMode> | 是 | Indicates the callback for getting the selection mode of NR. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

radio.getNrOptionMode((err: BusinessError, data: radio.NrOptionMode) => {
    if (err) {
        console.error(`getNrOptionMode failed, callback: err->${JSON.stringify(err)}`);
        return;
    }
    console.info(`getNrOptionMode success, callback: data->${JSON.stringify(data)}`);
});

```

