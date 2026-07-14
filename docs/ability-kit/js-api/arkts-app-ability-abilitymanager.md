# @ohos.app.ability.abilityManager

The AbilityManager module provides APIs for obtaining, adding, and updating ability information and running status information.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { abilityManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getAbilityRunningInfos](arkts-ability-getabilityrunninginfos-f.md#getabilityrunninginfos-1) | Obtains the UIAbility running information. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; If the application has requested the ohos.permission.GET_RUNNING_INFO permission, it can obtain the UIAbility &gt; running information of all applications; otherwise, it can obtain the UIAbility running information of the &gt; current application. |
| [isEmbeddedUIExtensionSupported](arkts-ability-isembeddeduiextensionsupported-f.md#isembeddeduiextensionsupported-1) | Indicates whether the current device supports EmbeddedUIExtensionAbility. |
| [restartSelfAtomicService](arkts-ability-restartselfatomicservice-f.md#restartselfatomicservice-1) | Restarts the current atomic service. &gt; **NOTE** &gt; &gt; - Currently, atomic services can be started only in an independent window. &gt; &gt; - If you call this API, &gt; [ApplicationContext.restartApp()](./application/ApplicationContext:ApplicationContext/restartApp), or &gt; [UIAbilityContext.restartApp()](arkts-ability-uiabilitycontext-c.md#restartapp-1) within 3 seconds &gt; after a successful call to this API, the system returns error code 16000064. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [acquireShareData](arkts-ability-acquiresharedata-f-sys.md#acquiresharedata-1) | Called by a system dialog box to obtain shared data, which is set by the target UIAbility through [onShare](arkts-ability-uiability-c.md#onshare-1). This API uses an asynchronous callback to return the result. |
| [acquireShareData](arkts-ability-acquiresharedata-f-sys.md#acquiresharedata-2) | Called by a system dialog box to obtain shared data, which is set by the target UIAbility through [onShare](arkts-ability-uiability-c.md#onshare-1). This API uses a promise to return the result. |
| [clearPreloadedUIExtensionAbilities](arkts-ability-clearpreloadeduiextensionabilities-f-sys.md#clearpreloadeduiextensionabilities-1) | Clears all preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instances in the current process. This API uses a promise to return the result. |
| [clearPreloadedUIExtensionAbility](arkts-ability-clearpreloadeduiextensionability-f-sys.md#clearpreloadeduiextensionability-1) | Clears a [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance. This API uses a promise to return the result. |
| [getAbilityRunningInfos](arkts-ability-getabilityrunninginfos-f-sys.md#getabilityrunninginfos-2) | Obtains the UIAbility running information. This API uses an asynchronous callback to return the result. |
| [getExtensionRunningInfos](arkts-ability-getextensionrunninginfos-f-sys.md#getextensionrunninginfos-1) | Obtains the ExtensionAbility running information. This API uses a promise to return the result. |
| [getExtensionRunningInfos](arkts-ability-getextensionrunninginfos-f-sys.md#getextensionrunninginfos-2) | Obtains the ExtensionAbility running information. This API uses an asynchronous callback to return the result. |
| [getForegroundUIAbilities](arkts-ability-getforegrounduiabilities-f-sys.md#getforegrounduiabilities-1) | Obtains the information about the UIAbility components of an application that is running in the foreground. This API uses an asynchronous callback to return the result. |
| [getForegroundUIAbilities](arkts-ability-getforegrounduiabilities-f-sys.md#getforegrounduiabilities-2) | Obtains the information about the UIAbility components of an application that is running in the foreground. This API uses a promise to return the result. |
| [getTopAbility](arkts-ability-gettopability-f-sys.md#gettopability-1) | Obtains the top ability, which is the ability that has the window focus. This API uses a promise to return the result. |
| [getTopAbility](arkts-ability-gettopability-f-sys.md#gettopability-2) | Obtains the top ability, which is the ability that has the window focus. This API uses an asynchronous callback to return the result. |
| [isEmbeddedOpenAllowed](arkts-ability-isembeddedopenallowed-f-sys.md#isembeddedopenallowed-1) | Checks whether the [EmbeddableUIAbility](arkts-ability-embeddableuiability-c.md) can be started in embedded mode. This API uses a promise to return the result. |
| [notifyDebugAssertResult](arkts-ability-notifydebugassertresult-f-sys.md#notifydebugassertresult-1) | Notifies the application of the assertion result. This API uses a promise to return the result. |
| [notifySaveAsResult](arkts-ability-notifysaveasresult-f-sys.md#notifysaveasresult-1) | Used by the [Data Loss Prevention (DLP)](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md) management application to notify a sandbox application of the data saving result. This API uses an asynchronous callback to return the result. |
| [notifySaveAsResult](arkts-ability-notifysaveasresult-f-sys.md#notifysaveasresult-2) | Used by the [Data Loss Prevention (DLP)](../../apis-data-protection-kit/arkts-apis/arkts-dlppermission.md) management application to notify a sandbox application of the data saving result. This API uses a promise to return the result. |
| [off](arkts-ability-off-f-sys.md#off-1) | Unregisters the observer used to listen for ability start or exit events. |
| [offPreloadedUIExtensionAbilityDestroyed](arkts-ability-offpreloadeduiextensionabilitydestroyed-f-sys.md#offpreloadeduiextensionabilitydestroyed-1) | Unsubscribes from loaded events of a preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance in the current process. |
| [offPreloadedUIExtensionAbilityLoaded](arkts-ability-offpreloadeduiextensionabilityloaded-f-sys.md#offpreloadeduiextensionabilityloaded-1) | Unsubscribes from loaded events of a preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance in the current process. |
| [on](arkts-ability-on-f-sys.md#on-1) | Registers an observer to listen for ability start or exit events. |
| [onPreloadedUIExtensionAbilityDestroyed](arkts-ability-onpreloadeduiextensionabilitydestroyed-f-sys.md#onpreloadeduiextensionabilitydestroyed-1) | Subscribes to destroyed events of a preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance in the current process. |
| [onPreloadedUIExtensionAbilityLoaded](arkts-ability-onpreloadeduiextensionabilityloaded-f-sys.md#onpreloadeduiextensionabilityloaded-1) | Subscribes to loaded events of a preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance in the current process. |
| [preloadUIExtensionAbility](arkts-ability-preloaduiextensionability-f-sys.md#preloaduiextensionability-1) | Preloads a [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance and returns the instance ID. This API uses a promise to return the result. |
| [queryAtomicServiceStartupRule](arkts-ability-queryatomicservicestartuprule-f-sys.md#queryatomicservicestartuprule-1) | Obtains the rule for launching an [EmbeddableUIAbility](arkts-ability-embeddableuiability-c.md) in embedded mode. This API uses a promise to return the result. This API can be properly called only on phones and tablets. On other devices, it returns the error code 801. |
| [setResidentProcessEnabled](arkts-ability-setresidentprocessenabled-f-sys.md#setresidentprocessenabled-1) | Enables or disables the resident process of an application. |
| [updateConfiguration](arkts-ability-updateconfiguration-f-sys.md#updateconfiguration-1) | Updates the configuration. This API uses an asynchronous callback to return the result. |
| [updateConfiguration](arkts-ability-updateconfiguration-f-sys.md#updateconfiguration-2) | Updates the configuration. This API uses a promise to return the result. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [AtomicServiceStartupRule](arkts-ability-atomicservicestartuprule-i-sys.md) | Describes the rule for launching an embedded atomic service. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AbilityState](arkts-ability-abilitystate-e.md) | Enumerates the ability states. This enum can be used together with [AbilityRunningInfo](arkts-ability-abilityrunninginfo-i.md) to return the ability state. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [UserStatus](arkts-ability-userstatus-e-sys.md) | Enumerates the assertion result for different user operations. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [AbilityRunningInfo](arkts-ability-abilityrunninginfo-t.md) | Defines the level-2 module AbilityRunningInfo. |
| [AbilityStateData](arkts-ability-abilitystatedata-t.md) | Defines the level-2 module AbilityStateData. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [AbilityForegroundStateObserver](arkts-ability-abilityforegroundstateobserver-t-sys.md) | Defines the level-2 module AbilityForegroundStateObserver. |
| [ExtensionRunningInfo](arkts-ability-extensionrunninginfo-t-sys.md) | Defines the level-2 module ExtensionRunningInfo. |
| [PreloadedUIExtensionAbilityDestroyedFn](arkts-ability-preloadeduiextensionabilitydestroyedfn-t-sys.md) | Defines the callback function when the preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance is destroyed. |
| [PreloadedUIExtensionAbilityLoadedFn](arkts-ability-preloadeduiextensionabilityloadedfn-t-sys.md) | Defines the callback function when the preloaded [UIExtensionAbility](arkts-ability-uiextensionability-c.md) instance is loaded. |
<!--DelEnd-->

