# PluralRulesOptions

Defines the options for creating a **PluralRules** object. Since API version 9, the **PluralRulesOptions** attribute is changed from mandatory to optional.

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## maximumFractionDigits

```TypeScript
maximumFractionDigits?: int
```

Maximum number of digits in the fraction part of a number. The value ranges from **1** to **21**. The default value is **3**.

**Type:** int

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.maximumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## minimumFractionDigits

```TypeScript
minimumFractionDigits?: int
```

Minimum number of digits in the fraction part of a number. The value ranges from **0** to **20**. The default value is **0**.

**Type:** int

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.minimumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## maximumSignificantDigits

```TypeScript
maximumSignificantDigits?: int
```

Maximum number of the least significant digits. The value ranges from **1** to **21**. The default value is **21**.

**Type:** int

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.maximumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The value can be **lookup** or **best fit**. The default value is **best fit**.

**Type:** string

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#localematcher)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## minimumSignificantDigits

```TypeScript
minimumSignificantDigits?: int
```

Minimum number of the least significant digits. The value ranges from **1** to **21**. The default value is **1**.

**Type:** int

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.minimumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## type

```TypeScript
type?: string
```

Collation type. The value can be **cardinal** or **ordinal**. The default value is **cardinal**. The value **cardinal** indicates a cardinal number and the value **ordinal** indicates an ordinal number.

**Type:** string

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#type)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

## minimumIntegerDigits

```TypeScript
minimumIntegerDigits?: int
```

Minimum number of digits allowed in the integer part of a number. The value ranges from **1** to **21**. The default value is **1**.

**Type:** int

**Since:** 8

**Deprecated since:** 20

**Substitute:** [Intl.PluralRulesOptions.minimumIntegerDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

