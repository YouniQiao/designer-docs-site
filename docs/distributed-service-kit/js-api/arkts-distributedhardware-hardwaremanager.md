# @ohos.distributedHardware.hardwareManager

The **hardwareManager** module provides the capability of controlling distributed hardware, including pausing, resuming, and stopping the distributed hardware service on the controlled device. > **NOTE** > The APIs provided by this module are system APIs.

**Since:** 11

**System capability:** SystemCapability.DistributedHardware.DistributedHardwareFWK

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { hardwareManager } from '@kit.DistributedServiceKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[pauseDistributedHardware](arkts-hardwaremanager-pausedistributedhardware-f-sys.md#pauseDistributedHardware-1) | Pauses the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| <!--DelRow-->[resumeDistributedHardware](arkts-hardwaremanager-resumedistributedhardware-f-sys.md#resumeDistributedHardware-1) | Resumes the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| <!--DelRow-->[stopDistributedHardware](arkts-hardwaremanager-stopdistributedhardware-f-sys.md#stopDistributedHardware-1) | Stops the distributed hardware service on the controlled device. This API uses a promise to return the result. |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[HardwareDescriptor](arkts-hardwaremanager-hardwaredescriptor-i-sys.md) | Represents the distributed hardware information. |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[DistributedHardwareErrorCode](arkts-hardwaremanager-distributedhardwareerrorcode-e-sys.md) | Enumerates the error codes used for the distributed hardware. |
| <!--DelRow-->[DistributedHardwareType](arkts-hardwaremanager-distributedhardwaretype-e-sys.md) | Enumerates the types of the distributed hardware. |

