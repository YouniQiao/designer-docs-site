# getFontUnicodeSet

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## getFontUnicodeSet

```TypeScript
function getFontUnicodeSet(path: string | Resource, index: number) : Promise<Array<number>>
```

Obtains an array of font Unicode by font file path. This API uses a promise to return the result.

An empty array is returned if the font file is not found, the font file path is invalid, the font file does not
have the required permission, or the file is not in the font format.

**Since:** 23

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string \| Resource | Yes | Path of the font file to be queried. The path must be in the format of "**file://** + Absolute path of the font file" or **$rawfile** (a file path relative to the**resources/rawfile** directory in the project, which includes the font file name). |
| index | number | Yes | Font index to be loaded when the font file format is TTC or OTC. The index value of a non-TTC/OTC file can only be **0**. If this parameter is set to a negative value or exceeds the actual index rangeof the font file, an empty array is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;number&gt;&gt; | Promise used to return the Unicode array corresponding to the font file. |

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

