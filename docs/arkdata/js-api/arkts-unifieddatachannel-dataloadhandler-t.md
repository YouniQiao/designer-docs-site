# DataLoadHandler

```TypeScript
type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null
```

Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and the execution time lasts for more than 3s, you are advised to use the asynchronous handler [DelayedDataLoadHandler]unifiedDataChannel.DelayedDataLoadHandler.

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

| Type | Description |
| --- | --- |
| (acceptableInfo?: DataLoadInfo) => UnifiedData |  |
| null |  |

