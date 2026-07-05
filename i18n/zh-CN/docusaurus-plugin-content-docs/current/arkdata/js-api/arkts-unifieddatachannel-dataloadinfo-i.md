# DataLoadInfo

Defines type and quantity of the data to load. - Used by the **data sender** to define the data range that can be provided. This field is mandatory. - Used by the **data receiver** to define the expected data type and quantity. This field is optional.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## types

```TypeScript
types?: Set<string>
```

Represents the data type or supported types to load. <br>This parameter is mandatory when used by the data provider.

**类型：** Set<string>

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## recordCount

```TypeScript
recordCount?: long
```

Indicates the maximum number of data records to be loaded.

**类型：** long

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

