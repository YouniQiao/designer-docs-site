# circle

Defines Circle Component instance.

## circle

```TypeScript
new (value?: CircleOptions): CircleAttribute
```

use new function to set the value.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | CircleOptions | 否 |  |

```TypeScript
circle(value?: CircleOptions)
```

用于绘制圆形的构造函数。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | CircleOptions | 否 | 设置圆形尺寸 异常值undefined和null按照无效值处理，本次设置不生效。 |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [CircleAttribute](arkts-circleattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CircleInterface](arkts-circleinterface-i.md) | 用于绘制圆形的组件。 > **说明： |
| [CircleOptions](arkts-circleoptions-i.md) | 用于描述Circle组件绘制属性。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Circle](arkts-circle-con.md#Circle) | 用于绘制圆形的组件。 > **说明：** ###### 子组件 无 |
| [CircleInstance](arkts-circle-con.md#CircleInstance) | Defines Circle Component instance. |

