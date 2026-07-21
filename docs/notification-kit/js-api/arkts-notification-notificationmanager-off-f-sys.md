# off (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

<a id="off"></a>
## off('checkNotification')

```TypeScript
function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void
```

Unsubscribes from notification events.

**Since:** 10

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

<!--Device-notificationManager-function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void--><!--Device-notificationManager-function off(
    type: 'checkNotification',
    callback?: (checkInfo: NotificationCheckInfo) => NotificationCheckResult
  ): void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'checkNotification' | Yes | Event type. The value is fixed to **'checkNotification'**. |
| callback | (checkInfo: NotificationCheckInfo) =&gt; NotificationCheckResult | No | Pointer to the notification verification function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try{
    notificationManager.off("checkNotification");
} catch (err){
    console.error(`notificationManager.off failed, code is ${err.code}, message is ${err.message}`);
}

```

