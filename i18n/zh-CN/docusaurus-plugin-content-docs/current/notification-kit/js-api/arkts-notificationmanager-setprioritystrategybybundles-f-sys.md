# setPriorityStrategyByBundles

## setPriorityStrategyByBundles

```TypeScript
function setPriorityStrategyByBundles(strategies: Map<BundleOption, long>): Promise<void>
```

批量设置应用通知优先策略。使用Promise异步回调。

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategies | Map&lt;BundleOption, long> | 是 | 应用通知优先策略的键值对集合。与  [PriorityStrategyStatus]notificationManager.PriorityStrategyStatus的枚举进行按位或运算得到值。 |

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
| 1600003 | Failed to connect to the service. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const bundleOption : notificationManager.BundleOption = { bundle: 'bundleName', uid: 1000 };
let strategies: Map<notificationManager.BundleOption, number> = new Map([[bundleOption, notificationManager.PriorityStrategyStatus.STATUS_APPLICATION_DEFINED]]);
notificationManager.setPriorityStrategyByBundles(strategies).then(() => {
  hilog.info(0x0000, 'testTag', `setPriorityStrategyByBundles success`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `setPriorityStrategyByBundles failed, code is ${err.code}, message is ${err.message}`);
});

```

