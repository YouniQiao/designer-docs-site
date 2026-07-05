# OverlayOptions

浮层的定位。 > **说明：** > > 为规范匿名对象的定义，API 12版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 > > align和offset都设置时，效果重叠，浮层相对于组件方位定位后，再基于当前位置的左上角进行偏移。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: OverlayOffset
```

设置浮层基于自身左上角的偏移量。浮层默认处于组件左上角。

**Type:** OverlayOffset

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## align

```TypeScript
align?: Alignment
```

设置浮层相对于组件的方位。 默认值：TopStart

**Type:** Alignment

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

