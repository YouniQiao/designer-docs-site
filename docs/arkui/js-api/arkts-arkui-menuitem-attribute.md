# MenuItem properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Inheritance/Implementation:** MenuItemAttribute extends [CommonMethod<MenuItemAttribute>](CommonMethod<MenuItemAttribute>)

**Since:** 9

<!--Device-unnamed-declare class MenuItemAttribute extends CommonMethod<MenuItemAttribute>--><!--Device-unnamed-declare class MenuItemAttribute extends CommonMethod<MenuItemAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="contentfont"></a>
## contentFont

```TypeScript
contentFont(value: Font)
```

Sets the font style of the menu item content.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-contentFont(value: Font): MenuItemAttribute--><!--Device-MenuItemAttribute-contentFont(value: Font): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Font style of the menu item content. |

<a id="contentfontcolor"></a>
## contentFontColor

```TypeScript
contentFontColor(value: ResourceColor)
```

Sets the font color of the menu item content.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-contentFontColor(value: ResourceColor): MenuItemAttribute--><!--Device-MenuItemAttribute-contentFontColor(value: ResourceColor): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color of the menu item content.<br>Default value: **'#E5000000'** |

<a id="labelfont"></a>
## labelFont

```TypeScript
labelFont(value: Font)
```

Sets the font style of the menu item label.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-labelFont(value: Font): MenuItemAttribute--><!--Device-MenuItemAttribute-labelFont(value: Font): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Font style of the menu item label. |

<a id="labelfontcolor"></a>
## labelFontColor

```TypeScript
labelFontColor(value: ResourceColor)
```

Sets the font color of the menu item label.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-labelFontColor(value: ResourceColor): MenuItemAttribute--><!--Device-MenuItemAttribute-labelFontColor(value: ResourceColor): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color of the menu item label.<br>Default value: **'#99000000'** |

<a id="onchange"></a>
## onChange

```TypeScript
onChange(callback: (selected: boolean) => void)
```

Triggered when the selection status of the menu item is changed manually.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-onChange(callback: (selected: boolean) => void): MenuItemAttribute--><!--Device-MenuItemAttribute-onChange(callback: (selected: boolean) => void): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (selected: boolean) =&gt; void | Yes | Invoked when the selected status changes.<br>**true**: selected; **false**:unselected. |

<a id="selecticon"></a>
## selectIcon

```TypeScript
selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier)
```

Sets whether to display the selected icon when the menu item is selected.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier): MenuItemAttribute--><!--Device-MenuItemAttribute-selectIcon(value: boolean | ResourceStr | SymbolGlyphModifier): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| ResourceStr \| SymbolGlyphModifier | Yes | Whether to display the selected icon when the menu item is selected.<br>**true**: Display the default check mark icon. **false**: Hide the selected state icon.<br   >**ResourceStr**: Display the specified custom icon resource.<br>**SymbolGlyphModifier**: Display the specified HMSymbol icon.<br>Default value: **false**.<br>**Since:** 12 |

<a id="selected"></a>
## selected

```TypeScript
selected(value: boolean)
```

Sets whether the menu item is selected.

Since API version 10, this parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).

Since API version 18, this parameter supports two-way binding through [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuItemAttribute-selected(value: boolean): MenuItemAttribute--><!--Device-MenuItemAttribute-selected(value: boolean): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the menu item is selected.<br>**true**: The menu item is selected. **false**:The menu item is not selected.<br>Default value: **false**. |

<a id="submenubuilder"></a>
## subMenuBuilder

```TypeScript
subMenuBuilder(builder: CustomBuilder)
```

Create the submenu for custom menu item.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MenuItemAttribute-subMenuBuilder(builder: CustomBuilder): MenuItemAttribute--><!--Device-MenuItemAttribute-subMenuBuilder(builder: CustomBuilder): MenuItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Indicates the builder function for submenu. |

