# Context

Context is the context base class of the stage model. It is used to access application-specific resources and perform callbacks for application-level operations.docroot://

**Inheritance/Implementation:** Context extends [BaseContext](arkts-ability-basecontext-c.md)

**Since:** 9

<!--Device-unnamed-declare class Context extends BaseContext--><!--Device-unnamed-declare class Context extends BaseContext-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

<a id="createbundlecontext"></a>
## createBundleContext

```TypeScript
createBundleContext(bundleName: string): Context
```

Creates the context based on the bundle name.

> **NOTE**  
>  
> If there are multiple modules in the stage model, resource ID conflicts may occur. You are advised to use  
> [application.createModuleContext](arkts-ability-application-createmodulecontext-f.md#createmodulecontext-1)  
> instead.  
>  
> This API has been supported since API version 9 and deprecated since API version 12. You are advised to use  
> [application.createBundleContext](arkts-ability-application-createbundlecontext-f-sys.md#createbundlecontext-1)  
> instead.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [createBundleContext](arkts-ability-application-createbundlecontext-f-sys.md#createbundlecontext-1)

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

<!--Device-Context-createBundleContext(bundleName: string): Context--><!--Device-Context-createBundleContext(bundleName: string): Context-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Context](../../apis-mind-spore-lite-kit/arkts-apis/arkts-mindsporelite-mindsporelite-context-i.md) | Context created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

<a id="createmodulecontext"></a>
## createModuleContext

```TypeScript
createModuleContext(bundleName: string, moduleName: string): Context
```

Creates the context based on the bundle name and module name.

> **NOTE**  
>  
> This API has been supported since API version 9 and deprecated since API version 12. You are advised to use  
> [application.createModuleContext](arkts-ability-application-createmodulecontext-f.md#createmodulecontext-1)  
> instead.

**Since:** 9

**Deprecated since:** 12

**Substitutes:** [createModuleContext](arkts-ability-application-createmodulecontext-f.md#createmodulecontext-1)

**Model restriction:** This API can be used only in the stage model.

<!--Device-Context-createModuleContext(bundleName: string, moduleName: string): Context--><!--Device-Context-createModuleContext(bundleName: string, moduleName: string): Context-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| moduleName | string | Yes | Module name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Context](../../apis-mind-spore-lite-kit/arkts-apis/arkts-mindsporelite-mindsporelite-context-i.md) | Context created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

<a id="createmoduleresourcemanager"></a>
## createModuleResourceManager

```TypeScript
createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

Creates a resource management object for a module.

**Since:** 11

**Required permissions:** ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**Model restriction:** This API can be used only in the stage model.

<!--Device-Context-createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager--><!--Device-Context-createModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| moduleName | string | Yes | Module name. |

**Return value:**

| Type | Description |
| --- | --- |
| resmgr.ResourceManager | Object for resource management. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |

<a id="createsystemhspmoduleresourcemanager"></a>
## createSystemHspModuleResourceManager

```TypeScript
createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager
```

Creates a [resource manager](../../apis-localization-kit/arkts-apis/arkts-localization-resourcemanager-getresourcemanager-f.md#getresourcemanager-1)for an OEM-preset [system-level HSP](docroot://quick-start/application-package-glossary.md#system-level-hsp).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-Context-createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager--><!--Device-Context-createSystemHspModuleResourceManager(bundleName: string, moduleName: string): resmgr.ResourceManager-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| moduleName | string | Yes | Module name. |

**Return value:**

| Type | Description |
| --- | --- |
| resmgr.ResourceManager | Returns the system HSP module resource manager. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [16400001](../errorcode-ability.md#16400001-target-application-type-is-not-a-system-hsp) | The input bundleName is not a system HSP. |

