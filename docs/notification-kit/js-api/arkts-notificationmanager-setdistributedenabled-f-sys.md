# setDistributedEnabled

## setDistributedEnabled

```TypeScript
function setDistributedEnabled(enable: boolean, deviceType: string): Promise<void>
```

设置设备是否支持跨设备协同通知。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 表示指定设备类型是否支持跨设备协同通知。true表示支持，false表示不支持。 |
| deviceType | string | Yes | 设备类型。当前仅支持以下类型： - headset（可穿戴式音频设备）。 - liteWearable（轻量级智能穿戴设备）。 - wearable（  智能穿戴设备）。 - current（本设备）。 - 2in1（PC设备）。 - tablet（平板）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果。Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  }

  onForeground(): void {
    try {
      let isEnable: boolean = true;
      let deviceType: string = "wearable";
      notificationManager.setDistributedEnabled(isEnable, deviceType).then(() => {
        console.info('setDistributedEnabled succeeded.');
      }).catch((err: BusinessError) => {
        console.error(`setDistributedEnabled failed. Code is ${err.code}, message is ${err.message}`);
      });
    } catch (err) {
      console.error(`setDistributedEnabled failed. Code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

