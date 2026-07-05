# DepthFusion

Depth fusion class. It inherits from [DepthFusionQuery]camera.DepthFusionQuery.

**Inheritance:** DepthFusionextends: DepthFusionQuery.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## enableDepthFusion

```TypeScript
enableDepthFusion(enabled: boolean): void
```

Enables depth fusion.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether to enable depth fusion. true to enable, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function enableDepthFusion(DepthFusion: camera.DepthFusion): void {
  try {
    let enabled: boolean = true;
    DepthFusion.enableDepthFusion(enabled);
    console.info('Promise returned to indicate that enableDepthFusion method execution success.');
  } catch (error) {
    let err = error as BusinessError;
    console.error(`Failed to depth fusion enableDepthFusion, error code: ${err.code}.`);
  };
}

```

## isDepthFusionEnabled

```TypeScript
isDepthFusionEnabled(): boolean
```

Checks whether depth fusion is enabled.

**Since:** 14

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for whether depth fusion is enabled. true if enabled, false otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. |
| 7400103 | Session not config. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

function isDepthFusionEnabled(DepthFusion: camera.DepthFusion): boolean {
  let isEnable: boolean = false;
  try {
    isEnable = DepthFusion.isDepthFusionEnabled();
    console.info('Promise returned to indicate that isDepthFusionEnabled method execution success.');
  } catch (error) {
    let err = error as BusinessError;
    console.error(`Failed to depth fusion isDepthFusionEnabled, error code: ${err.code}.`);
  };
  return isEnable;
}

```

