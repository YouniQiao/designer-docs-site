# ComposeTitleBar

Declaration of the composable title bar.

**Since:** 20

<!--Device-unnamed-export declare struct ComposeTitleBar--><!--Device-unnamed-export declare struct ComposeTitleBar-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ComposeTitleBar, ComposeTitleBarMenuItem } from '@kit.ArkUI';
```

## item

```TypeScript
item?: ComposeTitleBarMenuItem
```

Avatar resource and event callback of this title bar.

**Type:** ComposeTitleBarMenuItem

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComposeTitleBar-item?: ComposeTitleBarMenuItem--><!--Device-ComposeTitleBar-item?: ComposeTitleBarMenuItem-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menuItems

```TypeScript
menuItems?: Array<ComposeTitleBarMenuItem>
```

Menu items on the right side.

**Type:** Array<ComposeTitleBarMenuItem>

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComposeTitleBar-menuItems?: Array<ComposeTitleBarMenuItem>--><!--Device-ComposeTitleBar-menuItems?: Array<ComposeTitleBarMenuItem>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

Sub-title of this title bar.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComposeTitleBar-subtitle?: ResourceStr--><!--Device-ComposeTitleBar-subtitle?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: ResourceStr
```

Title of this title bar.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComposeTitleBar-title: ResourceStr--><!--Device-ComposeTitleBar-title: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

