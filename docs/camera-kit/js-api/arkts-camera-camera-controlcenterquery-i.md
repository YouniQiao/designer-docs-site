# ControlCenterQuery

ControlCenterQuery is used to check whether the camera controller is supported.

**Since:** 20

<!--Device-camera-interface ControlCenterQuery--><!--Device-camera-interface ControlCenterQuery-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="getsupportedeffecttypes"></a>
## getSupportedEffectTypes

```TypeScript
getSupportedEffectTypes(): Array<ControlCenterEffectType>
```

Obtains the effect types supported by the camera controller.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ControlCenterQuery-getSupportedEffectTypes(): Array<ControlCenterEffectType>--><!--Device-ControlCenterQuery-getSupportedEffectTypes(): Array<ControlCenterEffectType>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;ControlCenterEffectType&gt; | Array of effect types supported. |

<a id="iscontrolcentersupported"></a>
## isControlCenterSupported

```TypeScript
isControlCenterSupported(): boolean
```

Checks whether the camera controller is supported.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ControlCenterQuery-isControlCenterSupported(): boolean--><!--Device-ControlCenterQuery-isControlCenterSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Check result for the support of the camera controller. **true** if supported, **false** otherwise. |

