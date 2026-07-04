# ContextMenuOptions

Configures menu item information. **Table 1: Menu offset when both offset and placement are set** | Value of placement | Menu Offset | | ------------------------------------------------------------ | ------------------------------------------------------------ | | Placement.TopLeft, Placement.Top, or Placement.TopRight | If the value of **x** is a positive number for **offset**, the menu shifts to the right relative to the component. If the value of **y** is a positive number, the menu shifts upward relative to the component.| | Placement.BottomLeft, Placement.Bottom, or Placement.BottomRight| If the value of **x** is a positive number for **offset**, the menu shifts to the left relative to the component. If the value of **y** is a positive number, the menu shifts downward relative to the component.| | Placement.RightTop, Placement.Right, or Placement.RightBottom | If the value of **x** is a positive number for **offset**, the menu shifts to the right relative to the component. If the value of **y** is a positive number, the menu shifts downward relative to the component.| **Table 2: Default position of the menu arrow when both arrowOffset and placement are set** | Value of placement | Menu Arrow Position | | ------------------------------------------- | ------------------------------------------------------------ | | Placement.Top or Placement.Bottom | The arrow is displayed horizontally and centered by default, with a distance from the left edge of the menu equal to the arrow's safe distance.| | Placement.Left or Placement.Right | The arrow is displayed vertically and centered by default, with a distance from the top edge of the menu equal to the arrow's safe distance.| | Placement.TopLeft or Placement.BottomLeft | The arrow is displayed horizontally by default, with a distance from the left edge of the menu equal to the arrow's safe distance.| | Placement.TopRight or Placement.BottomRight | The arrow is displayed horizontally by default, with a distance from the right edge of the menu equal to the arrow's safe distance. | | Placement.LeftTop or Placement.RightTop | The arrow is displayed vertically by default, with a distance from the top edge of the menu equal to the arrow's safe distance. | | Placement.LeftBottom or Placement.RightBottom| The arrow is displayed vertically by default, with a distance from the bottom edge of the menu equal to the arrow's safe distance. | **Table 3 Default menu position when enableArrow is set to true and placement is not set or set to an invalid value** | API| Default Menu Position| |------|-------------| | [bindMenu](arkts-arkui-commonmethod-c.md#bindmenu-1) | Placement.BottomLeft | | [bindMenu<sup>11+</sup>](arkts-arkui-commonmethod-c.md#bindmenu-2) | Placement.BottomLeft | | [bindContextMenu<sup>8+</sup>](arkts-arkui-commonmethod-c.md#bindcontextmenu-1) | Placement.Top | | [bindContextMenu<sup>12+</sup>](arkts-arkui-commonmethod-c.md#bindcontextmenu-2) | Placement.BottomLeft | | [bindContextMenuWithResponse<sup>23+</sup>](arkts-arkui-commonmethod-c.md#bindcontextmenuwithresponse-1) | Placement.Top |

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## distortionMode

```TypeScript
distortionMode?: DistortionMode
```

Sets the distortion animation Mode of the menu.

**Type:** DistortionMode

**Default:** DistortionMode.DISTORTION_AUTO

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## edgeLightMode

```TypeScript
edgeLightMode?: EdgeLightMode
```

Sets the edgeLight animation Mode of the menu.

**Type:** EdgeLightMode

**Default:** EdgeLightMode.EDGELIGHT_DISABLED

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## systemMaterial

```TypeScript
systemMaterial?: SystemUiMaterial
```

Set system-styled materials for menu. The material effect behaves differently on devices with different level of computing powers. On devices with lower computing power, it affects attributes such as the backgroundColor, borderWidth, borderColor, shadow. On devices with higher computing power, it adds a filter effect at the system material layer, which can produce an effect similar to glass.

**Type:** SystemUiMaterial

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

