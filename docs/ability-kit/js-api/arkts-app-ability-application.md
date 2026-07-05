# @ohos.app.ability.application

开发者可以通过该模块创建[Context](docroot://application-models/application-context-stage.md)。

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
| <!--DelRow-->[createBundleContext](arkts-application-createbundlecontext-f-sys.md#createBundleContext-1) | 根据入参Context创建相应应用的Context。使用Promise异步回调。 > **说明：** > > 从API version 18开始，Context支持获取当前应用的进程名 > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 > createBundleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应 > 的属性值。 |
| [createModuleContext](arkts-application-createmodulecontext-f.md#createModuleContext-1) | 创建指定模块的上下文。创建出的模块上下文中[resourceManager.Configuration]{@link @ohos.resourceManager:resourceManager.Configuration}资源继承 自入参上下文，便于开发者获取[跨HAP/HSP包应用资源](docroot://quick-start/resource-categories-and-access.md#跨haphsp包应用资源)。使用Promise异步回调。 > **说明：** > > 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。 |
| <!--DelRow-->[createModuleContext](arkts-application-createmodulecontext-f-sys.md#createModuleContext-1) | 根据入参Context创建相应模块的Context。使用Promise异步回调。 > **说明：** > > - 从API version 18开始，Context支持获取当前应用的进程名 > [processName](docroot://reference/apis-ability-kit/js-apis-inner-application-context.md#context)。 > createModuleContext创建的Context中的processName属性与入参Context中的processName属性一致，其他属性根据入参Context、bundleName和moduleName获得相应 > 的属性值。 > > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。 |
| [createPluginModuleContext](arkts-application-createpluginmodulecontext-f.md#createPluginModuleContext-1) | 根据入参Context、指定的插件包名和插件模块名，创建本应用下插件的Context，用于获取插件的基本信息。使用Promise异步回调。 |
| <!--DelRow-->[createPluginModuleContextForHostBundle](arkts-application-createpluginmodulecontextforhostbundle-f-sys.md#createPluginModuleContextForHostBundle-1) | 根据入参Context、插件包名和插件模块名和应用包名，创建对应插件的Context，用于获取插件的基本信息。使用Promise异步回调。 |
| [demoteCurrentFromCandidateMasterProcess](arkts-application-demotecurrentfromcandidatemasterprocess-f.md#demoteCurrentFromCandidateMasterProcess-1) | 撤销当前进程的备选主控进程资格。使用Promise异步回调。 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。 |
| [exitMasterProcessRole](arkts-application-exitmasterprocessrole-f.md#exitMasterProcessRole-1) | 放弃当前进程的[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)身份。使用Promise异步回调。 该接口仅在2in1、Tablet设备中可正常调用，在其他设备中返回801错误码。 |
| [getAppPreloadType](arkts-application-getapppreloadtype-f.md#getAppPreloadType-1) | 获取应用当前进程的预加载类型。 > **说明：** > > - 只有在进程首次执行[AbilityStage.onCreate]{@link @ohos.app.ability.AbilityStage:AbilityStage#onCreate}完成之前调用该接口，才可以返回真实的预 > 加载类型。 > > - AbilityStage创建完成后，应用的预加载数据将被清除，调用该接口将返回UNSPECIFIED，无法获取到真实的预加载类型。 |
| [getApplicationContext](arkts-application-getapplicationcontext-f.md#getApplicationContext-1) | 获取应用上下文。开发者使用该接口时，无需依赖Context基类。 重复调用该接口，将生成新的ApplicationContext对象。 |
| [getApplicationContextInstance](arkts-application-getapplicationcontextinstance-f.md#getApplicationContextInstance-1) | 获取应用上下文。开发者使用该接口时，无需依赖Context基类。 重复调用该接口，将获取同一个ApplicationContext实例。 |
| [promoteCurrentToCandidateMasterProcess](arkts-application-promotecurrenttocandidatemasterprocess-f.md#promoteCurrentToCandidateMasterProcess-1) | 开发者可以调用该接口将当前进程放入[备选主控进程](docroot://application-models/ability-terminology.md#candidatemasterprocess备选主控进程)链表。使用 Promise异步回调。 当[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)销毁后，再次启动配置了isolationProcess为true的 UIAbility/UIExtensionAbility组件时，系统会根据是否存在备选主控进程执行相应操作。 - 如果存在备选主控进程，系统会将备选主控进程链表首节点的进程设置为主控进程，触发 [onNewProcessRequest]{@link @ohos.app.ability.AbilityStage:AbilityStage#onNewProcessRequest}回调。 - 如果不存在备选主控进程，系统会根据组件类型执行相应的操作。 - 对于UIAbility组件，系统将创建新的空进程作为主控进程。 - 对于UIExtensionAbility组件，系统会优先复用已有的UIExtensionAbility进程作为新的主控进程，无可用进程时则创建新的空进程作为主控进程。 该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 如果当前进程已经是[主控进程](docroot://application-models/ability-terminology.md#masterprocess主控进程)，调用该接口无效并且不会抛出错误码。 > > 当前进程只有运行了isolationProcess字段设为true的组件，或曾经成为过主控进程，开发者才可将其设置为备选主控进程。 > > > 当前仅支持sys/commonUI类型的UIExtensionAbility组件在[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中配 > 置isolationProcess字段为true。 <!--DelEnd--> |

### Enums

| Name | Description |
| --- | --- |
| [AppPreloadType](arkts-application-apppreloadtype-e.md) | 表示应用当前进程的预加载类型枚举。 |

