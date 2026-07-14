# @ohos.app.ability.application

You can use this module to create a [Context](../../../../application-models/application-context-stage.md).

**Since:** 12

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { application } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createModuleContext](arkts-ability-createmodulecontext-f.md#createmodulecontext-1) | Creates the context for a module. The [resourceManager.Configuration](../../apis-localization-kit/arkts-apis/arkts-localization-configuration-c.md) in the created module context inherits from the input context, making it convenient for you to access [application resources across HAP/HSP packages](../../../../quick-start/resource-categories-and-access.md#cross-haphsp-resources) . This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; Creating a module context involves resource querying and initialization, which can be time-consuming. In &gt; scenarios where application fluidity is critical, avoid frequently or repeatedly calling the &gt; **createModuleContext** API to create multiple context instances, as this may negatively impact user experience. |
| [createPluginModuleContext](arkts-ability-createpluginmodulecontext-f.md#createpluginmodulecontext-1) | Creates the context of a plugin under the current application based on the context, plugin bundle name, and plugin module name, so as to obtain the basic information about the plugin. This API uses a promise to return the result. |
| [demoteCurrentFromCandidateMasterProcess](arkts-ability-demotecurrentfromcandidatemasterprocess-f.md#demotecurrentfromcandidatemasterprocess-1) | Removes the current process from the candidate master process list. This API uses a promise to return the result. This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801 is returned. **System capability**: SystemCapability.Ability.AbilityRuntime.Core |
| [exitMasterProcessRole](arkts-ability-exitmasterprocessrole-f.md#exitmasterprocessrole-1) | Relinquishes the [master-process](../../../../application-models/ability-terminology.md#master-process) role from the current process. This API uses a promise to return the result. This API can be properly called only on 2-in-1 devices and tablets. If it is called on other device types, error code 801 is returned. |
| [getAppPreloadType](arkts-ability-getapppreloadtype-f.md#getapppreloadtype-1) | Obtains the preloading type of the current application process. &gt; **NOTE** &gt; &gt; - This API can return the actual preloading type only if it is called before the first execution of &gt; [AbilityStage.onCreate](arkts-ability-abilitystage-c.md#oncreate-1). &gt; &gt; - Once the AbilityStage creation finishes, the preloaded data of the application is cleared. Any subsequent calls &gt; will return **UNSPECIFIED** instead of the original preloading type. |
| [getApplicationContext](arkts-ability-getapplicationcontext-f.md#getapplicationcontext-1) | Obtains the application context. This API provides context access independent of the base class **Context**. Repeated calls to this API generate a new ApplicationContext object. |
| [getApplicationContextInstance](arkts-ability-getapplicationcontextinstance-f.md#getapplicationcontextinstance-1) | Obtains the application context. This API provides context access independent of the base class **Context**. Repeated calls to this API obtain the same ApplicationContext instance. |
| [promoteCurrentToCandidateMasterProcess](arkts-ability-promotecurrenttocandidatemasterprocess-f.md#promotecurrenttocandidatemasterprocess-1) | Adds the current process into the [candidate master process](../../../../application-models/ability-terminology.md#candidate-master-process) list. This API uses a promise to return the result. When the [master process](../../../../application-models/ability-terminology.md#master-process) is destroyed and a UIAbility or UIExtensionAbility with **isolationProcess** set to **true** is restarted, the system takes corresponding actions based on whether there is a candidate master process. - If a candidate master process exists, the system sets the process at the head of the candidate master process list as the new master process and triggers the [onNewProcessRequest](arkts-ability-abilitystage-c.md#onnewprocessrequest-1) callback. - If no candidate master process exists, the system performs the following operations based on the component type: - For a UIAbility, the system creates an empty process as the master process. - For a UIExtensionAbility, the system first tries to reuse an existing UIExtensionAbility process as the new master process. If no available process exists, it creates an empty process as the master process. This API can be properly called on PCs/2-in-1 devices and tablets. If it is called on other devices, error code 801 is returned. &gt; **NOTE** &gt; &gt; If the current process is already the &gt; [master process](../../../../application-models/ability-terminology.md#master-process), calling this API has no &gt; effect and does not generate an error code. &gt; &gt; A process can be set as a candidate master process only if it is currently running a component with &gt; **isolationProcess** set to **true** or has previously as the main process. &gt; &gt; &gt; The **isolationProcess** field can be set to **true** in the &gt; [module.json5](../../../../quick-start/module-configuration-file.md) file, but only for the UIExtensionAbility of &gt; the sys/commonUI type. &lt;!--DelEnd--&gt; |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [createBundleContext](arkts-ability-createbundlecontext-f-sys.md#createbundlecontext-1) | Creates the context for an application. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; Starting from API version 18, the context can obtain the &gt; [process name](../../../../reference/apis-ability-kit/js-apis-inner-application-context.md#context) of the current &gt; application. The **processName** property in the context created by **createBundleContext** is the same as the &gt; **processName** property in the input parameter **Context**. The values of other properties are obtained based on &gt; the input parameters **Context**, **bundleName**, and **moduleName**. |
| [createModuleContext](arkts-ability-createmodulecontext-f-sys.md#createmodulecontext-2) | Creates the context for a module. This API uses a promise to return the result. &gt; **NOTE** &gt; &gt; - Starting from API version 18, the context can obtain the &gt; [process name](../../../../reference/apis-ability-kit/js-apis-inner-application-context.md#context) of the current &gt; application. The **processName** property in the context created by **createModuleContext** is the same as the &gt; **processName** property in the input parameter **Context**. The values of other properties are obtained based on &gt; the input parameters **Context**, **bundleName**, and **moduleName**. &gt; &gt; - Creating a module context involves resource querying and initialization, which can be time-consuming. In &gt; scenarios where application fluidity is critical, avoid frequently or repeatedly calling the &gt; **createModuleContext** API to create multiple context instances, as this may negatively impact user experience. |
| [createPluginModuleContextForHostBundle](arkts-ability-createpluginmodulecontextforhostbundle-f-sys.md#createpluginmodulecontextforhostbundle-1) | Creates the context for a plugin based on a given context, plugin bundle name, plugin module name, and application bundle name to obtain the basic information about the plugin. This API uses a promise to return the result. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [AppPreloadType](arkts-ability-apppreloadtype-e.md) | Enumerates the preloading types of the current application process. |

