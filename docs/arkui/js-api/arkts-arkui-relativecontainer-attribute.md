# RelativeContainer properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

The [universal events](arkts-arkui-common-commonmethod-c.md) are supported.

**Inheritance/Implementation:** RelativeContainerAttribute extends [CommonMethod<RelativeContainerAttribute>](CommonMethod<RelativeContainerAttribute>)

**Since:** 9

<!--Device-unnamed-declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute>--><!--Device-unnamed-declare class RelativeContainerAttribute extends CommonMethod<RelativeContainerAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## barrier

```TypeScript
barrier(value: Array<BarrierStyle>)
```

Sets the [barriers](../../../../ui/arkts-layout-development-relative-layout.md#setting-barriers-for-multiple-components) in the **RelativeContainer** component. The value is an array, each element of which is a barrier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RelativeContainerAttribute-barrier(value: Array<BarrierStyle>): RelativeContainerAttribute--><!--Device-RelativeContainerAttribute-barrier(value: Array<BarrierStyle>): RelativeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<BarrierStyle> | Yes | Barriers in the **RelativeContainer** component. |

## barrier

```TypeScript
barrier(barrierStyle: Array<LocalizedBarrierStyle>)
```

Sets barriers in the **RelativeContainer** component. Each array element defines a barrier. Barriers can be defined in mirrored layout mode.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RelativeContainerAttribute-barrier(barrierStyle: Array<LocalizedBarrierStyle>): RelativeContainerAttribute--><!--Device-RelativeContainerAttribute-barrier(barrierStyle: Array<LocalizedBarrierStyle>): RelativeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| barrierStyle | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<LocalizedBarrierStyle> | Yes | Barriers in the **RelativeContainer** component. |

## guideLine

```TypeScript
guideLine(value: Array<GuideLineStyle>)
```

Sets the [guidelines](../../../../ui/arkts-layout-development-relative-layout.md#positioning-child-components-using-guidelines)in the **RelativeContainer** component. The value is an array, each element of which is a guideline.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-RelativeContainerAttribute-guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute--><!--Device-RelativeContainerAttribute-guideLine(value: Array<GuideLineStyle>): RelativeContainerAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<GuideLineStyle> | Yes | Guidelines in the **RelativeContainer** component. |

