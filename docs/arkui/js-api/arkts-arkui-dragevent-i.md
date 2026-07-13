# DragEvent

Provides information about the drag event.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## executeDropAnimation

```TypeScript
executeDropAnimation(customDropAnimation: Callback<void>): void
```

Sets the execution function of the custom drop animation. This parameter is valid only when
[useCustomDropAnimation](arkts-arkui-dragevent-i.md#usecustomdropanimation) is set to **true**.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| customDropAnimation | Callback&lt;void&gt; | Yes | Custom drop animation in this callback.<br> **NOTE**<br>1. This APIis valid only in the **onDrop** callback.<br> 2. Before using this API, set **useCustomDropAnimation** to**true**. Otherwise, this API does not take effect.<br> 3. Do not implement logic unrelated to the animation inthe animation callback to avoid affecting performance. |

## getData

```TypeScript
getData(): UnifiedData
```

Obtains drag-related data.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| UnifiedData | Drag-related data. For details about the data obtaining result, see the error codedescription. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [190001](../errorcode-uicontext.md#190001-invalid-uicontext-object) | Data not found. |
| [190002](../errorcode-uicontext.md#190002-invalid-callback-function) | Data error. |

## getDisplayId

```TypeScript
getDisplayId(): number
```

Obtains the ID of the screen where the current drag event occurs. This API is not supported in the
[onDragEnd](arkts-arkui-commonmethod-c.md#ondragend-1) callback.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the screen where the current drag event occurs. |

## getDisplayX

```TypeScript
getDisplayX(): number
```

Obtains the x-coordinate of the drag point relative to the upper left corner of the screen.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | X-coordinate of the drag point relative to the upper left corner of the screen, in vp. |

## getDisplayY

```TypeScript
getDisplayY(): number
```

Obtains the y-coordinate of the drag point relative to the upper left corner of the screen.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Y-coordinate of the drag point relative to the upper left corner of the screen, in vp. |

## getDragSource

```TypeScript
getDragSource(): string
```

Obtains the package name of the drag source application.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Package name of the drag source application. |

## getGlobalDisplayX

```TypeScript
getGlobalDisplayX(): number
```

Obtains the x-coordinate of the drag point relative to the upper left corner of the global screen.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | X-coordinate of the drag point relative to the upper left corner of the global screen.<br>Unit: vp. Value range: (-∞, +∞) |

## getGlobalDisplayY

```TypeScript
getGlobalDisplayY(): number
```

Obtains the y-coordinate of the drag point relative to the upper left corner of the global screen.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Y-coordinate of the drag point relative to the upper left corner of the global screen.<br>Unit: vp. Value range: (-∞, +∞) |

## getModifierKeyState

```TypeScript
getModifierKeyState?(keys: Array<string>): boolean
```

Obtains the pressed status of modifier keys.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keys | Array&lt;string&gt; | Yes | Obtains the pressed status of modifier keys. For details about the error message,see the following error codes. The following modifier keys are supported: 'Ctrl' \| 'Alt' \| 'Shift'.<br>**NOTE**<br>This API is not supported in stylus scenarios. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the specified modifier keys are pressed. Returns **true** if the specified modifierkeys are pressed; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameterverification failed. |

## getPreviewRect

```TypeScript
getPreviewRect(): Rectangle
```

Obtains the position of the drag preview relative to the current window and the preview size.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Rectangle | Position of the drag preview relative to the current window and the preview size, in vp. xand y indicate the window coordinates of the upper left corner of the preview, and width and height indicatethe preview size. |

## getResult

```TypeScript
getResult(): DragResult
```

Obtains the drag result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| DragResult | Drag result. |

## getSummary

```TypeScript
getSummary(): Summary
```

Obtains a summary of drag data, including data type and size information. In a delayed drag scenario, only data
type information can be obtained.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Summary | Summary of drag data. |

## getVelocity

```TypeScript
getVelocity(): number
```

Obtains the dragging velocity along the main axis.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Dragging velocity along the main axis. The value is the arithmetic square root of the sum ofthe squares of the velocities along the x-axis and y-axis, in vp. |

## getVelocityX

```TypeScript
getVelocityX(): number
```

Obtains the dragging velocity along the x-axis.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Dragging velocity along the x-axis. The origin of the coordinate axis is the upper left cornerof the screen. The unit is vp. The velocity is positive if the movement is from left to right, and it isnegative if the movement is from right to left. |

## getVelocityY

```TypeScript
getVelocityY(): number
```

Obtains the dragging velocity along the y-axis.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Dragging velocity along the y-axis. The origin of the coordinate axis is the upper left cornerof the screen. The unit is vp. The velocity is positive if the movement is from top to bottom, and it isnegative if the movement is from bottom to top. |

## getWindowX

```TypeScript
getWindowX(): number
```

Obtains the x-coordinate of the drag point relative to the upper left corner of the window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | X coordinate of the drag point relative to the upper left corner of the window, in vp. |

## getWindowY

```TypeScript
getWindowY(): number
```

Obtains the y-coordinate of the drag point relative to the upper left corner of the window.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Y-coordinate of the drag point relative to the upper left corner of the window, in vp. |

## getX

```TypeScript
getX(): number
```

Obtains the x-coordinate of the drag point relative to the upper left corner of the window, in vp.

> **NOTE**

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [getWindowX](arkts-arkui-dragevent-i.md#getwindowx-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | X-coordinate of the drag point relative to the upper left corner of the window.<br>Unit: vp. |

## getY

```TypeScript
getY(): number
```

Obtains the y-coordinate of the drag point relative to the upper left corner of the window, in vp.

> **NOTE**

**Since:** 7

**Deprecated since:** 10

**Substitutes:** [getWindowY](arkts-arkui-dragevent-i.md#getwindowy-1)

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Y-coordinate of the drag point relative to the upper left corner of the window.<br>Unit: vp. |

## isRemote

```TypeScript
isRemote(): boolean
```

Checks whether the drag operation is cross-device.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the drag operation is cross-device. Returns **true** for cross-device drag operations;returns **false** otherwise. |

## setData

```TypeScript
setData(unifiedData: UnifiedData): void
```

Sets drag-related data in **DragEvent**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| unifiedData | UnifiedData | Yes | Drag-related data. |

## setDataLoadParams

```TypeScript
setDataLoadParams(dataLoadParams: DataLoadParams): void
```

Sets the parameters for deferred data loading from the drag source. This API provides data loading parameters to
the system instead of directly providing complete data objects. When the user drops data on the target application,
the system will use these parameters to request the actual data from the drag source. If this API is used together
with [setData](arkts-arkui-dragevent-i.md#setdata-1), the last called API takes precedence. This API takes effect only in the
[onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) callback.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataLoadParams | DataLoadParams | Yes | Data loading parameters used during a drop operation. |

## setResult

```TypeScript
setResult(dragResult: DragResult): void
```

Sets the drag result in **DragEvent**.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dragResult | DragResult | Yes | Drag result. |

## startDataLoading

```TypeScript
startDataLoading(options: DataSyncOptions): string
```

Asynchronously obtains drag data and notifies you of the current data synchronization progress. This API is only
supported in the **onDrop** callback.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DataSyncOptions | Yes | Parameters for obtaining drag data, including the target path, file conflictoptions, and progress bar type. You can use the[cancelDataLoading](../arkts-apis/arkts-arkui-dragcontroller-c.md#canceldataloading-1) API to cancel data loadingduring data transmission. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Identifier for the drag data. It is used to distinguish between different drag operations. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [190003](../errorcode-drag-event.md#190003-operation-not-allowed-in-the-current-phase) | Operation not allowed for current phase. |

## autoHideComponentUniqueIds

```TypeScript
autoHideComponentUniqueIds?: number | number[]
```

Set the uniqueId or uniqueId array of components that need to be automatically hidden during dragging.
This property takes effect only in onDragStart. After the drag starts successfully, the system hides the
target components before the drag preview window is shown. Developers need to restore component visibility
in onDragEnd or onDrop based on service requirements.

**Type:** number | number[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dragBehavior

```TypeScript
dragBehavior: DragBehavior
```

Copy or paste mode.

Default value: **DragBehavior.COPY**

**Type:** DragBehavior

**Default:** COPY

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## useCustomDropAnimation

```TypeScript
useCustomDropAnimation: boolean
```

Whether to disable the default drop animation when the dragging ends.

If this parameter is set to **true**, the default drop animation is disabled, and the custom one is used.

If this parameter is not set or is set to **false**, the default drop animation takes effect. When [setResult](arkts-arkui-dragevent-i.md#setresult-1)
is set to **DRAG_SUCCESSFUL**, a shrink-out animation takes effect. Otherwise, an expand-out animation takes effect.

When the default drop animation is not disabled, avoid implementing custom animations to prevent conflicts.

Default value: **false**

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

