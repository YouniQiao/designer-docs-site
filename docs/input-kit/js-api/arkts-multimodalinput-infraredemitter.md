# @ohos.multimodalInput.infraredEmitter

The **infraredEmitter** module generates IR signals of the specified frequency and size, and queries the frequency range supported by the device.

**Since:** 12

<!--Device-unnamed-declare namespace infraredEmitter--><!--Device-unnamed-declare namespace infraredEmitter-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

## Modules to Import

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [hasIrEmitter](arkts-input-infraredemitter-hasiremitter-f.md#hasiremitter) | Checks whether the device has an infrared transmitter. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getInfraredFrequencies](arkts-input-infraredemitter-getinfraredfrequencies-f-sys.md#getinfraredfrequencies) | Queries the frequency range of IR signals supported by the device. |
| [transmitInfrared](arkts-input-infraredemitter-transmitinfrared-f-sys.md#transmitinfrared) | Generates IR signals at the specified frequency and level. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [InfraredFrequency](arkts-input-infraredemitter-infraredfrequency-i-sys.md) | Defines the frequency range of IR signals. |
<!--DelEnd-->

