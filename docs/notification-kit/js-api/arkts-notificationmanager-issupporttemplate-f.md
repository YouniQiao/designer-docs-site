# isSupportTemplate

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void
```

在使用[通知模板]./notification/notificationTemplate:NotificationTemplate发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | 模板名称。当前仅支持'downloadTemplate'。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数。返回true表示支持该模板；返回false表示不支持该模板；调用失败返回错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let templateName: string = 'downloadTemplate';
let isSupportTemplateCallback = (err: BusinessError, data: boolean): void => {
  if (err) {
    console.error(`isSupportTemplate failed, code is ${err.code}, message is ${err.message}`);
  } else {
    console.info(`isSupportTemplate success, data: ${JSON.stringify(data)}`);
  }
}
notificationManager.isSupportTemplate(templateName, isSupportTemplateCallback);

```

## isSupportTemplate

```TypeScript
function isSupportTemplate(templateName: string): Promise<boolean>
```

在使用[通知模板]./notification/notificationTemplate:NotificationTemplate发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| templateName | string | Yes | 模板名称。当前仅支持'downloadTemplate'。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示支持该模板；返回false表示不支持该模板。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 1600001 | Internal error. |
| 1600002 | Marshalling or unmarshalling error. |
| 1600003 | Failed to connect to the service. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let templateName: string = 'downloadTemplate';
notificationManager.isSupportTemplate(templateName).then((data: boolean) => {
  console.info(`isSupportTemplate success, data: ${JSON.stringify(data)}`);
}).catch((err: BusinessError) => {
  console.error(`isSupportTemplate failed, code is ${err.code}, message is ${err.message}`);
});

```

