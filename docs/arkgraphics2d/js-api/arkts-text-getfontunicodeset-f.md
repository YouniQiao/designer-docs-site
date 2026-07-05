# getFontUnicodeSet

## getFontUnicodeSet

```TypeScript
function getFontUnicodeSet(path: string | Resource, index: int) : Promise<Array<int>>
```

根据字体文件路径获取字体unicode数组。使用Promise异步回调。 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string \| Resource | Yes | 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")  。 |
| index | int | Yes | 字体文件格式为ttc/otc时，指定加载的字体索引。非ttc/otc格式文件索引值只能指定为0。如果该参数为负数或超出字体文件实际索引范围，将返回空数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;int>> | Promise对象，返回字体文件对应的unicode码数组。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct GetFontUnicodeSetTest {
  build() {
    Column({ space: 10 }) {
      Button("get fontUnicode")
        .onClick(async () => {
          let promise = text.getFontUnicodeSet("file:///system/fonts/HMSymbolVF.ttf", 0)
          promise.then((unicodeSet) => {
            for (let index = 0; index < unicodeSet.length; index++) {
              console.info(unicodeSet[index].toString())
            }
          })
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

