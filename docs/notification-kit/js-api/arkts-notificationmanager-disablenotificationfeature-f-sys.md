# disableNotificationFeature

## disableNotificationFeature

```TypeScript
function disableNotificationFeature(disabled:boolean, bundleList: Array<string>): Promise<void>
```

将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。支持启用或关闭该功能。

**Since:** 18

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | boolean | Yes | 是否启用通知发布权限管控名单（true：开启，false：关闭）。 |
| bundleList | Array&lt;string> | Yes | 指定通知发布权限管控名单的应用列表，使用包名代表应用。 |

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
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let disabled: boolean = true;
let bundleList: Array<string> = ["com.example.myapplication"];
try {
  notificationManager.disableNotificationFeature(disabled, bundleList).then(() => {
    hilog.info(0x0000, 'testTag', '%{public}s', `disableNotificationFeature success.`);
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', '%{public}s', `disableNotificationFeature failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (err) {
  hilog.error(0x0000, 'testTag', '%{public}s', `testTag failed, code is ${err.code}, message is ${err.message}`);
}

```

## disableNotificationFeature

```TypeScript
function disableNotificationFeature(disabled: boolean, bundleList: Array<string>, userId: int): Promise<void>
```

将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER or ohos.permission.MANAGE_EDM_POLICY

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disabled | boolean | Yes | 表示是否启用通知发布权限管控名单。true表示启用，false表示关闭。 |
| bundleList | Array&lt;string> | Yes | 指定通知发布权限管控名单的应用列表，使用包名表示应用。 |
| userId | int | Yes | 表示用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let disabled: boolean = true;
let bundleList: Array<string> = ["com.example.myapplication"];
let userId: number = 1;
try {
  notificationManager.disableNotificationFeature(disabled, bundleList, userId).then(() => {
    hilog.info(0x0000, 'testTag', '%{public}s', `disableNotificationFeature success.`);
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, 'testTag', '%{public}s', `disableNotificationFeature failed, code is ${err.code}, message is ${err.message}`);
  });
} catch (err) {
  hilog.error(0x0000, 'testTag', '%{public}s', `testTag failed, code is ${err.code}, message is ${err.message}`);
}

```

