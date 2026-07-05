# getEsimFreeStorage

## getEsimFreeStorage

```TypeScript
function getEsimFreeStorage(): Promise<int>
```

Returns the remaining storage space in KB for the eUICC hardware.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_TELEPHONY_ESIM_STATE

**系统能力：** SystemCapability.Telephony.CoreService.Esim

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Returns the size of the remaining storage space in KB for the eUICC. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { eSIM } from '@kit.TelephonyKit';

eSIM.getEsimFreeStorage().then((data) => {
    console.info(`getEsimFreeStorage invoking succeeded.freeStorage: ${data}`);
}).catch((err: BusinessError<void>) => {
    console.error(`getEsimFreeStorage , promise: err->${JSON.stringify(err)}`);
});

```

