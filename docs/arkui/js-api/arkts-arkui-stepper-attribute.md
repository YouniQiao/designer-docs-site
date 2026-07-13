# Stepper properties/events

Defines the stepper attribute functions

**Inheritance/Implementation:** StepperAttribute extends [CommonMethod<StepperAttribute>](CommonMethod<StepperAttribute>)

**Since:** 8

**Deprecated since:** 22

**Substitutes:** SwiperAttribute

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange(callback: (prevIndex: number, index: number) => void)
```

Triggered when the step navigation switches by clicking [prevLabel](StepperItemAttribute#prevLabel) of the
**StepperItem** component; or when clicking [nextLabel](StepperItemAttribute#nextLabel) of the current
**StepperItem** component, provided that the current page is not the last **StepperItem** in the stepper and the
[ItemState](../arkts-apis/arkts-arkui-itemstate-e.md) attribute is **Normal**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** onChange

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (prevIndex: number, index: number) =&gt; void | Yes | Callback triggered when the page is switched.<br/>prevIndex: Index of the step pagebefore the switching.<br>Value range:[0, +∞).<br/>index: Index of the step page after the switching, that is, index of the previous or next page.<br>Value range: [0, +∞). |

## onFinish

```TypeScript
onFinish(callback: () => void)
```

Triggered when [nextLabel](StepperItemAttribute#nextLabel) of the last [StepperItem](arkts-arkui-stepperitem.md) in
the stepper is clicked and the [ItemState](../arkts-apis/arkts-arkui-itemstate-e.md) attribute is **Normal**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** onChange

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | Invoked when the **nextLabel** of the last **StepperItem** in the **Stepper** isclicked and the **ItemState** attribute is set to **Normal**. |

## onNext

```TypeScript
onNext(callback: (index: number, pendingIndex: number) => void)
```

Triggered when switching to the next step by clicking [nextLabel](StepperItemAttribute#nextLabel) of a
**StepperItem**, provided that the current page is not the last **StepperItem** in the stepper and the
[ItemState](../arkts-apis/arkts-arkui-itemstate-e.md) attribute is **Normal**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** onChange

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number, pendingIndex: number) =&gt; void | Yes | Callback triggered when the page is switched.<br/>index: Index of the current steppage.<br/>pendingIndex: Index of the next step page. |

## onPrevious

```TypeScript
onPrevious(callback: (index: number, pendingIndex: number) => void)
```

Triggered when switching to the previous step by clicking [prevLabel](StepperItemAttribute#prevLabel) of a
**StepperItem**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** onChange

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number, pendingIndex: number) =&gt; void | Yes | Callback triggered when the page is switched.<br/>index: Index of the current steppage.<br/>pendingIndex: Index of the next step page. |

## onSkip

```TypeScript
onSkip(callback: () => void)
```

Triggered when [nextLabel](StepperItemAttribute#nextLabel) is clicked and the
[StepperItem](arkts-arkui-stepperitem.md) status is **ItemState.Skip**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** onChange

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () =&gt; void | Yes | Invoked when the current **StepperItem** is **ItemState.Skip** and the **nextLabel**is clicked. |

