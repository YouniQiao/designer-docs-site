# Text

Represents the text data. It is a child class of [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord) and a base class of text data. You are advised to use the child class of **Text**, for example, [PlainText](arkts-arkdata-plaintext-c.md#plaintext), [Hyperlink](arkts-arkdata-hyperlink-c.md#hyperlink), and [HTML](arkts-arkdata-html-c.md#html), to describe data.

**Inheritance/Implementation:** Text extends [UnifiedRecord](arkts-arkdata-unifiedrecord-c.md#unifiedrecord)

**Since:** 10

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

## Modules to Import

```TypeScript
import { unifiedDataChannel } from '@ohos.data.unifiedDataChannel';
```

## details

```TypeScript
details?: Record<string, string>
```

A dictionary type object, where both the key and value are of the string type and are used to describe the text content. For example, a data object with the following content can be created to describe a text file: { "title":"Title of the file", "content":"Content of the file" } The default value is an empty dictionary object.

**Type:** Record<string, string>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.DistributedDataManager.UDMF.Core

