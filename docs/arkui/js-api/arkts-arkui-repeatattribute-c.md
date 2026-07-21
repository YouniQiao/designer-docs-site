# RepeatAttribute

In addition to the [drag-and-drop sorting](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) attribute, the following attributes are supported.

**Inheritance/Implementation:** RepeatAttribute extends [DynamicNode<RepeatAttribute<T>>](DynamicNode<RepeatAttribute<T>>)

**Since:** 12

<!--Device-unnamed-declare class RepeatAttribute<T> extends DynamicNode<RepeatAttribute<T>>--><!--Device-unnamed-declare class RepeatAttribute<T> extends DynamicNode<RepeatAttribute<T>>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="each"></a>
## each

```TypeScript
each(itemGenerator: (repeatItem: RepeatItem<T>) => void): RepeatAttribute<T>
```

Component generator. When the return value of [.templateId()](arkts-arkui-repeatattribute-c.md#templateid-1) does not match any [.template()](arkts-arkui-repeatattribute-c.md#template-1) type (that is, the current item does not match any defined template style), the data item is processed using **.each()**.

> **NOTE**  
>  
> - The **each** property is mandatory. If it is omitted, runtime errors will occur.  
>  
> - The **itemGenerator** parameter is of the **RepeatItem** type, which combines **item** and **index**. Do not  
> destructure **RepeatItem**.  
>  
> - This API cannot be called within [attributeModifier](../arkts-components/arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RepeatAttribute-each(itemGenerator: (repeatItem: RepeatItem<T>) => void): RepeatAttribute<T>--><!--Device-RepeatAttribute-each(itemGenerator: (repeatItem: RepeatItem<T>) => void): RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemGenerator | (repeatItem: RepeatItem&lt;T&gt;) =&gt; void | Yes | Component generator. |

**Return value:**

| Type | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeatattribute-c.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="key"></a>
## key

```TypeScript
key(keyGenerator: (item: T, index: number) => string): RepeatAttribute<T>
```

Key generator.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](../arkts-components/arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-RepeatAttribute-key(keyGenerator: (item: T, index: number) => string): RepeatAttribute<T>--><!--Device-RepeatAttribute-key(keyGenerator: (item: T, index: number) => string): RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyGenerator | (item: T, index: number) =&gt; string | Yes | Key generator.<br>**item**: data item in the **arr** array. It is optional.<br>**index**: index of a data item in the **arr** array. It is optional. |

**Return value:**

| Type | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeatattribute-c.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="template"></a>
## template

```TypeScript
template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>
```

Renders the corresponding template child component based on the template type.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](../arkts-components/arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RepeatAttribute-template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>--><!--Device-RepeatAttribute-template(type: string, itemBuilder: RepeatItemBuilder<T>, templateOptions?: TemplateOptions): RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Current template type. |
| itemBuilder | [RepeatItemBuilder](arkts-arkui-repeatitembuilder-t.md)&lt;T&gt; | Yes | Component generator. |
| templateOptions | [TemplateOptions](arkts-arkui-templateoptions-i.md) | No | Current template configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeatattribute-c.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="templateid"></a>
## templateId

```TypeScript
templateId(typedFunc: TemplateTypedFunc<T>): RepeatAttribute<T>
```

Assigns a template type for this data item.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](../arkts-components/arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RepeatAttribute-templateId(typedFunc: TemplateTypedFunc<T>): RepeatAttribute<T>--><!--Device-RepeatAttribute-templateId(typedFunc: TemplateTypedFunc<T>): RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typedFunc | [TemplateTypedFunc](arkts-arkui-templatetypedfunc-t.md)&lt;T&gt; | Yes | Function that generates a template type for each data item. |

**Return value:**

| Type | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeatattribute-c.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="virtualscroll"></a>
## virtualScroll

```TypeScript
virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>
```

Enables virtual scrolling for **Repeat**.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](../arkts-components/arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RepeatAttribute-virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>--><!--Device-RepeatAttribute-virtualScroll(virtualScrollOptions?: VirtualScrollOptions): RepeatAttribute<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| virtualScrollOptions | [VirtualScrollOptions](arkts-arkui-virtualscrolloptions-i.md) | No | Virtual scrolling configuration. |

**Return value:**

| Type | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeatattribute-c.md)&lt;T&gt; | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

