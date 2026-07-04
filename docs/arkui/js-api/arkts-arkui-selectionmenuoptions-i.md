# SelectionMenuOptions

Defines the configuration options of the **SelectionMenu** component.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { EditorMenuOptions, SelectionMenuOptions, EditorEventInfo, SelectionMenu, ExpandedMenuOptions } from '@ohos.arkui.advanced.SelectionMenu';
```

## backgroundSystemMaterial

```TypeScript
backgroundSystemMaterial?: uiMaterial.Material
```

Set system-styled materials for the component. Different materials have different effects, which can influence the backgroundColor, border, shadow, and other visual attributes.

**Type:** uiMaterial.Material

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller?: RichEditorController
```

Expanded drop-down menu options. If this parameter is left empty, the expanded drop-down menu is not displayed. The options configured for **ExpandedMenuOptions** are displayed in the **More** menu option, and clicking **More** shows the expanded drop-down menu.

**Type:** RichEditorController

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## editorMenuOptions

```TypeScript
editorMenuOptions?: Array<EditorMenuOptions>
```

Edit menu. If **editorMenuOptions** is not set, the edit menu is not displayed. When both **action** and **builder** in **EditorMenuOptions** are configured, clicking the edit icon will trigger both. By default, the context menu is not closed when the edit menu icon is clicked. You can configure **closeSelectionMenu** of **RichEditorController** in **action** to enable the menu to be closed.

**Type:** Array<EditorMenuOptions>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## expandedMenuOptions

```TypeScript
expandedMenuOptions?: Array<ExpandedMenuOptions>
```

Expanded drop-down menu options. If this parameter is left empty, the expanded drop-down menu is not displayed. The options configured for **ExpandedMenuOptions** are displayed in the **More** menu option, and clicking **More** shows the expanded drop-down menu.

**Type:** Array<ExpandedMenuOptions>

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCopy

```TypeScript
onCopy?: (event?: EditorEventInfo) => void
```

Event callback to take the place of the preset copy menu option. It is effective only when the **controller** parameter is set and the preset menu is available. **NOTE** **event** indicates the returned information.

**Type:** (event?: EditorEventInfo) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onCut

```TypeScript
onCut?: (event?: EditorEventInfo) => void
```

Event callback to take the place of the preset cut menu option. It is effective only when the **controller** parameter is set and the preset menu is available. **NOTE** **event** indicates the returned information.

**Type:** (event?: EditorEventInfo) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onPaste

```TypeScript
onPaste?: (event?: EditorEventInfo) => void
```

Event callback to take the place of the preset paste menu option. It is effective only when the **controller** parameter is set and the preset menu is available. **NOTE** **event** indicates the returned information.

**Type:** (event?: EditorEventInfo) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onSelectAll

```TypeScript
onSelectAll?: (event?: EditorEventInfo) => void
```

Event callback to take the place of the preset select-all menu option. It is effective only when the **controller** parameter is set and the preset menu is available. **NOTE** **event** indicates the returned information.

**Type:** (event?: EditorEventInfo) => void

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

