# PluralRules

Provides the capability for obtaining the plural rule type.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a **PluralRules** object to obtain the singular-plural type of numbers.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用系统区域创建PluralRules对象
let pluralRules = new intl.PluralRules();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: PluralRulesOptions)
```

Creates a **PluralRules** object to obtain the singular-plural type of numbers.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRules.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string> | 是 | Locale ID or locale ID array. If the input is a locale ID array, the  first valid locale ID is used. |
| options | PluralRulesOptions | 否 |  |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用zh-CN区域ID创建PluralRules对象，localeMatcher设置为lookup，type设置为cardinal
let pluralRules: intl.PluralRules = new intl.PluralRules('zh-CN', { localeMatcher: 'lookup', type: 'cardinal' });

```

## select

```TypeScript
select(n: double): string
```

Obtains the singular-plural type of the specified number.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.PluralRules.select](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| n | double | 是 | Number for which the singular-plural type is to be obtained. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Singular-plural type. The value can be any of the following: zero, one, two,  few, many, others.  For details about the meanings of different values, see  [Language Plural Rules](https://www.unicode.org/cldr/charts/45/supplemental/language_plural_rules.html). |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用zh-Hans区域ID创建PluralRules对象
let zhPluralRules = new intl.PluralRules('zh-Hans');
// 计算zh-Hans区域中数字1对应的单复数类别
let plural = zhPluralRules.select(1); // plural = 'other'

// 使用en-US区域ID创建PluralRules对象
let enPluralRules = new intl.PluralRules('en-US');
// 计算en-US区域中数字1对应的单复数类别
plural = enPluralRules.select(1); // plural = 'one'

```

