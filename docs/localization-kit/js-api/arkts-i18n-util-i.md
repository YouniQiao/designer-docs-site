# Util

Provides util functions.

**Since:** 8

**Deprecated since:** 9

**Substitute:** i18n.I18NUtil

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## unitConvert

```TypeScript
unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string
```

Converts one measurement unit into another and formats the unit based on the specified locale and style.

**Since:** 8

**Deprecated since:** 9

**Substitute:** i18n.I18NUtil.unitConvert

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromUnit | UnitInfo | Yes | Measurement unit to be converted. |
| toUnit | UnitInfo | Yes | Measurement unit to be converted to. |
| value | double | Yes | Value of the measurement unit to be converted. |
| locale | string | Yes | Locale ID used for formatting, for example, zh-Hans-CN. |
| style | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained after formatting based on the measurement unit specified by toUnit. |

