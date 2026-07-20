# SymbolDateTimeFormat

Provide a DateTime formatting interface that supports custom symbols.This interface formats date time values into strings with custom symbols,and can replace variable symbols in the formatted result with custom fixed symbols(e.g., replacing "2:23 PM" with "2:23 afternoon").

**Inheritance/Implementation:** SymbolDateTimeFormat extends [Intl.DateTimeFormat](../../apis-na/arkts-apis/arkts-na-intl-datetimeformat-i.md)

**Since:** 26.0.0

<!--Device-i18n-export class SymbolDateTimeFormat extends Intl.DateTimeFormat--><!--Device-i18n-export class SymbolDateTimeFormat extends Intl.DateTimeFormat-End-->

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions)
```

A constructor used to create a SymbolDateTimeFormat object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions)--><!--Device-SymbolDateTimeFormat-public constructor(locale?: Intl.Locale, options?: SymbolDateTimeFormatOptions)-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | Intl.Locale | No | Locale object used for formatting the date time value.The default value is the current system locale. |
| options | [SymbolDateTimeFormatOptions](arkts-localization-i18n-symboldatetimeformatoptions-i.md) | No | Indicates the symbols used to replace.The symbols that support replacement are "AM" and "PM". |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |

## format

```TypeScript
public format(date?: Date | number): string
```

Formats the date and time.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public format(date?: Date | number): string--><!--Device-SymbolDateTimeFormat-public format(date?: Date | number): string-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | Date \| number | No | Date and time. Note: The month starts from 0. For example, 0 indicates January. |

**Return value:**

| Type | Description |
| --- | --- |
| string | The formatted date and time string. |

## formatRange

```TypeScript
public formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string
```

Formats date and time ranges.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string--><!--Device-SymbolDateTimeFormat-public formatRange(startDate: Date | number | bigint, endDate: Date | number | bigint): string-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startDate | Date \| number \| bigint | Yes | Start date and time, represented as a Date object or timestamp.Note: The month starts from 0. For example, 0 indicates January. |
| endDate | Date \| number \| bigint | Yes | End date and time, represented as a Date object or timestamp.Note: The month starts from 0. For example, 0 indicates January. |

**Return value:**

| Type | Description |
| --- | --- |
| string | A date string formatted based on the specified locale. |

## formatRangeToParts

```TypeScript
public formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint):
      Intl.DateTimeRangeFormatPart[]
```

Formats a date time range to Parts.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint):
      Intl.DateTimeRangeFormatPart[]--><!--Device-SymbolDateTimeFormat-public formatRangeToParts(startDate: Date | number | bigint, endDate: Date | number | bigint):
      Intl.DateTimeRangeFormatPart[]-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startDate | Date \| number \| bigint | Yes | Start date and time, represented as a Date object or timestamp.Note: The month starts from 0. For example, 0 indicates January. |
| endDate | Date \| number \| bigint | Yes | End date and time, represented as a Date object or timestamp.Note: The month starts from 0. For example, 0 indicates January. |

**Return value:**

| Type | Description |
| --- | --- |
| Intl.DateTimeRangeFormatPart[] | Locale formatted DateTimeRangeFormatPart array. |

## formatToParts

```TypeScript
public formatToParts(date?: Date | number): Intl.DateTimeFormatPart[]
```

Formats a date to parts.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public formatToParts(date?: Date | number): Intl.DateTimeFormatPart[]--><!--Device-SymbolDateTimeFormat-public formatToParts(date?: Date | number): Intl.DateTimeFormatPart[]-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | Date \| number | No | Date or timestamp. Note: The month starts from 0.For example, 0 indicates January. |

**Return value:**

| Type | Description |
| --- | --- |
| Intl.DateTimeFormatPart[] | Locale formatted DateTimeFormatPart array. |

## parse

```TypeScript
public parse(text: string, lenientMode: boolean): number
```

Parse a date time localized string to Unix timestamp.Unix timestamp, indicating the number of milliseconds elapsed since 00:00:00 on January 1, 1970 GMT.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public parse(text: string, lenientMode: boolean): number--><!--Device-SymbolDateTimeFormat-public parse(text: string, lenientMode: boolean): number-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Localized string to be parse.<br>Text to be parsed |
| lenientMode | boolean | Yes | Indicates whether parsing allows any non-compliant localized strings.For example, "2023/02-25" is a invalid separator date string, it will parse failure when lenientMode is false, and will parse success with value (2023, 02, 25) when lenientMode is true. it's better set to false, ensure the data is not polluted.<br>Whether to use loose parsing rules |

**Return value:**

| Type | Description |
| --- | --- |
| number | Unix timestamp, which indicates the number of milliseconds that have elapsed since the Unix epoch. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |

## resolvedOptions

```TypeScript
public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions
```

Obtains the options for creating a SymbolDateTimeFormat object.This will allow us to check the current config symbols.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SymbolDateTimeFormat-public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions--><!--Device-SymbolDateTimeFormat-public resolvedOptions(): ResolvedSymbolDateTimeFormatOptions-End-->

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| [ResolvedSymbolDateTimeFormatOptions](arkts-localization-i18n-resolvedsymboldatetimeformatoptions-i.md) | Symbol options for SymbolDateTimeFormat. |

