# getDisplayLanguage

## getDisplayLanguage

```TypeScript
export function getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string
```

Obtains the localized script for the specified language.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** i18n.System.getDisplayLanguage

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | Specified language. |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Localized script for the specified language. |

