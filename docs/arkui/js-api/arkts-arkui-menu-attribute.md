# Menu properties/events

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Inheritance/Implementation:** MenuAttribute extends [CommonMethod<MenuAttribute>](CommonMethod<MenuAttribute>)

**Since:** 9

<!--Device-unnamed-declare class MenuAttribute extends CommonMethod<MenuAttribute>--><!--Device-unnamed-declare class MenuAttribute extends CommonMethod<MenuAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="font"></a>
## font

```TypeScript
font(value: Font)
```

Sets the size of all text within the menu.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuAttribute-font(value: Font): MenuAttribute--><!--Device-MenuAttribute-font(value: Font): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Font](../arkts-apis/arkts-arkui-arkui-uicontext-font-c.md) | Yes | Size of all text within the menu.<br>Default value:<br>{<br> size: 16,<br>family: 'HarmonyOS Sans',<br> weight: FontWeight.Medium,<br> style: FontStyle.Normal<br>} |

<a id="fontcolor"></a>
## fontColor

```TypeScript
fontColor(value: ResourceColor)
```

Sets the font color of all text within the menu.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuAttribute-fontColor(value: ResourceColor): MenuAttribute--><!--Device-MenuAttribute-fontColor(value: ResourceColor): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes | Font color of all text within the menu. |

<a id="fontsize"></a>
## fontSize

```TypeScript
fontSize(value: Length)
```

Sets the size of all text within the menu.

> **NOTE**

**Since:** 9

**Deprecated since:** 10

**Substitutes:** font

<!--Device-MenuAttribute-fontSize(value: Length): MenuAttribute--><!--Device-MenuAttribute-fontSize(value: Length): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Size of all text within the menu. If the value of the Length type is a number, the unit is fp. Percentage values are not supported. |

<a id="menuitemdivider"></a>
## menuItemDivider

```TypeScript
menuItemDivider(options: DividerStyleOptions | undefined)
```

Sets the style of the menu item divider. If this attribute is not set, the divider will not be displayed.

If the sum of **startMargin** and **endMargin** exceeds the component width, both **startMargin** and **endMargin** will be set to **0**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MenuAttribute-menuItemDivider(options: DividerStyleOptions | undefined): MenuAttribute--><!--Device-MenuAttribute-menuItemDivider(options: DividerStyleOptions | undefined): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [DividerStyleOptions](../arkts-apis/arkts-arkui-dividerstyleoptions-i.md) \| undefined | Yes | Style of the menu item divider.<br>- **strokeWidth**: stroke width of the divider.<br>- **color**: color of the divider.<br>- **startMargin**: distance between the divider and the start edge of the menu item.<br>- **endMargin**: distance between the divider and the end edge of the menu item.<br>- **mode**: mode of the divider, which is **FLOATING_ABOVE_MENU** by default. |

<a id="menuitemgroupdivider"></a>
## menuItemGroupDivider

```TypeScript
menuItemGroupDivider(options: DividerStyleOptions | undefined)
```

Sets the style of the top and bottom dividers for the menu item group. If this attribute is not set, the dividers will be displayed by default.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MenuAttribute-menuItemGroupDivider(options: DividerStyleOptions | undefined): MenuAttribute--><!--Device-MenuAttribute-menuItemGroupDivider(options: DividerStyleOptions | undefined): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [DividerStyleOptions](../arkts-apis/arkts-arkui-dividerstyleoptions-i.md) \| undefined | Yes | Style of the top and bottom dividers for the menu item group.<br>- **strokeWidth**: stroke width of the divider. The default value is 1 px.<br>- **color**: color of the divider. The default value is **#33000000**.<br>- **startMargin**: distance between the divider and the start edge of the menu item group. The default value is 16 vp.<br>- **endMargin**: distance between the divider and the end edge of the menu item group. The default value is 16 vp.<br>- **mode**: mode of the divider, which is **FLOATING_ABOVE_MENU** by default. |

<a id="radius"></a>
## radius

```TypeScript
radius(value: Dimension | BorderRadiuses)
```

Sets the radius of the menu border corners.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MenuAttribute-radius(value: Dimension | BorderRadiuses): MenuAttribute--><!--Device-MenuAttribute-radius(value: Dimension | BorderRadiuses): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) \| BorderRadiuses | Yes | Radius of the menu border corners.<br>Default value: **8vp** for 2-in-1 devices and **20vp** for other devices<br> Since API version 12, if the sum of the two maximum corner radii in the horizontal direction exceeds the menu width, or if the sum of the two maximum corner radii in the vertical direction exceeds the menu height, the default corner radius will be used for all four corners of the menu.<br>When the Dimension type is used: Invalid input values will trigger a fallback to the default corner radius.<br>When the BorderRadiuses type is used: Invalid input values will result in the menu having no rounded corners by default. |

<a id="submenuexpandsymbol"></a>
## subMenuExpandSymbol

```TypeScript
subMenuExpandSymbol(symbol: SymbolGlyphModifier)
```

Sets the submenu expand symbol of the menu.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-MenuAttribute-subMenuExpandSymbol(symbol: SymbolGlyphModifier): MenuAttribute--><!--Device-MenuAttribute-subMenuExpandSymbol(symbol: SymbolGlyphModifier): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| symbol | [SymbolGlyphModifier](arkts-arkui-symbolglyphmodifier-t.md) | Yes | Submenu expand symbol of the menu.<br>1.**SubMenuExpandingMode.SIDE_EXPAND**: The expand symbol is not displayed.<br>2.**SubMenuExpandingMode.EMBEDDED_EXPAND**: The symbol rotates 180° clockwise upon expansion.<br>Default value:**$r('sys.symbol.chevron_down').fontSize('24vp')**<br>3. **SubMenuExpandingMode.STACK_EXPAND**: The symbol rotates 90° clockwise upon expansion.<br>Default value:**$r('sys.symbol.chevron_forward').fontSize('20vp').padding('2vp')** |

<a id="submenuexpandingmode"></a>
## subMenuExpandingMode

```TypeScript
subMenuExpandingMode(mode: SubMenuExpandingMode)
```

Sets the submenu expanding mode of the menu.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MenuAttribute-subMenuExpandingMode(mode: SubMenuExpandingMode): MenuAttribute--><!--Device-MenuAttribute-subMenuExpandingMode(mode: SubMenuExpandingMode): MenuAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [SubMenuExpandingMode](arkts-arkui-submenuexpandingmode-e.md) | Yes | Submenu expanding mode of the menu.<br>Default value:**SubMenuExpandingMode.SIDE_EXPAND** |

