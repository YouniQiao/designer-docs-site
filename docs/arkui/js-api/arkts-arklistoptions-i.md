# ArkListOptions

包含创建ArcList组件的基础参数。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcListItemAttribute,ArcList,ArcListItem,ArcListAttribute } from '@kit.ArkUI';
```

## initialIndex

```TypeScript
initialIndex?: number
```

设置当前ArcList初次加载时视窗起始位置显示的item的索引值。<br/>默认值：0<br/>设置为负数或超过了当前ArcList最后一个item的索引值时视为无效取值，无效取值按默认值显示。

**Type:** number

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## header

```TypeScript
header?: ComponentContent
```

支持标题设置。

**Type:** ComponentContent

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## scroller

```TypeScript
scroller?: Scroller
```

可滚动组件的控制器。与ArcList绑定后，可以通过它控制ArcList的滚动。<br/>不允许和其他滚动类组件绑定同一个滚动控制对象。

**Type:** Scroller

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

