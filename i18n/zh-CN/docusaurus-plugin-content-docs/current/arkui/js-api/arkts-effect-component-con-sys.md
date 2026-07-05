# Constants

## EffectComponent

```TypeScript
declare const EffectComponent: EffectComponentInterface
```

特效合并容器组件，用于子节点特效绘制的合并，实现特效的绘制性能优化。 > **说明：** > > - 该组件从API Version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。 > > - 本模块为系统接口。 > - 目前该组件仅支持子组件背景模糊效果的绘制合并优化。 > > - 在对子组件的背景模糊特效进行绘制合并时，需要将子组件的backgroundBlurStyle(BlurStyle)属性替换成useEffect(true)。 ###### 子组件 可以包含子组件。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## EffectComponentInstance

```TypeScript
declare const EffectComponentInstance: EffectComponentAttribute
```

Defines Effect Component instance.

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

