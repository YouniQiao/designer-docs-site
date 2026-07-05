# getDoNotDisturbProfile

## getDoNotDisturbProfile

```TypeScript
function getDoNotDisturbProfile(id: long): Promise<DoNotDisturbProfile>
```

查询勿扰模式配置信息。使用Promise异步回调。

**Since:** 13

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | long | Yes | 勿扰模式编号。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DoNotDisturbProfile> | Promise对象，返回勿扰模式的配置信息。 |

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
| 1600019 | The do-not-disturb profile does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

notificationManager.getDoNotDisturbProfile(1).then((data: notificationManager.DoNotDisturbProfile) => {
  console.info(`getDoNotDisturbProfile success: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getDoNotDisturbProfile failed, code is ${err.code}, message is ${err.message}`);
});

```

## getDoNotDisturbProfile

```TypeScript
function getDoNotDisturbProfile(id: long, userId: int): Promise<DoNotDisturbProfile>
```

查询指定用户的勿扰模式配置信息。使用Promise异步回调。

**Since:** 23

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | long | Yes | 勿扰模式编号。 |
| userId | int | Yes | 待查询勿扰模式配置信息的用户。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DoNotDisturbProfile> | Promise对象，返回勿扰模式的配置信息。 |

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
| 1600019 | The do-not-disturb profile does not exist. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let id : number = 101;
let userId : number = 100;

notificationManager.getDoNotDisturbProfile(id, userId).then((data: notificationManager.DoNotDisturbProfile) => {
  console.info(`getDoNotDisturbProfile success: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`getDoNotDisturbProfile failed, code is ${err.code}, message is ${err.message}`);
});

```

