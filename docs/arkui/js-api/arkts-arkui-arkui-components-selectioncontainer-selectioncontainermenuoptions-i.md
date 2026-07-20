# SelectionContainerMenuOptions

Defines selection menu options for SelectionContainer.

**Since:** 26.0.0

<!--Device-unnamed-export interface SelectionContainerMenuOptions--><!--Device-unnamed-export interface SelectionContainerMenuOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectionContainerInstance, SelectionContainer, OnMenuItemClickWithTextCallback, SelectionContainerOptions, SelectionContainerAttribute, SelectionContainerEditMenuOptions, SelectionContainerTextJoinStyle, SelectionContainerController, SelectionContainerMenuOptions } from '@kit.ArkUI';
```

## onAppear

```TypeScript
onAppear?: Callback<string>
```

Called when the selection menu appears.The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerMenuOptions-onAppear?: Callback<string>--><!--Device-SelectionContainerMenuOptions-onAppear?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDisappear

```TypeScript
onDisappear?: Callback<void>
```

Called when the selection menu disappears.

**Type:** Callback<void>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerMenuOptions-onDisappear?: Callback<void>--><!--Device-SelectionContainerMenuOptions-onDisappear?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuHide

```TypeScript
onMenuHide?: Callback<string>
```

Called when the selection menu is hidden.The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerMenuOptions-onMenuHide?: Callback<string>--><!--Device-SelectionContainerMenuOptions-onMenuHide?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onMenuShow

```TypeScript
onMenuShow?: Callback<string>
```

Called when the selection menu is displayed.The callback parameter is the selected text concatenated in the visual order of Text components.

**Type:** Callback<string>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerMenuOptions-onMenuShow?: Callback<string>--><!--Device-SelectionContainerMenuOptions-onMenuShow?: Callback<string>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

