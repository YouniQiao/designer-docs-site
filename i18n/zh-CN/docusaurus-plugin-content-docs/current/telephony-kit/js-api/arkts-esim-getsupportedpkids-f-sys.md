# getSupportedPkids

## getSupportedPkids

```TypeScript
function getSupportedPkids(slotId: int) : Promise<string>
```

Get supported pkids

**起始版本：** 20

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
| Promise&lt;string> | Returns the supported pkids. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 801 | Capability not supported. |
| 3120001 | Service connection failed. |
| 3120002 | System internal error. |

**示例：**

```TypeScript
import { eSIM } from '@kit.TelephonyKit';

try {
    let supportedPkids: string = await eSIM.getSupportedPkids(1);
    console.info(`supported pkids is:` + supportedPkids);
} catch (err) {
    console.error(`getSupportedPkids, promise: err->${JSON.stringify(err)}`)
}

```

