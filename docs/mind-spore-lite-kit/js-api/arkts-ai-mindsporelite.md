# @ohos.ai.mindSporeLite

**Since:** 10

**System capability:** SystemCapability.AI.MindSporeLite

## Modules to Import

```TypeScript
import { mindSporeLite } from '@kit.MindSporeLiteKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAllNNRTDeviceDescriptions](arkts-mindsporelite-getallnnrtdevicedescriptions-f.md#getallnnrtdevicedescriptions-1) | Obtain the all device descriptions in NNRT. |
| [loadModelFromBuffer](arkts-mindsporelite-loadmodelfrombuffer-f.md#loadmodelfrombuffer-1) | Create a Model instance from buffer |
| [loadModelFromBuffer](arkts-mindsporelite-loadmodelfrombuffer-f.md#loadmodelfrombuffer-2) | Create a Model instance from buffer |
| [loadModelFromBuffer](arkts-mindsporelite-loadmodelfrombuffer-f.md#loadmodelfrombuffer-3) | Create a Model instance from buffer |
| [loadModelFromFd](arkts-mindsporelite-loadmodelfromfd-f.md#loadmodelfromfd-1) | Creates a Model instance file description |
| [loadModelFromFd](arkts-mindsporelite-loadmodelfromfd-f.md#loadmodelfromfd-2) | Create a Model instance from file description |
| [loadModelFromFd](arkts-mindsporelite-loadmodelfromfd-f.md#loadmodelfromfd-3) | Create a Model instance from file description |
| [loadModelFromFile](arkts-mindsporelite-loadmodelfromfile-f.md#loadmodelfromfile-1) | Create a Model instance from file path |
| [loadModelFromFile](arkts-mindsporelite-loadmodelfromfile-f.md#loadmodelfromfile-2) | Create a Model instance from file path. |
| [loadModelFromFile](arkts-mindsporelite-loadmodelfromfile-f.md#loadmodelfromfile-3) | Create a Model instance from file path. |
| [loadTrainModelFromBuffer](arkts-mindsporelite-loadtrainmodelfrombuffer-f.md#loadtrainmodelfrombuffer-1) | Load train model from buffer |
| [loadTrainModelFromFd](arkts-mindsporelite-loadtrainmodelfromfd-f.md#loadtrainmodelfromfd-1) | Load train model from file description |
| [loadTrainModelFromFile](arkts-mindsporelite-loadtrainmodelfromfile-f.md#loadtrainmodelfromfile-1) | Load train model from file |

### Interfaces

| Name | Description |
| --- | --- |
| [Context](arkts-mindsporelite-context-i.md) | Provides the device configurations |
| [CpuDevice](arkts-mindsporelite-cpudevice-i.md) | Provides the CPU device info |
| [Extension](arkts-mindsporelite-extension-i.md) | Provides the extension information of nnrt device |
| [MSTensor](arkts-mindsporelite-mstensor-i.md) | Provides MSTensor definition |
| [Model](arkts-mindsporelite-model-i.md) | Provides manages model function. Including get inputs, predict ,resize. |
| [NNRTDevice](arkts-mindsporelite-nnrtdevice-i.md) | Provides the NNRT device info |
| [NNRTDeviceDescription](arkts-mindsporelite-nnrtdevicedescription-i.md) | Provides the nnrt device description |
| [TrainCfg](arkts-mindsporelite-traincfg-i.md) | Provides the train configuration |

### Enums

| Name | Description |
| --- | --- |
| [DataType](arkts-mindsporelite-datatype-e.md) | Enum for provides MSTensor data type |
| [Format](arkts-mindsporelite-format-e.md) | Enum for provides MSTensor format |
| [NNRTDeviceType](arkts-mindsporelite-nnrtdevicetype-e.md) | Enum for nnrt device type |
| [OptimizationLevel](arkts-mindsporelite-optimizationlevel-e.md) | Enum for optimization level |
| [PerformanceMode](arkts-mindsporelite-performancemode-e.md) | Enum for performance mode |
| [Priority](arkts-mindsporelite-priority-e.md) | Enum for scheduling priority |
| [QuantizationType](arkts-mindsporelite-quantizationtype-e.md) | Enum for quantization type |
| [ThreadAffinityMode](arkts-mindsporelite-threadaffinitymode-e.md) | Enum for provides CPU thread affinity mode |

