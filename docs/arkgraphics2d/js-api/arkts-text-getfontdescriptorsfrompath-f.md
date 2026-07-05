# getFontDescriptorsFromPath

## getFontDescriptorsFromPath

```TypeScript
function getFontDescriptorsFromPath(path: string | Resource): Promise<Array<FontDescriptor>>
```

根据字体文件路径获取字体描述符数组。使用Promise异步回调。 > **说明：** > > - 如果字体文件未找到、字体文件路径无效、字体文件无权限或者文件非字体格式，返回空数组。 > > - [FontDescriptor]text.FontDescriptor中的weight字段并不精准对应字体文件内部的字重数值，而是将字体文件中的实际字重四舍五入映射到 > [FontWeight]text.FontWeight枚举值后的结果。例如，字体文件字重350会映射为400，对应枚举为W400。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string \| Resource | Yes | 需要查询的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 $rawfile("工程中resources/rawfile目录下的文件名称")  。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;FontDescriptor>> | Promise对象，返回所有的字体描述符。如果找不到字体文件、路径无效、无权限或非字体文件，则返回空数组。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct GetFontDescriptorsFromPathTest {
  build() {
    Column({ space: 10 }) {
      Button("get fontDescriptors")
        .onClick(async () => {
          let promise = text.getFontDescriptorsFromPath("file:///system/fonts/NotoSansCJK-Regular.ttc")
          promise.then((fontFullDescriptors) => {
            for (let index = 0; index < fontFullDescriptors.length; index++) {
              console.info("Path:" + fontFullDescriptors[index].path +
                          "\npostScriptName:" + fontFullDescriptors[index].postScriptName +
                          "\nfullName:" + fontFullDescriptors[index].fullName +
                          "\nfamilyName:" + fontFullDescriptors[index].fontFamily +
                          "\nfontSubName:" + fontFullDescriptors[index].fontSubfamily +
                          "\nweight:" + fontFullDescriptors[index].weight +
                          "\nwidth:" + fontFullDescriptors[index].width +
                          "\nitalic:" + fontFullDescriptors[index].italic +
                          "\nmonoSpace:" + fontFullDescriptors[index].monoSpace +
                          "\nsymbolic:" + fontFullDescriptors[index].symbolic)
            }
          })
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

