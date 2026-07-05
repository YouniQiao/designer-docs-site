# AnalysisConfig

Asset analysis config.

**起始版本：** 24

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { photoAccessHelper } from '@kit.MediaLibraryKit';
```

## uris

```TypeScript
uris: string[]
```

Array of asset URIs. <br>Length range:[0, 100].

**类型：** string[]

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## types

```TypeScript
types: AnalysisType[]
```

Array of analysis types, limited in size to the number of defined members in the AnalysisType enumeration.

**类型：** AnalysisType[]

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

## extraInfos

```TypeScript
extraInfos?: string
```

Extra info in JSON string format. <br>Length range:(0,500].

**类型：** string

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.FileManagement.PhotoAccessHelper.Core

**系统接口：** 此接口为系统接口。

