# ContextRecoveryInfo

Context information of the exit status of PhotoPicker, which can be used for on-site recovery of PhotoPicker next time.

**起始版本：** 21

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## selectedRecommendationType

```TypeScript
selectedRecommendationType: int
```

Enum value of the recommendation content selected by the user during the last selection (see `RecommendationType`). The default value is 0.

**类型：** int

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## fileSize

```TypeScript
fileSize?: int
```

size of the first fully visible photo in the last selection interface. the default value is 0. Unit: Byte, The value must be an integer greater than or equal to 0.

**类型：** int

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## displayName

```TypeScript
displayName: string
```

Filename of the first fully visible photo in the last selection interface. The default value is empty string.

**类型：** string

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## sortRule

```TypeScript
sortRule?: string
```

the sort rule by the user during the last selection. The default value is empty string.

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## time

```TypeScript
time: long
```

Timestamp of the first fully visible photo in the last selection interface. The default value is 0. Unit: ms, The value must be greater than or equal to 0.

**类型：** long

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## recommendationType

```TypeScript
recommendationType: int
```

Enum value of the recommendation content set by the user during the last selection (see `RecommendationType`). The default value is 0.

**类型：** int

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## albumUri

```TypeScript
albumUri: string
```

The album URI from which the user exited during the last selection. The default value is empty string.

**类型：** string

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## version

```TypeScript
version: int
```

Context data version number for validating compatibility of context recovery.

**类型：** int

**起始版本：** 21

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

## gridLevel

```TypeScript
gridLevel?: GridLevel
```

Enum value of the grid level by the user during the last selection. This information is only included when gridPinchModeType is configured as FULL_FUNCTION_GRID.

**类型：** GridLevel

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

