# Context

Context是Stage模型的上下文基类，主要用于访问特定应用程序的资源，以及执行应用级操作的回调。

**继承实现关系：** Context继承自：BaseContext。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## createAreaModeContext

```TypeScript
createAreaModeContext(areaMode: contextConstant.AreaMode): Context
```

创建特定数据加密级别的应用上下文。开发者可以调用该接口创建不同加密级别的上下文，从而获取对应的沙箱路径。

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| areaMode | contextConstant.AreaMode | 是 | 指定的数据加密等级。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 指定数据加密等级的上下文。 |

## createBundleContext

```TypeScript
createBundleContext(bundleName: string): Context
```

根据Bundle名称创建安装包的上下文。 > **说明：** > > - stage模型多module的情况下可能发生资源id冲突的情况，建议使用 > [application.createModuleContext]./../@ohos.app.ability.application:application.createModuleContext替代。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** @ohos.app.ability.application:application.createBundleContext

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 安装包的上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createDisplayContext

```TypeScript
createDisplayContext(displayId: long): Context
```

根据指定的物理屏幕ID创建带有屏幕信息（包括屏幕密度[ScreenDensity]./../@ohos.resourceManager:resourceManager.ScreenDensity和屏幕方向 [Direction]./../@ohos.resourceManager:resourceManager.Direction）的应用上下文。

**起始版本：** 15

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| displayId | long | 是 | 物理屏幕ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 带有指定物理屏幕信息的上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleContext

```TypeScript
createModuleContext(moduleName: string): Context
```

根据模块名创建上下文。 > **说明：** > > - 仅支持获取本应用中其他Module的Context和应用内HSP的Context，不支持获取其他应用的Context。 > - 由于创建模块上下文的过程涉及资源查询与初始化，耗时相对较长，在对应用流畅性要求较高的场景下，不建议频繁或多次调用createModuleContext接口创建多个Context实例，以免影响用户体验。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** @ohos.app.ability.application:application.createModuleContext

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| moduleName | string | 是 | 模块名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 模块的上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleContext

```TypeScript
createModuleContext(bundleName: string, moduleName: string): Context
```

根据Bundle名称和模块名称创建上下文。

**起始版本：** 9

**废弃版本：** 12

**替代接口：** @ohos.app.ability.application:application.createModuleContext

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle名称。 |
| moduleName | string | 是 | 模块名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Context | 模块的上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createModuleResourceManager

```TypeScript
createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

为指定Module创建资源管理对象。

**起始版本：** 11

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle名称。 |
| moduleName | string | 是 | 模块名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| resmgr.ResourceManager | Object for resource management. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |

## createSystemHspModuleResourceManager

```TypeScript
createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

该接口用于OEM厂商预置的[系统级HSP](docroot://quick-start/application-package-glossary.md#系统级hsp)创建自己的 [ResourceManager]./../@ohos.resourceManager:resourceManager。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle名称。 |
| moduleName | string | 是 | 模块名。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| resmgr.ResourceManager | Returns the system HSP module resource manager. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16400001 | The input bundleName is not a system HSP. |

## getApplicationContext

```TypeScript
getApplicationContext(): ApplicationContext
```

获取当前应用上下文。

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ApplicationContext | 应用上下文。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void
```

通过应用中的Group ID获取对应的共享目录，使用callback异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataGroupID | string | 是 | 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。 |
| callback | AsyncCallback&lt;string> | 是 | 回调函数。当获取共享目录成功，err为undefined，data为对应的共享目录，如果不存在则返回为空；否则为错误对象。 说明  ：仅支持应用el2加密级别。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000011 | The context does not exist. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string): Promise<string>
```

通过应用中的Group ID获取对应的共享目录，使用Promise异步回调。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| dataGroupID | string | 是 | 原子化服务类型的应用创建时，系统会指定分配唯一Group ID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise对象，返回对应的共享目录。如果不存在则返回为空，仅支持应用el2加密级别。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2  .Incorrect parameter types. |
| 16000011 | The context does not exist. |

## isContextOf

```TypeScript
isContextOf(contextType: contextConstant.ContextType): boolean
```

判断当前Context是否为指定的ContextType类型。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| contextType | contextConstant.ContextType | 是 | 上下文类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | 是否为指定类型的上下文。返回true表示Context类型为指定类型，返回false表示Context类型匹配失败。 |

## area

```TypeScript
area: contextConstant.AreaMode
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**类型：** contextConstant.AreaMode

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
get area(): contextConstant.AreaMode
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**类型：** contextConstant.AreaMode

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
set area(mode: contextConstant.AreaMode)
```

文件分区信息，按加密等级[AreaMode]./../@ohos.app.ability.contextConstant:contextConstant.areaMode进行分区。

**类型：** contextConstant.AreaMode

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## filesDir

```TypeScript
filesDir: string
```

文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## bundleCodeDir

```TypeScript
bundleCodeDir: string
```

安装包目录。不能拼接路径访问资源文件，请使用[资源管理接口]./../@ohos.resourceManager:resourceManager访问资源，详情参考 [应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## cacheDir

```TypeScript
cacheDir: string
```

缓存目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## eventHub

```TypeScript
eventHub: EventHub
```

事件中心，提供订阅、取消订阅、触发事件对象。

**类型：** EventHub

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## resourceDir

```TypeScript
resourceDir: string
```

资源目录。 > **说明：** > > 需要开发者手动在`\<module-name>\resource`路径下创建`resfile`目录。创建的`resfile`目录仅支持以只读方式访问。

**类型：** string

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## distributedFilesDir

```TypeScript
distributedFilesDir: string
```

分布式文件目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## logFileDir

```TypeScript
get logFileDir(): string
```

日志文件目录。

**类型：** string

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## processName

```TypeScript
processName: string
```

当前应用的进程名。

**类型：** string

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## preferencesDir

```TypeScript
preferencesDir: string
```

preferences目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## cloudFileDir

```TypeScript
cloudFileDir: string
```

云文件目录。

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## databaseDir

```TypeScript
databaseDir: string
```

数据库目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## tempDir

```TypeScript
tempDir: string
```

临时目录，详情参考[应用沙箱目录](docroot://file-management/app-sandbox-directory.md)。

**类型：** string

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## applicationInfo

```TypeScript
applicationInfo: ApplicationInfo
```

当前应用程序的信息。

**类型：** ApplicationInfo

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

## resourceManager

```TypeScript
resourceManager: resmgr.ResourceManager
```

资源管理对象。

**类型：** resmgr.ResourceManager

**起始版本：** 9

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

