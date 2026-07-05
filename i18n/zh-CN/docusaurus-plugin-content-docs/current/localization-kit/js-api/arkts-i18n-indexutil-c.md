# IndexUtil

Provides index management capabilities, such as obtaining the locale index list and text index values.

**起始版本：** 8

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## addLocale

```TypeScript
addLocale(locale: string): void
```

Adds the index list of a new locale to the index list of the current locale to form a composite list.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| locale | string | 是 | [System locale](docroot://internationalization/i18n-locale-culture.md#how-it-works),  which consists of the language, script, and country/region. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let indexUtil: i18n.IndexUtil = i18n.getInstance('zh-CN');
indexUtil.addLocale('en-US');

```

## getIndex

```TypeScript
getIndex(text: string): string
```

Obtains the index of the **text** object.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Input text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Index of the text object. If no proper index is found, an empty string is returned. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let indexUtil: i18n.IndexUtil = i18n.getInstance('zh-CN');
let index: string = indexUtil.getIndex('hi'); // index = 'H'

```

## getIndexList

```TypeScript
getIndexList(): Array<string>
```

Obtains the index list of the current locale.

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | Index list of the current locale. The first and last elements are .... |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let indexUtil: i18n.IndexUtil = i18n.getInstance('zh-CN');
// indexList = [ '...', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
// 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '...' ]
let indexList: Array<string> = indexUtil.getIndexList();

```

