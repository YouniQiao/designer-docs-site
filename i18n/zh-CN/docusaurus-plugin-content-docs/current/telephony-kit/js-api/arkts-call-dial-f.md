# dial

## dial

```TypeScript
function dial(phoneNumber: string, options: DialOptions, callback: AsyncCallback<boolean>): void
```

Makes a call.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** telephony.call#dialCall

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| options | DialOptions | 是 | Indicates additional information carried in the call. |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for getting the result of the call.  Returns {@code true} if the call request is successful; returns {@code false} otherwise.  Note that the value {@code true} indicates only the successful processing of the request; it does not mean  that the call is or can be connected. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialOptions: call.DialOptions = {
    extras: false
}
call.dial("138xxxxxxxx", dialOptions, (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

## dial

```TypeScript
function dial(phoneNumber: string, options?: DialOptions): Promise<boolean>
```

Makes a call.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** telephony.call#dialCall

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| options | DialOptions | 否 | Indicates additional information carried in the call. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns the result of the call.  Returns {@code true} if the call request is successful; returns {@code false} otherwise.  Note that the value {@code true} indicates only the successful processing of the request; it does not mean  that the call is or can be connected. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let dialOptions: call.DialOptions = {
    extras: false
}
call.dial("138xxxxxxxx", dialOptions).then((data: boolean) => {
    console.info(`dial success, promise: data->${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`dial fail, promise: err->${JSON.stringify(err)}`);
});

```

## dial

```TypeScript
function dial(phoneNumber: string, callback: AsyncCallback<boolean>): void
```

Makes a call.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** telephony.call#dialCall

**需要权限：** 

 ohos.permission.PLACE_CALL

**系统能力：** SystemCapability.Telephony.CallManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| phoneNumber | string | 是 | Indicates the called number. |
| callback | AsyncCallback&lt;boolean> | 是 | Indicates the callback for getting the result of the call.  Returns {@code true} if the call request is successful; returns {@code false} otherwise.  Note that the value {@code true} indicates only the successful processing of the request; it does not mean  that the call is or can be connected. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

call.dial("138xxxxxxxx", (err: BusinessError, data: boolean) => {
    console.info(`callback: err->${JSON.stringify(err)}, data->${JSON.stringify(data)}`);
});

```

