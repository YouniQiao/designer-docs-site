# makeCall

## makeCall

```TypeScript
function makeCall(phoneNumber: string, callback: AsyncCallback<void>): void
```

Go to the dial screen and the called number is displayed.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.Contacts

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| callback | AsyncCallback&lt;void> | 是 | The callback of makeCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// 从API15开始支持tel格式电话号码，如："tel:13xxxx"
call.makeCall("138xxxxxxxx", (err: BusinessError) => {
    if (err) {
        console.error(`makeCall fail, err->${JSON.stringify(err)}`);
    } else {
        console.info(`makeCall success`);
    }
});

```

## makeCall

```TypeScript
function makeCall(phoneNumber: string): Promise<void>
```

Go to the dial screen and the called number is displayed.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.Contacts

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the makeCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// 从API15开始支持tel格式电话号码，如："tel:13xxxx"
call.makeCall("138xxxxxxxx").then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## makeCall

```TypeScript
function makeCall(phoneNumber: string, options?: MakeCallOptions): Promise<void>
```

Go to the dial screen and the called number is displayed.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.Contacts

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| options | MakeCallOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | - The promise returned by the makeCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8300001 | Invalid parameter value. |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |
| 8300999 | Unknown error code. |

**示例：**

```TypeScript
import { call } from '@kit.TelephonyKit';

// 设置通话结束后是否返回当前App
let makeOptions: call.MakeCallOptions = {
  isHideDialScreen: true
}

call.makeCall("138xxxxxxxx", makeOptions).then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```

## makeCall

```TypeScript
function makeCall(context: Context, phoneNumber: string): Promise<void>
```

Go to the dial screen and the called number is displayed.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Applications.Contacts

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context. |
| phoneNumber | string | 是 | Indicates the called number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the makeCall. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2. Incorrect parameters types; |
| 8300002 | Operation failed. Cannot connect to service. |
| 8300003 | System internal error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
// 获取context
let context = this.getUIContext().getHostContext() as Context;
// 从API15开始支持tel格式电话号码，如："tel:13xxxx"
call.makeCall(context, "138xxxxxxxx").then(() => {
    console.info(`makeCall success`);
}).catch((err: BusinessError) => {
    console.error(`makeCall fail, promise: err->${JSON.stringify(err)}`);
});

```

