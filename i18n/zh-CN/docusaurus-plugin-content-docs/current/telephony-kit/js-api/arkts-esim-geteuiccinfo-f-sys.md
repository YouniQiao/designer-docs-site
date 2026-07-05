# getEuiccInfo

## getEuiccInfo

```TypeScript
function getEuiccInfo(slotId: int): Promise<EuiccInfo>
```

Returns the eUICC Information.

**起始版本：** 18

**需要权限：** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| slotId | int | 是 | Indicates the card slot index number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;EuiccInfo> | Returns the eUICC information to obtain. When eUICC is not ready,  the return value may be null. |

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

eSIM.getEuiccInfo(1).then((data: eSIM.EuiccInfo) => {
    console.info(`getEuiccInfo, EuiccInfo: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError<void>) => {
    console.error(`getEuiccInfo, EuiccInfo: err->${JSON.stringify(err)}`);
});

```

