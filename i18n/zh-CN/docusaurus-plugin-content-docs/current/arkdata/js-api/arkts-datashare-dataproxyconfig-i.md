# DataProxyConfig

Defines a struct for the data proxy configuration.

**起始版本：** 20

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## 导入模块

```TypeScript
import { dataShare } from '@kit.ArkData';
```

## maxValueLength

```TypeScript
maxValueLength?: DataProxyMaxValueLength
```

Sets the maximum length of the data proxy value. The default value is MAX_LENGTH_4K, indicating that the maximum value length is 4096 bytes. If the length of the value that is actually transferred or obtained exceeds the maximum value length specified by this parameter, the publish or get operation will fail. Default value: MAX_LENGTH_4K.

**类型：** DataProxyMaxValueLength

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

## type

```TypeScript
type: DataProxyType
```

Type of the data proxy.

**类型：** DataProxyType

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.DataShare.Consumer

