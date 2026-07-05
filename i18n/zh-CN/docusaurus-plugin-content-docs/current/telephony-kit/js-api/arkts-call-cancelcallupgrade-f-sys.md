# cancelCallUpgrade

## cancelCallUpgrade

```TypeScript
function cancelCallUpgrade(callId: int): Promise<void>
```

Cancel call upgrade when voice call upgrade to video call.

**起始版本：** 11

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callId | int | 是 | Indicates the identifier of the call. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the cancelCallUpgrade. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.cancelCallUpgrade(1).then(() => {
    console.info(`cancelCallUpgrade success.`);
}).catch((err: BusinessError) => {
    console.error(`cancelCallUpgrade fail, promise: err->${JSON.stringify(err)}`);
});

```

