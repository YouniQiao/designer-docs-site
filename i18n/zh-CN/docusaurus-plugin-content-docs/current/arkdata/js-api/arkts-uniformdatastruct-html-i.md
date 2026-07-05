# HTML

Represents data of the HTML type.

**起始版本：** 12

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
readonly uniformDataType: 'general.html'
```

Uniform data type, which has a fixed value of **general.html**. For details, see [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**类型：** 'general.html'

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## plainContent

```TypeScript
plainContent?: string
```

Plaintext without HTML tags. This parameter is optional. By default, it is an empty string.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## details

```TypeScript
details?: Record<string, string>
```

Object of the dictionary type used to describe the attributes of the HTML content. Both the key and value of the object are of the string type. For example, the following is a **details** object used to describe the properties of a file: { "title":"Title of the file", "content":"Content of the file" } By default, it is an empty dictionary object.

**类型：** Record<string, string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## htmlContent

```TypeScript
htmlContent: string
```

Content in HTML format.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

