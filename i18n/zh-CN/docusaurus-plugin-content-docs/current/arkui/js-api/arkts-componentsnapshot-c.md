# ComponentSnapshot

提供获取组件截图的能力，包括已加载的组件的截图和没有加载的组件的截图。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 以下API需先使用UIContext中的[getComponentSnapshot()](arkts-uicontext-c.md#getComponentSnapshot)方法获取ComponentSnapshot对象，再通过此实例调用对应方法。 > > - 缩放、平移、旋转等图形变换属性只对被截图组件的子组件生效；对目标组件本身应用图形变换属性不生效，显示的还是图形变换前的效果。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## createFromBuilder

```TypeScript
createFromBuilder(builder: CustomBuilder, callback: AsyncCallback<image.PixelMap>,
    delay?: number, checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): void
```

传入[CustomBuilder](arkts-custombuilder-t.md#CustomBuilder)自定义组件，系统对其进行离屏构建后进行截图。使用callback异步回调。 > **说明：** > > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟，不适宜使用在对性能敏感的场景。 > > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]image组件、[Web]web组件。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder | 是 | 自定义组件构建函数。 说明： 不支持全局builder。 builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。 |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | 回调函数。当截图返回结果成功，err为undefined，data为获取到的image.  [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)；否则为错误对象。支持在回调中获取离屏组件绘制区域坐标和大小。 |
| delay | number | 否 |  |
| checkImageStatus | boolean | 否 |  |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The builder is not a valid build function. |
| 160001 | An image component in builder is not ready for taking a snapshot. The check for  the ready state is required when the checkImageStatus option is enabled. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |
| 160004 | isAuto(true) is not supported for offscreen node snapshots. [since 23] |

## createFromBuilder

```TypeScript
createFromBuilder(builder: CustomBuilder, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>
```

传入[CustomBuilder](arkts-custombuilder-t.md#CustomBuilder)自定义组件，系统对其进行离屏构建后进行截图。使用Promise异步回调。 > **说明：** > > - 由于需要等待组件构建、渲染成功，离屏截图的回调有500ms以内的延迟，不适宜使用在对性能敏感的场景。 > > - 部分执行耗时任务的组件可能无法及时在截图前加载完成，因此会截取不到加载成功后的图像。例如：加载网络图片的[Image]image组件、[Web]web组件。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder | 是 | 自定义组件构建函数。 说明： 不支持全局builder。 builder的根组件宽高为0时，截图操作会失败并抛出100001错误码。 |
| delay | number | 否 |  |
| checkImageStatus | boolean | 否 |  |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the snapshot object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The builder is not a valid build function. |
| 160001 | An image component in builder is not ready for taking a snapshot. The check for  the ready state is required when the checkImageStatus option is enabled. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |
| 160004 | isAuto(true) is not supported for offscreen node snapshots. [since 23] |

## createFromComponent

```TypeScript
createFromComponent<T extends Object>(content: ComponentContent<T>, delay?: number,
    checkImageStatus?: boolean, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>
```

将传入的content对象进行截图。使用Promise异步回调。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| content | ComponentContent&lt;T> | 是 | 当前UIContext显示的组件内容。 |
| delay | number | 否 |  |
| checkImageStatus | boolean | 否 |  |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the snapshot object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | The builder is not a valid build function. |
| 160001 | An image component in builder is not ready for taking a snapshot. The check for  the ready state is required when the checkImageStatus option is enabled. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |
| 160004 | isAuto(true) is not supported for offscreen node snapshots. [since 23] |

## get

```TypeScript
get(id: string, callback: AsyncCallback<image.PixelMap>, options?: componentSnapshot.SnapshotOptions): void
```

获取已加载的组件的截图，传入组件的[组件标识]common，找到对应组件进行截图。使用callback异步回调。 > **说明：** > > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 目标组件的[组件标识]common。 说明： 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。 |
| callback | AsyncCallback&lt;image.PixelMap> | 是 | 回调函数。当截图返回结果成功，err为undefined，data为获取到的image.  [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)；否则为错误对象。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Invalid ID. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

## get

```TypeScript
get(id: string, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>
```

获取已加载的组件的截图，传入组件的[组件标识]common，找到对应组件进行截图。使用Promise异步回调。 > **说明：** > > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 目标组件的[组件标识]common。 说明： 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the snapshot object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Invalid ID. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

## getSizeLimitation

```TypeScript
getSizeLimitation(): componentSnapshot.SnapshotSizeLimitation
```

查询组件截图的最大尺寸限制。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| componentSnapshot.SnapshotSizeLimitation | Size limit of a component screenshot. |

## getSync

```TypeScript
getSync(id: string, options?: componentSnapshot.SnapshotOptions): image.PixelMap
```

获取已加载的组件的截图。传入组件的[组件标识]common，找到对应组件进行截图，同步等待截图完成返回[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)。 本方法会阻塞主线程，请谨慎使用。接口的最大等待时间为3s，如果3s后未返回将会抛出异常。 > **说明：** > > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 目标组件的[组件标识]common。 说明： 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截图。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Invalid ID. |
| 160002 | Timeout. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

## getSyncWithUniqueId

```TypeScript
getSyncWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): image.PixelMap
```

获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。同步等待截图完成返回[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)。 > **说明：** > > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | 目标组件的uniqueId。FrameNode节点的uniqueId可通过  [getUniqueId](arkts-framenode-c.md#getUniqueId)接口获取。 说明： 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截  图。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| image.PixelMap | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Invalid ID. |
| 160002 | Timeout. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

## getWithRange

```TypeScript
getWithRange(start: NodeIdentity, end: NodeIdentity, isStartRect: boolean,
    options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>
```

传入两个组件的ID，获取范围内的组件的截图，并通过Promise返回结果。 > **说明：** > > start对应的组件和end对应的组件必须为同一棵组件树上的组件，且start对应的组件需要为end对应的组件的祖先组件。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| start | NodeIdentity | 是 | 范围开始的组件的ID。 |
| end | NodeIdentity | 是 | 范围结束的组件的ID。 |
| isStartRect | boolean | 是 | 范围是否以开始组件的外接矩形为准。 true表示以开始组件的外接矩形为准，false表示以结束组件的外接矩形为准。 默认值为true。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Result of the snapshot. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application. |
| 100001 | Invalid ID detected. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

**示例：**

```TypeScript
import { image } from '@kit.ImageKit';

@Entry
@Component
struct SnapshotExample {
  @State pixmap: image.PixelMap | undefined = undefined

  build() {
    Column() {
      Row() {
        Row() {
          Row() {
            Column() {
              Text('Text1').id('text1')
              Text('Text2').id('text2')
              Row() {
                Text('Text3').id('text3')
              }.id('root5').backgroundColor('#E4E8F0')
            }
            .width('80%')
            .height('80%')
            .justifyContent(FlexAlign.SpaceAround)
            .backgroundColor('#C1D1F0')
            .id('root4')
          }
          .width('80%')
          .height('80%')
          .justifyContent(FlexAlign.Center)
          .backgroundColor('#FFEEF0')
          .id('root3')
          .backgroundBlurStyle(BlurStyle.Thin, { colorMode: ThemeColorMode.LIGHT })
        }
        .width('80%')
        .height('80%')
        .justifyContent(FlexAlign.Center)
        .backgroundColor('#D5D5D5')
        .id('root2')
      }
      .width('50%')
      .height('50%')
      .justifyContent(FlexAlign.Center)
      .backgroundColor('#E4E8F0')
      .id('root1')

      Row() {
        Button("getWithRange")
          .onClick(() => {
            this.getUIContext()
              .getComponentSnapshot()
              .getWithRange('root2', 'root4', true)
              .then((pixmap: image.PixelMap) => {
                this.pixmap = pixmap
              })
              .catch((err: Error) => {
                console.error("error: " + err)
              })
          }).margin(10)
      }.justifyContent(FlexAlign.SpaceAround)

      Row() {
        Image(this.pixmap).width(200).height(300).border({ color: Color.Black, width: 2 }).margin(5)
      }.justifyContent(FlexAlign.SpaceAround)
    }
    .id('root')
    .width('100%')
    .height('100%')
    .alignItems(HorizontalAlign.Center)
  }
}

```

## getWithUniqueId

```TypeScript
getWithUniqueId(uniqueId: number, options?: componentSnapshot.SnapshotOptions): Promise<image.PixelMap>
```

获取已加载的组件的截图，传入组件的uniqueId，找到对应组件进行截图。使用Promise异步回调。 > **说明：** > > 截图会获取最近一帧的绘制内容。如果在组件触发更新的同时调用截图，更新的渲染内容不会被截取到，截图会返回上一帧的绘制内容。

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | 目标组件的uniqueId。FrameNode节点的uniqueId可通过  [getUniqueId](arkts-framenode-c.md#getUniqueId)接口获取。 说明： 不支持未挂树组件，当传入的组件标识是离屏或缓存未挂树的节点时，系统不会对其进行截  图。 |
| options | componentSnapshot.SnapshotOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;image.PixelMap> | Promise used to return the snapshot object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Invalid ID. |
| 160003 | Unsupported color space or dynamic range mode in snapshot options. [since 23] |

