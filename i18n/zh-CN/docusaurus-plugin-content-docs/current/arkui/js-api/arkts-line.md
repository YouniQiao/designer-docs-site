# line

Defines Line Component instance.

## line

```TypeScript
new (options?: LineOptions): LineAttribute
```

Uses new to create the line. Anonymous Object Rectification.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | LineOptions | 否 |  |

```TypeScript
line(options?: LineOptions)
```

用于绘制直线的构造函数。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | LineOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [LineAttribute](arkts-lineattribute-c.md) | 除支持[通用属性]{@link common}外，还支持以下属性： |

### 接口

| 名称 | 描述 |
| --- | --- |
| [LineInterface](arkts-lineinterface-i.md) | 直线绘制组件。 > **说明：** > > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 |
| [LineOptions](arkts-lineoptions-i.md) | 用于描述Line组件绘制属性。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Line](arkts-line-con.md#Line) | 直线绘制组件。 > **说明：** > > 该组件从API version 20开始支持使用[AttributeUpdater]{@link AttributeUpdater}类的 > [updateConstructorParams](docroot://reference/apis-arkui/js-apis-arkui-AttributeUpdater.md#属性)接口更新构造参数。 ###### 子组件 无 |
| [LineInstance](arkts-line-con.md#LineInstance) | Defines Line Component instance. |

