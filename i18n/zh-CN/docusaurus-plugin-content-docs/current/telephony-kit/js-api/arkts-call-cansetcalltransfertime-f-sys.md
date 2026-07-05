# canSetCallTransferTime

## canSetCallTransferTime

```TypeScript
function canSetCallTransferTime(slotId: int, callback: AsyncCallback<boolean>): void
```

Checks whether can set call transfer time. The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| callback | AsyncCallback&lt;boolean> | 是 | Returns {@code true} if the device can set call transfer time;  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.canSetCallTransferTime(slotId, (err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`canSetCallTransferTime fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`canSetCallTransferTime success, data->${JSON.stringify(data)}`);
    }
});

```

## canSetCallTransferTime

```TypeScript
function canSetCallTransferTime(slotId: int): Promise<boolean>
```

Checks whether can set call transfer time. The system checks whether IP multimedia subsystem domain (IMS) can set call transfer time.

**起始版本：** 10

**需要权限：** 

 ohos.permission.GET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the device can set call transfer time;  returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let slotId: number = 0;
call.canSetCallTransferTime(slotId).then((data: boolean) => {
    console.info(`canSetCallTransferTime success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`canSetCallTransferTime fail, promise: err->${JSON.stringify(err)}`);
});

```

