# checkboxgroup

Defines CheckboxGroup Component instance.

## checkboxgroup

```TypeScript
checkboxgroup(options?: CheckboxGroupOptions)
```

创建多选框群组，用于控制群组内Checkbox的全选或取消全选状态，具有相同group值的Checkbox和CheckboxGroup属于同一群组。 在结合带缓存功能的组件使用时（如[List]{@link list}），未被创建的Checkbox选中状态需要应用手动控制。详细示例请参考 [示例4](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-checkboxgroup.md#示例4设置全选)。

**起始版本：** 8

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | CheckboxGroupOptions | 否 | 配置多选框群组参数。 未设置时，按照CheckboxGroupOptions中各参数的默认值配置。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CheckboxGroupAttribute](arkts-checkboxgroupattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： 除支持[通用事件]{@link common}外，还支持以下事件： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CheckBoxGroupConfiguration](arkts-checkboxgroupconfiguration-i.md) | 开发者必须自定义此类以实现ContentModifier接口，使用方法见[contentModifier]{@link CheckboxGroupAttribute#contentModifier}。 |
| [CheckboxGroupInterface](arkts-checkboxgroupinterface-i.md) | 多选框群组，用于控制多选框全选或者不全选状态。 > **说明： |
| [CheckboxGroupOptions](arkts-checkboxgroupoptions-i.md) | 多选框群组的信息。 |
| [CheckboxGroupResult](arkts-checkboxgroupresult-i.md) | 多选框群组的名称和状态。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SelectStatus](arkts-selectstatus-e.md) | 多选框群组的选中状态。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnCheckboxGroupChangeCallback](arkts-oncheckboxgroupchangecallback-t.md) | 多选框群组的信息。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [CheckboxGroup](arkts-checkboxgroup-con.md#CheckboxGroup) | 多选框群组，用于控制多选框全选或者不全选状态。 > **说明：** ###### 子组件 无 |
| [CheckboxGroupInstance](arkts-checkboxgroup-con.md#CheckboxGroupInstance) | Defines CheckboxGroup Component instance. |

