# getCalendar

## getCalendar

```TypeScript
export function getCalendar(locale: string, type?: string): Calendar
```

Obtains the **Calendar** object for the specified locale and calendar type.

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | Yes | [Locale ID](docroot://internationalization/i18n-locale-culture.md#how-it-works), which  consists of the language, script, and country/region, for example, zh-Hans-CN. |
| type | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Calendar | Calendar object. |

