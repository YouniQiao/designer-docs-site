# @ohos.intl

The **intl** module provides basic i18n capabilities, such as time and date formatting, number formatting, and string sorting, through the standard i18n APIs defined in ECMA 402.

**起始版本：** 6

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [Collator](arkts-intl-collator-c.md) | Provides the string collation capability. |
| [DateTimeFormat](arkts-intl-datetimeformat-c.md) | Performs date and time formatting. |
| [Locale](arkts-intl-locale-c.md) | Provides APIs for obtaining locale information. |
| [NumberFormat](arkts-intl-numberformat-c.md) | Provides the API for formatting number strings. |
| [PluralRules](arkts-intl-pluralrules-c.md) | Provides the capability for obtaining the plural rule type. |
| [RelativeTimeFormat](arkts-intl-relativetimeformat-c.md) | Provides the relative time formatting capability. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CollatorOptions](arkts-intl-collatoroptions-i.md) | Defines the options for creating a **Collator** object. Since API version 9, the attributes in **CollatorOptions** are optional. |
| [DateTimeOptions](arkts-intl-datetimeoptions-i.md) | Defines the options for a **DateTimeOptions** object. Since API version 9, the **DateTimeOptions** attribute is changed from mandatory to optional. |
| [LocaleOptions](arkts-intl-localeoptions-i.md) | Options for initializing the **Locale** object. Since API version 9, the **LocaleOptions** attribute is changed from mandatory to optional. > **NOTE** > > - For details about **calendar**, see Table 1 in > [Calendar Setting](docroot://internationalization/i18n-calendar.md). |
| [NumberOptions](arkts-intl-numberoptions-i.md) | Options for creating the **NumberFormat** object. Since API version 9, the **NumberOptions** attribute is changed from mandatory to optional. |
| [PluralRulesOptions](arkts-intl-pluralrulesoptions-i.md) | Defines the options for creating a **PluralRules** object. Since API version 9, the **PluralRulesOptions** attribute is changed from mandatory to optional. |
| [RelativeTimeFormatInputOptions](arkts-intl-relativetimeformatinputoptions-i.md) | Defines the configuration options for a **RelativeTimeFormat** object. Since API version 9, the attributes in **RelativeTimeFormatInputOptions** are optional. |
| [RelativeTimeFormatResolvedOptions](arkts-intl-relativetimeformatresolvedoptions-i.md) | Represents the formatting options for the **RelativeTimeFormat** object. |

