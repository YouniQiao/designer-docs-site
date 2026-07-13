# getFontDescriptorByFullName

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## getFontDescriptorByFullName

```TypeScript
function getFontDescriptorByFullName(fullName: string, fontType: SystemFontType): Promise<FontDescriptor>
```

Obtains the font descriptor based on the font name and type. This API uses a promise to return the result.

A font descriptor is a data structure that describes font features. It contains details of the font appearance and
properties.

**Since:** 14

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullName | string | Yes | Font name. It is obtained with[getSystemFontFullNamesByType](arkts-arkgraphics2d-getsystemfontfullnamesbytype-f.md#getsystemfontfullnamesbytype-1) called. |
| fontType | SystemFontType | Yes | Font type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FontDescriptor&gt; | Promise used to return the font descriptor. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |

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

