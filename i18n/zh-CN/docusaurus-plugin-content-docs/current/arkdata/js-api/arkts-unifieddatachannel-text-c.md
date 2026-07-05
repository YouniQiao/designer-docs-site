# Text

Represents the text data. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of text data. You are advised to use the child class of **Text**, for example, [PlainText]unifiedDataChannel.PlainText, [Hyperlink]unifiedDataChannel.Hyperlink, and [HTML]unifiedDataChannel.HTML, to describe data.

**继承实现关系：** Text继承自：UnifiedRecord。

**起始版本：** 10

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

## 导入模块

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## details

```TypeScript
details?: Record<string, string>
```

A dictionary type object, where both the key and value are of the string type and are used to describe the text content. For example, a data object with the following content can be created to describe a text file: { "title":"Title of the file", "content":"Content of the file" } The default value is an empty dictionary object.

**类型：** Record<string, string>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, string> | undefined
```

Indicates the details of unified text

**类型：** Record<string, string>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, string> | undefined)
```

Indicates the details of unified text

**类型：** Record<string, string>

**起始版本：** 23

**系统能力：** SystemCapability.DistributedDataManager.UDMF.Core

