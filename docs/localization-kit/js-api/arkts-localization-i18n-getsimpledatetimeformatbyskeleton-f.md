# getSimpleDateTimeFormatBySkeleton

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

<a id="getsimpledatetimeformatbyskeleton"></a>
## getSimpleDateTimeFormatBySkeleton

```TypeScript
export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatByPattern](arkts-localization-i18n-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-1), see the examples in [SimpleDateTimeFormat.format](arkts-localization-i18n-simpledatetimeformat-c.md#format-1).

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-i18n-export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat--><!--Device-i18n-export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleDateTimeFormat-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton, which supports free combinations of field patterns in [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This parameter does not support custom text. |
| locale | Intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| [SimpleDateTimeFormat](arkts-localization-i18n-simpledatetimeformat-c.md) | **SimpleDateTimeFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |


<a id="getsimpledatetimeformatbyskeleton-1"></a>
## getSimpleDateTimeFormatBySkeleton

```TypeScript
export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat
```

Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference between the objects obtained by this API and [getSimpleDateTimeFormatByPattern](arkts-localization-i18n-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-1), see the examples in [SimpleDateTimeFormat.format](arkts-localization-i18n-simpledatetimeformat-c.md#format-1).

**Since:** 18

**Deprecated since:** 20

**Substitutes:** [getSimpleDateTimeFormatBySkeleton(skeleton:](arkts-localization-i18n-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-1)

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-i18n-export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat--><!--Device-i18n-export function getSimpleDateTimeFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleDateTimeFormat-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton, which supports free combinations of field patterns in [Date Field Symbol Table](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). This parameter does not support custom text. |
| locale | intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| [SimpleDateTimeFormat](arkts-localization-i18n-simpledatetimeformat-c.md) | **SimpleDateTimeFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

