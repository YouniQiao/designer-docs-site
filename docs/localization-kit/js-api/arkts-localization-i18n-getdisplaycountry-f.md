# getDisplayCountry

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

<a id="getdisplaycountry"></a>
## getDisplayCountry

```TypeScript
export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string
```

Obtains the localized name of the specified country/region.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getDisplayCountry](arkts-localization-i18n-system-c.md#getdisplaycountry-1)

<!--Device-i18n-export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string--><!--Device-i18n-export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| country | string | Yes | Specified country. |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),which consists of the language, script, and country/region. |
| sentenceCase | boolean | No | Whether to use sentence case to display the text. The value **true** means to display the text in title case format, and the value **false** means to display the text in the default case format of the locale. The default value is **true**. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Localized script for the specified country. |

