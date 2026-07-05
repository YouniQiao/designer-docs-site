# getSimpleDateTimeFormatBySkeleton

## getSimpleDateTimeFormatBySkeleton

```TypeScript
export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatByPattern]i18n.getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale) , see the examples in [SimpleDateTimeFormat.format]i18n.SimpleDateTimeFormat#format.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton, which supports free combinations of field patterns in  [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This  parameter does not support custom text. |
| locale | Intl.Locale | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleDateTimeFormat | SimpleDateTimeFormat object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## getSimpleDateTimeFormatBySkeleton

```TypeScript
export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatByPattern]i18n.getSimpleDateTimeFormatByPattern(pattern: string, locale?: intl.Locale) , see the examples in [SimpleDateTimeFormat.format]i18n.SimpleDateTimeFormat#format.

**Since:** 18

**Deprecated since:** 20

**Substitute:** i18n.getSimpleDateTimeFormatBySkeleton(skeleton:

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton, which supports free combinations of field patterns in  [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This  parameter does not support custom text. |
| locale | intl.Locale | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleDateTimeFormat | SimpleDateTimeFormat object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

