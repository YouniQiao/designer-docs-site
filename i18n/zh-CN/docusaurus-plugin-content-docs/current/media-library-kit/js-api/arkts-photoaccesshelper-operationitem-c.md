# OperationItem

Operation item

**起始版本：** 22

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## field

```TypeScript
field?: PhotoKeys
```

The field of the operation.

**类型：** PhotoKeys

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## operationType

```TypeScript
operationType: OperationType
```

The type of the operation

**类型：** OperationType

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## value

```TypeScript
value?: Array<OperationValueType>
```

The value of the operation. The value length follows operationType-specific limit N (max 10), truncated to first N if exceeded.

**类型：** Array<OperationValueType>

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

