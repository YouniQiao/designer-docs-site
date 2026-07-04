# @ohos.multimodalInput.infraredEmitter

The **infraredEmitter** module generates IR signals of the specified frequency and size, and queries the frequency range supported by the device.

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

## Modules to Import

```TypeScript
import { infraredEmitter } from '@ohos.multimodalInput.infraredEmitter';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [hasIrEmitter](arkts-input-hasiremitter-f.md#hasiremitter-1) | Checks whether the device has an infrared transmitter. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getInfraredFrequencies](arkts-input-getinfraredfrequencies-f-sys.md#getinfraredfrequencies-1) | Queries the frequency range of IR signals supported by the device. |
| [transmitInfrared](arkts-input-transmitinfrared-f-sys.md#transmitinfrared-1) | Generates IR signals at the specified frequency and level. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [InfraredFrequency](arkts-input-infraredfrequency-i-sys.md) | Defines the frequency range of IR signals. |
<!--DelEnd-->

