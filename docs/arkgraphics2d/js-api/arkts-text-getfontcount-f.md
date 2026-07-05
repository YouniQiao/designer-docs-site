# getFontCount

## getFontCount

```TypeScript
function getFontCount(path: string | Resource) : int
```

根据字体文件路径获取包含的字体文件数。 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回0。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string \| Resource | Yes | 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")  。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 包含字体数量。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct GetFontCountTest {
  build() {
    Column({ space: 10 }) {
      Button("get fontCount")
        .onClick(() => {
          let fontCount = text.getFontCount("file:///system/fonts/NotoSansCJK-Regular.ttc")
          console.info("file count: " + fontCount)
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

