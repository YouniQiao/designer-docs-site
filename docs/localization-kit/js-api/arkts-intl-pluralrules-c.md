# PluralRules

Provides the capability for obtaining the plural rule type.

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a **PluralRules** object to obtain the singular-plural type of numbers.

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a PluralRules object using the current system locale ID.
let pluralRules = new intl.PluralRules();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: PluralRulesOptions)
```

Creates a **PluralRules** object to obtain the singular-plural type of numbers.

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string> | Yes | Locale ID or locale ID array. If the input is a locale ID array, the  first valid locale ID is used. |
| options | PluralRulesOptions | No |  |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a PluralRules object with the locale ID being zh-CN, localeMatcher being lookup, and type being cardinal.
let pluralRules: intl.PluralRules = new intl.PluralRules('zh-CN', { localeMatcher: 'lookup', type: 'cardinal' });

```

## select

```TypeScript
select(n: double): string
```

Obtains the singular-plural type of the specified number.

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRules.select](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| n | double | Yes | Number for which the singular-plural type is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Singular-plural type. The value can be any of the following: zero, one, two,  few, many, others.  For details about the meanings of different values, see  [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html). |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a PluralRules object with the locale ID being zh-Hans.
let zhPluralRules = new intl.PluralRules('zh-Hans');
// Determine the singular-plural type corresponding to number 1 in locale zh-Hans.
let plural = zhPluralRules.select(1); // plural = 'other'

// Create a PluralRules object with the locale ID being en-US.
let enPluralRules = new intl.PluralRules('en-US');
// Determine the singular-plural type corresponding to number 1 in locale en-US.
plural = enPluralRules.select(1); // plural = 'one'

```

