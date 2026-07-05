# Hyperlink

Represents the hyperlink data. It is a child class of [Text]unifiedDataChannel.Text.

**继承实现关系：** Hyperlink继承自：Text。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## description

```TypeScript
description?: string
```

Indicates the description of a link

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get description(): string | undefined
```

Indicates the description of a link

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set description(value: string | undefined)
```

Indicates the description of a link

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## url

```TypeScript
get url(): string
```

Indicates the url of a link

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set url(value: string)
```

Indicates the url of a link

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

