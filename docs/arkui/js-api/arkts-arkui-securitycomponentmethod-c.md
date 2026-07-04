---
last_update:
  date: 2026-07-04
---

# SecurityComponentMethod

Defines the method of a security component.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## accessibilityDefaultFocus

```TypeScript
accessibilityDefaultFocus(focus: boolean): T
```

Sets the default focus flag of the accessibility feature.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| focus | boolean | Yes | Set to true if the component is the default accessibility focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

## accessibilityDescription

```TypeScript
accessibilityDescription(description: string | Resource): T
```

Sets the accessibility description. This property provides additional context or explanation for the component, helping users understand its actions or functions. <p><strong>Note</strong>: You can provide further explanation for the current component, such as the potential consequences of an operation, especially those not implicitly conveyed by the component's text or role type. If a component includes text information, a role type (other than ROLE_NONE), and an accessibility description, the system reads the text first, followed by the role type, and finally the accessibility description when the component is selected.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| description | string \| Resource | Yes | Accessibility description. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId(nextId: string): T
```

Sets the ID of the next component to receive accessibility focus.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nextId | string | Yes | ID of the next component to receive accessibility focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

## accessibilityRole

```TypeScript
accessibilityRole(role: SecurityComponentRoleType): T
```

Sets the accessibility role, which represents the custom type of the component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| role | SecurityComponentRoleType | Yes | Component type of the accessibility feature. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

## align

```TypeScript
align(alignType: Alignment): T
```

align

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignType | Alignment | Yes | Indicates the align type of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## alignRules

```TypeScript
alignRules(alignRule: AlignRuleOption): T
```

Specifies the alignRules of relative container

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignRule | AlignRuleOption | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## alignRules

```TypeScript
alignRules(alignRule: LocalizedAlignRuleOptions): T
```

Specifies the localized alignRules of relative container

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignRule | LocalizedAlignRuleOptions | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## backgroundColor

```TypeScript
backgroundColor(value: ResourceColor): T
```

Background color.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Indicates the background color of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## borderColor

```TypeScript
borderColor(value: ResourceColor): T
```

Color of the border.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Indicates the border color of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## borderRadius

```TypeScript
borderRadius(value: Dimension): T
```

Radius of the border.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | Indicates the border radius of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## borderRadius

```TypeScript
borderRadius(radius: Dimension | BorderRadiuses): T
```

Radius of the border.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | Dimension \| BorderRadiuses | Yes | Indicates the border radius of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## borderStyle

```TypeScript
borderStyle(value: BorderStyle): T
```

Style of the border.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | BorderStyle | Yes | Indicates the border style of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## borderWidth

```TypeScript
borderWidth(value: Dimension): T
```

Width of the border.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | Indicates the border width of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## chainMode

```TypeScript
chainMode(direction: Axis, style: ChainStyle): T
```

Specifies the direction and style of chain in relative container

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | Axis | Yes | Indicates direction of the chain |
| style | ChainStyle | Yes | Indicates style of the chain |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## constraintSize

```TypeScript
constraintSize(value: ConstraintSizeOptions): T
```

constraint Size: minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ConstraintSizeOptions | Yes | Indicates the constraint size of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## enabled

```TypeScript
enabled(respond: boolean): T
```

If the value is true, the component is available and can respond to operations such as clicking. If it is set to false, click operations are not responded.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| respond | boolean | Yes | Indicates whether the button is responded to. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fallbackLineSpacing

```TypeScript
fallbackLineSpacing(enabled: boolean): T
```

Whether to include the ascent and descent of fallback fonts to prevent line overlap.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable the feature. The default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attributes of the security component. |

## focusBox

```TypeScript
focusBox(style:FocusBoxStyle):T
```

Set the focusBox style.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | FocusBoxStyle | Yes | FocusBox style. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fontColor

```TypeScript
fontColor(value: ResourceColor): T
```

Font color of the inner text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Indicates the font color of the text in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fontFamily

```TypeScript
fontFamily(value: string | Resource): T
```

Font family of the inner text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| Resource | Yes | Indicates the font family of the text in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fontSize

```TypeScript
fontSize(value: Dimension): T
```

Font size of the inner text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | Indicates the font size of the text in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fontStyle

```TypeScript
fontStyle(value: FontStyle): T
```

Font style of the inner text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FontStyle | Yes | Indicates the font style of the text in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## fontWeight

```TypeScript
fontWeight(value: number | FontWeight | string | Resource): T
```

Font weight of the inner text.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| FontWeight \| string \| Resource | Yes | Indicates the font weight of the text in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## height

```TypeScript
height(value: Length): T
```

Sets the height of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Indicates the height of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## heightAdaptivePolicy

```TypeScript
heightAdaptivePolicy(policy: TextHeightAdaptivePolicy): T
```

Called when the height adaptive policy is set.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policy | TextHeightAdaptivePolicy | Yes | The height adaptive policy. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## iconColor

```TypeScript
iconColor(value: ResourceColor): T
```

Color of the icon.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ResourceColor | Yes | Indicates the icon color in the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## iconSize

```TypeScript
iconSize(value: Dimension): T
```

Icon size.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | Indicates the size of the icon. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## id

```TypeScript
id(id: string): T
```

Id. User can set an id to the component to identify it.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## layoutDirection

```TypeScript
layoutDirection(value: SecurityComponentLayoutDirection): T
```

Layout direction of the icon and text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SecurityComponentLayoutDirection | Yes | Indicates the layout direction of the icon and text. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## markAnchor

```TypeScript
markAnchor(value: Position): T
```

Anchor of the security component for positioning. The top start edge of the component is used as the reference point for offset.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Position | Yes | Indicates the anchor of the component when it is positioned. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## maxFontScale

```TypeScript
maxFontScale(scale: number | Resource): T
```

Sets the maximum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Maximum font scale factor to set. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attributes of the security component. |

## maxFontSize

```TypeScript
maxFontSize(maxSize: number | string | Resource): T
```

Called when the maximum font size of the font is set.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| maxSize | number \| string \| Resource | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## maxLines

```TypeScript
maxLines(line: number | Resource): T
```

Called when the maximum number of lines of text is set.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| line | number \| Resource | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## minFontScale

```TypeScript
minFontScale(scale: number | Resource): T
```

Sets the minimum font scale factor for text.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scale | number \| Resource | Yes | Minimum font scale factor to set. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attributes of the security component. |

## minFontSize

```TypeScript
minFontSize(minSize: number | string | Resource): T
```

Called when the minimum font size of the font is set.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| minSize | number \| string \| Resource | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## offset

```TypeScript
offset(value: Position | Edges | LocalizedEdges): T
```

Coordinate offset relative to the layout completion position. Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Position \| Edges \| LocalizedEdges | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

## padding

```TypeScript
padding(value: Padding | Dimension): T
```

Padding between the background border and icon/inner text.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Padding \| Dimension | Yes | Indicates the padding of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## position

```TypeScript
position(value: Position): T
```

Position of the security component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Position | Yes | Indicates the position of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## size

```TypeScript
size(value: SizeOptions): T
```

The size of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SizeOptions | Yes | Indicates the size of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## textIconSpace

```TypeScript
textIconSpace(value: Dimension): T
```

Space between the inner text and icon.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension | Yes | Indicates the space between the inner text and icon. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

## width

```TypeScript
width(value: Length): T
```

Sets the width of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Length | Yes | Indicates the width of the security component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the attribute of the security component. |

