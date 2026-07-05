# Constants

## TimePicker

```TypeScript
declare const TimePicker: TimePickerInterface
```

滑动选择时间的组件。 **说明：** - 该组件不建议开发者在动效过程中修改属性数据。 - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置值 $r('sys.float.ohos_id_picker_show_count_landscape')。 子组件 该组件为基础组件，不建议包含子组件。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TimePickerInstance

```TypeScript
declare const TimePickerInstance: TimePickerAttribute
```

定义时间选择器组件实例。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

