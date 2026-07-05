# FontCollection

字体集。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { text } from '@kit.ArkGraphics2D';
```

## clearCaches

```TypeScript
clearCaches(): void
```

清理字体排版缓存（字体排版缓存本身设有内存上限和清理机制，所占内存有限，如无内存要求，不建议清理）。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button().onClick(() => {
        text.FontCollection.getGlobalInstance().clearCaches();
      })
    }
  }
}

```

## getGlobalInstance

```TypeScript
static getGlobalInstance(): FontCollection
```

获取应用全局FontCollection实例。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| FontCollection | FontCollection对象。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

function textFunc() {
  let fontCollection = text.FontCollection.getGlobalInstance();
}

@Entry
@Component
struct Index {
  fun: Function = textFunc;
  build() {
    Column() {
      Button().onClick(() => {
        this.fun();
      })
    }
  }
}

```

## getLocalInstance

```TypeScript
static getLocalInstance(): FontCollection
```

获取本地FontCollection实例，推荐卡片场景使用。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| FontCollection | FontCollection对象。  @static |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'
let fontCollection = text.FontCollection.getLocalInstance();

```

## loadFont

```TypeScript
loadFont(name: string, path: string | Resource): Promise<void>
```

加载自定义字体。使用Promise异步回调。其中参数name对应的值需要在[TextStyle]text.TextStyle中的fontFamilies属性配置，才能显示自定义字体效果，支持的字体文件格式包含： ttf、otf。

**Since:** 18

**Atomic service API:** From API version 22 this API can be used in atomic services.

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 加载字体后，调用该字体所使用的别名，可填写任意字符串，可使用该别名指定并使用该字体。 |
| path | string \| Resource | Yes | 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 "rawfile/目录or文件名"。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

let fontCollection: text.FontCollection = new text.FontCollection();

@Entry
@Component
struct RenderTest {
  async loadFontPromise() {
    fontCollection.loadFont('testName', 'file:///system/fonts/a.ttf').then((data) => {
      console.info(`Succeeded in doing loadFont ${JSON.stringify(data)} `);
    }).catch((error: Error) => {
      console.error(`Failed to do loadFont, error: ${JSON.stringify(error)} message: ${error.message}`);
    });
  }

  aboutToAppear() {
    this.loadFontPromise();
  }

  build() {
  }
}

```

## loadFontSync

```TypeScript
loadFontSync(name: string, path: string | Resource): void
```

同步接口，加载自定义字体。其中参数name对应的值需要在[TextStyle]text.TextStyle中的fontFamilies属性配置，才能显示自定义字体效果。支持的字体文件格式包含：ttf、otf。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 加载字体后，调用该字体所使用的名称。 |
| path | string \| Resource | Yes | 需要导入的字体文件的路径，应为 "file:// + 字体文件绝对路径" 或 "rawfile/目录or文件名"。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

let fontCollection: text.FontCollection = new text.FontCollection();

@Entry
@Component
struct RenderTest {
  LoadFontSyncTest() {
    fontCollection.loadFontSync('Clock_01', 'file:///system/fonts/HarmonyClock_01.ttf')
    let fontFamilies: Array<string> = ["Clock_01"]
    let myTextStyle: text.TextStyle = {
      fontFamilies: fontFamilies
    };
    let myParagraphStyle: text.ParagraphStyle = {
      textStyle: myTextStyle,
    }
    let paragraphBuilder: text.ParagraphBuilder = new text.ParagraphBuilder(myParagraphStyle, fontCollection);

    let textData = "Test loadFontSync to load the font file HarmonyClock_01.ttf.";
    paragraphBuilder.addText(textData);
    let paragraph: text.Paragraph = paragraphBuilder.build();
    paragraph.layoutSync(600);
  }

  aboutToAppear() {
    this.LoadFontSyncTest();
  }

  build() {
  }
}

```

## loadFontSyncWithCheck

```TypeScript
loadFontSyncWithCheck(name: string, path: string | Resource, index?: int): void
```

同步接口，加载自定义字体。其中参数name对应的值需要在[TextStyle]text.TextStyle中的fontFamilies属性配置，才能显示自定义字体效果。支持的字体文件格式包含：ttf、otf、 ttc。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 加载字体成功后，该字体对应的名称，可填写任意字符串，可使用该名称指定并使用该字体。 |
| path | string \| Resource | Yes | 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 $rawfile("字体文件路径")。 |
| index | int | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. |
| 25900002 | File not found. |
| 25900003 | Failed to open the file. |
| 25900004 | File seek failed. |
| 25900005 | Failed to get the file size. |
| 25900006 | Failed to read the file. |
| 25900007 | Empty file. |
| 25900008 | Corrupted file. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

let fc: text.FontCollection = text.FontCollection.getGlobalInstance();

@Entry
@Component
struct Index {
  message: string = 'Hello World';
  fontFamily: string = 'family';

