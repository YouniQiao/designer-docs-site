# sendScreenLockEvent

## sendScreenLockEvent

```TypeScript
function sendScreenLockEvent(event: String, parameter: int, callback: AsyncCallback<boolean>): void
```

The screen lock app sends the event to the screen lock service.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | String | 是 | event type. |
| parameter | int | 是 | operation result of the event. |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of sendScreenLockEvent. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.sendScreenLockEvent('unlockScreenResult', 0, (err: BusinessError, result: Boolean) => {
  if (err) {
    console.error(`Failed to send screenlock event, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in Sending screenlock event. result: ${result}`);
});

```

## sendScreenLockEvent

```TypeScript
function sendScreenLockEvent(event: String, parameter: int): Promise<boolean>
```

The screen lock app sends the event to the screen lock service.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | String | 是 | event type. |
| parameter | int | 是 | operation result of the event. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 201 | permission denied. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.sendScreenLockEvent('unlockScreenResult', 0).then((result: Boolean) => {
  console.info(`Succeeded in Sending screenlock event. result: ${result}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to send screenlock event, Code: ${err.code}, message: ${err.message}`);
});

```

