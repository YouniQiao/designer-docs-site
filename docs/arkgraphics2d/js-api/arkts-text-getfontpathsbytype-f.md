# getFontPathsByType

## getFontPathsByType

```TypeScript
function getFontPathsByType(fontType: SystemFontType): Array<string>
```

获取指定字体类型的所有字体文件路径。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontType | SystemFontType | Yes | 指定的字体类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 字体文件路径列表。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct GetFontPathsByTypeTest {
  build() {
    Column({ space: 10 }) {
      Button("get font path")
        .onClick(() => {
          let fontList = text.getFontPathsByType(text.SystemFontType.ALL)
          console.info("file count: " + fontList.length)
          for (let index = 0; index < fontList.length; index++) {
            console.info("file path: " + fontList[index])
          }
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

