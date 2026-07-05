# sendEvent

## Modules to Import

```TypeScript
import { accessibility } from '@ohos.accessibility';
```

## sendEvent

```TypeScript
function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void
```

Sends an accessibility event. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** sendAccessibilityEvent(event:

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | EventInfo | Yes | Accessibility event. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation fails, **err** thatcontains data is returned. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let eventInfo: accessibility.EventInfo = ({
  type: 'click',
  bundleName: 'com.example.MyApplication',
  triggerAction: 'click',
});

accessibility.sendEvent(eventInfo, (err: BusinessError) => {
  if (err) {
    console.error(`failed to sendEvent, Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`succeeded in sending event, eventInfo is ${eventInfo}`);
});

```


## sendEvent

```TypeScript
function sendEvent(event: EventInfo): Promise<void>
```

Sends an accessibility event. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** sendAccessibilityEvent(event:

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | EventInfo | Yes | Accessibility event. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Example**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let eventInfo: accessibility.EventInfo = ({
  type: 'click',
  bundleName: 'com.example.MyApplication',
  triggerAction: 'click',
});

accessibility.sendEvent(eventInfo).then(() => {
  console.info(`succeeded in sending event, eventInfo is ${eventInfo}`);
}).catch((err: BusinessError) => {
  console.error(`failed to sendEvent, Code is ${err.code}, message is ${err.message}`);
});

```

