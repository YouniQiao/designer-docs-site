# @ohos.distributedHardware.hardwareManager

The **hardwareManager** module provides the capability of controlling distributed hardware, including pausing, resuming, and stopping the distributed hardware service on the controlled device. > **NOTE** > The APIs provided by this module are system APIs.

**起始版本：** 11

**系统能力：** SystemCapability.DistributedHardware.DistributedHardwareFWK

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { hardwareManager } from '@kit.DistributedServiceKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[pauseDistributedHardware](arkts-hardwaremanager-pausedistributedhardware-f-sys.md#pauseDistributedHardware-1) | Pauses the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| <!--DelRow-->[resumeDistributedHardware](arkts-hardwaremanager-resumedistributedhardware-f-sys.md#resumeDistributedHardware-1) | Resumes the distributed hardware service on the controlled device. This API uses a promise to return the result. |
| <!--DelRow-->[stopDistributedHardware](arkts-hardwaremanager-stopdistributedhardware-f-sys.md#stopDistributedHardware-1) | Stops the distributed hardware service on the controlled device. This API uses a promise to return the result. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[HardwareDescriptor](arkts-hardwaremanager-hardwaredescriptor-i-sys.md) | Represents the distributed hardware information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[DistributedHardwareErrorCode](arkts-hardwaremanager-distributedhardwareerrorcode-e-sys.md) | Enumerates the error codes used for the distributed hardware. |
| <!--DelRow-->[DistributedHardwareType](arkts-hardwaremanager-distributedhardwaretype-e-sys.md) | Enumerates the types of the distributed hardware. |

