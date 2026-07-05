# createFromBuilder

## createFromBuilder

```TypeScript
function createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: SnapshotOptions): void
```

在应用后台渲染CustomBuilder自定义组件，并输出其截图。通过回调返回结果并支持在回调中获取离屏组件绘制区域坐标和大小。 > **说明：** > > - 从API version 12开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getComponentSnapshot](arkts-uicontext-c.md#getComponentSnapshot)方法 > 获取当前UI上下文关联的[ComponentSnapshot](arkts-componentsnapshot-c.md#ComponentSnapshot)对象。 > > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟。 > > - builder中的组件不支持设置动画相关的属性，如[transition]common。 > > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]image组件、[Web]web组件。

**起始版本：** 10

**废弃版本：** 18

**替代接口：** ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder | 是 | 自定义组件构建函数。 说明： 不支持全局builder。 builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。 |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | 截图返回结果的回调。支持在回调中获取离屏组件绘制区域坐标和大小。 |
| delay | number | 否 |  |
| checkImageStatus | boolean | 否 |  |
| options | SnapshotOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The builder is not a valid build function. |
| 160001 | An image component in builder is not ready for taking a snapshot. The check for  the ready state is required when the checkImageStatus option is enabled. [since 12] |

**示例：**

```TypeScript
import { componentSnapshot } from '@kit.ArkUI';
import { image } from '@kit.ImageKit';

@Entry
@Component
struct OffscreenSnapshotExample {
  @State pixmap: image.PixelMap | undefined = undefined

  @Builder
  RandomBuilder() {
    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {
      Text('Test menu item 1')
        .fontSize(20)
        .width(100)
        .height(50)
        .textAlign(TextAlign.Center)
      Divider().height(10)
      Text('Test menu item 2')
        .fontSize(20)
        .width(100)
        .height(50)
        .textAlign(TextAlign.Center)
    }
    .width(100)
    .id("builder")
  }

  build() {
    Column() {
      Button("click to generate offscreen UI snapshot")
        .onClick(() => {
          // 建议使用this.getUIContext().getComponentSnapshot().createFromBuilder()
          componentSnapshot.createFromBuilder(() => {
            this.RandomBuilder()
          },
            (error: Error, pixmap: image.PixelMap) => {
              if (error) {
                console.error(`error:${JSON.stringify(error)}`)
                return;
              }
              this.pixmap = pixmap
              // 保存pixmap到文件中
              // ....
              // 获取组件大小和位置
              let info = this.getUIContext().getComponentUtils().getRectangleById("builder")
              console.info(info.size.width + ' ' + info.size.height + ' ' + info.localOffset.x + ' ' +
              info.localOffset.y + ' ' + info.windowOffset.x + ' ' + info.windowOffset.y)
            }, 320, true, { scale: 2, waitUntilRenderFinished: true })
        })
      Image(this.pixmap)
        .margin(10)
        .height(200)
        .width(200)
        .border({ color: Color.Black, width: 2 })
    }.width('100%').margin({ left: 10, top: 5, bottom: 5 }).height(300)
  }
}

```

## createFromBuilder

```TypeScript
function createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: SnapshotOptions): Promise<image.PixelMap>
```

在应用后台渲染CustomBuilder自定义组件，并输出其截图。通过Promise返回结果，支持获取离屏组件绘制区域的坐标和大小。 > **说明：** > > - 从API version 12开始，可以通过使用[UIContext]@ohos.arkui.UIContext中的 > [getComponentSnapshot](arkts-uicontext-c.md#getComponentSnapshot)方法 > 获取当前UI上下文关联的[ComponentSnapshot](arkts-componentsnapshot-c.md#ComponentSnapshot)对象。 > > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟。 > > - builder中的组件不支持设置动画相关的属性，如[transition]common。 > > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]image组件、[Web]web组件。

**起始版本：** 10

**废弃版本：** 18

**替代接口：** ohos.arkui.UIContext.ComponentSnapshot#createFromBuilder

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder | 是 | 自定义组件构建函数。 说明： 不支持全局builder。 builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。 |
| delay | number | 否 |  |
| checkImageStatus | boolean | 否 |  |
| options | SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | 截图返回的结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The builder is not a valid build function. |
| 160001 | An image component in builder is not ready for taking a snapshot. The check for  the ready state is required when the checkImageStatus option is enabled. [since 12] |

**示例：**

```TypeScript
import { componentSnapshot } from '@kit.ArkUI'
import { image } from '@kit.ImageKit'

@Entry
@Component
struct OffscreenSnapshotExample {
  @State pixmap: image.PixelMap | undefined = undefined

  @Builder
  RandomBuilder() {
    Flex({ direction: FlexDirection.Column, justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center }) {
      Text('Test menu item 1')
        .fontSize(20)
        .width(100)
        .height(50)
        .textAlign(TextAlign.Center)
      Divider().height(10)
      Text('Test menu item 2')
        .fontSize(20)
        .width(100)
        .height(50)
        .textAlign(TextAlign.Center)
    }
    .width(100)
    .id("builder")
  }

  build() {
    Column() {
      Button("click to generate offscreen UI snapshot")
        .onClick(() => {
          // 建议使用this.getUIContext().getComponentSnapshot().createFromBuilder()
          componentSnapshot.createFromBuilder(() => {
            this.RandomBuilder()
          }, 320, true, { scale: 2, waitUntilRenderFinished: true })
            .then((pixmap: image.PixelMap) => {
              this.pixmap = pixmap
              // 保存pixmap到文件中
              // ....
              // 获取组件大小和位置
              let info = this.getUIContext().getComponentUtils().getRectangleById("builder")
              console.info(`${info.size.width} ${info.size.height} ${info.localOffset.x} ${
              info.localOffset.y} ${info.windowOffset.x} ${info.windowOffset.y}`)
            }).catch((err: Error) => {
            console.error(`error:${err}`)
          })
        })
      Image(this.pixmap)
        .margin(10)
        .height(200)
        .width(200)
        .border({ color: Color.Black, width: 2 })
    }.width('100%').margin({ left: 10, top: 5, bottom: 5 }).height(300)
  }
}

```

