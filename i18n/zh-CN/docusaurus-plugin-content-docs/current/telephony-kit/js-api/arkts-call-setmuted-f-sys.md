# setMuted

## setMuted

```TypeScript
function setMuted(callback: AsyncCallback<void>): void
```

Set mute during a call.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of setMuted. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setMuted((err: BusinessError) => {
    if (err) {
        console.error(`setMuted fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`setMuted success.`);
    }
});

```

## setMuted

```TypeScript
function setMuted(): Promise<void>
```

Set mute during a call.

**起始版本：** 8

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the setMuted. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Non-system applications use system APIs. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.setMuted().then(() => {
    console.info(`setMuted success.`);
}).catch((err: BusinessError) => {
    console.error(`setMuted fail, promise: err->${JSON.stringify(err)}`);
});

```

