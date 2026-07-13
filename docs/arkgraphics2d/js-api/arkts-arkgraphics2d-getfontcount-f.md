# getFontCount

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## getFontCount

```TypeScript
function getFontCount(path: string | Resource) : number
```

Obtains the number of font files contained in a font file based on the font file path.

Returns **0** if the font file is not found, the font file path is invalid, the font file does not have the
required permission, or the file is not in the font format.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string \| Resource | Yes | Path of the font file to be queried. The path must be in the format of "**file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the**resources/rawfile** directory in the project, which includes the font file name). |

**Return value:**

| Type | Description |
| --- | --- |
| number | Number of fonts. |

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

