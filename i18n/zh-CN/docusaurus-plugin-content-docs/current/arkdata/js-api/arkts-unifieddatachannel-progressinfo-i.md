# ProgressInfo

Represents the progress information.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## progress

```TypeScript
progress: int
```

Progress of the drag task, in percentage. The value is an integer ranging from -1 to 100. The value **-1** indicates a failure to obtain data, and the value **100** indicates data is obtained.

**类型：** int

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## status

```TypeScript
status: ListenerStatus
```

Status code of the drag task reported by the system.

**类型：** ListenerStatus

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

