# ApplicationDefinedRecord

Represents the custom data type for applications only. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of custom data types of applications. Applications can extend custom data types based on this class.

**继承实现关系：** ApplicationDefinedRecord继承自：UnifiedRecord。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## applicationDefinedType

```TypeScript
get applicationDefinedType(): string
```

Indicates the type of data, should always be started with 'ApplicationDefined.', will return error otherwise

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set applicationDefinedType(value: string)
```

Indicates the type of data, should always be started with 'ApplicationDefined.', will return error otherwise

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## rawData

```TypeScript
get rawData(): Uint8Array
```

Indicates the raw data of application defined data

**类型：** Uint8Array

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set rawData(value: Uint8Array)
```

Indicates the raw data of application defined data

**类型：** Uint8Array

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

