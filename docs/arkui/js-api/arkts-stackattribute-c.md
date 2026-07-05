# StackAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**Inheritance:** StackAttributeextends: CommonMethod<StackAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignContent

```TypeScript
alignContent(value: Alignment)
```

设置子组件在容器内的对齐方式。该属性与[align]CommonMethod#align(value: Alignment)同时设置时，后设置的属性生效。该属性与接口的构造入参同时设置时，生效属性上的设置效果。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Alignment | Yes | 所有子组件在容器内的对齐方式。 默认值：Alignment.Center 非法值：按默认值处理。 |

## pointLight

```TypeScript
pointLight(value: PointLightStyle)
```

Defines the PointLight

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PointLightStyle | Yes | The point light style. |

## syncLoad

```TypeScript
syncLoad(enable: boolean)
```

设置是否同步加载Stack区域内所有子组件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否同步加载Stack区域内所有子组件。 true表示同步加载；false表示异步加载。 默认值：true 说明： 设置为false  时，在首次显示场景，若当前帧布局耗时超过50ms，会将Stack区域内尚未布局的子组件延后到下一帧进行布局。 |

