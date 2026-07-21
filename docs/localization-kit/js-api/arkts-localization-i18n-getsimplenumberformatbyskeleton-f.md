# getSimpleNumberFormatBySkeleton

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

<a id="getsimplenumberformatbyskeleton"></a>
## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-i18n-export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat--><!--Device-i18n-export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons). |
| locale | Intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| [SimpleNumberFormat](arkts-localization-i18n-simplenumberformat-c.md) | **SimpleNumberFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |


<a id="getsimplenumberformatbyskeleton-1"></a>
## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 18

**Deprecated since:** 20

**Substitutes:** [getSimpleNumberFormatBySkeleton(skeleton:](arkts-localization-i18n-getsimplenumberformatbyskeleton-f.md#getsimplenumberformatbyskeleton-1)

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-i18n-export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat--><!--Device-i18n-export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons). |
| locale | intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| [SimpleNumberFormat](arkts-localization-i18n-simplenumberformat-c.md) | **SimpleNumberFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

