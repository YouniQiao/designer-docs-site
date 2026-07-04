# EditorMenuOptions

Describes the edit menu options.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditorMenuOptions, SelectionMenuOptions, EditorEventInfo, SelectionMenu, ExpandedMenuOptions } from '@ohos.arkui.advanced.SelectionMenu';
```

## action

```TypeScript
action?: () => void
```

Action triggered when the menu option is clicked.

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## builder

```TypeScript
builder?: () => void
```

Builder of the custom component displayed upon click. It must be used with @Builder for building the custom component.

**Type:** () => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## icon

```TypeScript
icon: ResourceStr
```

Icon.

**Type:** ResourceStr

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## symbolStyle

```TypeScript
symbolStyle?: SymbolGlyphModifier
```

Symbol icon resource, which has higher priority than **icon**.

**Type:** SymbolGlyphModifier

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

