# Context

Context is the context base class of the stage model. It is used to access application-specific resources and perform callbacks for application-level operations. docroot://

**Inheritance/Implementation:** Context extends [BaseContext](arkts-ability-basecontext-c.md)

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## createAreaModeContext

```TypeScript
createAreaModeContext(areaMode: contextConstant.AreaMode): Context
```

Creates an application context with a specific data encryption level. You can call this API to create contexts with different encryption levels, thereby obtaining the corresponding sandbox paths.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| areaMode | contextConstant.AreaMode | Yes | Data encryption level. |

**Return value:**

| Type | Description |
| --- | --- |
| Context | Context created based on the data encryption level. |

## createDisplayContext

```TypeScript
createDisplayContext(displayId: number): Context
```

Creates an application context based on the specified display ID with screen information (including [ScreenDensity](../../apis-localization-kit/arkts-apis/arkts-localization-screendensity-e.md) and [Direction](../../apis-localization-kit/arkts-apis/arkts-localization-direction-e.md)).

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | number | Yes | Display ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Context | Context with the specified screen information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## createModuleContext

```TypeScript
createModuleContext(moduleName: string): Context
```

Creates the context based on the module name. > **NOTE** > > - Only the context of other modules in the current application and the context of the intra-application HSP can > be obtained. The context of other applications cannot be obtained. > > - This API has been supported since API version 9 and deprecated since API version 12. You are advised to use > [application.createModuleContext](arkts-ability-createmodulecontext-f.md#createmodulecontext-1) > instead. Otherwise, resource acquisition may fail. > > - Creating a module context involves resource querying and initialization, which can be time-consuming. In > scenarios where application fluidity is critical, avoid frequently or repeatedly calling the > **createModuleContext** API to create multiple context instances, as this may negatively impact user experience.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [createModuleContext](arkts-ability-createmodulecontext-f.md#createmodulecontext-1)

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleName | string | Yes | Module name. |

**Return value:**

| Type | Description |
| --- | --- |
| Context | Context created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

## getApplicationContext

```TypeScript
getApplicationContext(): ApplicationContext
```

Obtains the application context.

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Return value:**

| Type | Description |
| --- | --- |
| ApplicationContext | Application context. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void
```

Obtains the shared directory based on a group ID. This API uses an asynchronous callback to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataGroupID | string | Yes | Group ID, which is assigned by the system when an application of the atomic servicetype is created. |
| callback | AsyncCallback&lt;string&gt; | Yes | Callback used to return the result. If the API call is successful,**err** is **undefined** and **data** is the shared directory obtained (or empty if or is empty if non-existent). Otherwise, an error object is returned.<br>Note: Only the EL2 encryption level is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## getGroupDir

```TypeScript
getGroupDir(dataGroupID: string): Promise<string>
```

Obtains the shared directory based on a group ID. This API uses a promise to return the result.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataGroupID | string | Yes | Group ID, which is assigned by the system when an application of the atomic servicetype is created. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the result. If no shared directory exists, null is returned.Only the encryption level EL2 is supported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| [16000011](../errorcode-ability.md#16000011-context-does-not-exist) | The context does not exist. |

## isContextOf

```TypeScript
isContextOf(contextType: contextConstant.ContextType): boolean
```

Checks if the current instance is associated with the specified context type.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contextType | contextConstant.ContextType | Yes | Indicates the context type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the contextType is matched; returns {@code false} otherwise. |

## applicationInfo

```TypeScript
applicationInfo: ApplicationInfo
```

Application information.

**Type:** ApplicationInfo

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## area

```TypeScript
area: contextConstant.AreaMode
```

Information about file partitions, which are divided according to the encryption level specified by [AreaMode](./../@ohos.app.ability.contextConstant:contextConstant.areaMode).

**Type:** contextConstant.AreaMode

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## bundleCodeDir

```TypeScript
bundleCodeDir: string
```

Bundle code directory. Do not access resource files using concatenated paths. Use [resource manager APIs](../../apis-localization-kit/arkts-apis/arkts-resourcemanager.md) instead. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## cacheDir

```TypeScript
cacheDir: string
```

Cache directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## cloudFileDir

```TypeScript
cloudFileDir: string
```

Cloud file directory.

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## databaseDir

```TypeScript
databaseDir: string
```

Database directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## distributedFilesDir

```TypeScript
distributedFilesDir: string
```

Distributed file directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## eventHub

```TypeScript
eventHub: EventHub
```

Event hub that implements event subscription, unsubscription, and triggering.

**Type:** EventHub

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## filesDir

```TypeScript
filesDir: string
```

File directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## logFileDir

```TypeScript
get logFileDir(): string
```

Directory for storing log files.

**Type:** string

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## preferencesDir

```TypeScript
preferencesDir: string
```

Preferences directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## processName

```TypeScript
processName: string
```

Process name of the current application.

**Type:** string

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## resourceDir

```TypeScript
resourceDir: string
```

Resource directory. > **NOTE: ** > > You are required to manually create the resfile directory in **<module-name>\resource**. > The **resfile** directory can be accessed only in read-only mode.

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## resourceManager

```TypeScript
resourceManager: resmgr.ResourceManager
```

Object for resource management.

**Type:** resmgr.ResourceManager

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## tempDir

```TypeScript
tempDir: string
```

Temporary directory. For details, see [Application Sandbox](../../../../file-management/app-sandbox-directory.md).

**Type:** string

**Since:** 9

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

