# getFontDescriptorByFullName

## getFontDescriptorByFullName

```TypeScript
function getFontDescriptorByFullName(fullName: string, fontType: SystemFontType): Promise<FontDescriptor>
```

根据字体名称和类型获取字体描述符，使用Promise异步回调。 字体描述符是描述字体特征的数据结构，包含字体外观和属性的详细信息。

**Since:** 14

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullName | string | Yes | 指定的字体名称。可以使用[getSystemFontFullNamesByType]text.getSystemFontFullNamesByType获取。 |
| fontType | SystemFontType | Yes | 指定的字体类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FontDescriptor> | Promise对象，返回指定的字体描述符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'
import { BusinessError } from '@kit.BasicServicesKit'

@Entry
@Component
struct Index {
  build() {
    Row() {
      Column() {
        Button("get fontDescriptor")
          .fontSize(30)
          .fontWeight(FontWeight.Bold)
          .width(300)
          .height(80)
          .onClick(() => {
            let fontType:text.SystemFontType = text.SystemFontType.GENERIC
            let promise = text.getFontDescriptorByFullName("HarmonyOS Sans", fontType)
            promise.then((fontDescriptor) => {
              console.info(`desc: ${JSON.stringify(fontDescriptor)}`)
            }).catch((error: BusinessError) => {
              console.error(`Failed to get fontDescriptor by fullName, error: ${JSON.stringify(error)}`);
            });
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}

```

