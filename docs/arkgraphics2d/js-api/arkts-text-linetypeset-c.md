# LineTypeset

保存着文本内容以及样式的载体，可以用于计算单行排版信息。 下列API示例中都需先使用[ParagraphBuilder]text.ParagraphBuilder类的 [buildLineTypeset()]text.ParagraphBuilder.buildLineTypeset接口获取到LineTypeset对象实例，再通过此实例调用对应方法。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## createLine

```TypeScript
createLine(startIndex: int, count: int): TextLine
```

根据指定的排版区间生成文本行对象。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startIndex | int | Yes | 开始计算排版的起始位置，整数，取值范围为[0, 文本字符总数)。 |
| count | int | Yes | 从指定起始位置开始进行排版的字符个数，取值为  [0,文本字符总数)的整数，startIndex和count之和不能大于文本字符总数。当count为0时，表示排版区间为[startIndex, 文本的最后一个字符位置]。  可以先使用[getLineBreak]text.LineTypeset.getLineBreak获取合理的排版字符总数。 |

**Return value:**

| Type | Description |
| --- | --- |
| TextLine | 根据文本区间字符生成的TextLine对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
let startIndex = 0;
let width = 100.0;
let count = lineTypeset.getLineBreak(startIndex, width);
let line : text.TextLine = lineTypeset.createLine(startIndex, count);

```

## getLineBreak

```TypeScript
getLineBreak(startIndex: int, width: double): int
```

计算在限定宽度下，从指定位置开始可以排版的字符数。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startIndex | int | Yes | 开始计算排版的起始位置（包括起始位置）。取值范围需要为[0,文本字符总数）的整数，当参数超出范围时抛出异常。 |
| width | double | Yes | 可用于排版的宽度，大于0的浮点数，单位为物理像素px。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回在限定排版宽度下，从指定位置开始可排版的字符总数，取值为整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
let startIndex = 0;
let width = 100.0;
let count = lineTypeset.getLineBreak(startIndex, width);

```

