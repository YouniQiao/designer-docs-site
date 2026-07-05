# System

Provides system attribute configuration functions, including translating language and country/region names, obtaining the list of supported languages and countries/regions, and obtaining the system language and region.

**起始版本：** 9

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## addPreferredLanguage

```TypeScript
static addPreferredLanguage(language: string, index?: int): void
```

Adds a preferred language to the specified position on the preferred language list.

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | Valid ID of the language to be added as a preferred language. |
| index | int | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 将语言zh-CN添加到系统偏好语言列表中
let language = 'zh-CN';
let index = 0;
try {
  i18n.System.addPreferredLanguage(language, index); // 将zh-CN添加到系统偏好语言列表的第1位
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

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Preferred language of the application. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let appPreferredLanguage: string = i18n.System.getAppPreferredLanguage();

```

## getDisplayCountry

```TypeScript
static getDisplayCountry(country: string, locale: string, sentenceCase?: boolean): string
```

Obtains the country/region display name in the specified language.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| country | string | 是 | Valid country/region code. For details, see  [System Locale](docroot://internationalization/i18n-locale-culture.md#how-it-works). |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Country/region display name in the specified language. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | Valid language ID. For details, see  [System Locale](docroot://internationalization/i18n-locale-culture.md#how-it-works). |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |
| sentenceCase | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Language display name in the specified language. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // 获取“中文”在英文下的翻译
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

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| WeekDay | Start day of a week. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let firstDayOfWeek: i18n.WeekDay = i18n.System.getFirstDayOfWeek();

```

## getFirstPreferredLanguage

```TypeScript
static getFirstPreferredLanguage(): string
```

Obtains the first language in the preferred language list.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | First language in the preferred language list. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let firstPreferredLanguage: string = i18n.System.getFirstPreferredLanguage();

```

## getPreferredLanguageList

```TypeScript
static getPreferredLanguageList(): Array<string>
```

Obtains the list of preferred languages.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | List of preferred languages. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let preferredLanguageList: Array<string> = i18n.System.getPreferredLanguageList();

```

## getSimplifiedLanguage

```TypeScript
static getSimplifiedLanguage(language?: string): string
```

Obtains the simplified representation of a language. For example, the simplified representation of **en-Latn-US** is **en**, and that of **en-Latn-GB** is **en-GB**.

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | If language is not passed, the application checks for dialects supported by the system  based on the system language and locale. If such a dialect is found, the simplified representation of the  dialect is returned. Otherwise, the simplified representation of the system language is returned.  If language is passed, the simplified representation of the specified language is returned. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  // simplifiedLanguage = 'zh'
  let simplifiedLanguage: string = i18n.System.getSimplifiedLanguage('zh-Hans-CN');
  // 获取当前系统语言的简化表示
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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Map&lt;string, string> | The map will containing the collation's identifier and name.  If the map is empty of the collation for given locale does not need to be set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | List of countries/regions supported for the specified language. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Language ID. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLanguage: string = i18n.System.getSystemLanguage(); // 如果系统语言为简体中文，systemLanguage = 'zh-Hans'

```

## getSystemLanguages

```TypeScript
static getSystemLanguages(): Array<string>
```

Obtains the list of system languages. Since API version 11, this API is supported in ArkTS widgets.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | List of system languages. |

**示例：**

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

**起始版本：** 9

**废弃版本：** 20

**替代接口：** i18n.System.getSystemLocaleInstance

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Locale ID. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLocale: string = i18n.System.getSystemLocale(); // 如果系统语言为简体中文、地区为中国，systemLocale = 'zh-Hans-CN'

```

## getSystemLocaleInstance

```TypeScript
static getSystemLocaleInstance(): Intl.Locale
```

Obtains the current system locale. To listen for system locale changes, enable listening for [COMMON_EVENT_LOCALE_CHANGED](docroot://reference/apis-basic-services-kit/common_event/commonEventManager-definitions.md#common_event_locale_changed) . For details, see [System Language and Region](docroot://internationalization/i18n-system-language-region.md#how-to-develop).

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Intl.Locale | the locale object currently used by the system. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLocale: Intl.Locale = i18n.System.getSystemLocaleInstance();

```

## getSystemMeasurements

```TypeScript
static getSystemMeasurements(): Map<string, string>
```

Gets measurements supported by system locale.

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Map&lt;string, string> | a map will containing identifier and name of measurements supported by system  locale. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Map&lt;string, string> | a map will containing the numbering system 's identifier and sample.  If the map is empty, there is no local digit for given locale. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Map&lt;string, string> | a map containing the used number patterns and example of system locale. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Map&lt;string, string> | a map containing the date patterns and examples |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Country/region ID. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemRegion: string = i18n.System.getSystemRegion(); // 如果系统地区为中国，systemRegion = 'CN'

```

## getTemperatureName

```TypeScript
static getTemperatureName(type: TemperatureType): string
```

Obtains the name of a temperature unit.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TemperatureType | 是 | Temperature unit. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Name of the temperature unit, which can be celsius, fahrenheit, and kelvin. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

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

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TemperatureType | Temperature unit. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let temperatureType: i18n.TemperatureType = i18n.System.getTemperatureType();

```

## getUsingCollation

```TypeScript
static getUsingCollation(): string
```

Gets collation currently used by system locale.

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The identifier of the collation model used by system locale will be return. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether use of local digits is enabled. The value true indicates that use of local  digits is enabled, and the value false indicates the opposite. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let usingLocalDigit: boolean = i18n.System.getUsingLocalDigit();

```

## getUsingMeasurement

```TypeScript
static getUsingMeasurement(): string
```

Gets measurement currently used by system locale.

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The identifier of measurement system using by system locale |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | the numbering systems's identifier. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

## getUsingNumberPattern

```TypeScript
static getUsingNumberPattern(): string
```

Gets number pattern used by system locale.

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The number pattern identifier used by system locale |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | The numerical date pattern used by system locale |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**示例：**

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

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether the 24-hour clock is used. The value true indicates that the 24-hour clock is  used, the the value false means the opposite. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let is24HourClock: boolean = i18n.System.is24HourClock(); // 如果系统时制是24小时制，is24HourClock = true

```

## isSuggested

```TypeScript
static isSuggested(language: string, region?: string): boolean
```

Checks whether a language is a suggested language in the specified region. It can be used for region-based language recommendation or language-based region recommendation.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works), for example, zh. |
| region | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether a language is a suggested language. The value true indicates that the language  is a suggested language of the region, the the value false indicates the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let isSuggestedCountry: boolean = i18n.System.isSuggested('zh', 'CN'); // isSuggestedCountry = true
  isSuggestedCountry = i18n.System.isSuggested('en'); // 结果和系统当前地区相关
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| index | int | 是 | Position of the preferred language to delete. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 删除系统偏好语言列表中的第一个偏好语言
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | boolean | 是 | Whether to use the 24-hour clock. The value "true" means to use the 24-hour clock,  the the value "false" means the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 将系统时制设置为24小时制
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

**起始版本：** 11

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | [Valid language ID](docroot://internationalization/i18n-locale-culture.md#how-it-works) or default. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

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

**起始版本：** 18

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | WeekDay | 是 | Start day of a week. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setFirstDayOfWeek(i18n.WeekDay.MON); // 设置用户偏好的周起始日为周一
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

**起始版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identifier | string | 是 | Identifier of the collation mode. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemCollation("zhuyin"); // 如果设置当前系统不支持的排序方式会报错
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| language | string | 是 | Valid language ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 设置系统语言
try {
  i18n.System.setSystemLanguage('zh'); // 设置系统当前语言为 "zh"
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

**起始版本：** 9

**废弃版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | System locale, which consists of the language, script, and country/region. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemLocale('zh-CN');  // 设置系统当前区域ID为 "zh-CN"
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

**起始版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identifier | string | 是 | Identifier of the measurement system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemMeasurement("uksystem"); // 如果设置当前系统不支持的度量衡会抛8900001错误码
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

**起始版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identifier | string | 是 | Identifier of the numbering system. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumberingSystem("arab"); // 如果设置当前系统不支持的数字系统会报错
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

**起始版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| pattern | string | 是 | Identifier of the number pattern. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumberPattern("002e002c"); // 如果设置当前系统不支持的数字格式会报错
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

**起始版本：** 20

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identifier | string | 是 | Identifier of the numerical date pattern. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 8900001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemNumericalDatePattern("dd/MM/y"); // 如果设置当前系统不支持的数字日期格式，系统会抛出8900001错误码
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| region | string | 是 | Valid region ID. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setSystemRegion('CN');  // 设置系统当前地区为 "CN"
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

**起始版本：** 18

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | TemperatureType | 是 | Temperature unit. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setTemperatureType(i18n.TemperatureType.CELSIUS); // 设置温度单位为摄氏度
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

**起始版本：** 9

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flag | boolean | 是 | Whether to turn on the local digit switch. The value "true" means to turn on the local  digit switch, and the value "false" indicates the opposite. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed.  [since 9 - 24] |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  i18n.System.setUsingLocalDigit(true); // 打开本地化数字开关
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call System.setUsingLocalDigit failed, error code: ${err.code}, message: ${err.message}.`);
}

```

