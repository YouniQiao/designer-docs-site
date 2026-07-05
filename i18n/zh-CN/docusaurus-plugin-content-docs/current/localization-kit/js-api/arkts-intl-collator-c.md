# Collator

Provides the string collation capability.

**起始版本：** 8

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## compare

```TypeScript
compare(first: string, second: string): int
```

Compares two strings based on the specified collation rules.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| first | string | 是 | First string to compare. |
| second | string | 是 | Second string to compare. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Comparison result.  - If the value is a negative number, the first string comes before the second string.  - If the value is 0, the first and second strings are in the same sequence.  - If the value is a positive number, the first string is comes after the second string. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用en-GB区域ID创建Collator对象
let collator = new intl.Collator('en-GB');
// 比较first和second的先后顺序
let compareResult = collator.compare('first', 'second'); // compareResult = -1

```

## constructor

```TypeScript
constructor()
```

Creates a **Collator** object for the current system locale.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用系统区域创建Collator对象
let collator = new intl.Collator();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: CollatorOptions)
```

Creates a **Collator** object based on the specified locale and options.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string> | 是 | Locale ID or locale ID array. If the input is a locale ID array, the  first valid locale ID is used. |
| options | CollatorOptions | 否 |  |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// 使用zh-CN区域ID创建Collator对象，localeMatcher设置为lookup，usage设置为sort
let collator = new intl.Collator('zh-CN', {localeMatcher: 'lookup', usage: 'sort'});

```

## resolvedOptions

```TypeScript
resolvedOptions(): CollatorOptions
```

Obtains the options for creating a **Collator** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| CollatorOptions | Options for creating a Collator object. |

**示例：**

```TypeScript
import { intl } from '@kit.LocalizationKit';

let collator = new intl.Collator('zh-Hans', { usage: 'sort', ignorePunctuation: true });
// 获取Collator对象的配置项
let options = collator.resolvedOptions();
let usage = options.usage; // usage = 'sort'
let ignorePunctuation = options.ignorePunctuation; // ignorePunctuation = true

```

