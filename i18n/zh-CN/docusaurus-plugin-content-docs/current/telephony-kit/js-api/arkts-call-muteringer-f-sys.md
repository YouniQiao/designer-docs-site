# muteRinger

## muteRinger

```TypeScript
function muteRinger(callback: AsyncCallback<void>): void
```

Stops the ringtone. If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | The callback of muteRinger. |

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

call.muteRinger((err: BusinessError) => {
    if (err) {
        console.error(`muteRinger fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`muteRinger success.`);
    }
});

```

## muteRinger

```TypeScript
function muteRinger(): Promise<void>
```

Stops the ringtone. If an incoming call is ringing, the phone stops ringing. Otherwise, this method does not function.

**起始版本：** 8

**需要权限：** 

 ohos.permission.SET_TELEPHONY_STATE

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the muteRinger. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.muteRinger().then(() => {
    console.info(`muteRinger success.`);
}).catch((err: BusinessError) => {
    console.error(`muteRinger fail, promise: err->${JSON.stringify(err)}`);
});

```

