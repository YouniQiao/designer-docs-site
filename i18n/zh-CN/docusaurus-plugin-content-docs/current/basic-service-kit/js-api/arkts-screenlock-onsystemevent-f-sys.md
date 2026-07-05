# onSystemEvent

## onSystemEvent

```TypeScript
function onSystemEvent(callback: Callback<SystemEvent>): boolean
```

Register system event related to screen lock service.

**起始版本：** 9

**需要权限：** 

 ohos.permission.ACCESS_SCREEN_LOCK_INNER

**系统能力：** SystemCapability.MiscServices.ScreenLock

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;SystemEvent> | 是 | the callback of onSystemEvent. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | returns true if register system event is success, returns false otherwise. |

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

try {
  let isSuccess = screenLock.onSystemEvent((event: screenLock.SystemEvent) => {
    console.info(`Succeeded in Registering the system event which related to screenlock. eventType: ${event.eventType}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Failed to register the system event which related to screenlock, Code: ${error.code}, message: ${error.message}`);
}

```

