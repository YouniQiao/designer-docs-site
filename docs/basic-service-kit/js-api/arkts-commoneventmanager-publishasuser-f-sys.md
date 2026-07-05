# publishAsUser

## publishAsUser

```TypeScript
function publishAsUser(event: string, userId: int, callback: AsyncCallback<void>): void
```

向指定用户发布公共事件。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发送的公共事件。 |
| userId | int | Yes | 表示指定向该用户ID发送此公共事件。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当公共事件发布成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1500003 | The common event sending frequency too high. [since 20] |
| 1500006 | Invalid userId. [since 21] |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |
| 1500009 | Failed to obtain system parameters. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Specify the user to whom the common event will be published.
let userId = 100;

// Publish a common event.
try {
    commonEventManager.publishAsUser('event', userId, (err: BusinessError) => {
      if (err) {
        console.error(`publishAsUser failed, code is ${err.code}, message is ${err.message}`);
        return;
      }
      console.info('publishAsUser');
    });
} catch (error) {
    let err: BusinessError = error as BusinessError;
    console.error(`publishAsUser failed, code is ${err.code}, message is ${err.message}`);
}

```

## publishAsUser

```TypeScript
function publishAsUser(
    event: string,
    userId: int,
    options: CommonEventPublishData,
    callback: AsyncCallback<void>
  ): void
```

向指定用户发布公共事件并指定发布信息。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.Notification.CommonEvent

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发布的公共事件。 |
| userId | int | Yes | 表示指定向该用户ID发送此公共事件。 |
| options | CommonEventPublishData | Yes | 表示发布公共事件的属性。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当公共事件发布成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 1500003 | The common event sending frequency too high. [since 20] |
| 1500006 | Invalid userId. [since 21] |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |
| 1500009 | Failed to obtain system parameters. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Information of the common event.
let options:commonEventManager.CommonEventPublishData = {
  code: 0,       // Initial code of the common event.
  data: 'initial data',// Initial data of the common event.
}

// Specify the user to whom the common event will be published.
let userId = 100;
// Publish a common event.
try {
  commonEventManager.publishAsUser('event', userId, options, (err: BusinessError) => {
    if (err) {
      console.error(`publishAsUser failed, code is ${err.code}, message is ${err.message}`);
      return;
    }
    console.info('publishAsUser');
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`publishAsUser failed, code is ${err.code}, message is ${err.message}`);
}

```

