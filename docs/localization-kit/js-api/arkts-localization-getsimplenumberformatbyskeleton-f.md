---
last_update:
  date: 2026-07-04
---

# getSimpleNumberFormatBySkeleton

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see[Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons). |
| locale | Intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleNumberFormat | **SimpleNumberFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [8900001](../errorcode-i18n.md#8900001-parameter-verification-error) | Invalid parameter. Possible causes: Parameter verification failed. |


## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 18

**Deprecated since:** 20

**Substitutes:** [getSimpleNumberFormatBySkeleton](arkts-localization-getsimplenumberformatbyskeleton-f.md#getsimplenumberformatbyskeleton-1)

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see[Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons). |
| locale | intl.Locale | No | **Locale** object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleNumberFormat | **SimpleNumberFormat** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [890001](../errorcode-i18n.md#890001-parameter-error) | Invalid parameter. Possible causes: Parameter verification failed. |

