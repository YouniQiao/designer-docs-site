# setPreferredApn

## setPreferredApn

```TypeScript
function setPreferredApn(apnId: int): Promise<boolean>
```

Set preferred APN.

**起始版本：** 16

**需要权限：** 

 ohos.permission.MANAGE_APN_SETTING

**系统能力：** SystemCapability.Telephony.CellularData

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| apnId | int | 是 | The APN ID which is used to be set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if preferred APN set success; returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |

**示例：**

```TypeScript
import { data } from '@kit.TelephonyKit';
import { BusinessError } from '@kit.BasicServicesKit';

let apnId: number = 0; // apnId为通过queryApnIds返回的有效值，setPreferredApn传入无效的apnId会切回运营商默认配置的优选APN。
data.setPreferredApn(apnId).then((result: boolean) => {
    console.info(`setPreferredApn result: ${result}`);
}).catch((err: BusinessError) => {
    console.error(`setPreferredApn failed. code: ${err.code}, message: ${err.message}`);
});

```

