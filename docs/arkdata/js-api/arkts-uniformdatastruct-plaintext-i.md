# PlainText

Represents data of the plain text type.

**Since:** 12

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { uniformDataStruct } from '@kit.ArkData';
```

## uniformDataType

```TypeScript
readonly uniformDataType: 'general.plain-text'
```

Uniform data type, which has a fixed value of **general.plain-text**. For details, see [UniformDataType](arkts-uniformtypedescriptor-uniformdatatype-e.md#UniformDataType).

**Type:** 'general.plain-text'

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## textAbstract

```TypeScript
textAbstract?: string
```

Indicates the abstract of the PlainText.

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## details

```TypeScript
details?: Record<string, string>
```

Object of the dictionary type used to describe the attributes of the text content. Both the key and value of the object are of the string type. For example, the following is a **details** object used to describe the properties of a file: { "title":"Title of the file", "content":"Content of the file" } By default, it is an empty dictionary object.

**Type:** Record<string, string>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## textContent

```TypeScript
textContent: string
```

Plaintext content.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## abstract

```TypeScript
abstract?: string
```

Text abstract. It is an empty string by default.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

