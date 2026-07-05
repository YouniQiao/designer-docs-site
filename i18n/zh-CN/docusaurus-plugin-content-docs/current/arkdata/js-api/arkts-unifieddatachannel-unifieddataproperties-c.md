# UnifiedDataProperties

Defines the properties of the data records in the unified data object, including the timestamp, tag, pasting range, and additional data.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## uriAuthorizationPolicies

```TypeScript
uriAuthorizationPolicies?: Array<UriPermission>
```

Defines URI authorization policies for drag intention.

**类型：** Array<UriPermission>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## shareOptions

```TypeScript
shareOptions?: ShareOptions
```

Range, in which [UnifiedData]unifiedDataChannel.UnifiedDataProperties can be used. The default value is **CROSS_APP**.

**类型：** ShareOptions

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## getDelayData

```TypeScript
getDelayData?: GetDelayData
```

Callback for obtaining the deferred data. Currently, it can be used only in the pasteboard application of the same device. The default value is **undefined**.

**类型：** GetDelayData

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## extras

```TypeScript
extras?: Record<string, object>
```

Object of the dictionary type used to set other properties. The default value is an empty dictionary object.

**类型：** Record<string, object>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
extras?: Record<string, RecordData>
```

extra property data. key-value pairs.

**类型：** Record<string, RecordData>

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## tag

```TypeScript
tag?: string
```

Customized tag. The default value is an empty string.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## timestamp

```TypeScript
readonly timestamp?: Date
```

Timestamp when [UnifiedData]unifiedDataChannel.UnifiedDataProperties is generated. The default value is January 1, 1970 (UTC).

**类型：** Date

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

