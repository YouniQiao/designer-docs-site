# isFontSupported

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

<a id="isfontsupported"></a>
## isFontSupported

```TypeScript
function isFontSupported(fontURL: string | Resource): boolean
```

Checks whether the system supports the specified font file.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-text-function isFontSupported(fontURL: string | Resource): boolean--><!--Device-text-function isFontSupported(fontURL: string | Resource): boolean-End-->

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fontURL | string \| Resource | Yes | Path of the font file to be checked. The path must be in the format of "**file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the **resources/rawfile** directory in the project, which includes the font file name). |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the system supports the specified font file. **true** means yes; **false** otherwise. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct isFontSupportedTest {
  build() {
    Column({ space: 10 }) {
      Button("is font supported")
        .onClick(() => {
          let filePath = "file:///system/fonts/NotoSansCJK-Regular.ttc"
          let isSupported = text.isFontSupported(filePath)
          console.info("is font supported: " + isSupported)
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

