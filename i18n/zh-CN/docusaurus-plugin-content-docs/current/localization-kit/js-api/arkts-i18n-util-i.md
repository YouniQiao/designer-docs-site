# Util

Provides util functions.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.I18NUtil

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## unitConvert

```TypeScript
unitConvert(fromUnit: UnitInfo, toUnit: UnitInfo, value: double, locale: string, style?: string): string
```

Converts one measurement unit into another and formats the unit based on the specified locale and style.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.I18NUtil.unitConvert

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fromUnit | UnitInfo | 是 | Measurement unit to be converted. |
| toUnit | UnitInfo | 是 | Measurement unit to be converted to. |
| value | double | 是 | Value of the measurement unit to be converted. |
| locale | string | 是 | Locale ID used for formatting, for example, zh-Hans-CN. |
| style | string | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | String obtained after formatting based on the measurement unit specified by toUnit. |

