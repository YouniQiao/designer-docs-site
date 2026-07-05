# SystemLocaleManager

Provide some functions for settings and startup guide to select language or region.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a SystemLocaleManager object.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 26.0.0] |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let systemLocaleManager: i18n.SystemLocaleManager = new i18n.SystemLocaleManager();

```

## getLanguageInfoArray

```TypeScript
getLanguageInfoArray(languages: Array<string>, options?: SortOptions): Array<LocaleItem>
```

Obtains the list of languages after sorting.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| languages | Array&lt;string> | 是 | Valid IDs of the languages to be sorted. |
| options | SortOptions | 否 | Language sorting option. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;LocaleItem> | Language list after sorting. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 当系统语言为zh-Hans，系统地区为CN，系统区域为zh-Hans-CN时
let systemLocaleManager: i18n.SystemLocaleManager = new i18n.SystemLocaleManager();
let languages: string[] = ["zh-Hans", "en-US", "pt", "ar"];
let sortOptions: i18n.SortOptions = {locale: "zh-Hans-CN", isUseLocalName: true, isSuggestedFirst: true};
try {
    // 排序后的语言顺序为: [zh-Hans, en-US, pt, ar]
    let sortedLanguages: Array<i18n.LocaleItem> = systemLocaleManager.getLanguageInfoArray(languages, sortOptions);
} catch(error) {
    let err: BusinessError = error as BusinessError;
    console.error(`call systemLocaleManager.getLanguageInfoArray failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getRegionInfoArray

```TypeScript
getRegionInfoArray(regions: Array<string>, options?: SortOptions): Array<LocaleItem>
```

Obtains the IDs of the countries or regions after sorting.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| regions | Array&lt;string> | 是 | Valid IDs of the countries or regions to be sorted. |
| options | SortOptions | 否 | Country/region sorting option. By default, locale is the current system  locale, isUseLocalName is false, and isSuggestedFirst is true. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;LocaleItem> | IDs of the countries or regions after sorting. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 890001 | Invalid parameter. Possible causes: Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

// 当系统语言为zh-Hans，系统地区为CN，系统区域为zh-Hans-CN时
let systemLocaleManager: i18n.SystemLocaleManager = new i18n.SystemLocaleManager();
let regions: string[] = ["CN", "US", "PT", "EG"];
let sortOptions: i18n.SortOptions = {locale: "zh-Hans-CN", isUseLocalName: false, isSuggestedFirst: true};
try {
    // 排序后的地区顺序为: [CN, EG, US, PT]
    let sortedRegions: Array<i18n.LocaleItem> = systemLocaleManager.getRegionInfoArray(regions, sortOptions);
} catch(error) {
    let err: BusinessError = error as BusinessError;
    console.error(`call systemLocaleManager.getRegionInfoArray failed, error code: ${err.code}, message: ${err.message}.`);
}

```

## getTimeZoneCityItemArray

```TypeScript
static getTimeZoneCityItemArray(): Array<TimeZoneCityItem>
```

Obtains list of time zone city items after sorting.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;TimeZoneCityItem> | List of time zone city items after sorting. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { i18n } from '@kit.LocalizationKit';

try {
  let timeZoneCityItemArray: Array<i18n.TimeZoneCityItem> = i18n.SystemLocaleManager.getTimeZoneCityItemArray();
  for (let i = 0; i < timeZoneCityItemArray.length; i++) {
      console.info(timeZoneCityItemArray[i].zoneId + ", " + timeZoneCityItemArray[i].cityId + ", " + timeZoneCityItemArray[i].cityDisplayName +
          ", " + timeZoneCityItemArray[i].offset + "\r\n");
  }
} catch(error) {
  let err: BusinessError = error as BusinessError;
  console.error(`call SystemLocaleManager.getTimeZoneCityItemArray failed, error code: ${err.code}, message: ${err.message}.`);
}

```

