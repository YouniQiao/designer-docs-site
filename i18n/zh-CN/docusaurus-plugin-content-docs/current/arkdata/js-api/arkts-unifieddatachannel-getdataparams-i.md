# GetDataParams

Represents the parameters for obtaining data from UDMF, including the destination directory, option for resolving file conflicts, and progress indicator type. For details, see [Obtaining Data Asynchronously Through Drag-and-Drop].

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## progressIndicator

```TypeScript
progressIndicator: ProgressIndicator
```

Indicates whether to use default system progress indicator.

**类型：** ProgressIndicator

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## fileConflictOptions

```TypeScript
fileConflictOptions?: FileConflictOptions
```

Indicates file conflict options when dest path has file with same name.

**类型：** FileConflictOptions

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## acceptableInfo

```TypeScript
acceptableInfo?: DataLoadInfo
```

Indicates the supported data information.

**类型：** DataLoadInfo

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## destUri

```TypeScript
destUri?: string
```

Indicates the dest path uri where copy file will be copied to sandbox of application.

**类型：** string

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## dataProgressListener

```TypeScript
dataProgressListener: DataProgressListener
```

Indicates progress and data listener when getting unified data.

**类型：** DataProgressListener

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

