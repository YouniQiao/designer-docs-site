# ComposeTitleBarMenuItem

Declaration of the menu item on the right side.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { ComposeTitleBar, ComposeTitleBarMenuItem } from '@ohos.arkui.advanced.ComposeTitleBar';
```

## accessibilityDescription

```TypeScript
accessibilityDescription?: ResourceStr
```

The accessibilityDescription of this menu item.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityLevel

```TypeScript
accessibilityLevel?: string
```

The accessibilityLevel of this menu item.

**Type:** string

**Default:** "auto".The options are as follows:<br/>
"auto":The value is converted to "yes" or "no" based on the component.
"yes": the current component is selectable for the accessibility service.
"no": The current component is not selectable for the accessibility service.
"no-hide-descendants":The current component and all its child components are not selectable<br/>
for the accessibility service.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityText

```TypeScript
accessibilityText?: ResourceStr
```

The accessibilityText of this menu item.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action?: () => void
```

Callback function when click on this menu item.

**Type:** () => void

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isEnabled

```TypeScript
isEnabled?: boolean
```

Whether to enable this menu item.

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## label

```TypeScript
label?: ResourceStr
```

Icon label for this menu item.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStyle

```TypeScript
symbolStyle?: SymbolGlyphModifier
```

Symbol resource for this menu item.

**Type:** SymbolGlyphModifier

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: ResourceStr
```

Icon resource for this menu item.

**Type:** ResourceStr

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

