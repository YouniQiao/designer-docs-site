---
last_update:
  date: 2026-07-04
---

# DateTimeOptions

Defines the options for a **DateTimeOptions** object. Since API version 9, the **DateTimeOptions** attribute is changed from mandatory to optional.

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [DateTimeFormatOptions](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#datetimeformatoptions)

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@ohos.intl';
```

## dateStyle

```TypeScript
dateStyle?: string
```

Date display format. The value can be: "long", "short", "medium", "full", or  "auto". For details about their display effects, see [Table 1](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** dateStyle

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## day

```TypeScript
day?: string
```

Day display format. The value can be: "numeric" or  "2-digit".

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [day](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#day)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## dayPeriod

```TypeScript
dayPeriod?: string
```

Time period display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 10](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** dayPeriod

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## era

```TypeScript
era?: string
```

Epoch display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 9](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [era](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#era)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## formatMatcher

```TypeScript
formatMatcher?: string
```

Format matching algorithm. The value can be: - "basic": exact match. - "best fit": best match.

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [formatMatcher](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#formatmatcher)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## hour

```TypeScript
hour?: string
```

Hour display format. The value can be: "numeric" or  "2-digit".

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [hour](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#hour)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## hour12

```TypeScript
hour12?: boolean
```

Whether to use the 12-hour clock. The value **true** means to use the 12-hour clock, and the value **false** means the opposite. If both **hour12** and **hourCycle** are set, **hourCycle** does not take effect. If **hour12** and **hourCycle** are not set and the 24-hour clock is turned on, the default value of **hour12** is **false**.

**Type:** boolean

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [hour12](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#hour12)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## hourCycle

```TypeScript
hourCycle?: string
```

Hour cycle. The value can be: "h11", "h12", "h23", or  "h24". For the display effects when **dateStyle** or **timeStyle** is not set, see [Table 5](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix). For the display effects when **dateStyle** or **timeStyle** is not set, see [Table 6](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** hourCycle

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## locale

```TypeScript
locale?: string
```

Valid locale ID, for example, **zh-Hans-CN**. The default value is the current system locale.

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The value can be: - "lookup": exact match. - "best fit": best match.

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [localeMatcher](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#localematcher)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## minute

```TypeScript
minute?: string
```

Minute display format. The value can be: "numeric" or  "2-digit".

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [minute](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#minute)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## month

```TypeScript
month?: string
```

Month display format. The value can be: "numeric", "2-digit", "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 7](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [month](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#month)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## numberingSystem

```TypeScript
numberingSystem?: string
```

Numbering system. The value can be: **adlm**, **ahom**, **arab**, **arabext**, **bali**, **beng**, **bhks**, **brah**, **cakm**, **cham**, **deva**, **diak**, **fullwide**, **gong**, **gonm**, **gujr**, **guru**, **hanidec**, **hmng**, **hmnp**, **java**, **kali**, **khmr**, **knda**, **lana**, **lanatham**, **laoo**, **latn**, **lepc**, **limb**, **mathbold**, **mathdbl**, **mathmono**, **mathsanb**, **mathsans**, **mlym**, **modi**, **mong**, **mroo**, **mtei**, **mymr** , **mymrshan**, **mymrtlng**, **newa**, **nkoo**, **olck**, **orya**, **osma**, **rohg**, **saur**, **segment**, **shrd**, **sind**, **sinh**, **sora**, **sund**, **takr**, **talu**, **tamldec**, **telu**, **thai**, **tibt**, **tirh**, **vaii**, **wara**, or **wcho**.

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** numberingSystem

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## second

```TypeScript
second?: string
```

Second display format. The value can be: "numeric" or  "2-digit".

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [second](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#second)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## timeStyle

```TypeScript
timeStyle?: string
```

Time display format. The value can be: "long", "short", "medium", "full", or  "auto". For details about their display effects, see [Table 2](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** timeStyle

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## timeZone

```TypeScript
timeZone?: string
```

Time zone in use. The value is a valid IANA time zone ID.

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [timeZone](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#timezone)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## timeZoneName

```TypeScript
timeZoneName?: string
```

Localized representation of a time zone name. The value can be: "long", "short", or  "auto". For details about their display effects, see [Table 8](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [timeZoneName](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#timezonename)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## weekday

```TypeScript
weekday?: string
```

Week display format. The value can be: "long", "short", "narrow", or  "auto". For details about their display effects, see [Table 4](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [weekday](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#weekday)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

## year

```TypeScript
year?: string
```

Year display format. The value can be: "numeric" or  "2-digit". For details about their display effects, see [Table 3](../../../../reference/apis-localization-kit/js-apis-intl.md#appendix).

**Type:** string

**Since:** 6

**Deprecated since:** 20

**Substitutes:** [year](../../apis-na/arkts-apis/arkts-na-datetimeformatoptions-i.md#year)

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.Global.I18n

