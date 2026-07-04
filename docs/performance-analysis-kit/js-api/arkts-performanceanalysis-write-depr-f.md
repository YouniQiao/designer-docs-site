# write

## write

```TypeScript
function write(eventName: string, eventType: EventType, keyValues: object): Promise<void>
```

Writes event information to the event file of the current day. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** write

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventName | string | Yes | Application event name. |
| eventType | EventType | Yes | Application event type. |
| keyValues | object | Yes | Application event key-value pair params. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to asynchronously process the callback in the **then()** and **catch()**methods when event writing succeeded or failed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};
hiAppEvent.write("test_event", hiAppEvent.EventType.FAULT, eventParams).then(() => {
  // Event writing success
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
}).catch((err: BusinessError) => {
  // Event writing error: Write the event to the event file after the invalid parameters in the event are ignored, or stop writing the event if the event verification fails.
  hilog.error(0x0000, 'hiAppEvent', `code: ${err.code}, message: ${err.message}`);
});

```


## write

```TypeScript
function write(eventName: string, eventType: EventType, keyValues: object, callback: AsyncCallback<void>): void
```

Writes event information to the event file of the current day. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** write

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventName | string | Yes | Application event name. |
| eventType | EventType | Yes | Application event type. |
| keyValues | object | Yes | Application event key-value pair params. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback function. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import { hilog } from '@kit.PerformanceAnalysisKit';

let eventParams: Record<string, number | string> = {
  "int_data": 100,
  "str_data": "strValue",
};
hiAppEvent.write("test_event", hiAppEvent.EventType.FAULT, eventParams, (err: BusinessError) => {
  if (err) {
    // Event writing error: Write the event to the event file after the invalid parameters in the event are ignored, or stop writing the event if the event verification fails.
    hilog.error(0x0000, 'hiAppEvent', `failed to write event, code: ${err.code}, message: ${err.message}`);
    return;
  }
  // Event writing success
  hilog.info(0x0000, 'hiAppEvent', `success to write event`);
});

```

