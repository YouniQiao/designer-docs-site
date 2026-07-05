# DataLoadParams

Defines the data loading policy for the data sender in the lazy loading scenario. If both **loadHandler** and **delayedDataLoadHandler** are passed, **delayedDataLoadHandler** is preferentially used, and **loadHandler** does not take effect.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## dataLoadInfo

```TypeScript
dataLoadInfo: DataLoadInfo
```

Indicates data loading information.

**类型：** DataLoadInfo

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## delayedDataLoadHandler

```TypeScript
delayedDataLoadHandler?: DelayedDataLoadHandler
```

Indicates the callback function for deferred and non-blocking data loading. This handler is optional. If it is provided, it will take precedence over the synchronous DataLoadHandler (i.e., DataLoadHandler will be ignored).

**类型：** DelayedDataLoadHandler

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## loadHandler

```TypeScript
loadHandler: DataLoadHandler
```

Indicates the callback function for loading data.

**类型：** DataLoadHandler

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

