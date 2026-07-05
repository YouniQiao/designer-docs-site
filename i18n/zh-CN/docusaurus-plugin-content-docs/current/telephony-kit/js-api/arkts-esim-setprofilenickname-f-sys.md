# setProfileNickname

## setProfileNickname

```TypeScript
function setProfileNickname(slotId: int, iccid: string, nickname: string): Promise<ResultCode>
```

Adds or updates the given profile nickname.

**起始版本：** 18

**需要权限：** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number. |
| iccid | string | 是 | The iccid of the profile. |
| nickname | string | 是 | The nickname of the profile. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultCode> | Returns the result of the set nickname operation. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.setProfileNickname(1, 'testId', 'testName').then(() => {
    console.info(`setProfileNickname invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`setProfileNickname, ErrorState: err->${JSON.stringify(err)}`);
});

```

