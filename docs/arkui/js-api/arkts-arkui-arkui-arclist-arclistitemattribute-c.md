# ArcListItemAttribute

In addition to the [universal attributes](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the following attributes are supported.

**Inheritance/Implementation:** ArcListItemAttribute extends [CommonMethod<ArcListItemAttribute>](CommonMethod<ArcListItemAttribute>)

**Since:** 18

<!--Device-unnamed-export declare class ArcListItemAttribute extends CommonMethod<ArcListItemAttribute>--><!--Device-unnamed-export declare class ArcListItemAttribute extends CommonMethod<ArcListItemAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcListItemAttribute, ArcList, ArcListItem, ArcListAttribute } from '@kit.ArkUI';
```

## autoScale

```TypeScript
autoScale(enable: Optional<boolean>): ArcListItemAttribute
```

Sets whether to enable auto-scaling for the **ArcListItem** component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcListItemAttribute-autoScale(enable: Optional<boolean>): ArcListItemAttribute--><!--Device-ArcListItemAttribute-autoScale(enable: Optional<boolean>): ArcListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | [Optional](../arkts-components/arkts-arkui-optional-t.md)<boolean> | Yes | Whether to enable auto-scaling.<br>**true**: Enable auto-scaling.<br>**false**: Disable auto-scaling.<br>Default value: **true**. |

**Return value:**

| Type | Description |
| --- | --- |
| [ArcListItemAttribute](arkts-arkui-arkui-arclist-arclistitemattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

## swipeAction

```TypeScript
swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute
```

Sets the swipe action item displayed when the **ArcListItem** component is swiped out from the screen edge.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcListItemAttribute-swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute--><!--Device-ArcListItemAttribute-swipeAction(options: Optional<SwipeActionOptions>): ArcListItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](../arkts-components/arkts-arkui-optional-t.md)<SwipeActionOptions> | Yes | Swipe action item displayed when the **ArcListItem** component is swiped out from the screen edge. |

**Return value:**

| Type | Description |
| --- | --- |
| [ArcListItemAttribute](arkts-arkui-arkui-arclist-arclistitemattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

