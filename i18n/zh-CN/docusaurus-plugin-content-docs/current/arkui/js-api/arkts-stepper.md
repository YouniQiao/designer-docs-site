# stepper

Defines Stepper Component instance.

## stepper

```TypeScript
stepper(value?: { index?: number })
```

Called when the stepper component is used.

**起始版本：** 8

**废弃版本：** 22

**替代接口：** Swiper.SwiperAttribute#index

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | { index?: number } | 否 | Index of the StepperItem that is currently displayed. Default value: 0  Since API version 10, this parameter supports two-way binding through  [$$](docroot://ui/state-management/arkts-two-way-sync.md). |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [StepperAttribute](arkts-stepperattribute-c.md) | 无 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [StepperInterface](arkts-stepperinterface-i.md) | 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。 > **说明：** > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考 > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [Stepper](arkts-stepper-con.md#Stepper) | 步骤导航器组件，适用于引导用户按照步骤完成任务的导航场景。 > **说明：** > - 从API version 8开始支持，从API version 22开始废弃，建议使用[Swiper]{@link swiper}替代。详细示例请参考 > [示例2](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-stepper.md#示例2使用swiper替代stepper)。 ###### 子组件 仅能包含子组件[StepperItem]{@link stepper_item}。 |
| [StepperInstance](arkts-stepper-con.md#StepperInstance) | Defines Stepper Component instance. |

