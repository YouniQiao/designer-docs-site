# DragInfo

发起拖拽所需要的属性和拖拽时携带的信息。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { dragController } from '@kit.ArkUI';
```

## pointerId

```TypeScript
pointerId: number
```

设置启动拖拽时屏幕上触摸点的Id。取值范围为[0, 9]的整数。

**Type:** number

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## data

```TypeScript
data?: unifiedDataChannel.UnifiedData
```

设置拖拽过程中携带的数据。 默认值：空

**Type:** unifiedDataChannel.UnifiedData

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## touchPoint

```TypeScript
touchPoint?: TouchPoint
```

配置跟手点坐标。不配置时，左右居中，顶部向下偏移20%。

**Type:** TouchPoint

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraParams

```TypeScript
extraParams?: string
```

设置拖拽事件额外信息，具体功能暂未实现。 默认值：空

**Type:** string

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoHideComponentUniqueIds

```TypeScript
autoHideComponentUniqueIds?: int | int[]
```

设置在主动拖拽过程中由系统自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。 主动拖拽成功发起后，系统会在显示拖拽预览窗口前自动隐藏目标组件。 若主动拖拽源本身也需要被隐藏，需要同时传入其uniqueId。 组件的uniqueId可通过[UIContext.getFrameNodeById()](arkts-uicontext-c.md#getFrameNodeById) 配合[FrameNode.getUniqueId()](arkts-framenode-c.md#getUniqueId)获取。 开发者需要在拖拽结束回调中按需恢复组件显示状态。

**Type:** int | int[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## previewOptions

```TypeScript
previewOptions?: DragPreviewOptions
```

设置拖拽过程中背板图处理模式及数量角标的显示。

**Type:** DragPreviewOptions

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dataLoadParams

```TypeScript
dataLoadParams?: unifiedDataChannel.DataLoadParams
```

设置拖起方延迟提供数据。调用此方法向系统提供数据加载参数，而非直接传入完整的数据对象。当用户将数据拖拽至目标应用程序并释放时，系统将使用此参数从起拖方请求实际数据。与data同时设置时，dataLoadParams生效。 默认值：空

**Type:** unifiedDataChannel.DataLoadParams

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

