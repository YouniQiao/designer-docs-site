# ToolBar

Declare Component ToolBar

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ToolBarOption, ItemState, ToolBar, ToolBarOptions, ToolBarModifier } from '@ohos.arkui.advanced.ToolBar';
```

## activateIndex

```TypeScript
@Prop activateIndex?: number
```

Define toolbar activate item index, default is -1.

**Type:** number

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller: TabsController
```

Define toolbar controller.

**Type:** TabsController

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dividerModifier

```TypeScript
@Prop dividerModifier?: DividerModifier
```

Define divider Modifier.

**Type:** DividerModifier

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## toolBarList

```TypeScript
@ObjectLink toolBarList: ToolBarOptions
```

Define toolbar list array.

**Type:** ToolBarOptions

**Since:** 18

**Decorator:** @ObjectLink

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## toolBarModifier

```TypeScript
@Prop toolBarModifier?: ToolBarModifier
```

Define toolbar modifier.

**Type:** ToolBarModifier

**Since:** 18

**Decorator:** @Prop

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

