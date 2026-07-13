# ArcListInterface

The **ArcList** component is a circular layout container that displays a series of list items
in an arc shape. It is suitable for presenting homogeneous data, such as images and text,
in a continuous, multi-row format.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcListItemAttribute, ArcList, ArcListItem, ArcListAttribute } from '@kit.ArkUI';
```

## constructor

```TypeScript
(options?: ArkListOptions): ArcListAttribute
```

Creates an **ArcList** component instance with specified configuration options.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ArkListOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ArcListAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

