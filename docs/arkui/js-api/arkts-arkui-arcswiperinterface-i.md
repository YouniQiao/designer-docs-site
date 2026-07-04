# ArcSwiperInterface

Provide an interface for ArcSwiper.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcSwiperAttribute, ArcSwiper, ArcDirection, ArcSwiperController, ArcDotIndicator } from '@ohos.arkui.ArcSwiper';
```

## constructor

```TypeScript
(controller?: ArcSwiperController): ArcSwiperAttribute
```

Creates an **ArcSwiper** component.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| controller | ArcSwiperController | No | Controller bound to the component to control the page turning. |

**Return value:**

| Type | Description |
| --- | --- |
| ArcSwiperAttribute | @syscap SystemCapability.ArkUI.ArkUI.Circle@crossplatform@atomicservice |

