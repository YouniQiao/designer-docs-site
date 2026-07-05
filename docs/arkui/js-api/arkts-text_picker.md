# text_picker

定义文本选择器组件实例。

## text_picker

```TypeScript
text_picker(options?: TextPickerOptions)
```

根据指定的数据列表创建文本选择器。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TextPickerOptions | No | 配置文本选择器的参数。参数缺省时组件无法显示。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [TextPickerAttribute](arkts-textpickerattribute-c.md) | 除支持[通用属性]{@link ./common}外，还支持以下属性： 除支持[通用事件]{@link ./common}外，还支持以下事件： |
| [TextPickerDialog](arkts-textpickerdialog-c.md) | A text picker dialog box is a dialog box that allows users to select text from the given range. |

### Interfaces

| Name | Description |
| --- | --- |
| [DividerOptions](arkts-divideroptions-i.md) | 分割线的信息。 |
| [PickerBackgroundStyle](arkts-pickerbackgroundstyle-i.md) | 选择器选中项的背景样式，包括选中项的背景颜色和边框圆角半径。 |
| [TextCascadePickerRangeContent](arkts-textcascadepickerrangecontent-i.md) | 多列联动数据选择器的数据选项内容。 |
| [TextPickerDialogOptions](arkts-textpickerdialogoptions-i.md) | 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。 |
| [TextPickerDialogOptionsExt](arkts-textpickerdialogoptionsext-i.md) | 文本选择器弹窗的参数继承自[TextPickerOptions]{@link TextPickerOptions}。 |
| [TextPickerInterface](arkts-textpickerinterface-i.md) | 滑动选择文本、图片或图文混排内容的组件，用户可以按需创建单列数据选择器、多列非联动数据选择器和多列联动数据选择器。 **说明：** - 该组件不建议开发者在动效过程中修改属性数据。 - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置， 未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 - 多列非联动数据选择器和多列联动数据选择器在下文中统称为多列数据选择器。 |
| [TextPickerOptions](arkts-textpickeroptions-i.md) | 文本选择器的参数说明。 |
| [TextPickerRangeContent](arkts-textpickerrangecontent-i.md) | 单列数据选择器的数据选项内容。 |
| [TextPickerResult](arkts-textpickerresult-i.md) | 文本选择器结果。 |
| [TextPickerTextStyle](arkts-textpickertextstyle-i.md) | 文本样式选项，继承自[PickerTextStyle]{@link PickerTextStyle}。 |

### Types

| Name | Description |
| --- | --- |
| [OnTextPickerChangeCallback](arkts-ontextpickerchangecallback-t.md) | 定义触发onChange事件的回调类型。 |
| [TextPickerEnterSelectedAreaCallback](arkts-textpickerenterselectedareacallback-t.md) | 定义触发 onEnterSelectedArea 事件的回调类型。 |
| [TextPickerScrollStopCallback](arkts-textpickerscrollstopcallback-t.md) | 定义触发onScrollStop事件的回调类型。 **说明：** - 当选择器内容为文本或图文混排时，value值为选中项中的文本值； - 当选择器内容为图片时，value值为空。 |

### Constants

| Name | Description |
| --- | --- |
| [TextPicker](arkts-text-picker-con.md#TextPicker) | 滑动选择文本、图片或图文混排内容的组件，用户可以按需创建单列数据选择器、多列非联动数据选择器和多列联动数据选择器。 > **说明：** > - 该组件不建议开发者在动效过程中修改属性数据。 > > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置 > 值$r('sys.float.ohos_id_picker_show_count_landscape')。 > > - 多列非联动数据选择器和多列联动数据选择器在下文中统称为多列数据选择器。 子组件 该组件为基础组件，不建议包含子组件。 |
| [TextPickerInstance](arkts-text-picker-con.md#TextPickerInstance) | 定义文本选择器组件实例。 |

