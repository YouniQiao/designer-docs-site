# WindowExtensionContext (System API)

The WindowExtensionContext module provides the context environment for the WindowExtensionAbility. It inherits from [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md).

The module provides the capabilities of the [WindowExtensionAbility](arkts-application-windowextensionability.md), including starting the ability.

> **NOTE**  
>  
> - This module is deprecated since API version 21. You are advised to use  
> [UIExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-uiextensioncontext-c.md) instead.  
>  
> - The APIs provided by this module are system APIs.  
>  
> - The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** WindowExtensionContext extends [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-extensioncontext-c.md)

**Since:** 9

**Deprecated since:** 21

<!--Device-unnamed-declare class WindowExtensionContext extends ExtensionContext--><!--Device-unnamed-declare class WindowExtensionContext extends ExtensionContext-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

<a id="startability"></a>
## startAbility

```TypeScript
startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

Starts an ability. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionContext-startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void--><!--Device-WindowExtensionContext-startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability. |
| options | [StartOptions](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | Yes | Parameters used for starting the ability. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |

<a id="startability-1"></a>
## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

Starts an ability. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the stage model.

<!--Device-WindowExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>--><!--Device-WindowExtensionContext-startAbility(want: Want, options?: StartOptions): Promise<void>-End-->

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](arkts-arkui-want-t-sys.md) | Yes | Want information about the target ability, such as the ability name and bundle name. |
| options | [StartOptions](../../apis-ability-kit/arkts-apis/arkts-ability-app-ability-startoptions-startoptions-c-sys.md) | No | Parameters used for starting the ability. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 and later |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |

