# unlock

## unlock

```TypeScript
function unlock(callback: AsyncCallback<boolean>): void
```

Unlock the screen.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | the callback of unlock. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |
| 13200003 | Invalid use. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.unlock((err: BusinessError, data: Boolean) => {
  if (err) {
    console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in unlocking the screen. result: ${data}`);
});

```

## unlock

```TypeScript
function unlock(): Promise<boolean>
```

Unlock the screen.

**起始版本：** 11

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | permission verification failed, application which is not a system application uses system API. |
| 13200002 | the screenlock management service is abnormal. |
| 13200003 | Invalid use. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

screenLock.unlock().then((data: Boolean) => {
  console.info(`Succeeded in unlocking the screen. result: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to unlock the screen, Code: ${err.code}, message: ${err.message}`);
});

```

