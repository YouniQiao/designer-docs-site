# StepperItem properties/events

Defines StepperItem Component instance.

**Inheritance/Implementation:** StepperItemAttribute extends [CommonMethod<StepperItemAttribute>](CommonMethod<StepperItemAttribute>)

**Since:** 8

**Deprecated since:** 22

**Substitutes:** SwiperAttribute

<!--Device-unnamed-declare class StepperItemAttribute extends CommonMethod<StepperItemAttribute>--><!--Device-unnamed-declare class StepperItemAttribute extends CommonMethod<StepperItemAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="nextlabel"></a>
## nextLabel

```TypeScript
nextLabel(value: string)
```

Sets the text label of the button on the right. The default value is **Start** for the last page and **Next** for the other pages.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** showNext

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-StepperItemAttribute-nextLabel(value: string): StepperItemAttribute--><!--Device-StepperItemAttribute-nextLabel(value: string): StepperItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Text label of the button on the right. When the string is too long, it is scaled down,wrapped in two lines, and then clipped. |

<a id="prevlabel"></a>
## prevLabel

```TypeScript
prevLabel(value: string)
```

Sets the text label of the button on the left, which is not displayed on the first page. When the **Stepper** contains more than one page, the default value for all pages except the first page is **Back**.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** showPrevious

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-StepperItemAttribute-prevLabel(value: string): StepperItemAttribute--><!--Device-StepperItemAttribute-prevLabel(value: string): StepperItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Text label of the button on the left. When the string is too long, it is scaled down,wrapped in two lines, and then clipped. |

<a id="status"></a>
## status

```TypeScript
status(value?: ItemState)
```

Sets the display status of **nextLabel** in the stepper.

> **NOTE**

**Since:** 8

**Deprecated since:** 22

**Substitutes:** indicatorInteractive

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-StepperItemAttribute-status(value?: ItemState): StepperItemAttribute--><!--Device-StepperItemAttribute-status(value?: ItemState): StepperItemAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ItemState](../arkts-apis/arkts-arkui-arkui-advanced-toolbar-itemstate-e.md) | No | Display status of **nextLabel** in the stepper.<br>Default value: **ItemState.Normal** |

