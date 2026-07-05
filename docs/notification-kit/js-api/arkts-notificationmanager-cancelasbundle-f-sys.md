# cancelAsBundle

## cancelAsBundle

```TypeScript
function cancelAsBundle(
    id: int,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void
```

取消代理通知。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | int | Yes | 通知ID。 |
| representativeBundle | string | Yes | 被代理应用的包名。 |
| userId | int | Yes | 用户ID。 |
| callback | AsyncCallback&lt;void> | Yes | 取消代理通知的回调方法。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// cancelAsBundle
let cancelAsBundleCallback = (err: BusinessError): void => {
    if (err) {
        console.error(`cancelAsBundle failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info("cancelAsBundle success");
    }
}
// Bundle name of the application whose notification function is taken over by the reminder agent
let representativeBundle: string = "com.example.demo";
// Use the actual user ID when calling the API.
let userId: number = 100;
notificationManager.cancelAsBundle(0, representativeBundle, userId, cancelAsBundleCallback);

```

## cancelAsBundle

```TypeScript
function cancelAsBundle(id: int, representativeBundle: string, userId: int): Promise<void>
```

取消代理通知。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | int | Yes | 通知ID。 |
| representativeBundle | string | Yes | 被代理应用的包名。 |
| userId | int | Yes | 用户ID。 |

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
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Bundle name of the application whose notification function is taken over by the reminder agent
let representativeBundle: string = "com.example.demo";
// Use the actual user ID when calling the API.
let userId: number = 100;
notificationManager.cancelAsBundle(0, representativeBundle, userId).then(() => {
    console.info("cancelAsBundle success");
}).catch((err: BusinessError) => {
    console.error(`cancelAsBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

## cancelAsBundle

```TypeScript
function cancelAsBundle(representativeBundle: BundleOption, id: int): Promise<void>
```

取消代理通知。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| representativeBundle | BundleOption | Yes | 被代理应用的包信息。 |
| id | int | Yes | 通知ID。 |

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
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 1600012 | No memory space. |
| 17700001 | The specified bundle name was not found. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let representativeBundle: notificationManager.BundleOption = {
  bundle: "bundleName1",
};
notificationManager.cancelAsBundle(representativeBundle, 1).then(() => {
    console.info("cancelAsBundle success");
}).catch((err: BusinessError) => {
    console.error(`cancelAsBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

