# Flex

The **Flex** component is a container that uses the flexible box model for layout. It provides an efficient mechanism
for arranging and aligning child elements, as well as distributing available space among them.
For details, see [Flex Layout](docroot://ui/arkts-layout-development-flex-layout.md).
> **NOTE**
>
> - This component is supported since API version 7. Updates will be marked with a superscript to indicate their
> earliest API version.
>
> - The **Flex** component adapts the layout of flex items during rendering. This may affect the performance.
> Therefore, you are advised to use [Column]{@link Column} or [Row]{@link Row} instead under scenarios where
> consistently high performance is required. For best practices, see
> [Using Layout Components Properly](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-improve-layout-performance#section12745188175420)
>
> - If the main axis length of the **Flex** component is unspecified, it follows the size of the parent container by
> default. If the **Flex** component contains child components for which
> [position]{@link CommonMethod#position} is set, the
> **Flex** component does not follow the size of the parent container. If the main axis length of the **Column** or
> **Row** component is unspecified, it follows the size of the child nodes by default.
>
> - If **Flex**, **Column**, or **Row** containers have no child components and no explicit width or height settings,
> their default width or height is **-1**.
>
> - You can set the main axis length of a **Flex** component to **auto** to make it adapt to the layout of its child
> components. This way, the **Flex** component's length is subject to the **constraintSize** attribute and the
> maximum and minimum length constraints passed from the parent container, with **constraintSize** taking precedence.
>
> **Child Components**
>
> This component can contain child components.


## Flex

```TypeScript
Flex(value?: FlexOptions)
```

Creates a **Flex** component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-FlexInterface-(value?: FlexOptions): FlexAttribute--><!--Device-FlexInterface-(value?: FlexOptions): FlexAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FlexOptions | No | Parameters of the child components in the **Flex** component. |

## Summary

- [FlexOptions](arkts-arkui-flex-flexoptions-i.md)
- [FlexSpaceOptions](arkts-arkui-flex-flexspaceoptions-i.md)
