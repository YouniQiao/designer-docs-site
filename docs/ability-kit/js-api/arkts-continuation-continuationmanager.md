# @ohos.continuation.continuationManager

The continuationManager module provides the continuation/collaboration management entry. You can use the APIs of this module to connect to and cancel the continuation/collaboration management service, subscribe to and unsubscribe from device connection events, start the device selection module, and update the device connection state.

**Since:** 8

**Deprecated since:** 22

**Substitute:** @ohos.distributedDeviceManager:distributedDeviceManager

**System capability:** SystemCapability.Ability.DistributedAbilityManager

## Modules to Import

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-continuationmanager-off-f.md#off-1) | Unsubscribes from device connection events. |
| [off](arkts-continuationmanager-off-f.md#off-2) | Unsubscribes from device disconnection events. |
| [off](arkts-continuationmanager-off-f.md#off-3) | Unsubscribes from device connection events. This API uses an asynchronous callback to return the result. |
| [off](arkts-continuationmanager-off-f.md#off-4) | Unsubscribes from device disconnection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-continuationmanager-on-f.md#on-1) | Subscribes to device connection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-continuationmanager-on-f.md#on-2) | Subscribes to device disconnection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-continuationmanager-on-f.md#on-3) | Subscribes to device connection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-continuationmanager-on-f.md#on-4) | Subscribes to device disconnection events. This API uses an asynchronous callback to return the result. |
| [register](arkts-continuationmanager-register-f.md#register-1) | Registers the continuation management service and obtains a token. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [register](arkts-continuationmanager-register-f.md#register-2) | Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return the result. |
| [register](arkts-continuationmanager-register-f.md#register-3) | Registers the continuation management service and obtains a token. This API uses a promise to return the result. |
| [registerContinuation](arkts-continuationmanager-registercontinuation-f.md#registerContinuation-1) | Registers the continuation management service and obtains a token. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [registerContinuation](arkts-continuationmanager-registercontinuation-f.md#registerContinuation-2) | Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return the result. |
| [registerContinuation](arkts-continuationmanager-registercontinuation-f.md#registerContinuation-3) | Registers the continuation management service and obtains a token. This API uses a promise to return the result. |
| [startContinuationDeviceManager](arkts-continuationmanager-startcontinuationdevicemanager-f.md#startContinuationDeviceManager-1) | Starts the device selection module to show the list of available devices on the network. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [startContinuationDeviceManager](arkts-continuationmanager-startcontinuationdevicemanager-f.md#startContinuationDeviceManager-2) | Starts the device selection module to show the list of available devices on the network. This API uses an asynchronous callback to return the result. |
| [startContinuationDeviceManager](arkts-continuationmanager-startcontinuationdevicemanager-f.md#startContinuationDeviceManager-3) | Starts the device selection module to show the list of available devices on the network. This API uses a promise to return the result. |
| [startDeviceManager](arkts-continuationmanager-startdevicemanager-f.md#startDeviceManager-1) | Starts the device selection module to show the list of available devices on the network. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [startDeviceManager](arkts-continuationmanager-startdevicemanager-f.md#startDeviceManager-2) | Starts the device selection module to show the list of available devices on the network. This API uses an asynchronous callback to return the result. |
| [startDeviceManager](arkts-continuationmanager-startdevicemanager-f.md#startDeviceManager-3) | Starts the device selection module to show the list of available devices on the network. This API uses a promise to return the result. |
| [unregister](arkts-continuationmanager-unregister-f.md#unregister-1) | Unregisters the continuation management service. This API uses an asynchronous callback to return the result. |
| [unregister](arkts-continuationmanager-unregister-f.md#unregister-2) | Unregisters the continuation management service. This API uses a promise to return the result. |
| [unregisterContinuation](arkts-continuationmanager-unregistercontinuation-f.md#unregisterContinuation-1) | Unregisters the continuation management service. This API uses an asynchronous callback to return the result. |
| [unregisterContinuation](arkts-continuationmanager-unregistercontinuation-f.md#unregisterContinuation-2) | Unregisters the continuation management service. This API uses a promise to return the result. |
| [updateConnectStatus](arkts-continuationmanager-updateconnectstatus-f.md#updateConnectStatus-1) | Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result. |
| [updateConnectStatus](arkts-continuationmanager-updateconnectstatus-f.md#updateConnectStatus-2) | Instructs the device selection module to update the device connection state. This API uses a promise to return the result. |
| [updateContinuationState](arkts-continuationmanager-updatecontinuationstate-f.md#updateContinuationState-1) | Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result. |
| [updateContinuationState](arkts-continuationmanager-updatecontinuationstate-f.md#updateContinuationState-2) | Instructs the device selection module to update the device connection state. This API uses a promise to return the result. |

### Types

| Name | Description |
| --- | --- |
| [ContinuationExtraParams](arkts-continuationmanager-continuationextraparams-t.md) | Defines the extra parameters required by the device selection module in the continuation management entry. |
| [ContinuationResult](arkts-continuationmanager-continuationresult-t.md) | Defines the device information returned by the continuation management entry. |

### Enums

| Name | Description |
| --- | --- |
| [ContinuationMode](arkts-continuationmanager-continuationmode-e.md) | Enumerates the continuation modes provided by the device selection module. |
| [DeviceConnectState](arkts-continuationmanager-deviceconnectstate-e.md) | Device connection state. |