  build() {
    RelativeContainer() {
      Text(this.message)
        .fontFamily(this.fontFamily)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          fc.loadFontSyncWithCheck(this.fontFamily, 'file:///system/fonts/NotoSansCJK-Regular.ttc', 1);
          try {
            fc.loadFontSyncWithCheck(this.fontFamily, '/system/fonts/NotoSansCJK-Regular.ttc', 1);
          } catch (e) {
            console.error(`Failed to do loadFontWithCheck, error: ${JSON.stringify(e)} message: ${e.message}`);
          }
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## loadFontWithCheck

```TypeScript
loadFontWithCheck(name: string, path: string | Resource, index?: int): Promise<void>
```

加载自定义字体，使用Promise异步回调。其中参数name对应的值需要在[TextStyle]text.TextStyle中的fontFamilies属性配置，才能显示自定义字体效果，支持的字体文件格式包含： ttf、otf、ttc。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 加载字体成功后，该字体对应的名称，可填写任意字符串，可使用该名称指定并使用该字体。 |
| path | string \| Resource | Yes | 需要加载的字体文件的路径，支持两种格式： "file:// + 字体文件绝对路径" 或 $rawfile("字体文件路径")。 |
| index | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. |
| 25900002 | File not found. |
| 25900003 | Failed to open the file. |
| 25900004 | File seek failed. |
| 25900005 | Failed to get the file size. |
| 25900006 | Failed to read the file. |
| 25900007 | Empty file. |
| 25900008 | Corrupted file. |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

let fc: text.FontCollection = text.FontCollection.getGlobalInstance();

@Entry
@Component
struct Index {
  message: string = 'Hello World';
  fontFamily: string = 'family';

  build() {
    RelativeContainer() {
      Text(this.message)
        .fontFamily(this.fontFamily)
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
        .onClick(() => {
          fc.loadFontWithCheck(this.fontFamily, 'file:///system/fonts/NotoSansCJK-Regular.ttc', 1).then((data) => {
            console.info(`Succeeded in doing loadFontWithCheck ${JSON.stringify(data)} `);
          }).catch((error: Error) => {
            console.error(`Failed to do loadFontWithCheck, error: ${JSON.stringify(error)} message: ${error.message}`);
          });
          fc.loadFontWithCheck(this.fontFamily, '/system/fonts/NotoSansCJK-Regular.ttc', 1).then((data) => {
            console.info(`Succeeded in doing loadFontWithCheck ${JSON.stringify(data)} `);
          }).catch((error: Error) => {
            console.error(`Failed to do loadFontWithCheck, error: ${JSON.stringify(error)} message: ${error.message}`);
          });
        })
    }
    .height('100%')
    .width('100%')
  }
}

```

## setParagraphCachesEnabled

```TypeScript
setParagraphCachesEnabled(enable: boolean): void
```

设置是否启用排版段落缓存。排版段落缓存可以加速重复文本的排版速度，但会占用额外的内存。未调用此接口前，系统默认开启排版段落缓存。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否启用排版段落缓存。true表示启用，false表示禁用。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct Index {
  build() {
    Column() {
      Button('Enable Paragraph Caching').onClick(() => {
        text.FontCollection.getGlobalInstance().setParagraphCachesEnabled(true);
      })
      Button('Disable Paragraph Caching').onClick(() => {
        text.FontCollection.getGlobalInstance().setParagraphCachesEnabled(false);
      })
    }
  }
}

```

## unloadFont

```TypeScript
unloadFont(name: string): Promise<void>
```

卸载指定的自定义字体。使用Promise异步回调。 使用此接口卸载字体别名所对应的自定义字体后，对应的自定义字体将不再可用。 所有使用该字体别名的排版对象都应该被销毁重建。 - 卸载不存在的字体别名不会产生任何效果且不会抛出错误。 - 此操作仅影响后续字体使用。 - 卸载正在使用的字体可能导致文本渲染异常（如乱码或字形缺失）。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要卸载的字体的别名，与加载字体时使用的别名相同。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct UnloadFontTest {
  private fc: text.FontCollection = text.FontCollection.getGlobalInstance();
  @State content: string = "Default font"

  build() {
    Column({ space: 10 }) {
      Text(this.content)
        .fontFamily("custom")
      Button("load font")
        .onClick(async () => {
          await this.fc.loadFont("custom", "file:///system/fonts/NotoSansCJK-Regular.ttc")
          this.content = "Custom font"
        })
      Button("unload font")
        .onClick(async () => {
          await this.fc.unloadFont("custom")
          this.content = "Default font"
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

## unloadFontSync

```TypeScript
unloadFontSync(name: string): void
```

卸载指定的自定义字体，此接口为同步接口。 使用此接口卸载字体别名所对应的自定义字体后，对应的自定义字体将不再可用。 所有使用该字体别名的排版对象都应该被销毁重建。 - 卸载不存在的字体别名不会产生任何效果且不会抛出错误。 - 此操作仅影响后续字体使用。 - 卸载正在使用的字体可能导致文本渲染异常（如乱码或字形缺失）。

**Since:** 20

**Atomic service API:** From API version 22 this API can be used in atomic services.

**Widget capability:** From API version 22 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 需要取消注册的字体别名，与加载字体时使用的别名相同。 |

**Example**

```TypeScript
import { text } from '@kit.ArkGraphics2D'

@Entry
@Component
struct UnloadFontSyncTest {
  private fc: text.FontCollection = text.FontCollection.getGlobalInstance();
  @State content: string = "Default font"

  build() {
    Column({ space: 10 }) {
      Text(this.content)
        .fontFamily("custom")
      Button("load font")
        .onClick(() => {
          this.fc.loadFontSync("custom", "file:///system/fonts/NotoSansCJK-Regular.ttc")
          this.content = "Custom font"
        })
      Button("unload font")
        .onClick(() => {
          this.fc.unloadFontSync("custom")
          this.content = "Default font"
        })
    }.width("100%")
    .height("100%")
    .justifyContent(FlexAlign.Center)
  }
}

```

