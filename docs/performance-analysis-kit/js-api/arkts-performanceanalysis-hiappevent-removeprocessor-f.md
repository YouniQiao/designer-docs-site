# removeProcessor

## Modules to Import

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

<a id="removeprocessor"></a>
## removeProcessor

```TypeScript
function removeProcessor(id: number): void
```

Removes the data processor of a reported event.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-hiAppEvent-function removeProcessor(id: long): void--><!--Device-hiAppEvent-function removeProcessor(id: long): void-End-->

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | number | Yes | ID of a data processor. The value must be greater than **0**. The value is obtained by calling [addProcessor](arkts-performanceanalysis-hiappevent-addprocessor-f.md#addprocessor-1) or [addProcessorFromConfig](arkts-performanceanalysis-hiappevent-addprocessorfromconfig-f.md#addprocessorfromconfig-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

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

