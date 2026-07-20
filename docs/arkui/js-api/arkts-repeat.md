# repeat (Defines Repeat component.)

## Summary

### Classes

| Name | Description |
| --- | --- |
| [RepeatAttribute](arkts-arkui-repeat-repeatattribute-c.md) | In addition to the [drag-and-drop sorting](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) attribute, the following attributes are supported. |

### Interfaces

| Name | Description |
| --- | --- |
| [RepeatItem](arkts-arkui-repeat-repeatitem-i.md) | Construct a new type for each item. |
| [TemplateOptions](arkts-arkui-repeat-templateoptions-i.md) | When **cachedCount** is set to the maximum number of nodes in the display area of the container component for the current template, **Repeat** achieves maximum reuse efficiency. If there are no nodes of the current template in the container component's display area, the cache list is not released, which increases application memory usage. You are advised to set **cachedCount** to the number of nodes within the container component's display area and adjust the value according to the actual situation. Yet, setting **cachedCount** to less than 2 is not recommended, as this may lead to the frequent node creation during rapid scrolling and result in performance degradation. |
| [VirtualScrollOptions](arkts-arkui-repeat-virtualscrolloptions-i.md) | Configures the expected total number of data items to be loaded in lazy loading mode, the reuse capability, and the precise data lazy loading capability. |

### Enums

| Name | Description |
| --- | --- |
| [RepeatMemOptStrategy](arkts-arkui-repeat-repeatmemoptstrategy-e.md) | Defines a type for memory optimization strategy. |

### Types

| Name | Description |
| --- | --- |
| [RepeatArray](arkts-arkui-repeatarray-t.md) | Defines a union type for **Repeat** data source parameters. |
| [RepeatInterface](arkts-arkui-repeatinterface-t.md) | Indicates the type of Repeat. |
| [RepeatItemBuilder](arkts-arkui-repeatitembuilder-t.md) | Defines builder function to render one template type. |
| [TemplateTypedFunc](arkts-arkui-templatetypedfunc-t.md) | Function that returns typed string to render one template. |

### Constants

| Name | Description |
| --- | --- |
| [Repeat](arkts-arkui-repeat-con.md#repeat) | Defines Repeat Component, and Add More Array Type. |

