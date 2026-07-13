# @ohos.power

The **power** module provides APIs for rebooting and shutting down the system, as well as querying the screen status.
You can use these APIs to obtain the device activity status, power mode, and screen on/off status.

**Since:** 7

**System capability:** SystemCapability.PowerManager.PowerManager.Core

## Modules to Import

```TypeScript
import { power } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getPowerMode](arkts-basicservices-getpowermode-f.md#getpowermode-1) | Obtains the power mode of this device. |
| [isActive](arkts-basicservices-isactive-f.md#isactive-1) | Checks whether the current device is active.- A device with a screen is active when the screen is on and inactive when the screen is off.- A device without a screen is active when it exits the sleep mode and inactive when it enters the sleep mode. |
| [isScreenOn](arkts-basicservices-isscreenon-f.md#isscreenon-1) | Checks the screen status of the current device. This API uses an asynchronous callback to return the result. |
| [isScreenOn](arkts-basicservices-isscreenon-f.md#isscreenon-2) | Checks the screen status of the current device. This API uses a promise to return the result. |
| [isStandby](arkts-basicservices-isstandby-f.md#isstandby-1) | Checks whether the device is in standby mode. |
| [rebootDevice](arkts-basicservices-rebootdevice-f.md#rebootdevice-1) | Restarts the system. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getPowerConfig](arkts-basicservices-getpowerconfig-f-sys.md#getpowerconfig-1) | Query the power configuration value for a given scene name. |
| [hibernate](arkts-basicservices-hibernate-f-sys.md#hibernate-1) | Hibernates a device. |
| [reboot](arkts-basicservices-reboot-f-sys.md#reboot-1) | Reboots a device. |
| [refreshActivity](arkts-basicservices-refreshactivity-f-sys.md#refreshactivity-1) | Refreshes the device activity status (for example, resetting the screen-off time).This API takes effect only when the device is active. For details about the device activity status, see[power.isActive](arkts-basicservices-isactive-f.md#isactive-1). |
| [registerShutdownCallback](arkts-basicservices-registershutdowncallback-f-sys.md#registershutdowncallback-1) | Registers a callback to be invoked when the device is shut down or rebooted. This API uses an asynchronous callbackto return the result. |
| [setPowerConfig](arkts-basicservices-setpowerconfig-f-sys.md#setpowerconfig-1) | Update the power configuration value for a given scene name. |
| [setPowerKeyFilteringStrategy](arkts-basicservices-setpowerkeyfilteringstrategy-f-sys.md#setpowerkeyfilteringstrategy-1) | Sets the power key filtering strategy. After the power service subscribes to the power key event, this API is usedto configure the processing mode of this event.For details about the power key filtering strategy, see[power.PowerKeyFilteringStrategy](arkts-basicservices-powerkeyfilteringstrategy-e.md). |
| [setPowerMode](arkts-basicservices-setpowermode-f-sys.md#setpowermode-1) | Sets the power mode of a device. This API uses an asynchronous callback to return the result. |
| [setPowerMode](arkts-basicservices-setpowermode-f-sys.md#setpowermode-2) | Sets the power mode of a device. This API uses a promise to return the result. |
| [setScreenOffTime](arkts-basicservices-setscreenofftime-f-sys.md#setscreenofftime-1) | Sets the screen-off timeout duration, in unit of ms. |
| [shutdown](arkts-basicservices-shutdown-f-sys.md#shutdown-1) | Shuts down the system. |
| [suspend](arkts-basicservices-suspend-f-sys.md#suspend-1) | Enables a device to enter the sleep state. |
| [unregisterShutdownCallback](arkts-basicservices-unregistershutdowncallback-f-sys.md#unregistershutdowncallback-1) | Unregisters the callback to be invoked when the device is shut down or rebooted. This API uses a callback to returnthe result. |
| [wakeup](arkts-basicservices-wakeup-f-sys.md#wakeup-1) | Wakes up a device. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [DevicePowerMode](arkts-basicservices-devicepowermode-e.md) | Enumerates power modes. |
| [PowerKeyFilteringStrategy](arkts-basicservices-powerkeyfilteringstrategy-e.md) | Enumerates the power key filtering strategies. |

