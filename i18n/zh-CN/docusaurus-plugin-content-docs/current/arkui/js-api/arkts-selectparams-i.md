# SelectParams

Contents, events, and styles of the select area.

**起始版本：** 18

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { SearchParams,AtomicServiceSearch,SearchButtonParams,OperationParams,SelectParams,InputFilterParams,MenuAlignParams } from '@kit.ArkUI';
```

## menuBackgroundBlurStyle

```TypeScript
menuBackgroundBlurStyle?: BlurStyle
```

Set menu background blur Style.

**类型：** BlurStyle

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## optionFontColor

```TypeScript
optionFontColor?: ResourceColor
```

Sets the text color for select items.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## menuItemContentModifier

```TypeScript
menuItemContentModifier?: ContentModifier<MenuItemConfiguration>
```

Register a ContentModifier for each menu item.

**类型：** ContentModifier<MenuItemConfiguration>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectValue

```TypeScript
selectValue?: ResourceStr
```

The default text value.

**类型：** ResourceStr

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## optionHeight

```TypeScript
optionHeight?: Dimension
```

Set the height of each option.

**类型：** Dimension

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## space

```TypeScript
space?: Length
```

Set the space for text and icon in select.

**类型：** Length

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## onSelect

```TypeScript
onSelect?: OnSelectCallback
```

Callback when the select is selected.

**类型：** OnSelectCallback

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## optionBgColor

```TypeScript
optionBgColor?: ResourceColor
```

Sets the background color of the select item.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## menuAlign

```TypeScript
menuAlign?: MenuAlignParams
```

Set the alignment between select and menu.

**类型：** MenuAlignParams

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectedOptionFontColor

```TypeScript
selectedOptionFontColor?: ResourceColor
```

Sets the text color of the selected item in the select.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## divider

```TypeScript
divider?: Optional<DividerOptions> | null
```

Sets the divider of select.

**类型：** Optional<DividerOptions> | null

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## options

```TypeScript
options?: Array<SelectOption>
```

SubOption array of the select.

**类型：** Array<SelectOption>

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## menuBackgroundColor

```TypeScript
menuBackgroundColor?: ResourceColor
```

Set the menu's background color.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectedOptionBgColor

```TypeScript
selectedOptionBgColor?: ResourceColor
```

Sets the background color of the selected items in the select.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## optionFont

```TypeScript
optionFont?: Font
```

Sets the text style for select items.

**类型：** Font

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## optionWidth

```TypeScript
optionWidth?: Dimension | OptionWidthMode
```

Set the width of each option and set whether the option width fit the trigger.

**类型：** Dimension | OptionWidthMode

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selectedOptionFont

```TypeScript
selectedOptionFont?: Font
```

Sets the text style of the selected items in the select.

**类型：** Font

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## fontColor

```TypeScript
fontColor?: ResourceColor
```

Sets the text color of the select button itself.

**类型：** ResourceColor

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected?: number
```

The default selected index.

**类型：** number

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## arrowPosition

```TypeScript
arrowPosition?: ArrowPosition
```

Set the layout direction for text and arrow in select.

**类型：** ArrowPosition

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## font

```TypeScript
font?: Font
```

Sets the text properties of the select button itself.

**类型：** Font

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

