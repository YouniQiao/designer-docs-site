# init

## Modules to Import

```TypeScript
import { curves } from '@kit.ArkUI';
```

<a id="init"></a>
## init

```TypeScript
function init(curve?: Curve): string
```

Implements initialization for the interpolation curve, which is used to create an interpolation curve based on the input parameter.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [initCurve](arkts-arkui-curves-initcurve-f.md#initcurve-1)

<!--Device-curves-function init(curve?: Curve): string--><!--Device-curves-function init(curve?: Curve): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| curve | [Curve](arkts-arkui-curve-e.md) | No | Curve type.<br>Default value: **Curve.Linear** |

**Return value:**

| Type | Description |
| --- | --- |
| string | Interpolation curve object. |

