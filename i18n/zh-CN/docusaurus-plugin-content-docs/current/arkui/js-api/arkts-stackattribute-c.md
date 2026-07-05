# StackAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**继承实现关系：** StackAttribute继承自：CommonMethod<StackAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## alignContent

```TypeScript
alignContent(value: Alignment)
```

设置子组件在容器内的对齐方式。该属性与[align]CommonMethod#align(value: Alignment)同时设置时，后设置的属性生效。该属性与接口的构造入参同时设置时，生效属性上的设置效果。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 9开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Alignment | 是 | 所有子组件在容器内的对齐方式。 默认值：Alignment.Center 非法值：按默认值处理。 |

## pointLight

```TypeScript
pointLight(value: PointLightStyle)
```

Defines the PointLight

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PointLightStyle | 是 | The point light style. |

## syncLoad

```TypeScript
syncLoad(enable: boolean)
```

设置是否同步加载Stack区域内所有子组件。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| enable | boolean | 是 | 是否同步加载Stack区域内所有子组件。 true表示同步加载；false表示异步加载。 默认值：true 说明： 设置为false  时，在首次显示场景，若当前帧布局耗时超过50ms，会将Stack区域内尚未布局的子组件延后到下一帧进行布局。 |

