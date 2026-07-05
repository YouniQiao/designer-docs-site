# setSimLabelIndex

## setSimLabelIndex

```TypeScript
function setSimLabelIndex(simId: int, simLabelIndex: int): Promise<void>
```

Set the SIM card labelIndex.

**起始版本：** 23

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CoreService

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| simId | int | 是 | Indicates the sim Id for card from sim account information.  Value range:[1,500] |
| simLabelIndex | int | 是 | Indicates the simlabel index for card. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setSimLabelIndex. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 8300001 | Invalid parameter value. |
| 8300002 | Service connection failed. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { sim } from '@kit.TelephonyKit';

sim.setSimLabelIndex(1,  0).then(() => {
    console.info(`setSimLabelIndex success.`);
}).catch((err: BusinessError) => {
    console.error(`setSimLabelIndex failed, promise: err->${JSON.stringify(err)}`);
});

```

