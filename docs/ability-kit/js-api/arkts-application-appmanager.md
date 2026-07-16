# @ohos.application.appManager

The appManager module provides APIs for application management. For example, you can query whether the system is
undergoing a stability test, determine whether the device is RAM-constrained, obtain the maximum memory available to
the current application, and retrieve information about running processes.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** appManager/appManager

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAppMemorySize](arkts-ability-getappmemorysize-depr-f.md#getappmemorysize-1) | Obtains the maximum memory (RAM allocation) available to the current application. This API uses a promise to return the result. |
| [getAppMemorySize](arkts-ability-getappmemorysize-depr-f.md#getappmemorysize-2) | Obtains the maximum memory (RAM allocation) available to the current application. This API uses an asynchronouscallback to return the result. |
| [getProcessRunningInfos](arkts-ability-getprocessrunninginfos-depr-f.md#getprocessrunninginfos-1) | Obtains information about the running processes. This API uses a promise to return the result.&gt; This API is deprecated since API version 9. You are advised to use&gt; [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)&gt; instead. |
| [getProcessRunningInfos](arkts-ability-getprocessrunninginfos-depr-f.md#getprocessrunninginfos-2) | Obtains information about the running processes. This API uses an asynchronous callback to return the result.&gt; This API is deprecated since API version 9. You are advised to use&gt; [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)&gt; instead. |
| [isRamConstrainedDevice](arkts-ability-isramconstraineddevice-depr-f.md#isramconstraineddevice-1) | Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources).This API uses a promise to return the result. |
| [isRamConstrainedDevice](arkts-ability-isramconstraineddevice-depr-f.md#isramconstraineddevice-2) | Checks whether the current device is a RAM-constrained device (a device with severely limited memory resources).This API uses an asynchronous callback to return the result. |
| [isRunningInStabilityTest](arkts-ability-isrunninginstabilitytest-depr-f.md#isrunninginstabilitytest-1) | Checks whether the system is undergoing a stability test. This API uses an asynchronous callback to return theresult.&gt; **NOTE**&gt;&gt; A stability test scenario refers to a specific testing environment designed to verify application reliability&gt; under complex, extreme, or long-term operating conditions. |
| [isRunningInStabilityTest](arkts-ability-isrunninginstabilitytest-depr-f.md#isrunninginstabilitytest-2) | Checks whether the system is undergoing a stability test. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; A stability test scenario refers to a specific testing environment designed to verify application reliability&gt; under complex, extreme, or long-term operating conditions. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [clearUpApplicationData](arkts-ability-clearupapplicationdata-depr-f-sys.md#clearupapplicationdata-1) | Clear up application data by bundle name |
| [clearUpApplicationData](arkts-ability-clearupapplicationdata-depr-f-sys.md#clearupapplicationdata-2) | Clear up application data by bundle name |
| [getForegroundApplications](arkts-ability-getforegroundapplications-depr-f-sys.md#getforegroundapplications-1) | getForegroundApplications. |
| [getForegroundApplications](arkts-ability-getforegroundapplications-depr-f-sys.md#getforegroundapplications-2) | getForegroundApplications. |
| [getProcessRunningInformation](arkts-ability-getprocessrunninginformation-depr-f-sys.md#getprocessrunninginformation-1) | Obtains information about the running processes. This API uses a promise to return the result.&gt; This API is deprecated since API version 9. You are advised to use&gt; [appManager.getRunningProcessInformation](arkts-ability-getrunningprocessinformation-f.md#getrunningprocessinformation-1)&gt; instead. |
| [getProcessRunningInformation](arkts-ability-getprocessrunninginformation-depr-f-sys.md#getprocessrunninginformation-2) | Obtains information about the running processes. This API uses an asynchronous callback to return the result.&gt; This API is deprecated since API version 9. You are advised to use&gt; [appManager.getRunningProcessInformation]{&gt; @link @ohos.app.ability.appManager:appManager.getRunningProcessInformation()} instead. |
| [killProcessWithAccount](arkts-ability-killprocesswithaccount-depr-f-sys.md#killprocesswithaccount-1) | Kill process with account. |
| [killProcessWithAccount](arkts-ability-killprocesswithaccount-depr-f-sys.md#killprocesswithaccount-2) | Kill process with account. |
| [killProcessesByBundleName](arkts-ability-killprocessesbybundlename-depr-f-sys.md#killprocessesbybundlename-1) | Kill processes by bundle name |
| [killProcessesByBundleName](arkts-ability-killprocessesbybundlename-depr-f-sys.md#killprocessesbybundlename-2) | Kill processes by bundle name |
| [registerApplicationStateObserver](arkts-ability-registerapplicationstateobserver-depr-f-sys.md#registerapplicationstateobserver-1) | Register application state observer. |
| [unregisterApplicationStateObserver](arkts-ability-unregisterapplicationstateobserver-depr-f-sys.md#unregisterapplicationstateobserver-1) | Unregister application state observer. |
| [unregisterApplicationStateObserver](arkts-ability-unregisterapplicationstateobserver-depr-f-sys.md#unregisterapplicationstateobserver-2) | Unregister application state observer. |
<!--DelEnd-->

