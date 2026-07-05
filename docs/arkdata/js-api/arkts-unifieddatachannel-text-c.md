# Text

Represents the text data. It is a child class of [UnifiedRecord]unifiedDataChannel.UnifiedRecord and a base class of text data. You are advised to use the child class of **Text**, for example, [PlainText]unifiedDataChannel.PlainText, [Hyperlink]unifiedDataChannel.Hyperlink, and [HTML]unifiedDataChannel.HTML, to describe data.

**Inheritance:** Textextends: UnifiedRecord.

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';
```

## details

```TypeScript
details?: Record<string, string>
```

A dictionary type object, where both the key and value are of the string type and are used to describe the text content. For example, a data object with the following content can be created to describe a text file: { "title":"Title of the file", "content":"Content of the file" } The default value is an empty dictionary object.

**Type:** Record<string, string>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
get details(): Record<string, string> | undefined
```

Indicates the details of unified text

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

```TypeScript
set details(value: Record<string, string> | undefined)
```

Indicates the details of unified text

**Type:** Record<string, string>

**Since:** 23

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

