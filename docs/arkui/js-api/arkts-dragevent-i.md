# DragEvent

拖拽事件信息。

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableInternalDropAnimation

```TypeScript
enableInternalDropAnimation(configuration: string): void
```

使用系统的内置动效，且该动效只有系统应用可使用。仅支持在onDrop阶段使用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| configuration | string | Yes | 动效配置参数，字符串内容为json格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed, application which is not a system application uses  system API. |
| 801 | Capability not supported. |
| 190003 | Operation not allowed for current phase. |

## executeDropAnimation

```TypeScript
executeDropAnimation(customDropAnimation: Callback<void>): void
```

设置自定义落位动效的执行函数，仅在 [useCustomDropAnimation](arkts-dragevent-i.md#useCustomDropAnimation)为true时有效。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customDropAnimation | Callback&lt;void> | Yes | 在此回调函数中实现自定义落位动效。 说明： 1. 该接口仅在onDrop回调中使用有效。 2.  使用前需设置useCustomDropAnimation为true，否则该接口不生效。 3. 不要在动画callback中实现与动效无关的逻辑，避免影响执行效率。 |

## executeFollowHandMorphDropAnimation

```TypeScript
executeFollowHandMorphDropAnimation(onAnimationFinished: Callback<void>, animationOption?: string): void
```

设置一个跟手变形落位动效执行完成后的回调，该回调由系统在拖拽框架动效结束后触发。使用callback异步回调。 > **说明：** > > 1. 该接口仅在[dragAnimationType](arkts-dragevent-i.md#dragAnimationType)设置为DragAnimationType.FOLLOW_HAND_MORPH时生效。 > > 2. 不要在回调中实现与动效无关的逻辑，避免影响执行效率。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onAnimationFinished | Callback&lt;void> | Yes | 拖拽框架动效结束后触发的回调。 |
| animationOption | string | No |  |

## getData

```TypeScript
getData(): UnifiedData
```

获取拖拽相关数据。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| UnifiedData | 从DragEvent中获取拖拽相关数据。数据获取结果请参考错误码说明。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 190001 | Data not found. |
| 190002 | Data error. |

## getDisplayId

```TypeScript
getDisplayId(): number
```

获取当前拖拽事件发生时所在的屏幕ID，不支持在[onDragEnd](arkts-commonmethod-c.md#onDragEnd)阶段使用。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽事件发生时所在的屏幕ID。 |

## getDisplayX

```TypeScript
getDisplayX(): number
```

获取当前拖拽点相对于屏幕左上角的x轴坐标。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽点相对于屏幕左上角的x轴坐标，单位为vp。 |

## getDisplayY

```TypeScript
getDisplayY(): number
```

获取当前拖拽点相对于屏幕左上角的y轴坐标。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽点相对于屏幕左上角的y轴坐标，单位为vp。 |

## getDragSource

```TypeScript
getDragSource(): string
```

获取拖起方包名。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | 拖起方的包名。 |

## getGlobalDisplayX

```TypeScript
getGlobalDisplayX(): number
```

当前拖拽点相对于全局屏幕的左上角的X坐标。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回当前拖拽点相对于全局屏幕的左上角的X坐标。 单位：vp，取值范围：[0, +∞) |

## getGlobalDisplayY

```TypeScript
getGlobalDisplayY(): number
```

当前拖拽点相对于全局屏幕的左上角的Y坐标。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回当前拖拽点相对于全局屏幕的左上角的Y坐标。 单位：vp，取值范围：[0, +∞) |

## getModifierKeyState

```TypeScript
getModifierKeyState?(keys: Array<string>): boolean
```

获取功能键按压状态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 13 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | Array&lt;string> | Yes | 获取功能键按压状态。报错信息请参考以下错误码。支持功能键 'Ctrl' \| 'Alt' \| 'Shift'。 说明： 此接口不支持在手写笔场景  下使用。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否被按下，返回true表示被按下，返回false表示未被按下 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter  verification failed. |

## getPreviewRect

```TypeScript
getPreviewRect(): Rectangle
```

获取拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Rectangle | 拖拽预览图相对于当前窗口的位置，以及预览图尺寸信息，单位vp，其中x和y代表预览图左上角的窗口坐标，width和height代表预览图的尺寸。 |

## getResult

```TypeScript
getResult(): DragResult
```

获取拖拽结果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DragResult | 从DragEvent中获取的拖拽结果。 |

## getSummary

```TypeScript
getSummary(): Summary
```

获取所拖拽数据的概要，包括数据类型及大小信息；在延迟拖拽场景下，只能获取到数据类型信息。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Summary | 拖拽相关数据的概要。 |

## getVelocity

```TypeScript
getVelocity(): number
```

获取当前拖拽的主方向拖动速度。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽的主方向拖动速度。为xy轴方向速度的平方和的算术平方根，单位为vp。 |

## getVelocityX

```TypeScript
getVelocityX(): number
```

获取当前拖拽的x轴方向拖动速度。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽的x轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从左往右为正，反之为负。 |

## getVelocityY

```TypeScript
getVelocityY(): number
```

获取当前拖拽的y轴方向拖动速度。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽的y轴方向拖动速度。坐标轴原点为屏幕左上角，单位为vp，分正负方向速度，从上往下为正，反之为负。 |

## getWindowX

```TypeScript
getWindowX(): number
```

获取拖拽点相对于窗口左上角的x轴坐标。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。 |

## getWindowY

```TypeScript
getWindowY(): number
```

获取拖拽点相对于窗口左上角的y轴坐标。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。 |

## getX

```TypeScript
getX(): number
```

当前拖拽点相对于窗口左上角的x轴坐标，单位为vp。 > **说明：

**Since:** 7

**Deprecated since:** 10

**Substitute:** DragEvent#getWindowX

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回当前拖拽点相对于窗口左上角的x轴坐标。 单位：vp |

## getY

```TypeScript
getY(): number
```

当前拖拽点相对于窗口左上角的y轴坐标，单位为vp。 > **说明：

**Since:** 7

**Deprecated since:** 10

**Substitute:** DragEvent#getWindowY

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回当前拖拽点相对于窗口左上角的y轴坐标。 单位：vp |

## isRemote

```TypeScript
isRemote(): boolean
```

获取是否是跨设备拖拽，跨设备拖拽时为true。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否是跨设备拖拽，返回true表示是跨设备拖拽，返回false表示不是跨设备拖拽。 |

## setData

```TypeScript
setData(unifiedData: UnifiedData): void
```

向DragEvent中设置用于拖拽的数据。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unifiedData | UnifiedData | Yes | 拖拽相关的数据。 |

## setDataLoadParams

```TypeScript
setDataLoadParams(dataLoadParams: DataLoadParams): void
```

设置起拖方延迟提供数据。使用此方法向系统提供数据加载参数，而不是直接提供完整的数据对象。当用户在目标应用程序上落入时，系统将使用此参数从起拖方请求实际数据。与[setData](arkts-dragevent-i.md#setData)方法 同时使用，以最后调用的方法为准。该接口仅在[onDragStart](arkts-commonmethod-c.md#onDragStart)回调中生效。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataLoadParams | DataLoadParams | Yes | 落入操作时使用的数据加载参数。 |

## setResult

```TypeScript
setResult(dragResult: DragResult): void
```

在DragEvent中设置拖拽结果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dragResult | DragResult | Yes | 拖拽结果。 |

## startDataLoading

```TypeScript
startDataLoading(options: DataSyncOptions): string
```

异步获取拖拽数据，并通知开发者当前数据同步进度，仅支持在onDrop阶段使用。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DataSyncOptions | Yes | 获取拖拽数据时的参数，包含目标路径、文件冲突选项、进度条类型等。数据传输过程中可使用  [cancelDataLoading](arkts-dragcontroller-c.md#cancelDataLoading)接口取消数据加载。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 拖拽数据的标识，用于区分每次拖拽。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. |
| 190003 | Operation not allowed for current phase. |

## useCustomDropAnimation

```TypeScript
useCustomDropAnimation: boolean
```

当拖拽结束时，是否禁用系统默认落位动效。 应用可将该值设定为true来禁用系统默认落位动效，并实现自己的自定义落位动效。 当不配置或设置为false时，系统默认落位动效生效，当[setResult](arkts-dragevent-i.md#setResult)设置为DRAG_SUCCESSFUL时，落位为缩小消失动效，不为DRAG_SUCCESSFUL时，则 为放大消失动效。 当未禁用系统默认落位动效时，应用不应再实现自定义动效，以避免动效上的冲突。 默认值：false

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dragAnimationType

```TypeScript
dragAnimationType?: DragAnimationType
```

设置拖拽动画类型。该属性仅支持在[onDragStart](arkts-commonmethod-c.md#onDragStart)阶段设置，可在[onDragStart](arkts-commonmethod-c.md#onDragStart)、 [onDragEnter](arkts-commonmethod-c.md#onDragEnter)、[onDragMove](arkts-commonmethod-c.md#onDragMove)、 [onDragLeave](arkts-commonmethod-c.md#onDragLeave)、 [onDrop](arkts-commonmethod-c.md#onDrop)、 [onDragEnd](arkts-commonmethod-c.md#onDragEnd)回调中获取。 默认值为DEFAULT **系统接口：** 此接口为系统接口。

**Type:** DragAnimationType

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## dragBehavior

```TypeScript
dragBehavior: DragBehavior
```

切换复制和剪贴模式的角标显示状态。 默认值：DragBehavior.COPY。

**Type:** DragBehavior

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoHideComponentUniqueIds

```TypeScript
autoHideComponentUniqueIds?: int | int[]
```

设置拖拽过程中需要自动隐藏的组件uniqueId，支持传入单个uniqueId或数组。 仅在[onDragStart](arkts-commonmethod-c.md#onDragStart)回调中设置生效。拖拽成功发起后，系统会在显示拖拽预览窗口前隐藏目标组件。 若拖拽源本身也需要隐藏，需要同时传入拖拽源组件的uniqueId。 组件的uniqueId可通过[UIContext.getFrameNodeById()](arkts-uicontext-c.md#getFrameNodeById) 配合[FrameNode.getUniqueId()](arkts-framenode-c.md#getUniqueId)获取。 开发者应在[onDragEnd](arkts-commonmethod-c.md#onDragEnd)或 [onDrop](arkts-commonmethod-c.md#onDrop)中恢复组件显示状态。

**Type:** int | int[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

