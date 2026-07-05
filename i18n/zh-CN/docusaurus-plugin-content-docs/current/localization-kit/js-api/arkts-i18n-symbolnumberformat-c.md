# SymbolNumberFormat

Provide a Number formatting interface that supports custom symbols. This interface formats number values into strings with custom symbols, and can replace variable symbols in the formatted result with custom fixed symbols (e.g., replacing "null" to "NA").

**继承实现关系：** SymbolNumberFormat实现：Intl.NumberFormat。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
public constructor(locale?: Intl.Locale, options?: SymbolNumberFormatOptions)
```

A constructor used to create a SymbolNumberFormat object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | Intl.Locale | 否 |  |
| options | SymbolNumberFormatOptions | 否 |  |

## format

```TypeScript
public format(value: number | bigint): string
```

Formats a number with give locale and SymbolNumberFormatOptions.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| bigint | 是 | Number to be formatted. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Formatted number. |

## formatRange

```TypeScript
public formatRange(startRange: number, endRange: number): string
```

Formats a number range.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startRange | number | 是 | Start number of the range. |
| endRange | number | 是 | End number of the range. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Formatted number range. |

## formatRangeToParts

```TypeScript
public formatRangeToParts(startRange: number, endRange: number): Intl.NumberFormatPart[]
```

Formats a number range into parts.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startRange | number | 是 | Start number of the range. |
| endRange | number | 是 | End number of the range. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Intl.NumberFormatPart[] | Locale formatted NumberFormatPart array. |

## formatToParts

```TypeScript
public formatToParts(value?: number | bigint): Intl.NumberFormatPart[]
```

Formats a number into parts.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| bigint | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Intl.NumberFormatPart[] | Locale formatted NumberFormatPart array. |

## parse

```TypeScript
public parse(text: string, lenientMode: boolean): number
```

Parse a localized string to number object. For example, "123,456" will parse to 123456.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Localized string to be parse.  Text to be parsed |
| lenientMode | boolean | 是 | Indicates whether parsing allows any non-compliant localized strings.  For example, "1,23,456" is a invalid thousand separator number string, it will parse failure  when lenientMode is false, and will parse success with value 123456 when lenientMode is true.it's better  set to false, ensure the data is not polluted.  Whether to use loose rules |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | The result parse with localization rules. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## resolvedOptions

```TypeScript
public resolvedOptions(): ResolvedSymbolNumberFormatOptions
```

Represents optional element for the ResolvedSymbolDateTimeFormatOptions object. Define the resolved symbol element and value that need to get.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResolvedSymbolNumberFormatOptions | Symbol options for SymbolNumberFormat. |

