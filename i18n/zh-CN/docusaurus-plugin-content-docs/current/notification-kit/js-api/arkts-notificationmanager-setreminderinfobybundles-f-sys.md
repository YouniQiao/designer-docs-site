# setReminderInfoByBundles

## setReminderInfoByBundles

```TypeScript
function setReminderInfoByBundles(reminderInfos: Array<NotificationReminderInfo>) : Promise<void>
```

批量设置指定应用提醒信息。使用Promise异步回调。

**起始版本：** 21

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| reminderInfos | Array&lt;NotificationReminderInfo> | 是 | 设置应用通知提醒信息的列表。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let bundle: notificationManager.BundleOption = {
    bundle: "bundleName",
};
let reminderInfos: Array<notificationManager.NotificationReminderInfo> = [
    {
        bundle: bundle,
        reminderFlags: 59,
        silentReminderEnabled: false
    }
];
notificationManager.setReminderInfoByBundles(reminderInfos).then(() => {
    console.info('SetReminderInfoByBundles success.');
}).catch((err: BusinessError) => {
    console.error(`SetReminderInfoByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

