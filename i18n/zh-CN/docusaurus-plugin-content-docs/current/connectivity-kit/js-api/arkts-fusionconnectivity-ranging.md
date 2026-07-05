# @ohos.FusionConnectivity.ranging

Provides APIs for Fusion Connectivity ranging.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

## 导入模块

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getRangingCapability](arkts-ranging-getrangingcapability-f.md#getRangingCapability-1) | Queries whether the current device supports ranging capability. |
| [isRangingSupported](arkts-ranging-israngingsupported-f.md#isRangingSupported-1) | Checks whether the current device supports the ranging feature. |
| [offRangingStateChange](arkts-ranging-offrangingstatechange-f.md#offRangingStateChange-1) | Unsubscribe from ranging state change events. |
| [onRangingStateChange](arkts-ranging-onrangingstatechange-f.md#onRangingStateChange-1) | Registers a callback to receive ranging state change notifications. Notifies state changes for both active ranging and passive ranging operations. |
| [startPassiveRanging](arkts-ranging-startpassiveranging-f.md#startPassiveRanging-1) | Starts passive ranging mode. Upon successful startup, returns a handle identifier for the passive ranging session and begins broadcasting ranging packets. The returned handle can be used to stop the passive ranging broadcast via stopPassiveRanging. |
| [startRanging](arkts-ranging-startranging-f.md#startRanging-1) | Initiates ranging with a specified device. If the link to the target device is already established, ranging starts directly. If not connected, this interface will: 1. Attempt to establish connection and perform pairing/encryption. 2. Query service to verify the device supports ranging. Initiate ranging upon confirmation. Ranging state updates are notified via onRangingStateChange callback. |
| [stopPassiveRanging](arkts-ranging-stoppassiveranging-f.md#stopPassiveRanging-1) | Stops passive ranging mode. Stops the passive ranging broadcast and cleans up associated resources based on the specified handle and ranging capability type. |
| [stopRanging](arkts-ranging-stopranging-f.md#stopRanging-1) | Stops ongoing ranging operations. If no target device is specified, stops ranging for all devices associated with the callback. If a target device is specified, only stops ranging for that specific device. This method also releases all occupied resources. For proper resource management, stopRanging must be called after startRanging to avoid resource leaks. State changes are notified via the onRangingStateChange callback. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [RangingCapabilitySupported](arkts-ranging-rangingcapabilitysupported-i.md) | Describes the contents of the ranging support types. |
| [RangingMeasurement](arkts-ranging-rangingmeasurement-i.md) | Describes the measurement result. |
| [RangingParams](arkts-ranging-rangingparams-i.md) | Parameters for ranging operation. |
| [RangingResult](arkts-ranging-rangingresult-i.md) | Describes the contents of the ranging results. |
| [RangingStateChangeInfo](arkts-ranging-rangingstatechangeinfo-i.md) | Describes the ranging state change information. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [RangingConfidence](arkts-ranging-rangingconfidence-e.md) | The enum of ranging measurement confidence. |
| [RangingState](arkts-ranging-rangingstate-e.md) | The enum of ranging state. |
| [RangingStoppedCause](arkts-ranging-rangingstoppedcause-e.md) | The enum of ranging stopped causes. |
| [RangingTypes](arkts-ranging-rangingtypes-e.md) | The enumeration of ranging capability types. |

