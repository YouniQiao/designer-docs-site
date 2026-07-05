# getDoNotDisturbProfile

## getDoNotDisturbProfile

```TypeScript
function getDoNotDisturbProfile(id: long): Promise<DoNotDisturbProfile>
```

查询勿扰模式配置信息。使用Promise异步回调。

**起始版本：** 13

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | long | 是 | 勿扰模式编号。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DoNotDisturbProfile> | Promise对象，返回勿扰模式的配置信息。 |

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
| 1600019 | The do-not-disturb profile does not exist. |

**示例：**

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

**起始版本：** 23

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | long | 是 | 勿扰模式编号。 |
| userId | int | 是 | 待查询勿扰模式配置信息的用户。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;DoNotDisturbProfile> | Promise对象，返回勿扰模式的配置信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 801 | Capability not supported. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600008 | The user does not exist. |
| 1600019 | The do-not-disturb profile does not exist. |

**示例：**

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

