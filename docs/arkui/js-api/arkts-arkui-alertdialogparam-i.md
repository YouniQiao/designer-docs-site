# AlertDialogParam

Enumerates the alert dialog box styles.

**Since:** 7

<!--Device-unnamed-declare interface AlertDialogParam--><!--Device-unnamed-declare interface AlertDialogParam-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignment

```TypeScript
alignment?: DialogAlignment
```

Alignment mode of the dialog box in the vertical direction.

Default value: **DialogAlignment.Default**

**NOTE**

If **showInSubWindow** is set to **true** in **UIExtension**, the dialog box is aligned with the host window based on **UIExtension**.

**Type:** DialogAlignment

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-alignment?: DialogAlignment--><!--Device-AlertDialogParam-alignment?: DialogAlignment-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoCancel

```TypeScript
autoCancel?: boolean
```

Whether to dismiss the dialog box when the mask is touched. The value **true** means to dismiss the dialog box when the mask is touched, and **false** means the opposite.

Default value: **true**.

**Type:** boolean

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-autoCancel?: boolean--><!--Device-AlertDialogParam-autoCancel?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

Background blur style of the dialog box.

Default value: **BlurStyle.COMPONENT_ULTRA_THICK**

**NOTE**

Setting this parameter to **BlurStyle.NONE** disables the background blur. When **backgroundBlurStyle** is set to a value other than **NONE**, do not set **backgroundColor**. If you do, the color display may not produce the expected visual effect.

**Type:** BlurStyle

**Default:** BlurStyle.COMPONENT_ULTRA_THICK

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-backgroundBlurStyle?: BlurStyle--><!--Device-AlertDialogParam-backgroundBlurStyle?: BlurStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

Options for customizing the background blur style. For details about the default value, see **BackgroundBlurStyleOptions**.

**Type:** BackgroundBlurStyleOptions

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-backgroundBlurStyleOptions?: BackgroundBlurStyleOptions--><!--Device-AlertDialogParam-backgroundBlurStyleOptions?: BackgroundBlurStyleOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

Background color of the dialog box.

Default value: **Color.Transparent**

**NOTE**

The background color will be visually combined with the blur effect when both properties are set. If the resulting effect does not match your design requirements, you can disable the blur effect entirely by explicitly setting the **backgroundBlurStyle** property to **BlurStyle.NONE**.

**Type:** ResourceColor

**Default:** Color.Transparent

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-backgroundColor?: ResourceColor--><!--Device-AlertDialogParam-backgroundColor?: ResourceColor-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

Options for customizing the background effect. For details about the default value, see **BackgroundEffectOptions**.

**Type:** BackgroundEffectOptions

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-backgroundEffect?: BackgroundEffectOptions--><!--Device-AlertDialogParam-backgroundEffect?: BackgroundEffectOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderColor

```TypeScript
borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors
```

Border color of the dialog box.

Default value: **Color.Black**

**borderColor** must be used with **borderWidth** in pairs.

**NOTE**

When **borderColor** is of type LocalizedEdgeColors, the layout order can be dynamically adjusted based on the user's language settings.

**Type:** ResourceColor \| EdgeColors \| LocalizedEdgeColors

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors--><!--Device-AlertDialogParam-borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderStyle

```TypeScript
borderStyle?: BorderStyle | EdgeStyles
```

Border style of the dialog box.

Default value: **BorderStyle.Solid**.

**borderStyle** must be used with **borderWidth** in pairs.

**Type:** BorderStyle \| EdgeStyles

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-borderStyle?: BorderStyle | EdgeStyles--><!--Device-AlertDialogParam-borderStyle?: BorderStyle | EdgeStyles-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderWidth

```TypeScript
borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths
```

You can set the width for all four sides or set separate widths for individual sides.

Default value: **0**

When set to a percentage, the value defines the border width as a percentage of the parent dialog box's width.

If the left and right borders are greater than its width, or the top and bottom borders are greater than its height, the dialog box may not display as expected.

**NOTE**

