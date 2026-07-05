# FileConflictOptions

```TypeScript
enum FileConflictOptions
```

Enumerates the options for resolving file copy conflicts.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## OVERWRITE

```TypeScript
OVERWRITE = 0
```

Overwrite the file with the same name in the destination directory.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## SKIP

```TypeScript
SKIP = 1
```

Skip the file if there is a file with the same name in the destination directory.

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

