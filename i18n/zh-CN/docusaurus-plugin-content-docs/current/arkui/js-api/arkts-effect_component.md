# effect_component

Defines Effect Component instance.

## effect_component

```TypeScript
effect_component()
```

创建特效绘制合并组件，用于对子组件背景模糊特效的绘制合并。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

```TypeScript
effect_component(options?: EffectComponentOptions)
```

创建特效绘制合并组件，无参数或者参数为EffectLayer.None时用于对子组件背景模糊特效的绘制合并。有明确参数时表示当前渲染图层置于特殊图层。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | EffectComponentOptions | 否 |  |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EffectComponentAttribute](arkts-effectcomponentattribute-c.md) | 支持通用属性，目前仅支持对backgroundBlurStyle属性做绘制合并优化。 不支持通用事件。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EffectComponentInterface](arkts-effectcomponentinterface-i.md) | 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。 > **说明：** > > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 本模块为系统接口。 > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。 > > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。 |
| <!--DelRow-->[EffectComponentOptions](arkts-effectcomponentoptions-i.md) | 设置当前EffectComponent构造参数，包含EffectComponent的渲染层级。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EffectLayer](arkts-effectlayer-e.md) | EffectComponent的渲染层级。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[EffectComponent](arkts-effect-component-con-sys.md#EffectComponent) | 特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。 > **说明：** > > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 本模块为系统接口。 > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。 > > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。 ###### 子组件 可以包含子组件。 |
| <!--DelRow-->[EffectComponentInstance](arkts-effect-component-con-sys.md#EffectComponentInstance) | Defines Effect Component instance. |

