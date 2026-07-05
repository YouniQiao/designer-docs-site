# addProcessor

## Modules to Import

```TypeScript
import { hiAppEvent } from '@ohos.hiviewdfx.hiAppEvent';
```

## addProcessor

```TypeScript
function addProcessor(processor: Processor): number
```

Adds the configuration information of the data processor, such as name of the data processor. This is a synchronous API and involves time-consuming operations. To ensure performance, you are advised to use the asynchronous API [addProcessorFromConfig](arkts-performanceanalysis-addprocessorfromconfig-f.md#addprocessorfromconfig-1) or use a child thread.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| processor | Processor | Yes | Data processor. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the data processor of the reported event, which uniquely identifies the data processor andcan be used to remove the data processor. If the operation fails, **-1** is returned. If the operation issuccessful, a value greater than **0** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let processor: hiAppEvent.Processor = {
    name: 'analytics_demo'
  };
  let id: number = hiAppEvent.addProcessor(processor);
  hilog.info(0x0000, 'hiAppEvent', `addProcessor event was successful, id=${id}`);
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to addProcessor event, code=${error.code}`);
}

```

