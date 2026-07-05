# RepeatAttribute

除支持[拖拽排序]common属性外，还支持以下属性。

**Inheritance:** RepeatAttributeextends: DynamicNode<RepeatAttribute<T>>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## each

```TypeScript
each(itemGenerator: (repeatItem: RepeatItem<T>) => void)
```

组件生成函数。当所有[`.template()`](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#template)的type和 [`.templateId()`](docroot://reference/apis-arkui/arkui-ts/ts-rendering-control-repeat.md#templateid)返回值不匹配（即当前item不 适用任何template定义的样式）时，将使用`.each()`处理数据项。 > **说明** > > - `each`属性必须有，否则运行时会报错。 > > - `itemGenerator`的参数为`RepeatItem`，该参数将`item`和`index`结合到了一起，请勿将`RepeatItem`参数拆开使用。 > > - 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemGenerator | (repeatItem: RepeatItem&lt;T>) => void | Yes | 组件生成函数。 |

## key

```TypeScript
key(keyGenerator: (item: T, index: number) => string)
```

键值生成函数。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyGenerator | (item: T, index: number) => string | Yes | 键值生成函数。 item：`arr`数组中的数据项，可选。 index：`arr`数组中的数据项索引，可选。 |

## template

```TypeScript
template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions)
```

由template type渲染对应的template子组件。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 当前模板类型。 |
| itemBuilder | RepeatItemBuilder&lt;T> | Yes | 组件生成函数。 |
| templateOptions | TemplateOptions | No | 当前模板配置项。 默认值为undefined。 |

## templateId

```TypeScript
templateId(typedFunc: TemplateTypedFunc<T>)
```

为当前数据项分配template type。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typedFunc | TemplateTypedFunc&lt;T> | Yes | 生成当前数据项对应的template type。 |

## virtualScroll

```TypeScript
virtualScroll(virtualScrollOptions?: VirtualScrollOptions)
```

`Repeat`开启虚拟滚动。 > **说明：** > > 该接口不支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| virtualScrollOptions | VirtualScrollOptions | No | 虚拟滚动配置项。 默认值为undefined。 |

