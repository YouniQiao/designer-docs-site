# getPriorityEnabledByBundles

## getPriorityEnabledByBundles

```TypeScript
function getPriorityEnabledByBundles(bundles: Array<BundleOption>): Promise<Map<BundleOption, boolean>>
```

批量获取应用通知优先级开关状态。使用Promise异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption> | 是 | 应用包信息数组。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, boolean>> | Promise对象，返回应用通知优先级开关状态的键值对集合的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const bundleOption : notificationManager.BundleOption = { bundle: 'bundleName', uid: 1000 };
let bundles: Array<notificationManager.BundleOption> = new Array(bundleOption);
notificationManager.getPriorityEnabledByBundles(bundles).then((switches: Map<notificationManager.BundleOption, boolean>) => {
  switches.forEach((value, key) => {
    hilog.info(0x0000, 'testTag', `getPriorityEnabledByBundles switches: ${key.bundle} ${key.uid}, ${value}`);
  })
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `getPriorityEnabledByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

