# getDisplayLanguage

## getDisplayLanguage

```TypeScript
export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string
```

Obtains the localized script for the specified language.

**Since:** 7

**Deprecated since:** 9

**Substitute:** i18n.System.getDisplayLanguage

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Specified language. |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | Localized script for the specified language. |

