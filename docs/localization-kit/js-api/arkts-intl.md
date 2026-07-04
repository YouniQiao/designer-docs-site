---
last_update:
  date: 2026-07-04
---

# @ohos.intl

The **intl** module provides basic i18n capabilities, such as time and date formatting, number formatting, and string sorting, through the standard i18n APIs defined in ECMA 402.

**Since:** 6

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@ohos.intl';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [Collator](arkts-localization-collator-c.md) | Enable language-sensitive string comparison. |
| [DateTimeFormat](arkts-localization-datetimeformat-c.md) | Performs date and time formatting. |
| [Locale](arkts-localization-locale-c.md) | Provides APIs for obtaining locale information. |
| [NumberFormat](arkts-localization-numberformat-c.md) | Provides the API for formatting number strings. |
| [PluralRules](arkts-localization-pluralrules-c.md) | Enables plural-sensitive formatting and plural-related language rules. |
| [RelativeTimeFormat](arkts-localization-relativetimeformat-c.md) | Given a Time period length value and a unit, RelativeTimeFormat object enables language-sensitive relative time formatting. |

### Interfaces

| Name | Description |
| --- | --- |
| [CollatorOptions](arkts-localization-collatoroptions-i.md) | Defines the options for creating a **Collator** object. Since API version 9, the attributes in **CollatorOptions** are optional. |
| [DateTimeOptions](arkts-localization-datetimeoptions-i.md) | Defines the options for a **DateTimeOptions** object. Since API version 9, the **DateTimeOptions** attribute is changed from mandatory to optional. |
| [LocaleOptions](arkts-localization-localeoptions-i.md) | Options for initializing the **Locale** object. Since API version 9, the **LocaleOptions** attribute is changed from mandatory to optional. &gt; **NOTE** &gt; &gt; - For details about **calendar**, see Table 1 in &gt; [Calendar Setting](../../../../internationalization/i18n-calendar.md). |
| [NumberOptions](arkts-localization-numberoptions-i.md) | Options for creating the **NumberFormat** object. Since API version 9, the **NumberOptions** attribute is changed from mandatory to optional. |
| [PluralRulesOptions](arkts-localization-pluralrulesoptions-i.md) | Defines the options for creating a **PluralRules** object. Since API version 9, the **PluralRulesOptions** attribute is changed from mandatory to optional. |
| [RelativeTimeFormatInputOptions](arkts-localization-relativetimeformatinputoptions-i.md) | Defines the configuration options for a **RelativeTimeFormat** object. Since API version 9, the attributes in **RelativeTimeFormatInputOptions** are optional. |
| [RelativeTimeFormatResolvedOptions](arkts-localization-relativetimeformatresolvedoptions-i.md) | Represents the formatting options for the **RelativeTimeFormat** object. |

