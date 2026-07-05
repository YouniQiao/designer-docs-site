# setSilentReminderEnabled

## setSilentReminderEnabled

```TypeScript
function setSilentReminderEnabled(bundle: BundleOption, enabled: boolean): Promise<void>
```

设置静默提醒的开关状态。使用Promise进行异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| enabled | boolean | Yes | 表示是否开启通知静默提醒开关。true表示打开，false表示关闭。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let bundle: notificationManager.BundleOption = {
    bundle: "bundleName",
};
notificationManager.setSilentReminderEnabled(bundle, true).then(() => {
    hilog.info(0x0000, 'testTag', '%{public}s', `setSilentReminderEnabled success.`);
}).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', '%{public}s', `setSilentReminderEnabled failed, code is ${err.code}, message is ${err.message}`);
});

```

