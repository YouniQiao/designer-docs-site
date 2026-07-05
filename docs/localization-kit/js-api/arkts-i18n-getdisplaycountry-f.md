# getDisplayCountry

## getDisplayCountry

```TypeScript
export function getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string
```

Obtains the localized name of the specified country/region.

**Since:** 7

**Deprecated since:** 9

**Substitute:** i18n.System.getDisplayCountry

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| country | string | Yes | Specified country. |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | Localized script for the specified country. |

