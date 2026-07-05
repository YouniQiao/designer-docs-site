# DaltonizationColorFilter

```TypeScript
type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly'
```

Enumerates the daltonization filters. The configuration of **DaltonizationColorFilter** takes effect only when [daltonizationState](arkts-config-con-sys.md#daltonizationState) is set to **true**; the normal type is used when [daltonizationState](arkts-config-con-sys.md#daltonizationState) is set to **false**.

**起始版本：** 9

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

| 类型 | 说明 |
| --- | --- |
| 'Normal' | Filter for normal users. |
| 'Protanomaly' | Filter for protanomaly. |
| 'Deuteranomaly' | Filter for deuteranomaly. |
| 'Tritanomaly' | Filter for tritanomaly. |

