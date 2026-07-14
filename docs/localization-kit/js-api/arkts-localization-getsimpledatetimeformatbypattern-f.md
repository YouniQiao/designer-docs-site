# getSimpleDateTimeFormatByPattern

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## getSimpleDateTimeFormatByPattern

```TypeScript
export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: Intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-1) , see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1).

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pattern | string | Yes | Valid pattern, which supports free combinations of field patterns in[Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Thisparameter also supports custom text enclosed in single quotation marks (`''`). |
| locale | Intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleDateTimeFormat | **SimpleDateTimeFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |


## getSimpleDateTimeFormatByPattern

```TypeScript
export function getSimpleDateTimeFormatByPattern(pattern: string, locale?: intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-2) , see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1).

**Since:** 18

**Deprecated since:** 20

**Substitutes:** getSimpleDateTimeFormatByPattern(pattern:

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pattern | string | Yes | Valid pattern, which supports free combinations of field patterns in[Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Thisparameter also supports custom text enclosed in single quotation marks (`''`). |
| locale | intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleDateTimeFormat | **SimpleDateTimeFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

