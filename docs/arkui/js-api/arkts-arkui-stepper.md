# Stepper

The **Stepper** component provides a step navigator, suitable for guiding users through a step-by-step task
completion process.

> **NOTE**

## Child Components

Only the child component [StepperItem]{@link stepper_item} is supported.

## Stepper

```TypeScript
Stepper(value?: { index?: number })
```

Creates a **Stepper** component.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** <!--SUBSTITUTE_API-->Swiper.SwiperAttribute#index<!--/SUBSTITUTE_API-->

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-StepperInterface-(value?: { index?: number }): StepperAttribute--><!--Device-StepperInterface-(value?: { index?: number }): StepperAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { index?: number } | No | Index of the **StepperItem** that is currently displayed.<br>Default value: **0**<br>Since API version 10, this parameter supports two-way binding through[$$](docroot://ui/state-management/arkts-two-way-sync.md). |

## Summary

