# SelectionContainerMenuOptions

Defines selection menu options for SelectionContainer.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectionContainerInstance,SelectionContainer,OnMenuItemClickWithTextCallback,SelectionContainerAttribute,SelectionContainerEditMenuOptions,SelectionContainerTextJoinStyle,SelectionContainerMenuOptions } from '@kit.ArkUI';
```

## onDisappear

```TypeScript
onDisappear?: Callback<void>
```

Called when the selection menu disappears.

**Type:** Callback<void>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuHide

```TypeScript
onMenuHide?: Callback<string>
```

Called when the selection menu is hidden. The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuShow

```TypeScript
onMenuShow?: Callback<string>
```

Called when the selection menu is displayed. The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onAppear

```TypeScript
onAppear?: Callback<string>
```

Called when the selection menu appears. The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

