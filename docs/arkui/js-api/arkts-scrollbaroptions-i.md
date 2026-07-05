# ScrollBarOptions

滚动条组件参数。 > **说明：** > > - ScrollBar组件负责定义可滚动区域的行为样式，ScrollBar的子节点负责定义滚动条的行为样式。 > > - 滚动条组件与可滚动组件通过Scroller进行绑定，且只有当两者方向相同时，才能联动，ScrollBar与可滚动组件仅支持一对一绑定。 > > - 从API version 12开始，ScrollBar组件没有子节点时，支持显示默认样式的滚动条。 > > - ScrollBar组件的显隐是通过BarState设置，组件内部会自动根据BarState设置调整opacity来控制显隐，因此ScrollBar组件设置 > [opacity]CommonMethod#opacity(opacity: Optional<number | Resource>)属性不生效。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## state

```TypeScript
state?: BarState
```

滚动条状态。<br/>默认值：BarState.Auto

**Type:** BarState

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## scroller

```TypeScript
scroller: Scroller
```

可滚动组件的控制器。用于与可滚动组件进行绑定。

**Type:** Scroller

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: ScrollBarDirection
```

滚动条的方向，控制可滚动组件对应方向的滚动。<br/>默认值：ScrollBarDirection.Vertical

**Type:** ScrollBarDirection

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

