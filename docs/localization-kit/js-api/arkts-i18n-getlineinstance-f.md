# getLineInstance

## getLineInstance

```TypeScript
export function getLineInstance(locale: string): BreakIterator
```

Obtains a **BreakIterator** object. The **BreakIterator** object maintains an internal break iterator that can be used to access various line break points.

**Since:** 8

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region.  The generated  [BreakIterator]i18n.BreakIterator object calculates the positions of line breaks based on the rules of  the specified locale. |

**Return value:**

| Type | Description |
| --- | --- |
| BreakIterator | BreakIterator object. |

