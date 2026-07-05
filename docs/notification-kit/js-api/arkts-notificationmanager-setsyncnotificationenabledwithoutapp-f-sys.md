# setSyncNotificationEnabledWithoutApp

## setSyncNotificationEnabledWithoutApp

```TypeScript
function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean, callback: AsyncCallback<void>): void
```

设置是否将通知同步到未安装应用程序的设备(callback形式)。

**Since:** 9

**Deprecated since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | 用户ID。 |
| enable | boolean | Yes | 是否启用（true：使能，false：禁止）。 |
| callback | AsyncCallback&lt;void> | Yes | 设置是否将通知同步到未安装应用程序的设备的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. [since 18] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600008 | The user does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Use the actual user ID when calling the API.
let userId: number = 100;
let enable: boolean = true;
let setSyncNotificationEnabledWithoutAppCallback = (err: BusinessError): void => {
    if (err) {
        console.error(`setSyncNotificationEnabledWithoutApp failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info("setSyncNotificationEnabledWithoutApp success");
    }
}
notificationManager.setSyncNotificationEnabledWithoutApp(userId, enable, setSyncNotificationEnabledWithoutAppCallback);

```

## setSyncNotificationEnabledWithoutApp

```TypeScript
function setSyncNotificationEnabledWithoutApp(userId: int, enable: boolean): Promise<void>
```

设置是否将通知同步到未安装应用程序的设备(Promise形式)。

**Since:** 9

**Deprecated since:** 26.0.0

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | int | Yes | 用户ID。 |
| enable | boolean | Yes | 是否启用（true：使能，false：禁止）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 以Promise形式返回设置是否将通知同步到未安装应用程序的设备的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. [since 18] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600008 | The user does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Use the actual user ID when calling the API.
let userId: number = 100;
let enable: boolean = true;
notificationManager.setSyncNotificationEnabledWithoutApp(userId, enable).then(() => {
    console.info('setSyncNotificationEnabledWithoutApp success');
}).catch((err: BusinessError) => {
    console.error(`setSyncNotificationEnabledWithoutApp failed, code is ${err.code}, message is ${err.message}`);
});

```

