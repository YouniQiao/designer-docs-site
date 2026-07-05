# File

Represents the file data. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of the data of the file type. You are advised to use the child class of **File**, for example, [Image]unifiedDataChannel.Image, [Video]unifiedDataChannel.Video, and [Folder]unifiedDataChannel.Folder, to describe data.

**继承实现关系：** File继承自：UnifiedRecord。

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

## details

```TypeScript
details?: Record<string, string>
```

A dictionary type object, where both the key and value are of the string type and are used to describe file information. For example, a data object with the following content can be created to describe a file: { "name":"File name", "type":"File type" } The default value is an empty dictionary object.

**类型：** Record<string, string>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, string> | undefined
```

Indicates the details of unified File

**类型：** Record<string, string>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, string> | undefined)
```

Indicates the details of unified File

**类型：** Record<string, string>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## uri

```TypeScript
get uri(): string
```

Indicates the uri of file

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set uri(value: string)
```

Indicates the uri of file

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

