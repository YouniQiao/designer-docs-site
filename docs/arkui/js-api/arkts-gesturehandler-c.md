# GestureHandler

手势处理器的基础类型。

**Inheritance:** GestureHandlerimplements: GestureInterface<T>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## allowedTypes

```TypeScript
allowedTypes(types: Array<SourceTool>): T
```

设置手势处理器所支持的事件输入源。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;SourceTool> | Yes | 手势处理器所支持的事件输入源。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前组件。 |

## tag

```TypeScript
tag(tag: string): T
```

设置手势处理器的标志。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tag | string | Yes | 手势处理器的标志。 |

**Return value:**

| Type | Description |
| --- | --- |
| T | 返回当前组件。 |

