# Locale

Provides APIs for obtaining locale information.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a **Locale** object.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.Locale.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 默认构造函数使用系统当前区域ID创建
let locale = new intl.Locale();
// 返回系统当前区域ID
let localeID = locale.toString();

```

## constructor

```TypeScript
constructor(locale: string, options?: LocaleOptions)
```

Creates a **Locale** object.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.Locale.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | Locale information, which consists of the language, script, and country/region. |
| options | LocaleOptions | 否 | Options for creating the Locale object. [since 6 - 11] |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 创建zh-CN区域对象
let locale = new intl.Locale('zh-CN');
let localeID = locale.toString(); // localeID = 'zh-CN'

```

## maximize

```TypeScript
maximize(): Locale
```

Maximizes locale information by supplementing the missing script and country/region information.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.Locale.maximize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/maximize)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Locale | Locale object with the script and country/region information. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 创建zh区域对象
let locale = new intl.Locale('zh');
// 补齐区域对象的脚本和地区
let maximizedLocale = locale.maximize();
let localeID = maximizedLocale.toString(); // localeID = 'zh-Hans-CN'

// 创建en-US区域对象
locale = new intl.Locale('en-US');
// 补齐区域对象的脚本
maximizedLocale = locale.maximize();
localeID = maximizedLocale.toString(); // localeID = 'en-Latn-US'

```

## minimize

```TypeScript
minimize(): Locale
```

Minimizes locale information by removing the script and country/region information.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.Locale.minimize](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/minimize)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Locale | Locale object without the script and country/region information. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 创建zh-Hans-CN区域对象
let locale = new intl.Locale('zh-Hans-CN');
// 移除区域对象的脚本和地区
let minimizedLocale = locale.minimize();
let localeID = minimizedLocale.toString(); // localeID = 'zh'

// 创建en-US区域对象
locale = new intl.Locale('en-US');
// 移除区域对象的地区
minimizedLocale = locale.minimize();
localeID = minimizedLocale.toString(); // localeID = 'en'

```

## toString

```TypeScript
toString(): string
```

Obtains the string that represents a **Locale** object.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.Locale.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | String that represents the Locale object. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 创建en-GB区域对象
let locale = new intl.Locale('en-GB');
let localeID = locale.toString(); // localeID = 'en-GB'

```

## calendar

```TypeScript
calendar: string
```

Calendar for the locale. The value can be: The value can be any of the following: **buddhist**, **chinese**, **coptic**, **dangi**, **ethioaa**, **ethiopic**, **gregory**, **hebrew**, **indian**, **islamic**, **islamic-umalqura**, **islamic-tbla**, **islamic-civil**, **islamic-rgsa**, **iso8601**, **japanese**, **persian**, **roc**, or **islamicc**. For details about their meanings, see Table 1 in [Calendar Setting](docroot://internationalization/i18n-calendar.md).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.calendar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## numeric

```TypeScript
numeric: boolean
```

Whether to use special sorting rules for digits. The value **true** means to use special sorting rules for digits, and the value **false** means the opposite.The default value is **false**.

**类型：** boolean

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## caseFirst

```TypeScript
caseFirst: string
```

Whether case is taken into account for the locale's collation rules. The value can be: **upper**: Uppercase letters come first. **lower**: Lowercase letters come first. **false**: The default collation rules of the locale are used.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.caseFirst](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## language

```TypeScript
language: string
```

Language associated with the locale, for example, **zh**. The value complies with the ISO 639 standard.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/language)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## hourCycle

```TypeScript
hourCycle: string
```

Time system for the locale. The value can be: "h11", "h12", "h23", or "h24". For details about their display effects, see [Table 5](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## collation

```TypeScript
collation: string
```

Collation rules for the locale. The value can be: **big5han**: Pinyin sorting for Latin letters. **compat** : compatibility sorting, only for Arabic. **dict**: dictionary-style sorting, only for Singhalese. **direct**: binary code point sorting. **ducet**: sorting according to the Unicode collation element table. **eor**: sorting according to the European collation rules. **gb2312**: Pinyin sorting, only for Chinese. **phonebk**: phone book-style sorting. **phonetic**: phonetic sorting. **pinyin**: Pinyin sorting. **reformed**: reformed sorting, only for Swedish. **searchjl**: special sorting for Korean initial consonant search. **stroke**: stroke sorting for Chinese. **trad**: traditional-style sorting, for example, Spanish. **unihan**: radical-stroke sorting for Han characters, only for Chinese, Japanese, and Korean. **zhuyin**: Zhuyin sorting, only for Chinese.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.collation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## numberingSystem

```TypeScript
numberingSystem: string
```

Numbering system for the locale. The value can be: **adlm**, **ahom**, **arab**, **arabext**, **bali**, **beng**, **bhks**, **brah**, **cakm**, **cham**, **deva**, **diak**, **fullwide**, **gong**, **gonm**, **gujr**, **guru**, **hanidec**, **hmng**, **hmnp**, **java**, **kali**, **khmr**, **knda**, **lana**, **lanatham**, **laoo**, **latn**, **lepc**, **limb**, **mathbold**, **mathdbl**, **mathmono**, **mathsanb**, **mathsans**, **mlym**, **modi**, **mong**, **mroo**, **mtei**, **mymr**, **mymrshan**, **mymrtlng**, **newa**, **nkoo**, **olck**, **orya**, **osma**, **rohg**, **saur**, **segment**, **shrd**, **sind**, **sinh**, **sora**, **sund**, **takr**, **talu**, **tamldec**, **telu**, **thai**, **tibt**, **tirh**, **vaii**, **wara**, or **wcho**.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## region

```TypeScript
region: string
```

Country/region associated with the locale, for example, **CN**. The value complies with the ISO 3166 standard.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.region](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/region)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## baseName

```TypeScript
baseName: string
```

Locale information, which consists of the language, script, and country/region, for example, **zh-Hans-CN**.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.baseName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/baseName)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## script

```TypeScript
script: string
```

Script type of the language, for example, **Hans**. The value complies with the Unicode ISO 15924 standard.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.LocaleOptions.script](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/script)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

