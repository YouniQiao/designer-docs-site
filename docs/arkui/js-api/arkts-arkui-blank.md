# Blank

Create Blank.


## Blank

```TypeScript
Blank(min?: number | string)
```

Creates a **Blank** component.

Since API version 10:

- When the **Blank** component is used within a [Row]{@link Row}, [Column]{@link Column}, or [Flex]{@link Flex}
container, it will automatically stretch or shrink along the main axis if it does not have a main axis size
specified. If the **Blank** component has a main axis size specified or if the container is set to adapt to the
size of its child nodes, the component will not automatically stretch or shrink.
- Relationship between **size** and **min** of the **Blank** component on the main axis: max(min, size).
- If the **Blank** component has a cross axis size specified, it will not fill up the parent container on the cross
axis. If it does not have a cross axis size specified, it will fill up the parent container on the cross axis,
following the **ItemAlign.Stretch** mode, the default setting of **alignSelf**.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| min | number \| string | No | Minimum size of the **Blank** component in the container along the main axis.<br>Default value: **0**<br>If the type is number, the default unit is vp. If the type is string, thepixel unit can be explicitly specified, for example, '**10px**'. If the unit is not specified,the default unit vp is used, in which case **'10'** is equivalent to **10vp**.<br>Invalid values are treated asthe default value.<br>**NOTE**<br>This parameter cannot be set in percentage. If the value is negative, thedefault value is used. If the minimum size is larger than the available space of the container, it is used asthe component size, and the component extends beyond the container. |

## Summary

