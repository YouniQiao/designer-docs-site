# ArcSwiperInterface

Provide an interface for ArcSwiper.

**Since:** 18

<!--Device-unnamed-interface ArcSwiperInterface--><!--Device-unnamed-interface ArcSwiperInterface-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute, ArcSwiper, ArcDirection, ArcSwiperController, ArcDotIndicator } from '@kit.ArkUI';
```

## constructor

```TypeScript
(controller?: ArcSwiperController): ArcSwiperAttribute
```

Creates an **ArcSwiper** component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-ArcSwiperInterface-(controller?: ArcSwiperController): ArcSwiperAttribute--><!--Device-ArcSwiperInterface-(controller?: ArcSwiperController): ArcSwiperAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | [ArcSwiperController](arkts-arkui-arkui-arcswiper-arcswipercontroller-c.md) | No | Controller bound to the component to control the page turning. |

**Return value:**

| Type | Description |
| --- | --- |
| [ArcSwiperAttribute](arkts-arkui-arkui-arcswiper-arcswiperattribute-c.md) | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

