# @ohos.multimodalInput.infraredEmitter

红外管理模块提供产生特定频率和大小的红外信号，以及查询设备支持的频率范围等功能。 > **说明**：

**Since:** 12

**System capability:** SystemCapability.MultimodalInput.Input.InfraredEmitter

## Modules to Import

```TypeScript
import { infraredEmitter } from '@kit.InputKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getInfraredFrequencies](arkts-infraredemitter-getinfraredfrequencies-f-sys.md#getInfraredFrequencies-1) | 查询设备支持的红外信号的频率范围。 |
| [hasIrEmitter](arkts-infraredemitter-hasiremitter-f.md#hasIrEmitter-1) | 查询设备是否配备红外发射器。使用Promise异步回调。 |
| <!--DelRow-->[transmitInfrared](arkts-infraredemitter-transmitinfrared-f-sys.md#transmitInfrared-1) | 产生特定频率和特定电平大小的红外信号。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[InfraredFrequency](arkts-infraredemitter-infraredfrequency-i-sys.md) | 红外信号的频率范围。 |

