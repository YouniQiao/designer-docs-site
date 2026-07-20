# UIPickerComponent

The **UIPickerComponent** container is used to implement user selection operations. It supports single selection from
a limited set of options and can be applied to various scenarios such as time selection, date selection, region
selection, and status selection. Its display effect is a three-dimensional wheel style, supporting customizable
options including text type, image type, and text-image combination type.

NOTE

- The height of the **UIPickerComponent** container options is fixed at 40 vp, and a maximum of seven options can
  be displayed. Due to the three-dimensional wheel display effect, options other than the selected one will be
  rotated at different angles, so the actual visible height will be less than 40 vp.

- It is recommended that the [height]{@link CommonMethod#height(value: Length)} of the **UIPickerComponent**
  container be set to 200 vp. When the set height is greater than or equal to this recommended value, all 7 options
  can be fully displayed. Otherwise, the display area will be cropped from the top and bottom edges towards the
  center, and the number of displayed options will be reduced accordingly, always keeping the selected item
  vertically centered.

- When the **UIPickerComponent** container's [width]{@link CommonMethod#width(value: Length)} is not set, the
  maximum width of the visible child components in the current view is taken as the container width. You are advised
  to set the width of the **UIPickerComponent** container or set the same width for each child component to avoid
  dynamic changes in container width during sliding, which affects the display effect.

- The alignment mode of child components in the **UIPickerComponent** container is fixed to center alignment, and
  cannot be changed via the [align]{@link CommonMethod#align(value: Alignment)} attribute.

- Currently, the **UIPickerComponent** container does not support wearables.

- This component supports [WithTheme]{@link with_theme} since API version 26.0.0.

Child Components

- Multiple child components are supported.
- Supported child component types: [Text]{@link text}, [Image]{@link image}, [Row]{@link row}, and
  [SymbolGlyph]{@link symbolglyph}
- Supported rendering control types: [if/else](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) and
  [ForEach](docroot://ui/rendering-control/arkts-rendering-control-foreach.md)

NOTE

- When the Row **container** is used as a child component, the **Row** container can contain only the **Text**,
  **Image**, and **SymbolGlyph** basic components. Including other container components may affect the display effect
  or cause sliding functionality abnormalities.

- When counting the number of child components, the **Row** container and its child components are counted as one
  child component.

- When the child component is **Text**, **Image**, or **SymbolGlyph**, the
  [height]{@link CommonMethod#height(value: Length)} attribute does not take effect and is fixed at 40 vp.

- When the child component is a **Row** container, its [height]{@link CommonMethod#height(value: Length)} attribute
  does not take effect and is fixed at 40 vp. The [height]{@link CommonMethod#height(value: Length)} attribute of the
  child components in the **Row** container takes effect. The final display effect is determined by the **Row**
  container.

- The text-image combination option requires that the **Row** container contain the **Text** and **Image**
  components. When using the text-image combination option, you are advised to set the image's
  [height]{@link CommonMethod#height(value: Length)} to 40 vp or below to avoid cropping when images are large.

- The **fontSize** attribute of all text components (including the **Text** components in the **Row** container) in
  the **UIPickerComponent** container is 20 fp by default. User settings will override the default value, and
  abnormal values will be processed according to the result of handling the text component's
  [fontSize]{@link TextAttribute#fontSize}. You are advised to set the **fontSize** attribute to a unified value or
  not to set it to ensure a good display effect.


## UIPickerComponent

```TypeScript
UIPickerComponent(options?: UIPickerComponentOptions)
```

Creates a **UIPickerComponent** container, whose selected item is determined by the **selectedIndex** attribute in the **options** parameter.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-UIPickerComponentInterface-(options?: UIPickerComponentOptions): UIPickerComponentAttribute--><!--Device-UIPickerComponentInterface-(options?: UIPickerComponentOptions): UIPickerComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | UIPickerComponentOptions | No | Parameters of the **UIPickerComponent** container. If the parameteris left empty, the component is a placeholder but the content is empty. |

## Summary

- [PickerIndicatorStyle](arkts-arkui-uipickercomponent-pickerindicatorstyle-i.md)
- [UIPickerComponentOptions](arkts-arkui-uipickercomponent-uipickercomponentoptions-i.md)
- [OnUIPickerComponentCallback](arkts-arkui-uipickercomponent-onuipickercomponentcallback-t.md)
- [PickerIndicatorType](arkts-arkui-uipickercomponent-pickerindicatortype-e.md)
