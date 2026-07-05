# removeProcessor

## removeProcessor

```TypeScript
function removeProcessor(id: long): void
```

Removes the data processor of a reported event.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | long | Yes | ID of a data processor. The value must be greater than 0. The value is obtained by calling  [addProcessor]hiAppEvent.addProcessor or  [addProcessorFromConfig]hiAppEvent.addProcessorFromConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let processor: hiAppEvent.Processor = {
    name: 'analytics_demo'
  };
  let id: number = hiAppEvent.addProcessor(processor);
  // Remove a specified data processor based on the ID returned after the data processor is added.
  hiAppEvent.removeProcessor(id);
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to removeProcessor event, code=${error.code}`);
}

```

