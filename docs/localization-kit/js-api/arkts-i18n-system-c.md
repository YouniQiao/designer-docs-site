# System

Provides system attribute configuration functions, including translating language and country/region names, obtaining the list of supported languages and countries/regions, and obtaining the system language and region.

**Since:** 9

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## addPreferredLanguage

```TypeScript
static addPreferredLanguage(language: string, index?: int): void
```

Adds a preferred language to the specified position on the preferred language list.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Valid ID of the language to be added as a preferred language. |
| index | int | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// Add zh-CN to the preferred language list.
let language = 'zh-CN';
let index = 0;
try {
  i18n.System.addPreferredLanguage(language, index); // Add zh-CN to the first place in the preferred language list.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.addPreferredLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getAppPreferredLanguage

```TypeScript
static getAppPreferredLanguage(): string
```

Obtains the preferred language of an application.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| string | Preferred language of the application. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let appPreferredLanguage: string = i18n.System.getAppPreferredLanguage();

```

## getDisplayCountry

```TypeScript
static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string
```

Obtains the country/region display name in the specified language.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| country | string | Yes | Valid country/region code. For details, see  [System Locale](docroot://internationalization/i18n-locale-culture.md#how-it-works). |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | Country/region display name in the specified language. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let displayCountry: string = i18n.System.getDisplayCountry('CN', 'en-GB'); // displayCountry = 'China'
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getDisplayCountry failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getDisplayLanguage

```TypeScript
static getDisplayLanguage(language: string, locale: string, sentenceCase?: boolean): string
```

Obtains the language display name in the specified language.

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Valid language ID. For details, see  [System Locale](docroot://internationalization/i18n-locale-culture.md#how-it-works). |
| locale | string | Yes | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | Language display name in the specified language. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // Obtain the display name of Chinese in English.
  let displayLanguage: string = i18n.System.getDisplayLanguage('zh', 'en-GB'); // displayLanguage = 'Chinese'
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getDisplayLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getFirstDayOfWeek

```TypeScript
static getFirstDayOfWeek(): WeekDay
```

Obtains the first day of a week in the system settings.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| WeekDay | Start day of a week. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let firstDayOfWeek: i18n.WeekDay = i18n.System.getFirstDayOfWeek();

```

## getFirstPreferredLanguage

```TypeScript
static getFirstPreferredLanguage(): string
```

Obtains the first language in the preferred language list.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| string | First language in the preferred language list. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let firstPreferredLanguage: string = i18n.System.getFirstPreferredLanguage();

```

## getPreferredLanguageList

```TypeScript
static getPreferredLanguageList(): Array<string>
```

Obtains the list of preferred languages.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | List of preferred languages. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let preferredLanguageList: Array<string> = i18n.System.getPreferredLanguageList();

```

## getSimplifiedLanguage

```TypeScript
static getSimplifiedLanguage(language?: string): string
```

Obtains the simplified representation of a language. For example, the simplified representation of **en-Latn-US** is **en**, and that of **en-Latn-GB** is **en-GB**.

**Since:** 15

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | If language is not passed, the application checks for dialects supported by the system  based on the system language and locale. If such a dialect is found, the simplified representation of the  dialect is returned. Otherwise, the simplified representation of the system language is returned.  If language is passed, the simplified representation of the specified language is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // simplifiedLanguage = 'zh'
  let simplifiedLanguage: string = i18n.System.getSimplifiedLanguage('zh-Hans-CN');
  // Obtain the simplified representation of the current system language.
  let simplifiedSystemLanguage: string = i18n.System.getSimplifiedLanguage();
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSimplifiedLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemCollations

```TypeScript
static getSystemCollations(): Map<string, string>
```

Gets collations supported by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;string, string> | The map will containing the collation's identifier and name.  If the map is empty of the collation for given locale does not need to be set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let systemCollations: Map<string, string> = i18n.System.getSystemCollations();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemCollations failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemCountries

```TypeScript
static getSystemCountries(language: string): Array<string>
```

Obtains the list of countries/regions supported for the specified language.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works). |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | List of countries/regions supported for the specified language. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // systemCountries = [ 'ZW', 'YT', 'YE', ..., 'ER', 'CN', 'DE' ]
  let systemCountries: Array<string> = i18n.System.getSystemCountries('zh');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemCountries failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemLanguage

