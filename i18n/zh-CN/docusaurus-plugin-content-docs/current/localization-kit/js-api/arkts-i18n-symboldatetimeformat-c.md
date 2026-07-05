# SymbolDateTimeFormat

Provide a DateTime formatting interface that supports custom symbols. This interface formats date time values into strings with custom symbols, and can replace variable symbols in the formatted result with custom fixed symbols (e.g., replacing "2:23 PM" with "2:23 afternoon").

**继承实现关系：** SymbolDateTimeFormat继承自：Intl.DateTimeFormat。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions)
```

A constructor used to create a SymbolDateTimeFormat object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | Intl.Locale | 否 |  |
| options | SymbolDateTimeFormatOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## format

```TypeScript
public format(date?: Date | number): string
```

Formats the date and time.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date \| number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The formatted date and time string. |

## formatRange

```TypeScript
public formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string
```

Formats date and time ranges.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startDate | Date \| number \| bigint | 是 | Start date and time, represented as a Date object or timestamp.  Note: The month starts from 0. For example, 0 indicates January. |
| endDate | Date \| number \| bigint | 是 | End date and time, represented as a Date object or timestamp.  Note: The month starts from 0. For example, 0 indicates January. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | A date string formatted based on the specified locale. |

## formatRangeToParts

```TypeScript
public formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint):
      Intl.DateTimeRangeFormatPart[]
```

Formats a date time range to Parts.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startDate | Date \| number \| bigint | 是 | Start date and time, represented as a Date object or timestamp.  Note: The month starts from 0. For example, 0 indicates January. |
| endDate | Date \| number \| bigint | 是 | End date and time, represented as a Date object or timestamp.  Note: The month starts from 0. For example, 0 indicates January. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Intl.DateTimeRangeFormatPart[] | Locale formatted DateTimeRangeFormatPart array. |

## formatToParts

```TypeScript
public formatToParts(date?: Date | number): Intl.DateTimeFormatPart[]
```

Formats a date to parts.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date \| number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Intl.DateTimeFormatPart[] | Locale formatted DateTimeFormatPart array. |

## parse

```TypeScript
public parse(text: string, lenientMode: boolean): number
```

Parse a date time localized string to Unix timestamp. Unix timestamp, indicating the number of milliseconds elapsed since 00:00:00 on January 1, 1970 GMT.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Localized string to be parse.  Text to be parsed |
| lenientMode | boolean | 是 | Indicates whether parsing allows any non-compliant localized strings.  For example, "2023/02-25" is a invalid separator date string, it will parse failure when lenientMode  is false, and will parse success with value (2023, 02, 25) when lenientMode is true. it's better set  to false, ensure the data is not polluted.  Whether to use loose parsing rules |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Unix timestamp, which indicates the number of milliseconds that have elapsed since  the Unix epoch. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## resolvedOptions

```TypeScript
public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions
```

Obtains the options for creating a SymbolDateTimeFormat object. This will allow us to check the current config symbols.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ResolvedSymbolDateTimeFormatOptions | Symbol options for SymbolDateTimeFormat. |

