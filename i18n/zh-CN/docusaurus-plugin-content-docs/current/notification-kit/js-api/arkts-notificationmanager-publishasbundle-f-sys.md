# publishAsBundle

## publishAsBundle

```TypeScript
function publishAsBundle(
    request: NotificationRequest,
    representativeBundle: string,
    userId: int,
    callback: AsyncCallback<void>
  ): void
```

发布代理通知。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | NotificationRequest | 是 | 用于设置要发布通知的内容和相关配置信息。 |
| representativeBundle | string | 是 | 被代理应用的包名。 |
| userId | int | 是 | 用户ID。 |
| callback | AsyncCallback&lt;void> | 是 | 发布代理通知的回调方法。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | The device does not support geofencing. [since 23] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600015 | The current notification status does not support duplicate configurations. |
| 1600016 | The notification version for this update is too low. |
| 1600020 | The application is not allowed to send notifications due to permission  settings. |
| 1600025 | Geofencing disabled. [since 23] |
| 1600026 | The location switch is off. [since 23] |
| 1600027 | The "Awareness & suggestions" switch of the location-based service is  off. [since 23] |
| 2300007 | Network unreachable. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// publishAsBundle回调
let callback = (err: BusinessError): void => {
    if (err) {
        console.error(`publishAsBundle failed, code is ${err.code}, message is ${err.message}`);
    } else {
        console.info("publishAsBundle success");
    }
}
// 被代理应用的包名
let representativeBundle: string = "com.example.demo";
// 用户ID，使用时需替换为真实的userId。
let userId: number = 100;
// NotificationRequest对象
let request: notificationManager.NotificationRequest = {
    id: 1,
    content: {
        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
        normal: {
            title: "test_title",
            text: "test_text",
            additionalText: "test_additionalText"
        }
    }
};
notificationManager.publishAsBundle(request, representativeBundle, userId, callback);

```

## publishAsBundle

```TypeScript
function publishAsBundle(request: NotificationRequest, representativeBundle: string, userId: int): Promise<void>
```

发布代理通知。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| request | NotificationRequest | 是 | 用于设置要发布通知的内容和相关配置信息。 |
| representativeBundle | string | 是 | 被代理应用的包名。 |
| userId | int | 是 | 用户ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | The device does not support geofencing. [since 23] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600015 | The current notification status does not support duplicate configurations. |
| 1600016 | The notification version for this update is too low. |
| 1600020 | The application is not allowed to send notifications due to permission  settings. |
| 1600025 | Geofencing disabled. [since 23] |
| 1600026 | The location switch is off. [since 23] |
| 1600027 | The "Awareness & suggestions" switch of the location-based service is  off. [since 23] |
| 2300007 | Network unreachable. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 被代理应用的包名
let representativeBundle: string = "com.example.demo";
// 用户ID，使用时需替换为真实的userId。
let userId: number = 100;
// NotificationRequest对象
let request: notificationManager.NotificationRequest = {
    id: 1,
    content: {
        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
        normal: {
            title: "test_title",
            text: "test_text",
            additionalText: "test_additionalText"
        }
    }
};
notificationManager.publishAsBundle(request, representativeBundle, userId).then(() => {
    console.info("publishAsBundle success");
}).catch((err: BusinessError) => {
    console.error(`publishAsBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

## publishAsBundle

```TypeScript
function publishAsBundle(representativeBundle: BundleOption, request: NotificationRequest): Promise<void>
```

发布代理通知。使用Promise异步回调。

**起始版本：** 12

**需要权限：** 

 ohos.permission.NOTIFICATION_CONTROLLER and ohos.permission.NOTIFICATION_AGENT_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| representativeBundle | BundleOption | 是 | 被代理应用的包信息。 |
| request | NotificationRequest | 是 | 用于设置要发布通知的内容和相关配置信息。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | The device does not support geofencing. [since 23] |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |
| 1600004 | Notification disabled. |
| 1600005 | Notification slot disabled. |
| 1600007 | The notification does not exist. |
| 1600008 | The user does not exist. |
| 1600009 | The notification sending frequency reaches the upper limit. |
| 1600012 | No memory space. |
| 1600015 | The current notification status does not support duplicate configurations. |
| 1600016 | The notification version for this update is too low. |
| 1600020 | The application is not allowed to send notifications due to permission  settings. |
| 1600025 | Geofencing disabled. [since 23] |
| 1600026 | The location switch is off. [since 23] |
| 1600027 | The "Awareness & suggestions" switch of the location-based service is  off. [since 23] |
| 2300007 | Network unreachable. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 被代理应用的包信息
let representativeBundle: notificationManager.BundleOption = {
  bundle: "bundleName1",
};
// NotificationRequest对象
let request: notificationManager.NotificationRequest = {
    id: 1,
    content: {
        notificationContentType: notificationManager.ContentType.NOTIFICATION_CONTENT_BASIC_TEXT,
        normal: {
            title: "test_title",
            text: "test_text",
            additionalText: "test_additionalText"
        }
    }
};
notificationManager.publishAsBundle(representativeBundle, request).then(() => {
    console.info("publishAsBundle success");
}).catch((err: BusinessError) => {
    console.error(`publishAsBundle failed, code is ${err.code}, message is ${err.message}`);
});

```

