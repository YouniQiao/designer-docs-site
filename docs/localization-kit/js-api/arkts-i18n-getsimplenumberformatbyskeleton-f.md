# getSimpleNumberFormatBySkeleton

## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: Intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see  [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)  . |
| locale | Intl.Locale | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleNumberFormat | SimpleNumberFormat object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

## getSimpleNumberFormatBySkeleton

```TypeScript
export function getSimpleNumberFormatBySkeleton(skeleton: string, locale?: intl.Locale): SimpleNumberFormat
```

Obtains a **SimpleNumberFormat** object based on the specified skeleton.

**Since:** 18

**Deprecated since:** 20

**Substitute:** i18n.getSimpleNumberFormatBySkeleton(skeleton:

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| skeleton | string | Yes | Valid skeleton. For details about the supported characters and their meanings, see  [Number Skeletons](https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#number-skeletons)  . |
| locale | intl.Locale | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| SimpleNumberFormat | SimpleNumberFormat object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

