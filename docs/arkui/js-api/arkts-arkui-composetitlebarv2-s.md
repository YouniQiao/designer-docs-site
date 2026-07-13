# ComposeTitleBarV2

Declaration of the composable title bar. Composable title bar represents a common title bar that contains a title,
subtitle (optional), and profile picture (optional). It can come with a Back button for switching between pages of
different levels.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ComposeTitleBarV2MenuItemParams, ComposeTitleBarV2, ComposeTitleBarV2MenuItem } from '@kit.ArkUI';
```

## item

```TypeScript
item?: ComposeTitleBarV2MenuItem
```

A single menu item for the profile picture on the left.

**Type:** ComposeTitleBarV2MenuItem

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## menuItems

```TypeScript
menuItems?: Array<ComposeTitleBarV2MenuItem>
```

Menu items on the right side.

**Type:** Array<ComposeTitleBarV2MenuItem>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

Sub-title of this title bar.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title: ResourceStr
```

Title of this title bar.

**Type:** ResourceStr

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