```TypeScript
static getSystemLanguage(): string
```

Obtains the current system language. To listen for system language changes, enable listening for [COMMON_EVENT_LOCALE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed) . For details, see [System Language and Region](docroot://internationalization/i18n-system-language-region.md#how-to-develop).

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 11 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| string | Language ID. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLanguage: string = i18n.System.getSystemLanguage(); // If the system language is simplified Chinese, then systemLanguage is 'zh-Hans'.

```

## getSystemLanguages

```TypeScript
static getSystemLanguages(): Array<string>
```

Obtains the list of system languages. Since API version 11, this API is supported in ArkTS widgets.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | List of system languages. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

// systemLanguages = [ 'ug', 'bo', 'zh-Hant', 'en-Latn-US', 'zh-Hans' ]
let systemLanguages: Array<string> = i18n.System.getSystemLanguages();

```

## getSystemLocale

```TypeScript
static getSystemLocale(): string
```

Obtains the current system locale.

**Since:** 9

**Deprecated since:** 20

**Substitute:** i18n.System.getSystemLocaleInstance

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| string | Locale ID. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLocale: string = i18n.System.getSystemLocale(); // If the system language is simplified Chinese and the system region is China, then systemLocale is zh-Hans-CN.

```

## getSystemLocaleInstance

```TypeScript
static getSystemLocaleInstance(): Intl.Locale
```

Obtains the current system locale. To listen for system locale changes, enable listening for [COMMON_EVENT_LOCALE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed) . For details, see [System Language and Region](docroot://internationalization/i18n-system-language-region.md#how-to-develop).

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| Intl.Locale | the locale object currently used by the system. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLocale: Intl.Locale = i18n.System.getSystemLocaleInstance();

```

## getSystemMeasurements

```TypeScript
static getSystemMeasurements(): Map<string, string>
```

Gets measurements supported by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;string, string> | a map will containing identifier and name of measurements supported by system  locale. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let systemMeasurements: Map<string, string> = i18n.System.getSystemMeasurements();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemMeasurements failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemNumberingSystems

```TypeScript
static getSystemNumberingSystems(): Map<string, string>
```

Gets numbering systems supported by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;string, string> | a map will containing the numbering system 's identifier and sample.  If the map is empty, there is no local digit for given locale. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let systemNumberingSystems: Map<string, string> = i18n.System.getSystemNumberingSystems();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemNumberingSystems failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemNumberPatterns

```TypeScript
static getSystemNumberPatterns(): Map<string, string>
```

Gets commonly used number patterns for system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;string, string> | a map containing the used number patterns and example of system locale. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let systemNumberPatterns: Map<string, string> = i18n.System.getSystemNumberPatterns();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemNumberPatterns failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemNumericalDatePatterns

```TypeScript
static getSystemNumericalDatePatterns(): Map<string, string>
```

Gets numerical date patterns and examples supported by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Map&lt;string, string> | a map containing the date patterns and examples |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let datePatterns: Map<string, string> = i18n.System.getSystemNumericalDatePatterns();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getSystemNumericalDatePatterns failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getSystemRegion

```TypeScript
static getSystemRegion(): string
```

Obtains the current system country/region. To listen for system region changes, enable listening for [COMMON_EVENT_LOCALE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed) . For details, see [System Language and Region](docroot://internationalization/i18n-system-language-region.md#how-to-develop).

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| string | Country/region ID. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemRegion: string = i18n.System.getSystemRegion(); // If the system region is China, then systemRegion is CN.

```

## getTemperatureName

```TypeScript
static getTemperatureName(type: TemperatureType): string
```

Obtains the name of a temperature unit.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TemperatureType | Yes | Temperature unit. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Name of the temperature unit, which can be celsius, fahrenheit, and kelvin. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // temperatureName = 'celsius'
  let temperatureName: string = i18n.System.getTemperatureName(i18n.TemperatureType.CELSIUS);
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getTemperatureName failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getTemperatureType

```TypeScript
static getTemperatureType(): TemperatureType
```

Obtains the temperature unit of the system.

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| TemperatureType | Temperature unit. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let temperatureType: i18n.TemperatureType = i18n.System.getTemperatureType();

```

## getUsingCollation

```TypeScript
static getUsingCollation(): string
```

Gets collation currently used by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The identifier of the collation model used by system locale will be return. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let usingCollation: string = i18n.System.getUsingCollation();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getUsingCollation failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getUsingLocalDigit

```TypeScript
static getUsingLocalDigit(): boolean
```

Checks whether use of local digits is enabled.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether use of local digits is enabled. The value true indicates that use of local  digits is enabled, and the value false indicates the opposite. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let usingLocalDigit: boolean = i18n.System.getUsingLocalDigit();

```

## getUsingMeasurement

```TypeScript
static getUsingMeasurement(): string
```

Gets measurement currently used by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The identifier of measurement system using by system locale |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let usingMeasurement: string = i18n.System.getUsingMeasurement();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getUsingMeasurement failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getUsingNumberingSystem

```TypeScript
static getUsingNumberingSystem(): string
```

Gets numbering system currently used by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | the numbering systems's identifier. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getUsingNumberPattern

```TypeScript
static getUsingNumberPattern(): string
```

Gets number pattern used by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The number pattern identifier used by system locale |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let usingNumberPattern: string = i18n.System.getUsingNumberPattern();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getUsingNumberPattern failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getUsingNumericalDatePattern

```TypeScript
static getUsingNumericalDatePattern(): string
```

Gets numerical date pattern currently used by system locale.

**Since:** 20

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| string | The numerical date pattern used by system locale |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let datePattern: string = i18n.System.getUsingNumericalDatePattern();
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.getUsingNumericalDatePattern failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## is24HourClock

```TypeScript
static is24HourClock(): boolean
```

Checks whether the 24-hour clock is used. To listen for system time format changes, enable listening for [COMMON_EVENT_TIME_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_time_changed) . For details, see [User Preference](docroot://internationalization/i18n-user-preferences.md#how-to-develop).

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 11 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the 24-hour clock is used. The value true indicates that the 24-hour clock is  used, the the value false means the opposite. |

**Example**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let is24HourClock: boolean = i18n.System.is24HourClock(); // If the 24-hour clock is used, then is24HourClock is true.

```

## isSuggested

```TypeScript
static isSuggested(language: string, region?: string): boolean
```

Checks whether a language is a suggested language in the specified region. It can be used for region-based language recommendation or language-based region recommendation.

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works), for example, zh. |
| region | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether a language is a suggested language. The value true indicates that the language  is a suggested language of the region, the the value false indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let isSuggestedCountry: boolean = i18n.System.isSuggested('zh', 'CN'); // isSuggestedCountry = true
  isSuggestedCountry = i18n.System.isSuggested('en'); // Check whether a language is a suggested language for the current system region.
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.isSuggested failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## removePreferredLanguage

```TypeScript
static removePreferredLanguage(index: int): void
```

Removes a preferred language from the specified position on the preferred language list.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Yes | Position of the preferred language to delete. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// Delete the first preferred language from the preferred language list.
let index: number = 0;
try {
  i18n.System.removePreferredLanguage(index);
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.removePreferredLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## set24HourClock

```TypeScript
static set24HourClock(option: boolean): void
```

Sets whether to use the 24-hour clock.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | boolean | Yes | Whether to use the 24-hour clock. The value "true" means to use the 24-hour clock,  the the value "false" means the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// Set the system time to the 24-hour clock.
try {
  i18n.System.set24HourClock(true);
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.set24HourClock failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setAppPreferredLanguage

```TypeScript
static setAppPreferredLanguage(language: string): void
```

Sets the preferred language of the application. Resources are loaded in the preferred language when the application is launched. If the preferred language is set to **default**, the application's language will be the same as the system language, and the setting will take effect upon cold starting of the application.

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works) or default. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setAppPreferredLanguage('zh');
} catch (error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setAppPreferredLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setFirstDayOfWeek

```TypeScript
static setFirstDayOfWeek(type: WeekDay): void
```

Sets the first day of a week.

**Since:** 18

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | WeekDay | Yes | Start day of a week. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setFirstDayOfWeek (i18n.WeekDay.MON); // Set the preferred start day of a week to Monday.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setFirstDayOfWeek failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemCollation

```TypeScript
static setSystemCollation(identifier: string): void
```

Sets the system collation mode.

**Since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identifier | string | Yes | Identifier of the collation mode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemCollation("zhuyin"); // If the specified collation mode is not supported, an error is reported.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemCollation failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemLanguage

```TypeScript
static setSystemLanguage(language: string): void
```

Sets the system language.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Valid language ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// Set the system language
try {
  i18n.System.setSystemLanguage('zh'); // Set the current system language to zh.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemLanguage failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemLocale

```TypeScript
static setSystemLocale(locale: string): void
```

Sets the system locale.

**Since:** 9

**Deprecated since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | Yes | System locale, which consists of the language, script, and country/region. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemLocale('zh-CN'); // Set the system locale to zh-CN.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemLocale failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemMeasurement

```TypeScript
static setSystemMeasurement(identifier: string): void
```

Sets the measurement system used by the system locale.

**Since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identifier | string | Yes | Identifier of the measurement system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemMeasurement("uksystem"); // If the specified measurement system is not supported, error code 8900001 is reported.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemMeasurement failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemNumberingSystem

```TypeScript
static setSystemNumberingSystem(identifier: string): void
```

Sets the numbering system used by the system locale.

**Since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identifier | string | Yes | Identifier of the numbering system. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumberingSystem("arab"); // If the specified numbering system is not supported, an error is reported.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemNumberingSystem failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemNumberPattern

```TypeScript
static setSystemNumberPattern(pattern: string): void
```

Sets the number pattern used by the system locale.

**Since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pattern | string | Yes | Identifier of the number pattern. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumberPattern("002e002c"); // If the specified number pattern is not supported, an error is reported.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemNumberPattern failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemNumericalDatePattern

```TypeScript
static setSystemNumericalDatePattern(identifier : string): void
```

Sets the numerical date pattern used by the system locale.

**Since:** 20

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| identifier | string | Yes | Identifier of the numerical date pattern. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumericalDatePattern("dd/MM/y"); // If the specified numerical date pattern is not supported, error code 8900001 is reported.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemNumericalDatePattern failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setSystemRegion

```TypeScript
static setSystemRegion(region: string): void
```

Sets the system region.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| region | string | Yes | Valid region ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemRegion('CN'); // Set the current system region to CN.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setSystemRegion failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setTemperatureType

```TypeScript
static setTemperatureType(type: TemperatureType): void
```

Sets the temperature unit of the system.

**Since:** 18

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | TemperatureType | Yes | Temperature unit. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setTemperatureType(i18n.TemperatureType.CELSIUS); //: Set the temperature unit to °C.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setTemperatureType failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## setUsingLocalDigit

```TypeScript
static setUsingLocalDigit(flag: boolean): void
```

Specifies whether to enable use of local digits.

**Since:** 9

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flag | boolean | Yes | Whether to turn on the local digit switch. The value "true" means to turn on the local  digit switch, and the value "false" indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setUsingLocalDigit(true); // Enable the local digit switch.
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setUsingLocalDigit failed, error code: ${err.code}, message: ${err.message}.`);
}

```