When **borderWidth** is of type LocalizedEdgeWidths, the layout order can be dynamically adjusted based on the user's language settings.

**Type:** Dimension \| EdgeWidths \| LocalizedEdgeWidths

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths--><!--Device-AlertDialogParam-borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cancel

```TypeScript
cancel?: VoidCallback
```

Callback invoked when the dialog box is closed after the overlay is clicked.

**Type:** VoidCallback

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-cancel?: VoidCallback--><!--Device-AlertDialogParam-cancel?: VoidCallback-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cornerRadius

```TypeScript
cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses
```

Corner radius of the background.

You can set separate radii for the four corners.

Default value: **{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }**

The radius of the rounded corners is subject to the component size. Its maximum value is half of the component width or height. If the value is negative, the default value is used.

When set to a percentage, the value defines the radius as a percentage of the parent dialog box's width or height.

**NOTE**

When **cornerRadius** is of type LocalizedBorderRadiuses, the layout order can be dynamically adjusted based on the user's language settings.

**Type:** Dimension \| BorderRadiuses \| LocalizedBorderRadiuses

**Default:** { topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' }

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses--><!--Device-AlertDialogParam-cornerRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableHoverMode

```TypeScript
enableHoverMode?: boolean
```

Whether to respond when the device is in semi-folded mode. The value **true** means to respond when the device is in semi-folded mode.

Default value: **false**, meaning not to respond when the device is in semi-folded mode.

**NOTE**

For a PC or 2-in-1 device, the dialog box is displayed on the upper half of the screen by default when **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the lower half of the screen. For other devices, the dialog box is displayed on the lower half of the screen by default when **enableHoverMode** is set to **true**. You can set **hoverModeArea** to display the dialog box on the upper half of the screen.

**Type:** boolean

**Default:** false

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AlertDialogParam-enableHoverMode?: boolean--><!--Device-AlertDialogParam-enableHoverMode?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gridCount

```TypeScript
gridCount?: number
```

Number of grid columns occupied by the width of the dialog box.

Default value: **4**

Value range: an integer no less than 0

**Type:** number

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-gridCount?: number--><!--Device-AlertDialogParam-gridCount?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Dimension
```

Height of the dialog box.

**NOTE**

- Default maximum height of the dialog box: 0.9 x (Window height – Safe area)  
- When this parameter is set to a percentage, the reference height of the dialog box is the height of the window where the dialog box is located minus the safe area. You can decrease or increase the height as needed.

**Type:** Dimension

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-height?: Dimension--><!--Device-AlertDialogParam-height?: Dimension-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hoverModeArea

```TypeScript
hoverModeArea?: HoverModeAreaType
```

Display area of the dialog box in the hover state.

Default value: **HoverModeAreaType.BOTTOM_SCREEN**

**Type:** HoverModeAreaType

**Default:** HoverModeAreaType.BOTTOM_SCREEN

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-AlertDialogParam-hoverModeArea?: HoverModeAreaType--><!--Device-AlertDialogParam-hoverModeArea?: HoverModeAreaType-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## immersiveMode

```TypeScript
immersiveMode?: ImmersiveMode
```

Overlay effect for the page-level dialog box.

**NOTE**

- Default value: **ImmersiveMode.DEFAULT**  
- This parameter takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.

**Type:** ImmersiveMode

**Default:** ImmersiveMode.DEFAULT

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-AlertDialogParam-immersiveMode?: ImmersiveMode--><!--Device-AlertDialogParam-immersiveMode?: ImmersiveMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isModal

```TypeScript
isModal?: boolean
```

Whether the dialog box is a modal. A modal dialog box has a mask applied, while a non-modal dialog box does not.**false**: The dialog box is not a modal.

Default value: **true**.

**Type:** boolean

**Default:** true

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-isModal?: boolean--><!--Device-AlertDialogParam-isModal?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelMode

```TypeScript
levelMode?: LevelMode
```

Display level of the dialog box.

**NOTE**

- Default value: **LevelMode.OVERLAY**  
- This parameter takes effect only when **showInSubWindow** is set to **false**.

**Type:** LevelMode

**Default:** LevelMode.OVERLAY

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-AlertDialogParam-levelMode?: LevelMode--><!--Device-AlertDialogParam-levelMode?: LevelMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelOrder

```TypeScript
levelOrder?: LevelOrder
```

Display order of the dialog box.

**NOTE**

- Default value: **LevelOrder.clamp(0)**  
- Dynamic updating is not supported.

**Type:** LevelOrder

**Default:** The value returns by LevelOrder.clamp(0)

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AlertDialogParam-levelOrder?: LevelOrder--><!--Device-AlertDialogParam-levelOrder?: LevelOrder-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelUniqueId

```TypeScript
levelUniqueId?: number
```

[Unique ID](arkts-arkui-framenode-c.md#getuniqueid-1) of the node under the display level for the page-level dialog box. This parameter takes effect only when **levelMode** is set to **LevelMode.EMBEDDED**.

Value range: a number no less than 0

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-AlertDialogParam-levelUniqueId?: number--><!--Device-AlertDialogParam-levelUniqueId?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskRect

```TypeScript
maskRect?: Rectangle
```

Mask area of the dialog box. Events outside the mask area are transparently transmitted, and events within the mask area are not.

Default value: **{ x: 0, y: 0, width: '100%', height: '100%' }**

**NOTE**

**maskRect** does not take effect when **showInSubWindow** is set to **true**.

**Type:** Rectangle

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-maskRect?: Rectangle--><!--Device-AlertDialogParam-maskRect?: Rectangle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message: ResourceStr
```

Content of the dialog box.

Prior to API version 20: The content of the dialog box is left-aligned.

API version 20 and later: The content of the dialog box is center-aligned.

**Type:** ResourceStr

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-message: ResourceStr--><!--Device-AlertDialogParam-message: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: Offset
```

Offset of the dialog box based on the **alignment** settings.

Default value: **{ dx: 0 , dy: 0 }**

**Type:** Offset

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-offset?: Offset--><!--Device-AlertDialogParam-offset?: Offset-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidAppear

```TypeScript
onDidAppear?: Callback<void>
```

Event callback after the dialog box appears.

**NOTE**

1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.2. You can set the callback event for changing the dialog box display effect in **onDidAppear**. The settings take effect next time the dialog box appears.3. When a dialog box is dismissed immediately after being shown, **onWillDisappear** may be triggered before **onDidAppear**.4. If the dialog box is dismissed before its entrance animation is finished, the animation will be interrupted, and **onDidAppear** will not be triggered.

**Type:** Callback&lt;void&gt;

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-onDidAppear?: Callback<void>--><!--Device-AlertDialogParam-onDidAppear?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidDisappear

```TypeScript
onDidDisappear?: Callback<void>
```

Event callback after the dialog box disappears.

**NOTE**

The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.

**Type:** Callback&lt;void&gt;

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-onDidDisappear?: Callback<void>--><!--Device-AlertDialogParam-onDidDisappear?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillAppear

```TypeScript
onWillAppear?: Callback<void>
```

Event callback when the dialog box is about to appear.

**NOTE**

1. The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.2. You can set the callback event for changing the dialog box display effect in **onWillAppear**. The settings take effect next time the dialog box appears.

**Type:** Callback&lt;void&gt;

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-onWillAppear?: Callback<void>--><!--Device-AlertDialogParam-onWillAppear?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDisappear

```TypeScript
onWillDisappear?: Callback<void>
```

Event callback when the dialog box is about to disappear.

**NOTE**

The normal timing sequence is as follows: onWillAppear > onDidAppear > onWillDisappear > onDidDisappear.

**Type:** Callback&lt;void&gt;

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-AlertDialogParam-onWillDisappear?: Callback<void>--><!--Device-AlertDialogParam-onWillDisappear?: Callback<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDismiss

```TypeScript
onWillDismiss?: Callback<DismissDialogAction>
```

Callback for interactive dismissal of the dialog box.

**NOTE**

1. If this callback is registered, the dialog box will not be dismissed immediately after the user touches the mask or the Back button, presses the **Esc** key, or swipes left or right on the screen. The **reason** parameter in the callback is used to determine whether the dialog box can be dismissed. The reason returned by the component does not support the value **CLOSE_BUTTON**.2. In the **onWillDismiss** callback, another **onWillDismiss** callback is not allowed.

**Type:** Callback&lt;DismissDialogAction&gt;

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-onWillDismiss?: Callback<DismissDialogAction>--><!--Device-AlertDialogParam-onWillDismiss?: Callback<DismissDialogAction>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadow

```TypeScript
shadow?: ShadowOptions | ShadowStyle
```

Shadow of the dialog box.

Default value on 2-in-1 devices: **ShadowStyle.OUTER_FLOATING_MD** when the dialog box is focused and **ShadowStyle.OUTER_FLOATING_SM** otherwise On other devices, the dialog box has no shadow by default.

**Type:** ShadowOptions \| ShadowStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-shadow?: ShadowOptions | ShadowStyle--><!--Device-AlertDialogParam-shadow?: ShadowOptions | ShadowStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

Whether to show the dialog box in a subwindow when the dialog box needs to be displayed outside the main window.

**true**: The dialog box is shown in a subwindow.

Default value: **false**, meaning the dialog box is displayed within the application, not in a separate subwindow

**NOTE**

A dialog box whose **showInSubWindow** attribute is **true** cannot trigger the display of another dialog box whose **showInSubWindow** attribute is also **true**.

**Type:** boolean

**Default:** false

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-showInSubWindow?: boolean--><!--Device-AlertDialogParam-showInSubWindow?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## subtitle

```TypeScript
subtitle?: ResourceStr
```

Subtitle of the dialog box.

Prior to API version 20: The subtitle of the dialog box is left-aligned.

API version 20 and later: The subtitle of the dialog box is center-aligned.

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-subtitle?: ResourceStr--><!--Device-AlertDialogParam-subtitle?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## systemMaterial

```TypeScript
systemMaterial?: SystemUiMaterial
```

Set system-styled materials for dialog. Different materials have different effects, which can influence backgroundColor, border, shadow, and other visual attributes of dialog.

Device Behavior Differences:The effect of same material may vary across different devices depending on their computing power.

**Type:** SystemUiMaterial

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AlertDialogParam-systemMaterial?: SystemUiMaterial--><!--Device-AlertDialogParam-systemMaterial?: SystemUiMaterial-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## textStyle

```TypeScript
textStyle?: TextStyle
```

Text style of the message in the dialog box.

**Type:** TextStyle

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-textStyle?: TextStyle--><!--Device-AlertDialogParam-textStyle?: TextStyle-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: ResourceStr
```

Title of the dialog box.

Prior to API version 20: The title of the dialog box is left-aligned.

API version 20 and later: The title of the dialog box is center-aligned.

**Type:** ResourceStr

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-AlertDialogParam-title?: ResourceStr--><!--Device-AlertDialogParam-title?: ResourceStr-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition?: TransitionEffect
```

Transition effect for the appearance and disappearance of the dialog box.

**NOTE**

1. If this parameter is not set, the default effect is used.2. Touching the Back button during the appearance animation pauses the appearance animation and starts the disappearance animation. The final effect is one obtained after the curves of the appearance and disappearance animations are combined.3. Touching the Back button during the exit animation does not affect the animation playback. Touching the Back button again closes the application.

**Type:** TransitionEffect

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-transition?: TransitionEffect--><!--Device-AlertDialogParam-transition?: TransitionEffect-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Dimension
```

Width of the dialog box.

**NOTE**

- Default maximum width of the dialog box: 400 vp  
- When this parameter is set to a percentage, the reference width of the dialog box is the width of the window where the dialog box is located. You can decrease or increase the width as needed.

**Type:** Dimension

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AlertDialogParam-width?: Dimension--><!--Device-AlertDialogParam-width?: Dimension-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

