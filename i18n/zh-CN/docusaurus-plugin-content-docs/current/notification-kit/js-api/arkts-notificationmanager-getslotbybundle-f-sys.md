# getSlotByBundle

## getSlotByBundle

```TypeScript
function getSlotByBundle(bundle: BundleOption, slotType: SlotType): Promise<NotificationSlot>
```

获取指定应用指定类型的通知渠道。使用Promise异步回调。 获取前需要先通过[addSlot]notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)创建通知渠道。

**起始版本：** 12

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundle | BundleOption | 是 | 指定应用的包信息。 |
| slotType | SlotType | 是 | 渠道类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;NotificationSlot> | 以Promise形式返回获取指定应用指定类型的通知渠道。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | Capability not supported. [since 18] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundle: notificationManager.BundleOption = {
    bundle: "bundleName1",
};

let slotType = notificationManager.SlotType.LIVE_VIEW;

notificationManager.getSlotByBundle(bundle, slotType).then((data: notificationManager.NotificationSlot) => {
    console.info(`getSlotByBundle success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
    console.error(`getSlotByBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

