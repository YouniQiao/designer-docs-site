# stepper

Defines Stepper Component instance.

## stepper

```TypeScript
stepper(value?: { index?: number })
```

Called when the stepper component is used.

**Since:** 8

**Deprecated since:** 22

**Substitute:** Swiper.SwiperAttribute#index

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { index?: number } | No | Index of the StepperItem that is currently displayed. Default value: 0  Since API version 10, this parameter supports two-way binding through  [$$](docroot://ui/state-management/arkts-two-way-sync.md). |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [StepperAttribute](arkts-stepperattribute-c.md) | 无 |

### Interfaces

| Name | Description |
| --- | --- |
| [StepperInterface](arkts-stepperinterface-i.md) | 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。 > **说明：** > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考 > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。 |

### Constants

| Name | Description |
| --- | --- |
| [Stepper](arkts-stepper-con.md#Stepper) | 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。 > **说明：** > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考 > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。 ###### 子组件 仅能包含子组件[StepperItem]{@link stepper_item}。 |
| [StepperInstance](arkts-stepper-con.md#StepperInstance) | Defines Stepper Component instance. |

