# dialCall

## dialCall

```TypeScript
function dialCall(phoneNumber: string, options: DialCallOptions, callback: AsyncCallback<void>): void
```

Makes a call.

**起始版本：** 9

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| options | DialCallOptions | 是 | Indicates additional information carried in the call. |
| callback | AsyncCallback&lt;void> | 是 | The callback of dialCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialCallOptions: call.DialCallOptions = {
    accountId: 0,
    videoState: 0,
    dialScene: 0,
    dialType: 0
}
call.dialCall("138xxxxxxxx", dialCallOptions, (err: BusinessError) => {
    if (err) {
        console.error(`dialCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`dialCall success.`);
    }
});

```

## dialCall

```TypeScript
function dialCall(phoneNumber: string, options?: DialCallOptions): Promise<void>
```

Makes a call.

**起始版本：** 9

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| options | DialCallOptions | 否 | Indicates additional information carried in the call. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the dialCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialCallOptions: call.DialCallOptions = {
    accountId: 0,
    videoState: 0,
    dialScene: 0,
    dialType: 0
}
call.dialCall("138xxxxxxxx", dialCallOptions).then(() => {
    console.info(`dialCall success.`);
}).catch((err: BusinessError) => {
    console.error(`dialCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## dialCall

```TypeScript
function dialCall(phoneNumber: string, callback: AsyncCallback<void>): void
```

Makes a call.

**起始版本：** 9

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| callback | AsyncCallback&lt;void> | 是 | The callback of dialCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300005 | Airplane mode is on. |
| 8300006 | Network not in service. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.dialCall("138xxxxxxxx", (err: BusinessError) => {
    if (err) {
        console.error(`dialCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`dialCall success.`);
    }
});

```

