# RenderNode

提供自绘制渲染节点RenderNode，支持开发者通过C API进行开发，完成自定义绘制需求。 > **说明：** > - 不建议对[BuilderNode]BuilderNode中的RenderNode进行修改操作。BuilderNode中持有的[FrameNode]FrameNode仅用于将该 > BuilderNode作为子节点挂载到其他FrameNode上，对该FrameNode或对应的RenderNode进行属性设置与子节点操作可能会产生未定义行为，包括但不限于显示异常、事件异常、稳定性问题等。 > > - RenderNode对象不支持使用JSON序列化。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## appendChild

```TypeScript
appendChild(node: RenderNode): void
```

在RenderNode最后一个子节点后添加新的子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | RenderNode | Yes | 需要添加的RenderNode。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100025 | The parameter is invalid. Details about the invalid parameter and the reason  are included in the error message. For example: "The parameter 'node' is invalid: its corresponding FrameNode  cannot be adopted." [since 22] |

## clearChildren

```TypeScript
clearChildren(): void
```

清除当前RenderNode的所有子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor()
```

RenderNode的构造函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dispose

```TypeScript
dispose(): void
```

立即释放当前RenderNode。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## draw

```TypeScript
draw(context: DrawContext): void
```

绘制方法，需要开发者进行实现。该方法会在RenderNode进行绘制时被调用。 该接口的[DrawContext](arkts-drawcontext-c.md#DrawContext)中的Canvas是用于记录指令的临时Canvas，并非节点的真实Canvas。使用请参见 [调整自定义绘制Canvas的变换矩阵](docroot://ui/arkts-user-defined-arktsNode-renderNode.md#调整自定义绘制canvas的变换矩阵)。 > **说明：** > > RenderNode初始化时，会调用两次draw方法。第一次调用是在首次创建FrameNode时触发Render流程，第二次调用是在首次设置modifier时触发绘制。后续绘制流程皆由modifier触发。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | DrawContext | Yes | 图形绘制上下文。 |

## getChild

```TypeScript
getChild(index: number): RenderNode | null
```

获取当前RenderNode指定位置的子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 需要查询的子节点的序列号。 |

**Return value:**

| Type | Description |
| --- | --- |
| RenderNode | Child node obtained. If the RenderNode does not contain the specified child node,  null is returned. |

## getFirstChild

```TypeScript
getFirstChild(): RenderNode | null
```

获取当前RenderNode的第一个子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RenderNode | First child node. If the RenderNode does not contain any child node, null is  returned. |

## getNextSibling

```TypeScript
getNextSibling(): RenderNode | null
```

获取当前RenderNode的下一个同级节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RenderNode | Next sibling node of the current RenderNode. If the RenderNode does not have the  next sibling node, null is returned. |

## getPreviousSibling

```TypeScript
getPreviousSibling(): RenderNode | null
```

获取当前RenderNode的上一个同级节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RenderNode | Previous sibling node of the current RenderNode. If the RenderNode does not have the  previous sibling node, null is returned. |

## insertChildAfter

```TypeScript
insertChildAfter(child: RenderNode, sibling: RenderNode | null): void
```

在RenderNode指定子节点之后添加新的子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| child | RenderNode | Yes | 需要添加的子节点。 |
| sibling | RenderNode \| null | Yes | 需要添加的子节点。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100025 | The parameter is invalid. Details about the invalid parameter and the reason  are included in the error message. For example: "The parameter 'child' is invalid: its corresponding FrameNode  cannot be adopted." [since 22] |

## invalidate

```TypeScript
invalidate(): void
```

该方法会触发RenderNode的重新渲染。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isDisposed

```TypeScript
isDisposed(): boolean
```

查询当前RenderNode对象是否已解除与后端实体节点的引用关系。前端节点均绑定有相应的后端实体节点，当节点调用dispose接口解除绑定后，再次调用接口可能会出现crash、返回默认值的情况。由于业务需求，可能存在节点在 dispose后仍被调用接口的情况。为此，提供此接口以供开发者在操作节点前检查其有效性，避免潜在风险。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 后端实体节点是否解除引用。true为节点已与后端实体节点解除引用，false为节点未与后端实体节点解除引用。 |

## removeChild

```TypeScript
removeChild(node: RenderNode): void
```

从RenderNode中删除指定的子节点。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | RenderNode | Yes | 需要删除的子节点。 |

## borderColor

```TypeScript
set borderColor(color: Edges<number>)
```

设置当前RenderNode的边框颜色。

**Type:** Edges<number>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get borderColor(): Edges<number>
```

Get border color of the RenderNode.

**Type:** Edges<number>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## contentBlur

```TypeScript
set contentBlur(blurValue: ContentBlur | undefined)
```

设置内容模糊效果。

**Type:** ContentBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get contentBlur(): ContentBlur
```

获取内容模糊效果。

**Type:** ContentBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## clipToFrame

```TypeScript
set clipToFrame(useClip: boolean)
```

设置是否对当前RenderNode剪裁。若设置为true，则超出该RenderNode大小的部分将会被截断。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get clipToFrame(): boolean
```

Get whether the RenderNode clip to frame.

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scale

```TypeScript
set scale(scale: Scale)
```

设置当前RenderNode的比例。

**Type:** Scale

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get scale(): Scale
```

Get scale vector of the RenderNode.

**Type:** Scale

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## lengthMetricsUnit

```TypeScript
set lengthMetricsUnit(unit: LengthMetricsUnit)
```

设置RenderNode各个属性使用的单位。

**Type:** LengthMetricsUnit

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get lengthMetricsUnit(): LengthMetricsUnit
```

Get the length metrics unit of RenderNode.

**Type:** LengthMetricsUnit

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transform

```TypeScript
set transform(transform: Matrix4)
```

