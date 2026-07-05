# symbol_span

定义SymbolSpan组件实例。

## symbol_span

```TypeScript
symbol_span(value: Resource)
```

定义SymbolSpan组件构造函数。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**Widget capability:** From API version 12 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Resource | Yes | SymbolSpan组件的资源名，如 $r('sys.symbol.ohos_wifi')。 |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [SymbolSpanAttribute](arkts-symbolspanattribute-c.md) | 不支持[通用属性]{@link common}，支持以下属性： 不支持[通用事件]{@link common}。 |

### Interfaces

| Name | Description |
| --- | --- |
| [SymbolSpanInterface](arkts-symbolspaninterface-i.md) | 作为Text组件的子组件，用于显示图标小符号的组件。 > **说明：** > - 本模块接口仅可在Stage模型下使用。 > > - 该组件支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的全部属性。 > > - SymbolSpan拖拽不会置灰显示。 |

### Constants

| Name | Description |
| --- | --- |
| [SymbolSpan](arkts-symbol-span-con.md#SymbolSpan) | 作为Text组件的子组件，用于显示图标小符号的组件。 > **说明：** > - 本模块接口仅可在Stage模型下使用。 > > - 该组件支持继承父组件Text的属性，即如果子组件未设置属性且父组件设置属性，则继承父组件设置的全部属性。 > > - SymbolSpan拖拽不会置灰显示。 ###### 子组件 不支持子组件。 |
| [SymbolSpanInstance](arkts-symbol-span-con.md#SymbolSpanInstance) | 定义SymbolSpan组件实例。 |

