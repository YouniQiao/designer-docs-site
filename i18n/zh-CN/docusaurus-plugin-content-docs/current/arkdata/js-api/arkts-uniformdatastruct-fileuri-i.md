# FileUri

Represents data of the file URI type.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { uniformDataStruct } from '@kit.ArkData';
```

## uriAuthorizationPolicies

```TypeScript
uriAuthorizationPolicies?: Array<int>
```

Defines URI authorization policies for drag intention.

**类型：** Array<int>

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## uniformDataType

```TypeScript
readonly uniformDataType: 'general.file-uri'
```

Uniform data type, which has a fixed value of **general.file-uri**. For details, see [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**类型：** 'general.file-uri'

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## oriUri

```TypeScript
oriUri: string
```

File path.

**类型：** string

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## details

```TypeScript
details?: Record<string, int | long | double | string | Uint8Array>
```

Object of the dictionary type used to describe the icon. The key is of the string type, and the value can be a number, a string, or a Uint8Array. By default, it is an empty dictionary object.

**类型：** Record<string, int | long | double | string | Uint8Array>

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## fileType

```TypeScript
fileType: string
```

File type, which must be UTD. For details, see [Prebuilt UTDs]. The maximum length of the value is 1024 bytes.

**类型：** string

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

