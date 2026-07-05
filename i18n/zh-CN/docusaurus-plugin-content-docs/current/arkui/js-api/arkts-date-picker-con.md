# Constants

## DatePicker

```TypeScript
declare const DatePicker: DatePickerInterface
```

滑动选择日期的组件。 **说明：** - 该组件不建议开发者在动效过程中修改属性数据。 - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 子组件 该组件为基础组件，不建议包含子组件。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## DatePickerInstance

```TypeScript
declare const DatePickerInstance: DatePickerAttribute
```

定义日期滑动选择组件实例.

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

