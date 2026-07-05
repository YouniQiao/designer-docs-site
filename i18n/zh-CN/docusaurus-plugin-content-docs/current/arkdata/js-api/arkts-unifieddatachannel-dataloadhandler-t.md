# DataLoadHandler

```TypeScript
type DataLoadHandler = (acceptableInfo?: DataLoadInfo) => UnifiedData | null
```

Defines a handler for lazy data loading. The data sender can dynamically generate data based on the information passed by the data receiver to implement more flexible and precise data interaction policies. This API is a synchronous function and is applicable to simple service logic. If the service logic is complex and the execution time lasts for more than 3s, you are advised to use the asynchronous handler [DelayedDataLoadHandler]unifiedDataChannel.DelayedDataLoadHandler.

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

| 类型 | 说明 |
| --- | --- |
| (acceptableInfo?: DataLoadInfo) => UnifiedData |  |
| null |  |

