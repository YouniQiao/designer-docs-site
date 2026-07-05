# ModelConfig

Manages configurations of the embedding model.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## 导入模块

```TypeScript
import { intelligence } from '@kit.ArkData';
```

## modelInfo

```TypeScript
modelInfo?: CloudModelInfo
```

Indicates cloud embedding model information.

**类型：** CloudModelInfo

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## isNpuAvailable

```TypeScript
isNpuAvailable: boolean
```

Indicates whether NPU is used.

**类型：** boolean

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## networkPolicy

```TypeScript
networkPolicy?: NetworkPolicy
```

Indicates cloud embedding model network policy.

**类型：** NetworkPolicy

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## cachePath

```TypeScript
cachePath?: string
```

If NPU is used for accelerating, a local path is required for model caching.

**类型：** string

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

## version

```TypeScript
version: ModelVersion
```

Version of the model. The outputs of text or image embedding models with the same version are in the same vector space.

**类型：** ModelVersion

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

