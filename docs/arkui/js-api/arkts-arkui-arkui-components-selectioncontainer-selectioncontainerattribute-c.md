# SelectionContainerAttribute

Defines the attributes of SelectionContainer.

**Inheritance/Implementation:** SelectionContainerAttribute extends [CommonMethod<SelectionContainerAttribute>](CommonMethod<SelectionContainerAttribute>)

**Since:** 26.0.0

<!--Device-unnamed-export declare class SelectionContainerAttribute extends CommonMethod<SelectionContainerAttribute>--><!--Device-unnamed-export declare class SelectionContainerAttribute extends CommonMethod<SelectionContainerAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { SelectionContainerInstance, SelectionContainer, OnMenuItemClickWithTextCallback, SelectionContainerOptions, SelectionContainerAttribute, SelectionContainerEditMenuOptions, SelectionContainerTextJoinStyle, SelectionContainerController, SelectionContainerMenuOptions } from '@kit.ArkUI';
```

<a id="bindselectionmenu"></a>
## bindSelectionMenu

```TypeScript
bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute
```

Bind to the selection menu.

<p><strong>NOTE</strong>:<br>The duration required for a long-press gesture is 600 ms for bindSelectionMenu and 800 ms for bindContextMenu.<br>When both bindSelectionMenu and bindContextMenu are set and both are configured to be triggered by a long-press gesture, bindSelectionMenu is triggered first.<br>If the custom menu is too long, embed a Scroll component to prevent the keyboard from being blocked.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-bindSelectionMenu(spanType: Optional<TextSpanType>, content: Optional<CustomBuilder>,
    responseType: Optional<TextResponseType>, options?: Optional<SelectionContainerMenuOptions>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| spanType | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;TextSpanType&gt; | Yes | Indicates the type of selection menu. Default value is TextSpanType.TEXT. |
| content | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;CustomBuilder&gt; | Yes | Indicates the content of selection menu. |
| responseType | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;TextResponseType&gt; | Yes | Indicates response type of selection menu. Default value is TextResponseType.LONG_PRESS. |
| options | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;SelectionContainerMenuOptions&gt; | No | Indicates the options of selection menu. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="caretcolor"></a>
## caretColor

```TypeScript
caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute
```

Set the caret color for selected text.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-caretColor(color: Optional<ResourceColor>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;ResourceColor&gt; | Yes | caret color. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="copyoption"></a>
## copyOption

```TypeScript
copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute
```

Set whether to allow copy and where data can be copied.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-copyOption(value: Optional<CopyOptions>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;CopyOptions&gt; | Yes | copy option for selected text. Default value is CopyOptions.InApp. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="editmenuoptions"></a>
## editMenuOptions

```TypeScript
editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute
```

Set the custom text menu.Sets the extended options of the custom context menu on selection,including the text content, icon, and callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-editMenuOptions(editMenu: Optional<SelectionContainerEditMenuOptions>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| editMenu | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;SelectionContainerEditMenuOptions&gt; | Yes | Customize text menu options. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="enablehapticfeedback"></a>
## enableHapticFeedback

```TypeScript
enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute
```

Enable or disable haptic feedback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-enableHapticFeedback(isEnabled: Optional<boolean>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isEnabled | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | whether to enable haptic feedback. Default value is true. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="oncopy"></a>
## onCopy

```TypeScript
onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute
```

Called when selected text is copied.Currently, only text can be copied.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-onCopy(callback: Optional<Callback<string>>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;Callback&lt;string&gt;&gt; | Yes | callback of copy event.The callback parameter (string) is the selected text concatenated in the visual order of Text components. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="ontextselectionchange"></a>
## onTextSelectionChange

```TypeScript
onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute
```

Called when text selection changes in SelectionContainer.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-onTextSelectionChange(callback: Optional<Callback<Array<string>>>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;Callback&lt;Array&lt;string&gt;&gt;&gt; | Yes | callback of selection change event.The order of items in the first callback parameter array is consistent with the visual order of Text components. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="onwillcopy"></a>
## onWillCopy

```TypeScript
onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute
```

Called before using the Clipboard copy menu.Currently, only text can be copied.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-onWillCopy(callback: Optional<Callback<string, boolean>>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;Callback&lt;string, boolean&gt;&gt; | Yes | callback used to check whether copy is allowed.The first callback parameter (string) is the selected text concatenated in the visual order of Text components. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="selectedbackgroundcolor"></a>
## selectedBackgroundColor

```TypeScript
selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute
```

Set selected text background color.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-selectedBackgroundColor(color: Optional<ResourceColor>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;ResourceColor&gt; | Yes | selected text background color. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

<a id="textjoinstyle"></a>
## textJoinStyle

```TypeScript
textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute
```

Set text join style for aggregated text in SelectionContainer.

<p><strong>NOTE</strong>:<br>This setting affects the string value used in callbacks such as onWillCopy and onCopy.<br>It also affects built-in text menu item logic that depends on string concatenation, such as copy.<br>The default style is SelectionContainerTextJoinStyle.NEWLINE.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-SelectionContainerAttribute-textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute--><!--Device-SelectionContainerAttribute-textJoinStyle(style: Optional<SelectionContainerTextJoinStyle>): SelectionContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](../arkts-components/arkts-arkui-optional-t.md)&lt;SelectionContainerTextJoinStyle&gt; | Yes | text join style for aggregated text. |

**Return value:**

| Type | Description |
| --- | --- |
| [SelectionContainerAttribute](arkts-arkui-arkui-components-selectioncontainer-selectioncontainerattribute-c.md) | returns the instance of the SelectionContainerAttribute. |

