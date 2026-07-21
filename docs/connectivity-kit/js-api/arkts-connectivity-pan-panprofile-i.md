# PanProfile

Manager pan host profile.

**Inheritance/Implementation:** PanProfile extends [BaseProfile](arkts-connectivity-pan-baseprofile-t.md)

**Since:** 10

<!--Device-pan-interface PanProfile extends BaseProfile--><!--Device-pan-interface PanProfile extends BaseProfile-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { pan } from '@kit.ConnectivityKit';
```

<a id="ispansupported"></a>
## isPanSupported

```TypeScript
isPanSupported(): boolean
```

Determine whether the local device supports PAN.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-PanProfile-isPanSupported(): boolean--><!--Device-PanProfile-isPanSupported(): boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the local device supports PAN; returns false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 2900099 | Operation failed. |

