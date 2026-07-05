# StepperAttribute

无

**Inheritance:** StepperAttributeextends: CommonMethod<StepperAttribute>.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper#SwiperAttribute

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onChange

```TypeScript
onChange(callback: (prevIndex: number, index: number) => void)
```

Callback when the change label is clicked.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#onChange

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (prevIndex: number, index: number) => void | Yes | Callback triggered when the page is switched. prevIndex: Index of the step page  before the switching. Value range:  [0, +∞). index: Index of the step page after the switching, that is, index of the previous or next page.  Value range: [0, +∞). |

## onFinish

```TypeScript
onFinish(callback: () => void)
```

Callback when the finish label is clicked.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#onChange

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | Invoked when the nextLabel of the last StepperItem in the Stepper is  clicked and the ItemState attribute is set to Normal. |

## onNext

```TypeScript
onNext(callback: (index: number, pendingIndex: number) => void)
```

Callback when the next label is clicked.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#onChange

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number, pendingIndex: number) => void | Yes | Callback triggered when the page is switched. index: Index of the current step  page. pendingIndex: Index of the next step page. |

## onPrevious

```TypeScript
onPrevious(callback: (index: number, pendingIndex: number) => void)
```

Callback when the previous label is clicked.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#onChange

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (index: number, pendingIndex: number) => void | Yes | Callback triggered when the page is switched. index: Index of the current step  page. pendingIndex: Index of the next step page. |

## onSkip

```TypeScript
onSkip(callback: () => void)
```

Callback when the skip label is clicked.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#onChange

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | Invoked when the current StepperItem is ItemState.Skip and the nextLabel  is clicked. |

