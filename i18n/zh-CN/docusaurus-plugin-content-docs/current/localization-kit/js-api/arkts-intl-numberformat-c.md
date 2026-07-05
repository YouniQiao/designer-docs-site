# NumberFormat

Provides the API for formatting number strings.

**起始版本：** 6

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
constructor()
```

Creates a **NumberFormat** object for the current system locale.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用系统当前区域ID创建NumberFormat对象
let formatter: intl.NumberFormat = new intl.NumberFormat();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: NumberOptions)
```

Creates a **NumberFormat** object based on the specified locale and options.

**起始版本：** 6

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string> | 是 | Locale ID or locale ID array. If the input is a locale ID array, the  first valid locale ID is used. |
| options | NumberOptions | 否 |  |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用en-GB区域ID创建NumberFormat对象，style设置为decimal，notation设置为scientific
let formatter: intl.NumberFormat = new intl.NumberFormat('en-GB', { style: 'decimal', notation: 'scientific' });

```

## format

```TypeScript
format(num: double): string
```

Formats a number.

**起始版本：** 6

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| num | double | 是 | Number to be formatted. [since 12] |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Formatted number. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用区域ID列表创建NumberFormat对象，因为en-GB为合法的区域ID，因此使用en-GB创建NumberFormat对象
let formatter: intl.NumberFormat = new intl.NumberFormat(['en-GB', 'zh'], { style: 'decimal', notation: 'scientific' });
let formattedNumber: string = formatter.format(1223); // formattedNumber = 1.223E3
let options: intl.NumberOptions = {
  roundingPriority: 'lessPrecision',
  maximumFractionDigits: 3,
  maximumSignificantDigits: 3
}
formatter = new intl.NumberFormat('en', options);
let result: string = formatter.format(1.23456); // result = 1.23

```

## formatRange

```TypeScript
formatRange(startRange: double, endRange: double): string
```

Formats a number range.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| startRange | double | 是 | Start number. |
| endRange | double | 是 | End number. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Formatted number range. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

let formatter: intl.NumberFormat = new intl.NumberFormat('en-US', { style: 'unit', unit: 'meter' });
let formattedRange: string = formatter.formatRange(0, 3); // formattedRange: 0–3 m

```

## resolvedOptions

```TypeScript
resolvedOptions(): NumberOptions
```

Obtains the options for creating a **NumberFormat** object.

**起始版本：** 6

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NumberOptions | Options for creating the NumberFormat object. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

let formatter: intl.NumberFormat = new intl.NumberFormat(['en-GB', 'zh'], { style: 'decimal', notation: 'scientific' });
// 获取NumberFormat对象配置项
let options: intl.NumberOptions = formatter.resolvedOptions();
let style: string | undefined = options.style; // style = 'decimal'
let notation: string | undefined = options.notation; // notation = 'scientific'

```

