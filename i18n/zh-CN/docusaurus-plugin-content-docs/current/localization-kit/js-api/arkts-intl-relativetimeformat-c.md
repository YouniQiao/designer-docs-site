# RelativeTimeFormat

Provides the relative time formatting capability.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a **RelativeTimeFormat** object.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用系统区域创建RelativeTimeFormat对象
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: RelativeTimeFormatInputOptions)
```

Creates a **RelativeTimeFormat** object.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat.constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string> | 是 | Locale ID or locale ID array. If the input is a locale ID array, the  first valid locale ID is used. |
| options | RelativeTimeFormatInputOptions | 否 |  |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用zh-CN区域ID创建RelativeTimeFormat对象，localeMatcher设置为lookup，numeric设置为always，style设置为long
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN', {
  localeMatcher: 'lookup',
  numeric: 'always',
  style: 'long'
});

```

## format

```TypeScript
format(value: double, unit: string): string
```

Formats a relative time.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat.format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | double | 是 | Value to format. |
| unit | string | 是 | Unit of the relative time.  The value can be any of the following: year,  quarter, month, week, day, hour, minute, or second. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Relative time after formatting. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用zh-CN区域ID创建RelativeTimeFormat对象
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN');
// 计算zh-CN区域中数字3，单位quarter的本地化表示
let formatResult: string = formatter.format(3, 'quarter'); // formatResult = '3个季度后'

```

## formatToParts

```TypeScript
formatToParts(value: double, unit: string): Array<object>
```

Formats the relative time

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat.formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | double | 是 | Value to format. |
| unit | string | 是 | Unit of the relative time.  The value can be any of the following: year,  quarter, month, week, day, hour, minute, or second. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;object> | Components of the formatted result. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用en区域ID创建RelativeTimeFormat对象，numeric设置为auto
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en', { numeric: 'auto' });
let parts: Array<object> = formatter.formatToParts(10, 'seconds'); // parts = [ {type: 'literal', value: 'in'}, {type: 'integer', value: 10, unit: 'second'}, {type: 'literal', value: 'seconds'} ]

```

## resolvedOptions

```TypeScript
resolvedOptions(): RelativeTimeFormatResolvedOptions
```

Defines the formatting options for a **RelativeTimeFormat** object.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormat.resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RelativeTimeFormatResolvedOptions | Options for the RelativeTimeFormat object. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用en-GB区域ID创建RelativeTimeFormat对象
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en-GB', { style: 'short' });
// 获取RelativeTimeFormat对象配置项
let options: intl.RelativeTimeFormatResolvedOptions = formatter.resolvedOptions();
let style: string = options.style; // style = 'short'

```

