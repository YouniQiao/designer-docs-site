# isRTL

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## isRTL

```TypeScript
export function isRTL(locale: string): boolean
```

Checks whether a language is an RTL language. For an RTL language, [UI mirroring](../../../../internationalization/i18n-ui-design.md#ui-mirroring) is required.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | Yes | [System locale](../../../../internationalization/i18n-locale-culture.md#how-it-works),which consists of the language, script, and country/region. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a language is an RTL language. The value **true** indicates that the language is anRTL language, and the value **false** indicates the opposite. |

