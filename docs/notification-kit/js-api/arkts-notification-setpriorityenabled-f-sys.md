# setPriorityEnabled (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## setPriorityEnabled

```TypeScript
function setPriorityEnabled(enable: boolean): Promise<void>
```

Sets the enabling status of the priority notification.

**Since:** 23

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable the priority notification.<br> - **true**: The priority notificationis enabled.<br> - **false**: The priority notification is disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

notificationManager.setPriorityEnabled(false).then(() => {
    hilog.info(0x0000, 'testTag', `setPriorityEnabled success`);
}).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', `setPriorityEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

