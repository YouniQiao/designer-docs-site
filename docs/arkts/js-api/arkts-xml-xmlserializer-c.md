# XmlSerializer

XmlSerializer接口用于生成XML文件。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## addEmptyElement

```TypeScript
addEmptyElement(name: string): void
```

添加一个空元素。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，确保所添加的数据符合标准XML规范。例如不允许添加数字开头的元素名称。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 元素的名称。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.addEmptyElement("d");
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <d/>

```

## constructor

```TypeScript
constructor(buffer: ArrayBuffer | DataView, encoding?: string)
```

XmlSerializer的构造函数。 > **说明：** > > buffer是开发者根据需要自定义大小的缓存区域，用于临时存储生成的XML文本。在使用过程中必须确保缓存区域足以容纳生成的文本内容。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| DataView | Yes | 用于接收写入XML信息的ArrayBuffer或DataView内存。 |
| encoding | string | No |  |

**Example**

```TypeScript
let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer, "utf-8");

```

## endElement

```TypeScript
endElement(): void
```

添加元素结束标记。 > **说明：** > > 调用该接口前必须先调用[startElement]xml.XmlSerializer#startElement接口写入元素开始标记。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.startElement("note");
thatSer.setText("Happy");
thatSer.endElement();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result);
// <note>Happy</note>

```

## setAttributes

```TypeScript
setAttributes(name: string, value: string): void
```

添加元素的属性和属性值。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，确保所添加的数据符合标准XML规范。例如不允许添加数字开头的属性名称以及添加多个同名的属性名称。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 属性。 |
| value | string | Yes | 属性值。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.startElement("note");
thatSer.setAttributes("importance", "high");
thatSer.endElement();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note importance="high"/>

```

## setCDATA

```TypeScript
setCDATA(text: string): void
```

提供在CDATA标签中添加数据的能力，所生成的CDATA标签结构为："\<!\[CDATA\[" + 所添加的数据 + "\]\]\>"。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许在CDATA标签中添加包含"\]\]\>"字符串的数据。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | CDATA属性的内容。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.setCDATA('root SYSTEM')
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <![CDATA[root SYSTEM]]>

```

## setComment

```TypeScript
setComment(text: string): void
```

添加注释内容。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 当前元素的注释内容。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.setComment("Hello, World!");
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <!--Hello, World!-->

```

## setDeclaration

```TypeScript
setDeclaration(): void
```

设置带有编码信息的文件声明。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.setDeclaration();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result);
// <?xml version="1.0" encoding="utf-8"?>

```

## setDocType

```TypeScript
setDocType(text: string): void
```

添加文档类型。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | DocType属性的内容。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.setDocType('root SYSTEM "http://www.test.org/test.dtd"');
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <!DOCTYPE root SYSTEM "http://www.test.org/test.dtd">

```

## setNamespace

```TypeScript
setNamespace(prefix: string, namespace: string): void
```

添加当前元素标记的命名空间。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。例如禁止添加数字开头的前缀以及为同一个元素设置多个命名空间。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | 当前元素及其子元素的前缀。 |
| namespace | string | Yes | 当前元素及其子元素的命名空间。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.setNamespace("h", "http://www.w3.org/TR/html4/");
thatSer.startElement("note");
thatSer.endElement();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result);
// <h:note xmlns:h="http://www.w3.org/TR/html4/"/>

```

## setText

```TypeScript
setText(text: string): void
```

添加标签值。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | text属性的内容。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.startElement("note");
thatSer.setAttributes("importance", "high");
thatSer.setText("Happy");
thatSer.endElement();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note importance="high">Happy</note>

```

## startElement

```TypeScript
startElement(name: string): void
```

根据给定名称添加元素开始标记。 > **说明：** > > - 调用该接口后须调用[endElement]xml.XmlSerializer#endElement写入元素结束标记，以确保节点正确闭合。 > > - 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 当前元素的元素名。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let arrayBuffer = new ArrayBuffer(2048);
let thatSer = new xml.XmlSerializer(arrayBuffer);
thatSer.startElement("note");
thatSer.setText("Happy");
thatSer.endElement();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result);
// <note>Happy</note>

```

