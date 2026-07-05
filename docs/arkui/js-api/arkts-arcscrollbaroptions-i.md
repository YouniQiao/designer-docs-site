# ArcScrollBarOptions

ArcScrollBar的构造函数参数。 > **说明：** > > ArcScrollBar与可滚动组件需通过scroller进行绑定后方能实现联动，且ArcScrollBar与可滚动组件仅限于一对一的绑定方式。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcScrollBarAttribute,ArcScrollBar } from '@kit.ArkUI';
```

## state

```TypeScript
state?: BarState
```

滚动条状态。<br/>默认值：BarState.Auto

**Type:** BarState

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## scroller

```TypeScript
scroller: Scroller
```

可滚动组件的控制器，用于与可滚动组件进行绑定。

**Type:** Scroller

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

