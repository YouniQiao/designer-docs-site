# RelativeContainerAttribute

除支持[通用属性]common外，还支持如下属性： 支持[通用事件]common。

**继承实现关系：** RelativeContainerAttribute继承自：CommonMethod<RelativeContainerAttribute>。

**起始版本：** 9

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## barrier

```TypeScript
barrier(value: Array<BarrierStyle>)
```

设置RelativeContainer容器内的[屏障](docroot://ui/arkts-layout-development-relative-layout.md#多个组件的屏障)，Array中每个项目即为一条 barrier。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;BarrierStyle> | 是 | RelativeContainer容器内的屏障。 |

## barrier

```TypeScript
barrier(barrierStyle: Array<LocalizedBarrierStyle>)
```

设置RelativeContainer容器内的屏障，Array中每个项目即为一条barrier，支持定义镜像模式的屏障线。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| barrierStyle | Array&lt;LocalizedBarrierStyle> | 是 | RelativeContainer容器内的屏障。 |

## guideLine

```TypeScript
guideLine(value: Array<GuideLineStyle>)
```

设置RelativeContainer容器内的[辅助线](docroot://ui/arkts-layout-development-relative-layout.md#使用辅助线辅助定位子组件)，Array中每个项目即为一条 guideLine。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Array&lt;GuideLineStyle> | 是 | RelativeContainer容器内的辅助线。 |

