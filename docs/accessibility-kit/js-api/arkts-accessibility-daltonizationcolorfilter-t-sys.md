# DaltonizationColorFilter (System API)

```TypeScript
type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly'
```

Enumerates the daltonization filters.
The configuration of **DaltonizationColorFilter** takes effect only when
[daltonizationState](arkts-accessibility-config-con-sys.md#daltonizationstate) is set to **true**; the normal type is used when
[daltonizationState](arkts-accessibility-config-con-sys.md#daltonizationstate) is set to **false**.

**Since:** 9

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

| Type | Description |
| --- | --- |
| 'Normal' | Filter for normal users. |
| 'Protanomaly' | Filter for protanomaly. |
| 'Deuteranomaly' | Filter for deuteranomaly. |
| 'Tritanomaly' | Filter for tritanomaly. |

