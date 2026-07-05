# FocusAxisEvent

焦点轴事件的对象说明，继承于[BaseEvent](arkts-baseevent-i.md#BaseEvent)。

**继承实现关系：** FocusAxisEvent继承自：BaseEvent。

**起始版本：** 15

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## axisMap

```TypeScript
axisMap: Map<AxisModel, number>
```

焦点轴事件的轴值表。

**类型：** Map<AxisModel, number>

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: Callback<void>
```

阻塞[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)传递。

**类型：** Callback<void>

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

