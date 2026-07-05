# RenderOptions

创建BuilderNode时的可选参数。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selfIdealSize

```TypeScript
selfIdealSize?: Size
```

节点的理想大小。 默认值：{ width: 0, height: 0 }

**Type:** Size

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## surfaceId

```TypeScript
surfaceId?: string
```

纹理接收方的surfaceId。纹理接收方一般为 [OH_NativeImage](docroot://reference/apis-arkgraphics2d/capi-oh-nativeimage-oh-nativeimage.md)。 surfaceId仅当type为NodeRenderType.RENDER_TYPE_TEXTURE时生效。 默认值：""

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type?: NodeRenderType
```

节点的渲染类型。 默认值：NodeRenderType.RENDER_TYPE_DISPLAY

**Type:** NodeRenderType

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

