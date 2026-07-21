# RenderOptions

Provides optional parameters for creating a BuilderNode.

**Since:** 11

<!--Device-unnamed-export interface RenderOptions--><!--Device-unnamed-export interface RenderOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selfIdealSize

```TypeScript
selfIdealSize?: Size
```

Ideal size of the node.

Default value: **{ width: 0, height: 0 }**.

**Type:** Size

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RenderOptions-selfIdealSize?: Size--><!--Device-RenderOptions-selfIdealSize?: Size-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## surfaceId

```TypeScript
surfaceId?: string
```

Surface ID of the texture receiver. Typically, the texture receiver is [OH_NativeImage](docroot://reference/apis-arkgraphics2d/capi-oh-nativeimage-oh-nativeimage.md).

This parameter is effective only when **type** is set to **NodeRenderType.RENDER_TYPE_TEXTURE**.

Default value: **""**.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RenderOptions-surfaceId?: string--><!--Device-RenderOptions-surfaceId?: string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: NodeRenderType
```

Rendering type of the node.

Default value: **NodeRenderType.RENDER_TYPE_DISPLAY**.

**Type:** NodeRenderType

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RenderOptions-type?: NodeRenderType--><!--Device-RenderOptions-type?: NodeRenderType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

