# publish

## publish

```TypeScript
function publish(event: string, callback: AsyncCallback<void>): void
```

发布公共事件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发送的公共事件。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当公共事件发布成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1500003 | The common event sending frequency too high. [since 20] |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |
| 1500009 | Failed to obtain system parameters. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Publish a common event.
try {
  commonEventManager.publish('event', (err: BusinessError) => {
    if (err) {
      console.error(`Failed to publish common event. Code is ${err.code}, message is ${err.message}`);
      return;
    }
    console.info(`Succeeded in publishing common event.`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Failed to publish common event. Code is ${err.code}, message is ${err.message}`);
}

```

## publish

```TypeScript
function publish(event: string, options: CommonEventPublishData, callback: AsyncCallback<void>): void
```

发布公共事件。使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Notification.CommonEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 表示要发布的公共事件。 |
| options | CommonEventPublishData | Yes | 表示发布公共事件的属性。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当公共事件发布成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1500003 | The common event sending frequency too high. [since 20] |
| 1500007 | Failed to send the message to the common event service. |
| 1500008 | Failed to initialize the common event service. |
| 1500009 | Failed to obtain system parameters. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// Common event information. The following uses an ordered common event as an example.
let options: commonEventManager.CommonEventPublishData = {
  code: 0,
  data: 'initial data',
  isOrdered: true // The common event is an ordered one.
}

// Publish a common event.
try {
  commonEventManager.publish('event', options, (err: BusinessError) => {
    if (err) {
      console.error(`Failed to publish common event. Code is ${err.code}, message is ${err.message}`);
      return;
    }
    console.info(`Succeeded in publishing common event.`);
  });
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`Failed to publish common event. Code is ${err.code}, message is ${err.message}`);
}

```

