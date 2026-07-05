# setTargetDeviceStatus

## setTargetDeviceStatus

```TypeScript
function setTargetDeviceStatus(deviceType: string, status: long): Promise<void>
```

设置设备配对成功后的状态。当发布通知时，会根据各个设备的状态来确定当前设备的通知提醒方式。

**Since:** 18

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| deviceType | string | Yes | 设备类型。当前仅支持`headset`（可穿戴式音频设备）、`liteWearable`（轻量级智能穿戴设备）、`wearable`（智能穿戴设备）、`glasses`  （智能眼镜设备）、`current`（本设备）。 |
| status | long | Yes | 设备状态。 - bit0：设备是否正在被使用。0表示未使用，1表示使用中。 - bit1：当前设备使用者是否为机主。0表示为非机主，1表示为机主。 - bit2：  设备是否处于勿扰模式。0表示处于非勿扰模式，1表示处于勿扰模式。 |

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

notificationManager.setTargetDeviceStatus("current", 1).then(() => {
  console.info(`Succeeded in setting target device status.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set target device status. Code is ${err.code}, message is ${err.message}`);
});

```

