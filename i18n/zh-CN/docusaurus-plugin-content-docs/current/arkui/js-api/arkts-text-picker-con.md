# Constants

## TextPicker

```TypeScript
declare const TextPicker: TextPickerInterface
```

滑动选择文本、图片或图文混排内容的组件，用户可以按需创建单列数据选择器、多列非联动数据选择器和多列联动数据选择器。 > **说明：** > - 该组件不建议开发者在动效过程中修改属性数据。 > > - 最大显示行数在横、竖屏模式下存在差异。竖屏时默认为5行，横屏时依赖系统配置，未配置时默认显示为3行。可通过如下参数查看具体配置 > 值$r('sys.float.ohos_id_picker_show_count_landscape')。 > > - 多列非联动数据选择器和多列联动数据选择器在下文中统称为多列数据选择器。 子组件 该组件为基础组件，不建议包含子组件。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## TextPickerInstance

```TypeScript
declare const TextPickerInstance: TextPickerAttribute
```

定义文本选择器组件实例。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

