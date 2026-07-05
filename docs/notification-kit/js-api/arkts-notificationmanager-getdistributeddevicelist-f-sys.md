# getDistributedDeviceList

## getDistributedDeviceList

```TypeScript
function getDistributedDeviceList(): Promise<Array<string>>
```

查询支持跨设备协同通知的设备类型。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | 返回支持跨设备协同通知的设备列表。Promise对象。 |

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
      notificationManager.getDistributedDeviceList().then((data: Array<string>) => {
        console.info('getDistributedDeviceList succeeded, result = ' + data);
      }).catch((err: BusinessError) => {
        console.error(`getDistributedDeviceList failed. Code is ${err.code}, message is ${err.message}`);
      });
    } catch (err) {
      console.error(`getDistributedDeviceList failed. Code is ${err.code}, message is ${err.message}`);
    }
  }
}

```

