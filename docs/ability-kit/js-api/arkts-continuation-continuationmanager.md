# @ohos.continuation.continuationManager

The continuationManager module provides the continuation/collaboration management entry. You can use the APIs of this module to connect to and cancel the continuation/collaboration management service, subscribe to and unsubscribe from device connection events, start the device selection module, and update the device connection state.

**Since:** 8

**Deprecated since:** 22

**Substitutes:** [distributedDeviceManager:distributedDeviceManager](../../apis-distributed-service-kit/arkts-apis/arkts-distributeddevicemanager.md)

<!--Device-unnamed-declare namespace continuationManager--><!--Device-unnamed-declare namespace continuationManager-End-->

**System capability:** SystemCapability.Ability.DistributedAbilityManager

## Modules to Import

```TypeScript
import { continuationManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-ability-continuationmanager-off-f.md#off-1) | Unsubscribes from device connection events. |
| [off](arkts-ability-continuationmanager-off-f.md#off-2) | Unsubscribes from device disconnection events. |
| [off](arkts-ability-continuationmanager-off-f.md#off-3) | Unsubscribes from device connection events. This API uses an asynchronous callback to return the result. |
| [off](arkts-ability-continuationmanager-off-f.md#off-4) | Unsubscribes from device disconnection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-ability-continuationmanager-on-f.md#on-1) | Subscribes to device connection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-ability-continuationmanager-on-f.md#on-2) | Subscribes to device disconnection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-ability-continuationmanager-on-f.md#on-3) | Subscribes to device connection events. This API uses an asynchronous callback to return the result. |
| [on](arkts-ability-continuationmanager-on-f.md#on-4) | Subscribes to device disconnection events. This API uses an asynchronous callback to return the result. |
| [register](arkts-ability-continuationmanager-register-f.md#register-1) | Registers the continuation management service and obtains a token. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [register](arkts-ability-continuationmanager-register-f.md#register-2) | Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return the result. |
| [register](arkts-ability-continuationmanager-register-f.md#register-3) | Registers the continuation management service and obtains a token. This API uses a promise to return the result. |
| [registerContinuation](arkts-ability-continuationmanager-registercontinuation-f.md#registercontinuation-1) | Registers the continuation management service and obtains a token. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [registerContinuation](arkts-ability-continuationmanager-registercontinuation-f.md#registercontinuation-2) | Registers the continuation management service and obtains a token. This API uses an asynchronous callback to return the result. |
| [registerContinuation](arkts-ability-continuationmanager-registercontinuation-f.md#registercontinuation-3) | Registers the continuation management service and obtains a token. This API uses a promise to return the result. |
| [startContinuationDeviceManager](arkts-ability-continuationmanager-startcontinuationdevicemanager-f.md#startcontinuationdevicemanager-1) | Starts the device selection module to show the list of available devices on the network. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [startContinuationDeviceManager](arkts-ability-continuationmanager-startcontinuationdevicemanager-f.md#startcontinuationdevicemanager-2) | Starts the device selection module to show the list of available devices on the network. This API uses an asynchronous callback to return the result. |
| [startContinuationDeviceManager](arkts-ability-continuationmanager-startcontinuationdevicemanager-f.md#startcontinuationdevicemanager-3) | Starts the device selection module to show the list of available devices on the network. This API uses a promise to return the result. |
| [startDeviceManager](arkts-ability-continuationmanager-startdevicemanager-f.md#startdevicemanager-1) | Starts the device selection module to show the list of available devices on the network. This API does not involve any filter parameters and uses an asynchronous callback to return the result. |
| [startDeviceManager](arkts-ability-continuationmanager-startdevicemanager-f.md#startdevicemanager-2) | Starts the device selection module to show the list of available devices on the network. This API uses an asynchronous callback to return the result. |
| [startDeviceManager](arkts-ability-continuationmanager-startdevicemanager-f.md#startdevicemanager-3) | Starts the device selection module to show the list of available devices on the network. This API uses a promise to return the result. |
| [unregister](arkts-ability-continuationmanager-unregister-f.md#unregister-1) | Unregisters the continuation management service. This API uses an asynchronous callback to return the result. |
| [unregister](arkts-ability-continuationmanager-unregister-f.md#unregister-2) | Unregisters the continuation management service. This API uses a promise to return the result. |
| [unregisterContinuation](arkts-ability-continuationmanager-unregistercontinuation-f.md#unregistercontinuation-1) | Unregisters the continuation management service. This API uses an asynchronous callback to return the result. |
| [unregisterContinuation](arkts-ability-continuationmanager-unregistercontinuation-f.md#unregistercontinuation-2) | Unregisters the continuation management service. This API uses a promise to return the result. |
| [updateConnectStatus](arkts-ability-continuationmanager-updateconnectstatus-f.md#updateconnectstatus-1) | Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result. |
| [updateConnectStatus](arkts-ability-continuationmanager-updateconnectstatus-f.md#updateconnectstatus-2) | Instructs the device selection module to update the device connection state. This API uses a promise to return the result. |
| [updateContinuationState](arkts-ability-continuationmanager-updatecontinuationstate-f.md#updatecontinuationstate-1) | Instructs the device selection module to update the device connection state. This API uses an asynchronous callback to return the result. |
| [updateContinuationState](arkts-ability-continuationmanager-updatecontinuationstate-f.md#updatecontinuationstate-2) | Instructs the device selection module to update the device connection state. This API uses a promise to return the result. |

### Enums

| Name | Description |
| --- | --- |
| [ContinuationMode](arkts-ability-continuationmanager-continuationmode-e.md) | Enumerates the continuation modes provided by the device selection module. |
| [DeviceConnectState](arkts-ability-continuationmanager-deviceconnectstate-e.md) | Device connection state. |

### Types

| Name | Description |
| --- | --- |
| [ContinuationExtraParams](arkts-ability-continuationmanager-continuationextraparams-t.md) | Defines the extra parameters required by the device selection module in the continuation management entry. |
| [ContinuationResult](arkts-ability-continuationmanager-continuationresult-t.md) | Defines the device information returned by the continuation management entry. |

