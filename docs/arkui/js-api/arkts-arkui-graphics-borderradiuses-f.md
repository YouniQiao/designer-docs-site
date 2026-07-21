# borderRadiuses

<a id="borderradiuses"></a>
## borderRadiuses

```TypeScript
export function borderRadiuses(all: number): BorderRadiuses
```

Generates a **borderRadiuses** object with the specified radius for all border corners.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export function borderRadiuses(all: number): BorderRadiuses--><!--Device-unnamed-export function borderRadiuses(all: number): BorderRadiuses-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| all | number | Yes | Radius of border corners.<br>Unit: vp.<br>Value range: [0, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| [BorderRadiuses](arkts-arkui-borderradiuses-t.md) | **borderRadiuses** object whose border corners all have the specified radius. |

