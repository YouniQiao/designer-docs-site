# setDistributedEnabledBySlot

## setDistributedEnabledBySlot

```TypeScript
function setDistributedEnabledBySlot(slot: SlotType, deviceType: string, enabled: boolean): Promise<void>
```

设置指定渠道的通知是否支持通知跨设备协同至指定类型设备。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| slot | SlotType | Yes | 通知渠道类型。 |
| deviceType | string | Yes | 设备类型。 从API version 18开始，支持的设备类型如下： - headset（可穿戴式音频设备）。 - liteWearable（轻量级智  能穿戴设备）。 - wearable（智能穿戴设备）。 从API version 20开始，支持的设备类型如下： - headset（可穿戴式音频设备）。 - liteWearable（轻量级智能穿  戴设备）。 - wearable（智能穿戴设备）。 - current（本设备）。 - 2in1（PC设备）。 - tablet（平板）。 |
| enabled | boolean | Yes | 是否开启通知跨设备协同开关。取值为true表示打开，取值为false表示关闭。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let slot: notificationManager.SlotType = notificationManager.SlotType.SOCIAL_COMMUNICATION;
let deviceType: string = 'wearable';
let enabled: boolean = true;

notificationManager.setDistributedEnabledBySlot(slot, deviceType, enabled).then(() => {
    hilog.info(0x0000, 'testTag', '%{public}s', `setDistributedEnabledBySlot success.`);
}).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', '%{public}s', `setDistributedEnabledBySlot failed, code is ${err.code}, message is ${err.message}`);
});

```