设置当前RenderNode的变换矩阵。

**Type:** Matrix4

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get transform(): Matrix4
```

Get transform info of the RenderNode.

**Type:** Matrix4

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shapeClip

```TypeScript
set shapeClip(shapeClip: ShapeClip)
```

设置当前RenderNode的裁剪形状。

**Type:** ShapeClip

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shapeClip(): ShapeClip
```

获取目标RenderNode的形状裁剪属性

**Type:** ShapeClip

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## markNodeGroup

```TypeScript
set markNodeGroup(isNodeGroup: boolean)
```

标记是否优先绘制节点及其子节点。若设置为true，则透明度等属性将在节点绘制完毕后再进行合成。设置效果如下： ![markNodeGroup](docroot://reference/apis-arkui/figures/renderNode-markNodeGroup.png)

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get markNodeGroup(): boolean
```

Get whether to preferentially draw the node and its children.

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderWidth

```TypeScript
set borderWidth(width: Edges<number>)
```

设置当前RenderNode的边框宽度。

**Type:** Edges<number>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get borderWidth(): Edges<number>
```

Get border width of the RenderNode.

**Type:** Edges<number>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pivot

```TypeScript
set pivot(pivot: Pivot)
```

设置当前RenderNode的轴心，影响RenderNode的缩放和旋转效果。

**Type:** Pivot

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get pivot(): Pivot
```

Get pivot vector of the RenderNode.

**Type:** Pivot

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadowOffset

```TypeScript
set shadowOffset(offset: Offset)
```

设置当前RenderNode的阴影偏移。

**Type:** Offset

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shadowOffset(): Offset
```

Get shadow offset of the RenderNode.

**Type:** Offset

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderStyle

```TypeScript
set borderStyle(style: Edges<BorderStyle>)
```

设置当前RenderNode的边框样式。

**Type:** Edges<BorderStyle>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get borderStyle(): Edges<BorderStyle>
```

获取当前RenderNode的边框样式。

**Type:** Edges<BorderStyle>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadowColor

```TypeScript
set shadowColor(color: number)
```

设置当前RenderNode的阴影颜色，ARGB格式。若设置了[shadowAlpha]RenderNode#set shadowAlpha(alpha: number)，则不透明度以shadowAlpha为准。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shadowColor(): number
```

Get shadow color of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
set backgroundColor(color: number)
```

设置当前RenderNode的背景颜色。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get backgroundColor(): number
```

Get the background color of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## rotation

```TypeScript
set rotation(rotation: Rotation)
```

设置当前RenderNode的旋转角度。

**Type:** Rotation

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get rotation(): Rotation
```

Get rotation vector of the RenderNode.

**Type:** Rotation

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shapeMask

```TypeScript
set shapeMask(shapeMask: ShapeMask)
```

设置当前RenderNode的遮罩。

**Type:** ShapeMask

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shapeMask(): ShapeMask
```

获取当前RenderNode的遮罩。

**Type:** ShapeMask

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
set label(label: string)
```

设置当前RenderNode的标签。若当前节点是通过new创建的RenderNode，则设置的标签信息会在节点Inspector信息的属性中。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get label(): string
```

获取当前RenderNode的标签。默认值为""。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadowElevation

```TypeScript
set shadowElevation(elevation: number)
```

设置当前RenderNode的阴影的光照高度。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shadowElevation(): number
```

Get shadow elevation of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## foregroundBlur

```TypeScript
set foregroundBlur(blurValue: ForegroundBlur | undefined)
```

设置前景模糊效果。

**Type:** ForegroundBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get foregroundBlur(): ForegroundBlur
```

获取前景模糊效果。

**Type:** ForegroundBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadowRadius

```TypeScript
set shadowRadius(radius: number)
```

设置当前RenderNode的阴影模糊半径。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shadowRadius(): number
```

Get shadow radius of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
set borderRadius(radius: BorderRadiuses)
```

设置当前RenderNode的边框圆角。

**Type:** BorderRadiuses

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get borderRadius(): BorderRadiuses
```

Get border radius of the RenderNode.

**Type:** BorderRadiuses

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
set size(size: Size)
```

设置当前RenderNode的大小。

**Type:** Size

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get size(): Size
```

Get frame size of the RenderNode.

**Type:** Size

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlur

```TypeScript
set backgroundBlur(blurValue: BackgroundBlur | undefined)
```

设置背景模糊效果。

**Type:** BackgroundBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get backgroundBlur(): BackgroundBlur
```

获取背景模糊效果。

**Type:** BackgroundBlur

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## translation

```TypeScript
set translation(translation: Translation)
```

设置当前RenderNode的平移量。

**Type:** Translation

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get translation(): Translation
```

Get translation vector of the RenderNode.

**Type:** Translation

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## position

```TypeScript
set position(position: Position)
```

设置当前RenderNode的位置。

**Type:** Position

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get position(): Position
```

Get frame position of the RenderNode.

**Type:** Position

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## opacity

```TypeScript
set opacity(value: number)
```

设置当前RenderNode的不透明度。若输入的数值小于0，会被视为0。若输入的数值大于1，会被视为1。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get opacity(): number
```

Get opacity of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadowAlpha

```TypeScript
set shadowAlpha(alpha: number)
```

设置当前RenderNode的阴影颜色的Alpha值。

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get shadowAlpha(): number
```

Get shadow alpha of the RenderNode.

**Type:** number

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## frame

```TypeScript
set frame(frame: Frame)
```

设置当前RenderNode的大小和位置。当和[position]RenderNode#set position(position: Position)、 [size]RenderNode#set size(size: Size)同时使用时，以后设置的为准。

**Type:** Frame

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
get frame(): Frame
```

Get frame info of the RenderNode.

**Type:** Frame

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

