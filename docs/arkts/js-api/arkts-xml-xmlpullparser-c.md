# XmlPullParser

XmlPullParser接口用于解析现有的XML文件。

**Since:** 8

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { xml } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor(buffer: ArrayBuffer | DataView, encoding?: string)
```

构造并返回一个XmlPullParser对象。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| DataView | Yes | 用于解析的XML文本信息。 |
| encoding | string | No |  |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let strXml = '<title>Happy</title>'
let textEncoder = new util.TextEncoder();
let uint8Array = textEncoder.encodeInto(strXml);
let that = new xml.XmlPullParser(uint8Array.buffer as object as ArrayBuffer, 'UTF-8');

```

## parse

```TypeScript
parse(option: ParseOptions): void
```

该接口用于解析XML。

**Since:** 8

**Deprecated since:** 14

**Substitute:** ohos.xml.XmlPullParser.parseXml

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | ParseOptions | Yes | XML解析选项。 |

**Example**

```TypeScript
import { util } from '@kit.ArkTS';

let strXml =
  '<?xml version="1.0" encoding="utf-8"?>' +
  '<note importance="high" logged="true">' +
    '<company>John &amp; Hans</company>' +
    '<title>Happy</title>' +
  '</note>';
let textEncoder = new util.TextEncoder();
let arrBuffer = textEncoder.encodeInto(strXml);
let that = new xml.XmlPullParser(arrBuffer.buffer as object as ArrayBuffer, 'UTF-8');
let str = '';
function func(name: string, value: string) {
  str = name + value;
  console.info(str);
  return true;
}
let options: xml.ParseOptions = {supportDoctype:true, ignoreNameSpace:true, tagValueCallbackFunction:func}
that.parse(options);
// note
// company
// John & Hans
// company
// title
// Happy
// title
// note

```

## parseXml

```TypeScript
parseXml(option: ParseOptions): void
```

解析XML。

**Since:** 14

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | ParseOptions | Yes | XML解析选项。 |

