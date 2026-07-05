# XmlDynamicSerializer

XmlDynamicSerializer类用于动态生成XML字符串。当无法确定XML内容长度时，推荐使用该类。 > **说明：** > > 使用该类构造的对象无需自行创建ArrayBuffer，程序动态扩容，可以不断添加XML元素，最终序列化结果字符串长度上限为100000。

**Since:** 20

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## addEmptyElement

```TypeScript
addEmptyElement(name: string): void
```

写入一个空元素。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 该空元素的元素名。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.addEmptyElement("d");
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <d/>

```

## constructor

```TypeScript
constructor(encoding?: string)
```

XmlDynamicSerializer的构造函数。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200066 | 编码格式错误，目前仅支持utf-8。 |

**Example**

```TypeScript
let serializer = new xml.XmlDynamicSerializer('utf-8');

```

## endElement

```TypeScript
endElement(): void
```

写入元素结束标记。 > **说明：** > > 调用该接口前必须先调用[startElement]xml.XmlSerializer#startElement接口写入元素开始标记。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200065 | startElement和endElement不匹配。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.startElement("note");
serializer.setText("Happy");
serializer.endElement();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note>Happy</note>

```

## getOutput

```TypeScript
getOutput(): ArrayBuffer
```

返回XML字符串的ArrayBuffer。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 用于接收写入XML信息的ArrayBuffer内存。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.startElement("note");
serializer.setText("Happy");
serializer.endElement();
let arr = serializer.getOutput();
let uint8 = new Uint8Array(arr);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note>Happy</note>

```

## setAttributes

```TypeScript
setAttributes(name: string, value: string): void
```

写入元素的属性和属性值。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的属性名称以及添加多个同名的属性名称。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 属性。所组成的XML长度不能超过100000，不可为空字符。 |
| value | string | Yes | 属性值。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200063 | xml位置非法。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.startElement("note");
serializer.setAttributes("importance", "high");
serializer.endElement();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note importance="high"/>

```

## setCdata

```TypeScript
setCdata(text: string): void
```

提供在CDATA标签中添加数据的能力，所生成的CDATA标签结构为："\<!\[CDATA\[" + 所添加的数据 + "\]\]\>"。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许在CDATA标签中添加包含"\]\]\>"字符串的数据。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | CDATA属性的内容。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.setCdata('root SYSTEM')
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <![CDATA[root SYSTEM]]>

```

## setComment

```TypeScript
setComment(text: string): void
```

写入注释内容。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 当前元素的注释内容。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.setComment("Hello, World!");
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <!--Hello, World!-->

```

## setDeclaration

```TypeScript
setDeclaration(): void
```

编写带有编码的文件声明。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200063 | xml位置非法。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.setDeclaration();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <?xml version="1.0" encoding="utf-8"?>

```

## setDocType

```TypeScript
setDocType(text: string): void
```

写入文档类型。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | DocType属性的内容。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.setDocType('root SYSTEM "http://www.test.org/test.dtd"');
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <!DOCTYPE root SYSTEM "http://www.test.org/test.dtd">

```

## setNamespace

```TypeScript
setNamespace(prefix: string, namespace: string): void
```

写入当前元素标记的命名空间。 > **说明：** > > 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的前缀以及对同一个元素设置多个命名空间。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| prefix | string | Yes | 当前元素及其子元素的前缀。所组成的XML长度不能超过100000，不可为空字符。 |
| namespace | string | Yes | 当前元素及其子元素的命名空间。所组成的XML长度不能超过100000，不可为空字符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.setNamespace("h", "http://www.w3.org/TR/html4/");
serializer.startElement("note");
serializer.endElement();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <h:note xmlns:h="http://www.w3.org/TR/html4/"/>

```

## setText

```TypeScript
setText(text: string): void
```

写入标签值。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | 标签值。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.startElement("note");
serializer.setAttributes("importance", "high");
serializer.setText("Happy");
serializer.endElement();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note importance="high">Happy</note>

```

## startElement

```TypeScript
startElement(name: string): void
```

写入元素开始标记。 > **说明：** > > - 调用该接口后须调用[endElement]xml.XmlSerializer#endElement写入元素结束标记，以确保节点正确闭合。 > > - 该接口对所添加数据不做标准XML校验处理，请确保所添加的数据符合标准XML规范。比如不允许添加数字开头的元素名称。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 当前元素的元素名。所组成的XML长度不能超过100000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200062 | xml累计长度超过上限100000。 |
| 10200064 | 不能为空字符串。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let serializer = new xml.XmlDynamicSerializer('utf-8');
serializer.startElement("note");
serializer.setText("Happy");
serializer.endElement();
let arrayBuffer = serializer.getOutput();
let uint8 = new Uint8Array(arrayBuffer);
let result = util.TextDecoder.create().decodeToString(uint8);
console.info(result); // <note>Happy</note>

```

