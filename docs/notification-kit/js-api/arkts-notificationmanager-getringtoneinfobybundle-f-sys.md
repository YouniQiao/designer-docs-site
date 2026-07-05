# getRingtoneInfoByBundle

## getRingtoneInfoByBundle

```TypeScript
function getRingtoneInfoByBundle(bundle: BundleOption): Promise<RingtoneInfo>
```

获取应用自定义铃声信息。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RingtoneInfo> | Promise对象，返回应用自定义铃声信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600022 | The specified bundle is invalid. |
| 1600024 | The specified bundle has no custom ringtone information. |

**Example**

```TypeScript
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
  }

  onForeground(): void {
    try {
      let bundle: notificationManager.BundleOption = {
        bundle: "bundleName",
      };
      notificationManager.getRingtoneInfoByBundle(bundle)
        .then((ringtoneInfo: notificationManager.RingtoneInfo) => {
          console.info(`getRingtoneInfoByBundle success: ${JSON.stringify(ringtoneInfo)}`);
        }).catch((err: BusinessError) => {
        console.error(`getRingtoneInfoByBundle failed, code is ${err.code}, message is ${err.message}`);
      });
    } catch (err) {
      console.error(`getRingtoneInfoByBundle failed, code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

