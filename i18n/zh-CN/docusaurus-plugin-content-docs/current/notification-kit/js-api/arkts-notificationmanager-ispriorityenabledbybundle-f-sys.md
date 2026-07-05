# isPriorityEnabledByBundle

## isPriorityEnabledByBundle

```TypeScript
function isPriorityEnabledByBundle(bundle: BundleOption): Promise<PriorityEnableStatus>
```

获取应用通知优先级开关状态。

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundle | BundleOption | 是 | 指定应用的包信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PriorityEnableStatus> | Promise对象，返回包含应用通知优先级开关状态的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600003 | Failed to connect to the service. |
| 17700001 | The specified bundle name was not found. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const bundleOption : notificationManager.BundleOption = { bundle: 'bundleName', uid: 0 };
notificationManager.isPriorityEnabledByBundle(bundleOption).then((result : notificationManager.PriorityEnableStatus) => {
  hilog.info(0x0000, 'testTag', `isPriorityEnabledByBundle result is ${result}`);
}).catch((err: BusinessError) => {
  hilog.error(0x0000, 'testTag', `isPriorityEnabledByBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

