# setCallRestrictionPassword

## setCallRestrictionPassword

```TypeScript
function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string, callback: AsyncCallback<void>): void
```

Set call barring password.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| oldPassword | string | 是 | Indicates the call restriction old password. |
| newPassword | string | 是 | Indicates the call restriction new password. |
| callback | AsyncCallback&lt;void> | 是 | The callback of setCallRestrictionPassword. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallRestrictionPassword(0, "123456", "654321", (err: BusinessError) => {
    if (err) {
        console.error(`setCallRestrictionPassword fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setCallRestrictionPassword success.`);
    }
});

```

## setCallRestrictionPassword

```TypeScript
function setCallRestrictionPassword(slotId: int, oldPassword: string, newPassword: string): Promise<void>
```

Set call barring password.

**起始版本：** 10

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number,  ranging from 0 to the maximum card slot index number supported by the device. |
| oldPassword | string | 是 | Indicates the call restriction old password. |
| newPassword | string | 是 | Indicates the call restriction new password. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setCallRestrictionPassword. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 801 | Capability not supported. |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setCallRestrictionPassword(0, "123456", "654321").then(() => {
    console.info(`setCallRestrictionPassword success.`);
}).catch((err: BusinessError) => {
    console.error(`setCallRestrictionPassword fail, promise: err->${JSON.stringify(err)}`);
});

```

