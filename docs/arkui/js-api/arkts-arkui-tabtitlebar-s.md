# TabTitleBar

Declaration of the tabbed title bar.

**Since:** 22

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { TabTitleBar, TabTitleBarTabItem, TabTitleBarMenuItem } from '@kit.ArkUI';
```

## menuItems

```TypeScript
menuItems?: Array<TabTitleBarMenuItem>
```

Menu items on the right side.

**Type:** Array<TabTitleBarMenuItem>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## swiperContent

```TypeScript
swiperContent: () => void
```

Content builder. Each component corresponds to a tab item. The builder needs to be transferred.

**Type:** () => void

**Since:** 22

**Decorator:** @BuilderParam

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tabItems

```TypeScript
tabItems: Array<TabTitleBarTabItem>
```

Tab items on the left side.

**Type:** Array<TabTitleBarTabItem>

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

