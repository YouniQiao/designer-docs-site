# Hyperlink

Represents data of the hyperlink type.

**起始版本：** 12

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { uniformDataStruct } from '@kit.ArkData';
```

## uniformDataType

```TypeScript
readonly uniformDataType: 'general.hyperlink'
```

Uniform data type, which has a fixed value of **general.hyperlink**. For details, see [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**类型：** 'general.hyperlink'

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## description

```TypeScript
description?: string
```

Description of the linked content. This parameter is optional. By default, it is an empty string.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## details

```TypeScript
details?: Record<string, string>
```

Object of the dictionary type used to describe the attributes of the hyperlink. Both the key and value of the object are of the string type. For example, the following is a **details** object used to describe the properties of a file: { "title":"Title of the file", "content":"Content of the file" } By default, it is an empty dictionary object.

**类型：** Record<string, string>

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## url

```TypeScript
url: string
```

URL.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

