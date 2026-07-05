# Context

Context是Stage模型的上下文基类，主要用于访问特定应用程序的资源，以及执行应用级操作的回调。

**Inheritance:** Contextextends: BaseContext.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## createAreaModeContext

```TypeScript
createAreaModeContext(areaMode: contextConstant.AreaMode): Context
```

创建特定数据加密级别的应用上下文。开发者可以调用该接口创建不同加密级别的上下文，从而获取对应的沙箱路径。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| areaMode | contextConstant.AreaMode | Yes | 指定的数据加密等级。 |

**Return value:**

| Type | Description |
| --- | --- |
| Context | 指定数据加密等级的上下文。 |

## createBundleContext

```TypeScript
createBundleContext(bundleName: string): Context
```

根据Bundle名称创建安装包的上下文。 > **说明：** > > - stage模型多module的情况下可能发生资源id冲突的情况，建议使用 > [application.createModuleContext]./../@ohos.app.ability.application:application.createModuleContext替代。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.app.ability.application:application.createBundleContext

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Context | 安装包的上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createDisplayContext

```TypeScript
createDisplayContext(displayId: long): Context
```

根据指定的物理屏幕ID创建带有屏幕信息（包括屏幕密度[ScreenDensity]./../@ohos.resourceManager:resourceManager.ScreenDensity和屏幕方向 [Direction]./../@ohos.resourceManager:resourceManager.Direction）的应用上下文。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | long | Yes | 物理屏幕ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Context | 带有指定物理屏幕信息的上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleContext

```TypeScript
createModuleContext(moduleName: string): Context
```

根据模块名创建上下文。 > **说明：** > > - 仅支持获取本应用中其他Module的Context和应用内HSP的Context，不支持获取其他应用的Context。 > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.app.ability.application:application.createModuleContext

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | 模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Context | 模块的上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleContext

```TypeScript
createModuleContext(bundleName: string, moduleName: string): Context
```

根据Bundle名称和模块名称创建上下文。

**Since:** 9

**Deprecated since:** 12

**Substitute:** @ohos.app.ability.application:application.createModuleContext

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle名称。 |
| moduleName | string | Yes | 模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Context | 模块的上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleResourceManager

```TypeScript
createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

为指定Module创建资源管理对象。

**Since:** 11

**Required permissions:** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle名称。 |
| moduleName | string | Yes | 模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| resmgr.ResourceManager | Object for resource management. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createSystemHspModuleResourceManager

```TypeScript
createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

该接口用于OEM厂商预置的[系统级HSP](docroot://quick-start/application-package-glossary.md#系统级hsp)创建自己的 [ResourceManager]./../@ohos.resourceManager:resourceManager。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle名称。 |
| moduleName | string | Yes | 模块名。 |

**Return value:**

| Type | Description |
| --- | --- |
| resmgr.ResourceManager | Returns the system HSP module resource manager. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16400001 | The input bundleName is not a system HSP. |

## getApplicationContext

```TypeScript
getApplicationContext(): ApplicationContext
```

获取当前应用上下文。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| ApplicationContext | 应用上下文。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void
```

通过应用中的Group ID获取对应的共享目录，使用callback异步回调。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataGroupID | string | Yes | 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数。当获取共享目录成功，err为undefined，data为对应的共享目录，如果不存在则返回为空；否则为错误对象。 说明  ：仅支持应用el2加密级别。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string): Promise<string>
```

通过应用中的Group ID获取对应的共享目录，使用Promise异步回调。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataGroupID | string | Yes | 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回对应的共享目录。如果不存在则返回为空，仅支持应用el2加密级别。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |
| 16000011 | The context does not exist. |

## isContextOf

```TypeScript
isContextOf(contextType: contextConstant.ContextType): boolean
```

判断当前Context是否为指定的ContextType类型。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contextType | contextConstant.ContextType | Yes | 上下文类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 是否为指定类型的上下文。返回true表示Context类型为指定类型，返回false表示Context类型匹配失败。 |

## area

```TypeScript
area: contextConstant.AreaMode
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**Type:** contextConstant.AreaMode

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
get area(): contextConstant.AreaMode
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**Type:** contextConstant.AreaMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
set area(mode: contextConstant.AreaMode)
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**Type:** contextConstant.AreaMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## filesDir

```TypeScript
filesDir: string
```

文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## bundleCodeDir

```TypeScript
bundleCodeDir: string
```

安装包目录。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源，详情参考 [应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## cacheDir

```TypeScript
cacheDir: string
```

缓存目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## eventHub

```TypeScript
eventHub: EventHub
```

事件中心，提供订阅、取消订阅、触发事件对象。

**Type:** EventHub

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## resourceDir

```TypeScript
resourceDir: string
```

资源目录。 > **说明：** > > 需要开发者手动在`\<module-name>\resource`路径下创建`resfile`目录。创建的`resfile`目录仅支持以只读方式访问。

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## distributedFilesDir

```TypeScript
distributedFilesDir: string
```

分布式文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## logFileDir

```TypeScript
get logFileDir(): string
```

日志文件目录。

**Type:** string

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processName

```TypeScript
processName: string
```

当前应用的进程名。

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## preferencesDir

```TypeScript
preferencesDir: string
```

preferences目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## cloudFileDir

```TypeScript
cloudFileDir: string
```

云文件目录。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## databaseDir

```TypeScript
databaseDir: string
```

数据库目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## tempDir

```TypeScript
tempDir: string
```

临时目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## applicationInfo

```TypeScript
applicationInfo: ApplicationInfo
```

当前应用程序的信息。

**Type:** ApplicationInfo

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## resourceManager

```TypeScript
resourceManager: resmgr.ResourceManager
```

资源管理对象。

**Type:** resmgr.ResourceManager

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

