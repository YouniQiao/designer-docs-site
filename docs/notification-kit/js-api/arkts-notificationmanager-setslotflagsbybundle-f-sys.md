# setSlotFlagsByBundle

## setSlotFlagsByBundle

```TypeScript
function setSlotFlagsByBundle(bundle: BundleOption, slotFlags: long): Promise<void>
```

设定指定应用的通知提醒方式开关。使用Promise异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundle | BundleOption | Yes | 指定应用的包信息。 |
| slotFlags | long | Yes | 通知提醒方式开关标识位。 - bit0：铃声提示。0表示关闭，1表示开启。 - bit1：锁屏。0表示关闭，1表示开启。 - bit2：横幅。0表示关闭  ，1表示开启。 - bit3：亮屏。0表示关闭，1表示开启。 - bit4：振动。0表示关闭，1表示开启。 - bit5：状态栏通知图标。0表示关闭，1表示开启。 |

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
| 801 | Capability not supported. [since 18] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundle: notificationManager.BundleOption = {
    bundle: "bundleName1",
};

let slotFlags: number = 1;

notificationManager.setSlotFlagsByBundle(bundle, slotFlags).then(() => {
    console.info("setSlotFlagsByBundle success");
}).catch((err: BusinessError) => {
    console.error(`setSlotFlagsByBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

