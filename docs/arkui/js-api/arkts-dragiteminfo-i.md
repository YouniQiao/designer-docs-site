# DragItemInfo

定义拖拽过程中拖拽项的相关信息。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## builder

```TypeScript
builder?: CustomBuilder
```

拖拽过程中显示自定义组件，如果设置了pixelMap，则忽略此值。 **说明：** 不支持全局builder。如果builder中使用了[Image]image组件，应尽量开启同步加载，即配置Image的[syncLoad]ImageAttribute#syncLoad为true。 该builder只用于生成当次拖拽中显示的图片，builder的修改不会同步到当前正在拖拽的图片，对builder的修改需要在下一次拖拽时生效。 builder传参时，建议传参格式为builder: ()=>{this.customBuilder()}，用以保证this指向的正确性。具体请参考 [将@Builder装饰的函数当作CustomBuilder类型使用](docroot://ui/state-management/arkts-builder.md#将builder装饰的函数当作custombuilder类型使用)。

**Type:** CustomBuilder

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## extraInfo

```TypeScript
extraInfo?: string
```

拖拽项的附加信息，用于描述拖拽项。

**Type:** string

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## pixelMap

```TypeScript
pixelMap?: PixelMap
```

设置拖拽过程中显示的图片。

**Type:** PixelMap

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

