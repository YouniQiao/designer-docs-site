# @ohos.FusionConnectivity.ranging

Provides APIs for Fusion Connectivity ranging.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.FusionConnectivity.Core

## Modules to Import

```TypeScript
import { ranging } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRangingCapability](arkts-connectivity-getrangingcapability-f.md#getrangingcapability-1) | Queries whether the current device supports ranging capability. |
| [isRangingSupported](arkts-connectivity-israngingsupported-f.md#israngingsupported-1) | Checks whether the current device supports the ranging feature. |
| [offRangingStateChange](arkts-connectivity-offrangingstatechange-f.md#offrangingstatechange-1) | Unsubscribe from ranging state change events. |
| [onRangingStateChange](arkts-connectivity-onrangingstatechange-f.md#onrangingstatechange-1) | Registers a callback to receive ranging state change notifications.Notifies state changes for both active ranging and passive ranging operations. |
| [startPassiveRanging](arkts-connectivity-startpassiveranging-f.md#startpassiveranging-1) | Starts passive ranging mode.Upon successful startup, returns a handle identifier for the passive ranging sessionand begins broadcasting ranging packets.The returned handle can be used to stop the passive ranging broadcast via stopPassiveRanging. |
| [startRanging](arkts-connectivity-startranging-f.md#startranging-1) | Initiates ranging with a specified device.If the link to the target device is already established, ranging starts directly.If not connected, this interface will: 1. Attempt to establish connection and perform pairing/encryption. 2. Query service to verify the device supports ranging. Initiate ranging upon confirmation.Ranging state updates are notified via onRangingStateChange callback. |
| [stopPassiveRanging](arkts-connectivity-stoppassiveranging-f.md#stoppassiveranging-1) | Stops passive ranging mode.Stops the passive ranging broadcast and cleans up associated resourcesbased on the specified handle and ranging capability type. |
| [stopRanging](arkts-connectivity-stopranging-f.md#stopranging-1) | Stops ongoing ranging operations.If no target device is specified, stops ranging for all devices associated with the callback.If a target device is specified, only stops ranging for that specific device.This method also releases all occupied resources. For proper resource management,stopRanging must be called after startRanging to avoid resource leaks.State changes are notified via the onRangingStateChange callback. |

### Interfaces

| Name | Description |
| --- | --- |
| [RangingCapabilitySupported](arkts-connectivity-rangingcapabilitysupported-i.md) | Describes the contents of the ranging support types. |
| [RangingMeasurement](arkts-connectivity-rangingmeasurement-i.md) | Describes the measurement result. |
| [RangingParams](arkts-connectivity-rangingparams-i.md) | Parameters for ranging operation. |
| [RangingResult](arkts-connectivity-rangingresult-i.md) | Describes the contents of the ranging results. |
| [RangingStateChangeInfo](arkts-connectivity-rangingstatechangeinfo-i.md) | Describes the ranging state change information. |

### Enums

| Name | Description |
| --- | --- |
| [RangingConfidence](arkts-connectivity-rangingconfidence-e.md) | The enum of ranging measurement confidence. |
| [RangingState](arkts-connectivity-rangingstate-e.md) | The enum of ranging state. |
| [RangingStoppedCause](arkts-connectivity-rangingstoppedcause-e.md) | The enum of ranging stopped causes. |
| [RangingTypes](arkts-connectivity-rangingtypes-e.md) | The enumeration of ranging capability types. |

