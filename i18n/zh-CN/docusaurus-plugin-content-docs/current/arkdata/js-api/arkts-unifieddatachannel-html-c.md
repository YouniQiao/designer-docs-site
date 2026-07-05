# HTML

Represents the HTML data. It is a child class of [Text]unifiedDataChannel.Text.

**继承实现关系：** HTML继承自：Text。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## uriAuthorizationPolicies

```TypeScript
set uriAuthorizationPolicies(value: Array<UriPermission> | undefined)
```

Defines URI authorization policies for drag intention.

**类型：** Array<UriPermission>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## plainContent

```TypeScript
plainContent?: string
```

Plaintext without HTML tags. This parameter is optional. The default value is an empty string.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get plainContent(): string | undefined
```

Indicates the plain content of html

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set plainContent(value: string | undefined)
```

Indicates the plain content of html

**类型：** string

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## htmlContent

```TypeScript
get htmlContent(): string
```

Indicates the content of html, with html tags

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set htmlContent(value: string)
```

Indicates the content of html, with html tags

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

