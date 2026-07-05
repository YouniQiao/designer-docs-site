# PluralRulesOptions

Defines the options for creating a **PluralRules** object. Since API version 9, the **PluralRulesOptions** attribute is changed from mandatory to optional.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#options)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## maximumFractionDigits

```TypeScript
maximumFractionDigits?: int
```

Maximum number of digits in the fraction part of a number. The value ranges from **1** to **21**. The default value is **3**.

**类型：** int

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.maximumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumfractiondigits)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## minimumFractionDigits

```TypeScript
minimumFractionDigits?: int
```

Minimum number of digits in the fraction part of a number. The value ranges from **0** to **20**. The default value is **0**.

**类型：** int

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.minimumFractionDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumfractiondigits)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## maximumSignificantDigits

```TypeScript
maximumSignificantDigits?: int
```

Maximum number of the least significant digits. The value ranges from **1** to **21**. The default value is **21**.

**类型：** int

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.maximumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#maximumsignificantdigits)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The value can be **lookup** or **best fit**. The default value is **best fit**.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#localematcher)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## minimumSignificantDigits

```TypeScript
minimumSignificantDigits?: int
```

Minimum number of the least significant digits. The value ranges from **1** to **21**. The default value is **1**.

**类型：** int

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.minimumSignificantDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumsignificantdigits)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## type

```TypeScript
type?: string
```

Collation type. The value can be **cardinal** or **ordinal**. The default value is **cardinal**. The value **cardinal** indicates a cardinal number and the value **ordinal** indicates an ordinal number.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#type)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## minimumIntegerDigits

```TypeScript
minimumIntegerDigits?: int
```

Minimum number of digits allowed in the integer part of a number. The value ranges from **1** to **21**. The default value is **1**.

**类型：** int

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRulesOptions.minimumIntegerDigits](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#minimumintegerdigits)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

