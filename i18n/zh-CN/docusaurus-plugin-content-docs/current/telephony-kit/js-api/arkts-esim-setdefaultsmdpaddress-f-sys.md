# setDefaultSmdpAddress

## setDefaultSmdpAddress

```TypeScript
function setDefaultSmdpAddress(slotId: int, address: string): Promise<ResultCode>
```

Set or update the default SM-DP+ address stored in an eUICC.

**起始版本：** 18

**需要权限：** 

 ohos.permission.SET_TELEPHONY_ESIM_STATE

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number. |
| address | string | 是 | The default SM-DP+ address to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ResultCode> | Returns the result code. |

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

eSIM.setDefaultSmdpAddress(1, 'testAddress').then(() => {
    console.info(`setDefaultSmdpAddress invoking succeeded.`);
}).catch((err: BusinessError<void>) => {
    console.error(`setDefaultSmdpAddress, ErrorState: err->${JSON.stringify(err)}`);
});

```

