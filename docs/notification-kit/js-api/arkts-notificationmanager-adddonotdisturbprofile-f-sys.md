# addDoNotDisturbProfile

## addDoNotDisturbProfile

```TypeScript
function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>): Promise<void>
```

添加勿扰模式配置信息。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templates | Array&lt;DoNotDisturbProfile> | Yes | 勿扰模式的配置信息。 |

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
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let trustlist: Array<notificationManager.BundleOption> = [
  {
    bundle: 'com.example.bundleName',
    uid: 0
  },
  {
    bundle: 'com.example.bundleName1',
    uid: 1
  }
]
let templates: Array<notificationManager.DoNotDisturbProfile> = [
  {
    id: 3,
    name: 'working mode',
    trustlist: trustlist
  }
]

notificationManager.addDoNotDisturbProfile(templates).then(() => {
  console.info("addDoNotDisturbProfile success.");
}).catch((err: BusinessError) => {
  console.error(`addDoNotDisturbProfile failed, code is ${err.code}, message is ${err.message}`);
});

```

## addDoNotDisturbProfile

```TypeScript
function addDoNotDisturbProfile(templates: Array<DoNotDisturbProfile>, userId: int): Promise<void>
```

向指定用户添加勿扰模式配置信息。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templates | Array&lt;DoNotDisturbProfile> | Yes | 勿扰模式的配置信息。 |
| userId | int | Yes | 添加勿扰模式配置信息的用户ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600008 | The user does not exist. |
| 1600012 | No memory space. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let userId : number = 100;
let trustlist: Array<notificationManager.BundleOption> = [
  {
    // Replace it as required.
    bundle: 'bundleName',
    uid: 0
  },
  {
    // Replace it as required.
    bundle: 'bundleName1',
    uid: 1
  }
]
let templates: Array<notificationManager.DoNotDisturbProfile> = [
  {
    id: 3,
    name: 'working mode',
    trustlist: trustlist
  }
]

notificationManager.addDoNotDisturbProfile(templates, userId).then(() => {
  console.info("addDoNotDisturbProfile success.");
}).catch((err: BusinessError) => {
  console.error(`addDoNotDisturbProfile failed, code is ${err.code}, message is ${err.message}`);
});

```

