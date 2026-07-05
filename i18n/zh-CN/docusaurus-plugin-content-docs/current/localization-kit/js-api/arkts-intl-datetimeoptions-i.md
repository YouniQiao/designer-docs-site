# DateTimeOptions

Defines the options for a **DateTimeOptions** object. Since API version 9, the **DateTimeOptions** attribute is changed from mandatory to optional.

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## timeStyle

```TypeScript
timeStyle?: string
```

Time display format. The value can be: "long", "short", "medium", "full", or  "auto". For details about their display effects, see [Table 2](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.timeStyle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timestyle)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## dateStyle

```TypeScript
dateStyle?: string
```

Date display format. The value can be: "long", "short", "medium", "full", or  "auto". For details about their display effects, see [Table 1](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.dateStyle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#datestyle)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## year

```TypeScript
year?: string
```

Year display format. The value can be: "numeric" or  "2-digit". For details about their display effects, see [Table 3](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.year](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#year)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The value can be: - "lookup": exact match. - "best fit": best match.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#localematcher)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## weekday

```TypeScript
weekday?: string
```

Week display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 4](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.weekday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#weekday)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## timeZone

```TypeScript
timeZone?: string
```

Time zone in use. The value is a valid IANA time zone ID.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.timeZone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## locale

```TypeScript
locale?: string
```

Valid locale ID, for example, **zh-Hans-CN**. The default value is the current system locale.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## hour12

```TypeScript
hour12?: boolean
```

Whether to use the 12-hour clock. The value **true** means to use the 12-hour clock, and the value **false** means the opposite. If both **hour12** and **hourCycle** are set, **hourCycle** does not take effect. If **hour12** and **hourCycle** are not set and the 24-hour clock is turned on, the default value of **hour12** is **false**.

**类型：** boolean

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.hour12](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hour12)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## second

```TypeScript
second?: string
```

Second display format. The value can be: "numeric" or  "2-digit".

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.second](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#second)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## minute

```TypeScript
minute?: string
```

Minute display format. The value can be: "numeric" or  "2-digit".

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.minute](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#minute)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## timeZoneName

```TypeScript
timeZoneName?: string
```

Localized representation of a time zone name. The value can be: "long", "short", or  "auto". For details about their display effects, see [Table 8](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.timeZoneName](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezonename)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## hour

```TypeScript
hour?: string
```

Hour display format. The value can be: "numeric" or  "2-digit".

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.hour](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hour)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## month

```TypeScript
month?: string
```

Month display format. The value can be: "numeric", "2-digit", "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 7](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.month](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#month)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## era

```TypeScript
era?: string
```

Epoch display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 9](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.era](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#era)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## dayPeriod

```TypeScript
dayPeriod?: string
```

Time period display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 10](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.dayPeriod](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#dayperiod)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## hourCycle

```TypeScript
hourCycle?: string
```

Hour cycle. The value can be: "h11", "h12", "h23", or  "h24". For the display effects when **dateStyle** or **timeStyle** is not set, see [Table 5](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix). For the display effects when **dateStyle** or **timeStyle** is not set, see [Table 6](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.hourCycle](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#hourcycle)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## numberingSystem

```TypeScript
numberingSystem?: string
```

Numbering system. The value can be: **adlm**, **ahom**, **arab**, **arabext**, **bali**, **beng**, **bhks**, **brah**, **cakm**, **cham**, **deva**, **diak**, **fullwide**, **gong**, **gonm**, **gujr**, **guru**, **hanidec**, **hmng**, **hmnp**, **java**, **kali**, **khmr**, **knda**, **lana**, **lanatham**, **laoo**, **latn**, **lepc**, **limb**, **mathbold**, **mathdbl**, **mathmono**, **mathsanb**, **mathsans**, **mlym**, **modi**, **mong**, **mroo**, **mtei**, **mymr** , **mymrshan**, **mymrtlng**, **newa**, **nkoo**, **olck**, **orya**, **osma**, **rohg**, **saur**, **segment**, **shrd**, **sind**, **sinh**, **sora**, **sund**, **takr**, **talu**, **tamldec**, **telu**, **thai**, **tibt**, **tirh**, **vaii**, **wara**, or **wcho**.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.numberingSystem](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#numberingsystem)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## day

```TypeScript
day?: string
```

Day display format. The value can be: "numeric" or  "2-digit".

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.day](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#day)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

## formatMatcher

```TypeScript
formatMatcher?: string
```

Format matching algorithm. The value can be: - "basic": exact match. - "best fit": best match.

**类型：** string

**起始版本：** 6

**废弃版本：** 20

**替代接口：** [Intl.DateTimeFormatOptions.formatMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#formatmatcher)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 11开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.Global.I18n

