# Util

Provides util functions.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [I18NUtil](arkts-localization-i18nutil-c.md#i18nutil)

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## unitConvert

```TypeScript
unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: number, locale: string, style?: string): string
```

Converts one measurement unit into another and formats the unit based on the specified locale and style.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [unitConvert](arkts-localization-i18nutil-c.md#unitconvert-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromUnit | UnitInfo | Yes | Measurement unit to be converted. |
| toUnit | UnitInfo | Yes | Measurement unit to be converted to. |
| value | number | Yes | Value of the measurement unit to be converted. |
| locale | string | Yes | Locale ID used for formatting, for example, **zh-Hans-CN**. |
| style | string | No | Style used for formatting. The value can be **long**, **short**, or **narrow**. Thedefault value is **short**. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained after formatting based on the measurement unit specified by **toUnit**. |

