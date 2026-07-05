# on

## on('checkNotification')

```TypeScript
function on(type: 'checkNotification', callback: (checkInfo: NotificationCheckInfo) => NotificationCheckResult): void
```

注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。 系统中每个[SlotType](arkts-notificationmanager-slottype-e.md#SlotType)只允许存在一个注册者。

**Since:** 10

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'checkNotification' | Yes | 回调函数类型名，固定为'checkNotification'。 |
| callback | (checkInfo: NotificationCheckInfo) => NotificationCheckResult | Yes | 消息验证函数指针。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onCheckNotification = (info : notificationManager.NotificationCheckInfo): notificationManager.NotificationCheckResult => {
    console.info(`====>OnCheckNotification info: ${JSON.stringify(info)}`);
    if(info.notificationId == 1){
        let result: notificationManager.NotificationCheckResult =  { code: 1, message: "testMsg1"};
        return result;
    } else {
        let result: notificationManager.NotificationCheckResult =   { code: 0, message: "testMsg0"};
        return result;
    }
}
try{
    notificationManager.on("checkNotification", onCheckNotification);
} catch (err){
    console.error(`notificationManager.on failed, code is ${err.code}, message is ${err.message}`);
}

```

## on('checkNotification')

```TypeScript
function on(type: 'checkNotification', checkRequest: NotificationCheckRequest,
    callback: (checkInfo: NotificationCheckInfo) => Promise<NotificationCheckResult>): void
```

注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。使用Promise异步回调。 系统中每个[SlotType](arkts-notificationmanager-slottype-e.md#SlotType)只允许存在一个注册者。

**Since:** 11

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'checkNotification' | Yes | 回调函数类型名，固定为'checkNotification'。 |
| checkRequest | NotificationCheckRequest | Yes | 通知请求验证内容。 |
| callback | (checkInfo: NotificationCheckInfo) => Promise&lt;NotificationCheckResult> | Yes | 消息验证函数指针。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

try{
  notificationManager.on('checkNotification',{
    contentType: notificationManager.ContentType.NOTIFICATION_CONTENT_LIVE_VIEW,
    slotType: notificationManager.SlotType.LIVE_VIEW ,
    extraInfoKeys: ["event"],
  },
    async (checkInfo)=>{
      return { code: 1, message: "INVALID_PARAMETERS"};
  },);
} catch (err) {
  console.error(`notificationManager.on failed, code is ${err.code}, message is ${err.message}`);
}

```

