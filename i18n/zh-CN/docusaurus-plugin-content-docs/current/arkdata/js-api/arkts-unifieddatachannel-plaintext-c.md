# PlainText

Represents the plain text data. It is a child class of [Text]unifiedDataChannel.Text.

**继承实现关系：** PlainText继承自：Text。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## textAbstract

```TypeScript
get textAbstract(): string | undefined
```

Indicates the abstract of text

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set textAbstract(value: string | undefined)
```

Indicates the abstract of text

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## textContent

```TypeScript
get textContent(): string
```

Indicates the content of text

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set textContent(value: string)
```

Indicates the content of text

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## abstract

```TypeScript
abstract?: string
```

Indicates the abstract of text

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

