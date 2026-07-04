# getDisplayCountry

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## getDisplayCountry

```TypeScript
export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string
```

Obtains the localized name of the specified country/region.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getDisplayCountry](arkts-localization-system-c.md#getdisplaycountry-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| country | string | Yes | Specified country. |
| locale | string | Yes | [System locale](../../../../internationalization/i18n-locale-culture.md#how-it-works),which consists of the language, script, and country/region. |
| sentenceCase | boolean | No | Whether to use sentence case to display the text. The value **true** means todisplay the text in title case format, and the value **false** means to display the text in the default caseformat of the locale. The default value is **true**. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Localized script for the specified country. |

