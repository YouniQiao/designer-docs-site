# XmlSAXHandler

XmlSAXHandler定义了SAX解析xml文本时的回调方法。开发者需要实现这些回调方法来处理xml文本的不同部分。这些回调方法会在xml解析过程的对应时机触发。startDocument会在开始解析文档时触发， endDocument会在结束文档解析时触发，startElement会在开始解析元素时触发，endElement会在结束解析元素时触发，characters则会在解析元素间文本内容时触发。

**Since:** 24

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## characters

```TypeScript
characters(content: string): void
```

当解析器在XML元素内部遇到文本内容时调用的回调函数。该回调函数需要开发者自行实现。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | string | Yes | 解析器回传元素中的文本内容。 |

## endDocument

```TypeScript
endDocument(): void
```

当解析器在XML文本结束解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]xml.XmlSAXHandler.characters。 > **说明：** > > 当可读流结束时触发此回调。在stream中调用push()，传入null值，从而触发该回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## endElement

```TypeScript
endElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined): void
```

当解析器在XML文本中元素结束解析触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]xml.XmlSAXHandler.characters。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | string | Yes | 解析器回传的元素名称（不包含命名空间前缀）。例如，对于``，elementName为"child"。 |
| namespaceURI | string \| undefined | Yes | 解析器回传的命名空间URI。例如，对于`xmlns:ns2="http://example.com/ns2"`，namespaceURI  为`"http://example.com/ns2"`。如果元素没有命名空间则为undefined。 |
| qName | string \| undefined | Yes | 解析器回传的元素限定名（包含命名空间前缀）。例如，对于``，qName为"ns2:child"。如果元素没有命名空间则qName  为undefined。 |

## startDocument

```TypeScript
startDocument(): void
```

当解析器在XML文本开始解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]xml.XmlSAXHandler.characters。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## startElement

```TypeScript
startElement(elementName: string, namespaceURI: string | undefined, qName: string | undefined, attributes: Map<string,string>): void
```

当解析器在XML文本中元素开始解析时触发的回调函数。该回调函数需要开发者自行实现。具体使用示例可见[characters<sup>24+</sup>]xml.XmlSAXHandler.characters。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | string | Yes | 解析器回传的元素名称（不包含命名空间前缀）。例如，对于``，elementName为"child"。 |
| namespaceURI | string \| undefined | Yes | 解析器回传的命名空间URI。例如，对于`xmlns:ns2="http://example.com/ns2"`，namespaceURI  为`"http://example.com/ns2"`。如果元素没有命名空间则为undefined。 |
| qName | string \| undefined | Yes | 解析器回传的元素限定名（包含命名空间前缀）。例如，对于``，qName为"ns2:child"。如果元素没有命名空间则qName  为undefined。 |
| attributes | Map&lt;string,string> | Yes | 解析器回传的元素的属性映射表，键为属性名（可能包含命名空间前缀，如"ns2:attrA"），值为属性值。 |

