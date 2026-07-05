# @ohos.runningLock

The **runningLock** module provides APIs for creating, querying, holding, and releasing running locks. A running lock enables the proximity sensor to turn on or off the screen, or prevents the device from entering sleep mode when the screen is off. For details about the running lock types, see [RunningLockType](arkts-basicservices-runninglocktype-e.md#runninglocktype).

**Since:** 7

**System capability:** SystemCapability.PowerManager.PowerManager.Core

## Modules to Import

```TypeScript
import { runningLock } from '@ohos.runningLock';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [create](arkts-basicservices-create-f.md#create-1) | Creates a {@link RunningLock} object. This API uses an asynchronous callback to return the result. |
| [create](arkts-basicservices-create-f.md#create-2) | Creates a {@link RunningLock} object. This API uses a promise to return the result. |
| [createRunningLock](arkts-basicservices-createrunninglock-f.md#createrunninglock-1) | Creates a {@link RunningLock} object. This API uses an asynchronous callback to return the result. |
| [createRunningLock](arkts-basicservices-createrunninglock-f.md#createrunninglock-2) | Creates a {@link RunningLock} object. This API uses a promise to return the result. |
| [isRunningLockTypeSupported](arkts-basicservices-isrunninglocktypesupported-f.md#isrunninglocktypesupported-1) | Checks whether a specified type of {@link RunningLock} is supported. This API uses an asynchronous callback to return the result. |
| [isRunningLockTypeSupported](arkts-basicservices-isrunninglocktypesupported-f.md#isrunninglocktypesupported-2) | Checks whether a specified type of {@link RunningLock} is supported. This API uses a promise to return the result. |
| [isSupported](arkts-basicservices-issupported-f.md#issupported-1) | Checks whether a specified type of {@link RunningLock} is supported. |

### Classes

| Name | Description |
| --- | --- |
| [RunningLock](arkts-basicservices-runninglock-c.md) | Defines a **RunningLock** object. |

### Enums

| Name | Description |
| --- | --- |
| [RunningLockType](arkts-basicservices-runninglocktype-e.md) | Enumerates the types of **RunningLock** objects. |

