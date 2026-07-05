# checkboxgroup

Defines CheckboxGroup Component instance.

## checkboxgroup

```TypeScript
checkboxgroup(options?: CheckboxGroupOptions)
```

创建多选框群组，用于控制群组内Checkbox的全选或取消全选状态，具有相同group值的Checkbox和CheckboxGroup属于同一群组。 在结合带缓存功能的组件使用时（如[List]{@link list}），未被创建的Checkbox选中状态需要应用手动控制。详细示例请参考 [示例4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup.md#示例4设置全选)。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | CheckboxGroupOptions | No | 配置多选框群组参数。 未设置时，按照CheckboxGroupOptions中各参数的默认值配置。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [CheckboxGroupAttribute](arkts-checkboxgroupattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [CheckBoxGroupConfiguration](arkts-checkboxgroupconfiguration-i.md) | 开发者必须自定义此类以实现ContentModifier接口，使用方法见[contentModifier]{@link CheckboxGroupAttribute#contentModifier}。 |
| [CheckboxGroupInterface](arkts-checkboxgroupinterface-i.md) | 多选框群组，用于控制多选框全选或者不全选状态。 > **说明： |
| [CheckboxGroupOptions](arkts-checkboxgroupoptions-i.md) | 多选框群组的信息。 |
| [CheckboxGroupResult](arkts-checkboxgroupresult-i.md) | 多选框群组的名称和状态。 |

### Enums

| Name | Description |
| --- | --- |
| [SelectStatus](arkts-selectstatus-e.md) | 多选框群组的选中状态。 |

### Types

| Name | Description |
| --- | --- |
| [OnCheckboxGroupChangeCallback](arkts-oncheckboxgroupchangecallback-t.md) | 多选框群组的信息。 |

### Constants

| Name | Description |
| --- | --- |
| [CheckboxGroup](arkts-checkboxgroup-con.md#CheckboxGroup) | 多选框群组，用于控制多选框全选或者不全选状态。 > **说明：** ###### 子组件 无 |
| [CheckboxGroupInstance](arkts-checkboxgroup-con.md#CheckboxGroupInstance) | Defines CheckboxGroup Component instance. |

