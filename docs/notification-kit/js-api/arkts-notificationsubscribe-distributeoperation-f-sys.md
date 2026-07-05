# distributeOperation

## distributeOperation

```TypeScript
function distributeOperation(hashcode: string, operationInfo?: OperationInfo): Promise<void>
```

触发指定通知的跨设备协同操作（例如通知跨设备点击跳转、通知跨设备快捷回复等）。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashcode | string | Yes | 通知唯一ID。 |
| operationInfo | OperationInfo | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600010 | Distributed operation failed. |
| 1600021 | Distributed operation timed out. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let hashcode: string = 'hashcode';
let operationInfo: notificationSubscribe.OperationInfo = {
  actionName: "actionName",
  userInput: "userInput",
  operationType: 1,
  buttonIndex: 1,
};
notificationSubscribe.distributeOperation(hashcode, operationInfo).then(() => {
  console.info("distributeOperation success");
}).catch((err: BusinessError) => {
  console.error(`distributeOperation fail: ${JSON.stringify(err)}`);
});

```

