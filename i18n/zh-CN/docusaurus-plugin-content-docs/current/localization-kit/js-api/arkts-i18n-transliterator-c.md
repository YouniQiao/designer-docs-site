# Transliterator

Provides text transliteration capabilities, such as obtaining the supported language IDs and transliterating text.

**起始版本：** 9

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## getAvailableIDs

```TypeScript
static getAvailableIDs(): string[]
```

Obtains a list of IDs supported by the **Transliterator** object.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string[] | List of IDs supported by the Transliterator object. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

// 共支持742个ID。每一个ID由短横线分隔的两部分组成，格式为 source-destination。例如ids = ['Han-Latin','Latin-ASCII', 'Amharic-Latin/BGN','Accents-Any', ...]，Han-Latin表示汉语转为拉丁文，Amharic-Latin表示阿姆哈拉语转为拉丁文。
// 更多使用信息可以参考ISO-15924。
let ids: string[] = i18n.Transliterator.getAvailableIDs();

```

## getInstance

```TypeScript
static getInstance(id: string): Transliterator
```

Creates a **Transliterator** object based on the specified ID.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | ID supported by the Transliterator object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Transliterator | Transliterator object. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let transliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn');

```

## transform

```TypeScript
transform(text: string): string
```

Converts the input text from the source format to the target format.

**起始版本：** 9

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Input text. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Text after conversion. |

**示例：**

```TypeScript
import { i18n } from '@kit.LocalizationKit';

let transliterator: i18n.Transliterator = i18n.Transliterator.getInstance('Any-Latn');
let wordArray: string[] = ['中国', '德国', '美国', '法国']
for (let i = 0; i < wordArray.length; i++) {
  let transliterateLatn: string =
    transliterator.transform(wordArray[i]); // transliterateLatn依次为：'zhōng guó', 'dé guó', 'měi guó', 'fǎ guó'
}

// 汉语音译去声调
transliterator = i18n.Transliterator.getInstance('Any-Latn;Latin-Ascii');
let transliterateAscii: string = transliterator.transform('中国'); // transliterateAscii = 'zhong guo'

// 汉语姓氏读音
transliterator = i18n.Transliterator.getInstance('Han-Latin/Names');
let transliterateNames: string = transliterator.transform('单老师'); // transliterateNames = 'shàn lǎo shī'
transliterateNames = transliterator.transform('长孙无忌'); // transliterateNames = 'zhǎng sūn wú jì'

```

