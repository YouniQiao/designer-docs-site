# @ohos.distributedHardware.hardwareManager

The **hardwareManager** module provides the capability of controlling distributed hardware, including pausing, resuming, and stopping the distributed hardware service on the controlled device. > **NOTE** > The APIs provided by this module are system APIs.

**Since:** 11

**System capability:** SystemCapability.DistributedHardware.DistributedHardwareFWK

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hardwareManager } from '@ohos.distributedHardware.hardwareManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [pauseDistributedHardware](arkts-distributedservice-pausedistributedhardware-f-sys.md#pausedistributedhardware-1) | Pauses the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| [resumeDistributedHardware](arkts-distributedservice-resumedistributedhardware-f-sys.md#resumedistributedhardware-1) | Resumes the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| [stopDistributedHardware](arkts-distributedservice-stopdistributedhardware-f-sys.md#stopdistributedhardware-1) | Stops the distributed hardware service on the controlled device. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HardwareDescriptor](arkts-distributedservice-hardwaredescriptor-i-sys.md) | Represents the distributed hardware information. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [DistributedHardwareErrorCode](arkts-distributedservice-distributedhardwareerrorcode-e-sys.md) | Enumerates the error codes used for the distributed hardware. |
| [DistributedHardwareType](arkts-distributedservice-distributedhardwaretype-e-sys.md) | Enumerates the types of the distributed hardware. |
<!--DelEnd-->

