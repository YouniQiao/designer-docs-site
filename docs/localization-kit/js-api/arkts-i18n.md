# @ohos.i18n

This module provides system-related and enhanced [i18n](../../../../internationalization/i18n-l10n.md) capabilities,
such as locale management, phone number formatting, and calendar, through supplementary i18n APIs that are not
defined in [ECMA 402](https://dev.ecma-international.org/publications-and-standards/standards/ecma-402/). The
[intl](arkts-intl.md) module provides basic i18n capabilities through the standard i18n APIs defined in ECMA
402. It works with the **i18n** module to provide a complete suite of i18n capabilities. The terms used in the APIs
are defined as follows:

- Pattern string, which is a string consisting of
[Unicode date field symbols](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) and custom
text enclosed by single quotation marks.
- Skeleton string: a string that consists of
[Unicode date field symbols](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) and does
not support custom text.

> **NOTE**
>
> - The APIs of this module are based on the [CLDR](https://cldr.unicode.org) internationalization database. The
> processing results of the APIs may be adjusted as the CLDR standard evolves. For example, the return value of the
> [date and time formatting API](arkts-localization-simplenumberformat-c.md) is used only for UI display. Do not hardcode the
> return value or make assumptions about the return value. Otherwise, version compatibility problems may occur. API
> version 12 corresponds to [CLDR 42](https://cldr.unicode.org/index/downloads/cldr-42). For details about data
> changes, see the official CLDR documentation.
>
> - Since API version 11, some APIs of this module are supported in ArkTS widgets.

**Since:** 7

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addPreferredLanguage](arkts-localization-addpreferredlanguage-f.md#addpreferredlanguage-1) | Adds a preferred language to the specified position on the preferred language list. |
| [getCalendar](arkts-localization-getcalendar-f.md#getcalendar-1) | Obtains the **Calendar** object for the specified locale and calendar type. |
| [getChineseCalendar](arkts-localization-getchinesecalendar-f.md#getchinesecalendar-1) | Obtains the ChineseCalendar object for the specified locale. |
| [getDisplayCountry](arkts-localization-getdisplaycountry-f.md#getdisplaycountry-1) | Obtains the localized name of the specified country/region. |
| [getDisplayLanguage](arkts-localization-getdisplaylanguage-f.md#getdisplaylanguage-1) | Obtains the localized script for the specified language. |
| [getFirstPreferredLanguage](arkts-localization-getfirstpreferredlanguage-f.md#getfirstpreferredlanguage-1) | Obtains the first language in the preferred language list. |
| [getInstance](arkts-localization-getinstance-f.md#getinstance-1) | Creates an **IndexUtil** object. |
| [getLineInstance](arkts-localization-getlineinstance-f.md#getlineinstance-1) | Obtains a **BreakIterator** object. The **BreakIterator** object maintains an internal break iterator that can beused to access various line break points. |
| [getPreferredLanguageList](arkts-localization-getpreferredlanguagelist-f.md#getpreferredlanguagelist-1) | Obtains the list of preferred languages. |
| [getSimpleDateTimeFormatByPattern](arkts-localization-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-1) | Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the differencebetween the objects obtained by this API and[getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-1), see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1). |
| [getSimpleDateTimeFormatByPattern](arkts-localization-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-2) | Obtains a **SimpleDateTimeFormat** object based on the specified pattern string. For details about the differencebetween the objects obtained by this API and[getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-2), see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1). |
| [getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-1) | Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference betweenthe objects obtained by this API and[getSimpleDateTimeFormatByPattern](arkts-localization-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-1), see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1). |
| [getSimpleDateTimeFormatBySkeleton](arkts-localization-getsimpledatetimeformatbyskeleton-f.md#getsimpledatetimeformatbyskeleton-2) | Obtains a **SimpleDateTimeFormat** object based on the specified skeleton. For details about the difference betweenthe objects obtained by this API and[getSimpleDateTimeFormatByPattern](arkts-localization-getsimpledatetimeformatbypattern-f.md#getsimpledatetimeformatbypattern-2), see the examples in [SimpleDateTimeFormat.format](arkts-localization-simpledatetimeformat-c.md#format-1). |
| [getSimpleNumberFormatBySkeleton](arkts-localization-getsimplenumberformatbyskeleton-f.md#getsimplenumberformatbyskeleton-1) | Obtains a **SimpleNumberFormat** object based on the specified skeleton. |
| [getSimpleNumberFormatBySkeleton](arkts-localization-getsimplenumberformatbyskeleton-f.md#getsimplenumberformatbyskeleton-2) | Obtains a **SimpleNumberFormat** object based on the specified skeleton. |
| [getSystemLanguage](arkts-localization-getsystemlanguage-f.md#getsystemlanguage-1) | Obtains the system language. |
| [getSystemLocale](arkts-localization-getsystemlocale-f.md#getsystemlocale-1) | Obtains the system locale. |
| [getSystemRegion](arkts-localization-getsystemregion-f.md#getsystemregion-1) | Obtains the system region. |
| [getTimeZone](arkts-localization-gettimezone-f.md#gettimezone-1) | Obtains the **TimeZone** object corresponding to the specified time zone ID. |
| [is24HourClock](arkts-localization-is24hourclock-f.md#is24hourclock-1) | Checks whether the 24-hour clock is used. |
| [isRTL](arkts-localization-isrtl-f.md#isrtl-1) | Checks whether a language is an RTL language. For an RTL language,[UI mirroring](../../../../internationalization/i18n-ui-design.md#ui-mirroring) is required. |
| [removePreferredLanguage](arkts-localization-removepreferredlanguage-f.md#removepreferredlanguage-1) | Removes a preferred language from the specified position on the preferred language list. |
| [set24HourClock](arkts-localization-set24hourclock-f.md#set24hourclock-1) | Sets the 24-hour clock. |

### Classes

| Name | Description |
| --- | --- |
| [AdvancedMeasureFormat](arkts-localization-advancedmeasureformat-c.md) | Provides the number formatting capability, supporting automatic unit conversion based on specific application scenarios. |
| [BreakIterator](arkts-localization-breakiterator-c.md) | Provides text line breaking capabilities, such as obtaining, moving, and identifying break points. |
| [Calendar](arkts-localization-calendar-c.md) | Provides calendar management capabilities, such as calendar name retrieval and date calculation. |
| [Character](arkts-localization-character-c.md) | Provides the API for accessing unicode character properties. For example, determine whether a character is a number. |
| [ChineseCalendar](arkts-localization-chinesecalendar-c.md) | Provide a ChineseCalendar interface which could handle unique characteristics of the chinese calendar,such as leap month. |
| [EntityRecognizer](arkts-localization-entityrecognizer-c.md) | Provides entity recognition capabilities, which can be used to obtain the type and start and end positions of anentity in the text. Currently, supported entities include phone numbers, and date and time. |
| [HolidayManager](arkts-localization-holidaymanager-c.md) | Provides holiday data parsing capabilities, such as determining holidays and obtaining the holiday list of aspecified year. |
| [I18NUtil](arkts-localization-i18nutil-c.md) | Internationalization utility class, which provides the capabilities of unit conversion, date sequence retrieval,time segment name retrieval, region matching, and path localization. |
| [ISO8601DateTimeFormat](arkts-localization-iso8601datetimeformat-c.md) | Provide a DateTime formatting interface which could format date to ISO 8601 standard string.[ISO8601](https://iso8601.com/). |
| [IndexUtil](arkts-localization-indexutil-c.md) | Provides index management capabilities, such as obtaining the locale index list and text index values. |
| [Normalizer](arkts-localization-normalizer-c.md) | Provides the text normalization capabilities. |
| [PhoneNumberFormat](arkts-localization-phonenumberformat-c.md) | Provides phone number management capabilities, such as phone number validity verification, formatting, and homelocation retrieval. |
| [SimpleDateTimeFormat](arkts-localization-simpledatetimeformat-c.md) | Provide a simple date time formatting interface. |
| [SimpleNumberFormat](arkts-localization-simplenumberformat-c.md) | Formats a number based on the specified skeleton string. |
| [StyledDateTimeFormat](arkts-localization-styleddatetimeformat-c.md) | Provide a DateTime formatting interface which could format DateTime to StyleString. |
| [StyledNumberFormat](arkts-localization-stylednumberformat-c.md) | Provide a number formatting interface which could format number to StyleString. |
| [SymbolDateTimeFormat](arkts-localization-symboldatetimeformat-c.md) | Provide a DateTime formatting interface that supports custom symbols.This interface formats date time values into strings with custom symbols,and can replace variable symbols in the formatted result with custom fixed symbols(e.g., replacing "2:23 PM" with "2:23 afternoon"). |
| [SymbolNumberFormat](arkts-localization-symbolnumberformat-c.md) | Provide a Number formatting interface that supports custom symbols.This interface formats number values into strings with custom symbols,and can replace variable symbols in the formatted result with custom fixed symbols(e.g., replacing "null" to "NA"). |
| [TimeZone](arkts-localization-timezone-c.md) | Provides time zone management capabilities, such as time zone name translation, offset retrieval, and transitionrule retrieval. |
| [Transliterator](arkts-localization-transliterator-c.md) | Provides text transliteration capabilities, such as obtaining the supported language IDs and transliterating text. |
| [Unicode](arkts-localization-unicode-c.md) | Provides character attribute management capabilities, such as checking whether a character is a space, digit, orletter. |
| [ZoneOffsetTransition](arkts-localization-zoneoffsettransition-c.md) | Provides the API for obtaining a timezone transition information. |
| [ZoneRules](arkts-localization-zonerules-c.md) | Queries the time zone transition rule. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [System](arkts-localization-system-c.md) | Provides system attribute configuration functions, including translating language and country/region names,obtaining the list of supported languages and countries/regions, and obtaining the system language and region. |
| [System](arkts-localization-system-c-sys.md) | Provides system attribute configuration functions, including translating language and country/region names,obtaining the list of supported languages and countries/regions, and obtaining the system language and region. |
| [SystemLocaleManager](arkts-localization-systemlocalemanager-c-sys.md) | Provide some functions for settings and startup guide to select language or region. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [AdvancedMeasureFormatOptions](arkts-localization-advancedmeasureformatoptions-i.md) | Represents optional configuration items for AdvancedMeasureFormat object. |
| [ChineseCalendarTime](arkts-localization-chinesecalendartime-i.md) | Represents chinese calendar time element for the ChineseCalendar object. |
| [EncodingInfo](arkts-localization-encodinginfo-i.md) | Defines the detect encoding result information. |
| [EntityInfoItem](arkts-localization-entityinfoitem-i.md) | Defines a list of entities. |
| [HolidayInfoItem](arkts-localization-holidayinfoitem-i.md) | Represents the holiday information. |
| [HolidayLocalName](arkts-localization-holidaylocalname-i.md) | Represents the name of a holiday in different languages. |
| [ISO8601DateTimeFormatOptions](arkts-localization-iso8601datetimeformatoptions-i.md) | Represents optional configuration items for the ISO8601DateTimeFormat object.These options determine which elements need to be displayed after formatting and the corresponding format. |
| [PhoneNumberFormatOptions](arkts-localization-phonenumberformatoptions-i.md) | Options for **PhoneNumberFormat** object initialization. |
| [ResolvedSymbolDateTimeFormatOptions](arkts-localization-resolvedsymboldatetimeformatoptions-i.md) | Represents optional element for the ResolvedSymbolDateTimeFormatOptions object.Define the resolved symbol element and value that need to get. |
| [ResolvedSymbolNumberFormatOptions](arkts-localization-resolvedsymbolnumberformatoptions-i.md) | Represents optional element for the ResolvedSymbolNumberFormatOptions object.Define the resolved symbol element and value that need to get. |
| [StyledDateTimeFormatOptions](arkts-localization-styleddatetimeformatoptions-i.md) | Optional configuration items for creating the time and date formatting object for rich text display. |
| [StyledNumberFormatOptions](arkts-localization-stylednumberformatoptions-i.md) | Represents optional configuration items for the **NumberFormat** object. |
| [SymbolDateTimeFormatOptions](arkts-localization-symboldatetimeformatoptions-i.md) | Represents optional configuration items for the SymbolDateTimeFormat object.Define the symbol element and value that need to be replaced. |
| [SymbolNumberFormatOptions](arkts-localization-symbolnumberformatoptions-i.md) | Represents optional configuration items for the SymbolNumberFormat object.Define the symbol element and value that need to be replaced. |
| [UnitInfo](arkts-localization-unitinfo-i.md) | Defines the measurement unit information. |
| [Util](arkts-localization-util-i.md) | Provides util functions. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [LocaleItem](arkts-localization-localeitem-i-sys.md) | Represents the locale information, which consists of the language, script, and country/region. |
| [SortOptions](arkts-localization-sortoptions-i-sys.md) | Represents the language or country/region sorting option. |
| [TimeZoneCityItem](arkts-localization-timezonecityitem-i-sys.md) | Represents a time zone and city combination item. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [NormalizerMode](arkts-localization-normalizermode-e.md) | Enumerates text normalization modes. |
| [TemperatureType](arkts-localization-temperaturetype-e.md) | Enumerates temperature units. |
| [UnitUsage](arkts-localization-unitusage-e.md) | Enumerates unit formatting scenarios. |
| [WeekDay](arkts-localization-weekday-e.md) | Enumerates the first day of a week. The value ranges from Monday to Sunday. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [SuggestionType](arkts-localization-suggestiontype-e-sys.md) | Represents the language or country/region suggestion type. |
<!--DelEnd-->

