# SymbolNumberFormat

Provide a Number formatting interface that supports custom symbols. This interface formats number values into strings with custom symbols, and can replace variable symbols in the formatted result with custom fixed symbols (e.g., replacing "null" to "NA").

**Inheritance/Implementation:** SymbolNumberFormat implements [Intl.NumberFormat](../../apis-na/arkts-apis/arkts-na-numberformat-i.md#numberformat)

**Since:** 26.0.0

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## constructor

```TypeScript
public constructor(locale?: Intl.Locale, options?: SymbolNumberFormatOptions)
```

A constructor used to create a SymbolNumberFormat object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | Intl.Locale | No | Locale object used for formatting the date time value.The default value is the current system locale.<br>Default value:The default is the current system locale.<br>Default Value: System Locale.<br>Region object. |
| options | SymbolNumberFormatOptions | No | Indicates the symbols used to replace.Such as zero, nan, positiveInfinity, etc.<br>Symbol Number Formatting Options. |

## format

```TypeScript
public format(value: number | bigint): string
```

Formats a number with give locale and SymbolNumberFormatOptions.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| bigint | Yes | Number to be formatted. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Formatted number. |

## formatRange

```TypeScript
public formatRange(startRange: number, endRange: number): string
```

Formats a number range.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startRange | number | Yes | Start number of the range. |
| endRange | number | Yes | End number of the range. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Formatted number range. |

## formatRangeToParts

```TypeScript
public formatRangeToParts(startRange: number, endRange: number): Intl.NumberFormatPart[]
```

Formats a number range into parts.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startRange | number | Yes | Start number of the range. |
| endRange | number | Yes | End number of the range. |

**Return value:**

| Type | Description |
| --- | --- |
| Intl.NumberFormatPart[] | Locale formatted NumberFormatPart array. |

## formatToParts

```TypeScript
public formatToParts(value?: number | bigint): Intl.NumberFormatPart[]
```

Formats a number into parts.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| bigint | No | Number to be formatted. |

**Return value:**

| Type | Description |
| --- | --- |
| Intl.NumberFormatPart[] | Locale formatted NumberFormatPart array. |

## parse

```TypeScript
public parse(text: string, lenientMode: boolean): number
```

Parse a localized string to number object. For example, "123,456" will parse to 123456.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Localized string to be parse.<br>Text to be parsed |
| lenientMode | boolean | Yes | Indicates whether parsing allows any non-compliant localized strings.For example, "1,23,456" is a invalid thousand separator number string, it will parse failurewhen lenientMode is false, and will parse success with value 123456 when lenientMode is true.it's betterset to false, ensure the data is not polluted.<br>Whether to use loose rules |

**Return value:**

| Type | Description |
| --- | --- |
| number | The result parse with localization rules. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |

## resolvedOptions

```TypeScript
public resolvedOptions(): ResolvedSymbolNumberFormatOptions
```

Represents optional element for the ResolvedSymbolDateTimeFormatOptions object. Define the resolved symbol element and value that need to get.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| ResolvedSymbolNumberFormatOptions | Symbol options for SymbolNumberFormat. |

