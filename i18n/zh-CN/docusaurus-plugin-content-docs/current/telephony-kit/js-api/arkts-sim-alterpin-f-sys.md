# alterPin

## alterPin

```TypeScript
function alterPin(slotId: int, newPin: string, oldPin: string, callback: AsyncCallback<LockStatusResponse>): void
```

Change Pin Password.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| newPin | string | 是 | Indicates a new password. |
| oldPin | string | 是 | Indicates old password. |
| callback | AsyncCallback&lt;LockStatusResponse> | 是 | Indicates the callback for getting  the response to obtain the SIM card lock status of the specified card slot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |
| 8301002 | The SIM card failed to read or update data. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.alterPin(0, "1234", "0000", (err: BusinessError, data: sim.LockStatusResponse) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## alterPin

```TypeScript
function alterPin(slotId: int, newPin: string, oldPin: string): Promise<LockStatusResponse>
```

Change Pin Password.

**起始版本：** 7

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| newPin | string | 是 | Indicates a new password. |
| oldPin | string | 是 | Indicates old password. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;LockStatusResponse> | Returns the response to obtain  the SIM card lock status of the specified card slot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300004 | No SIM card found. |
| 8300999 | Unknown error. |
| 8301002 | The SIM card failed to read or update data. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.alterPin(0, "1234", "0000").then((data: sim.LockStatusResponse) => {
    console.info(`alterPin success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`alterPin failed, promise: err->${JSON.stringify(err)}`);
});

```

