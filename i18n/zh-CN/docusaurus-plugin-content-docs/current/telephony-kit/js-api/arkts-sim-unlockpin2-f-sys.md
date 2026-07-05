# unlockPin2

## unlockPin2

```TypeScript
function unlockPin2(slotId: int, pin2: string, callback: AsyncCallback<LockStatusResponse>): void
```

Unlock the SIM card password of the specified card slot.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| pin2 | string | 是 | Indicates the password of the SIM card. |
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

let pin2: string = '1234';
sim.unlockPin2(0, pin2, (err: BusinessError, data: sim.LockStatusResponse) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## unlockPin2

```TypeScript
function unlockPin2(slotId: int, pin2: string): Promise<LockStatusResponse>
```

Unlock the SIM card password of the specified card slot.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| pin2 | string | 是 | Indicates the password of the SIM card. |

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

let pin2: string = '1234';
sim.unlockPin2(0, pin2).then((data: sim.LockStatusResponse) => {
    console.info(`unlockPin2 success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`unlockPin2 failed, promise: err->${JSON.stringify(err)}`);
});

```

