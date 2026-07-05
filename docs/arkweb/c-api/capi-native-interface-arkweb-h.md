# native_interface_arkweb.h

## Overview

Declares the APIs to use javascript proxy and run javascript code.

**Library**: libohweb.so

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Related module**: [Web](capi-web.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWeb_BlanklessInfo](capi-web-arkweb-blanklessinfo.md) | ArkWeb_BlanklessInfo | Describes prediction information about blankless loading, including the first screen similarity, first screenloading duration, and error codes. The application determines whether to enable the blankless loading solution basedon the prediction information. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ArkWebEngineVersion](#arkwebengineversion) | ArkWebEngineVersion | For details about the ArkWeb kernel version, see[Adaptation Guide for the M114 Kernel on OpenHarmony 6.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_6.0.md),[Adaptation Guide for the M114 Kernel on OpenHarmony 7.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_7.0.md). |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*NativeArkWeb_OnJavaScriptCallback)(const char*)](#nativearkweb_onjavascriptcallback) | NativeArkWeb_OnJavaScriptCallback | Defines the javascript callback of the web component. |
| [typedef char* (\*NativeArkWeb_OnJavaScriptProxyCallback)(const char** argv, int32_t argc)](#nativearkweb_onjavascriptproxycallback) | NativeArkWeb_OnJavaScriptProxyCallback | Defines the javascript proxy callback of the web component. |
| [typedef void (\*NativeArkWeb_OnValidCallback)(const char*)](#nativearkweb_onvalidcallback) | NativeArkWeb_OnValidCallback | Defines the valid callback of the web component. |
| [typedef void (\*NativeArkWeb_OnDestroyCallback)(const char*)](#nativearkweb_ondestroycallback) | NativeArkWeb_OnDestroyCallback | Defines the destroy callback of the web component. |
| [typedef void (\*OH_ArkWeb_OnCookieSaveCallback)(ArkWeb_ErrorCode errorCode)](#oh_arkweb_oncookiesavecallback) | OH_ArkWeb_OnCookieSaveCallback | Defines the callback of save cookie. |
| [void OH_NativeArkWeb_RunJavaScript(const char* webTag, const char* jsCode, NativeArkWeb_OnJavaScriptCallback callback)](#oh_nativearkweb_runjavascript) | - | Loads a piece of code and execute JS code in the context of the currently displayed page. |
| [void OH_NativeArkWeb_RegisterJavaScriptProxy(const char* webTag, const char* objName, const char** methodList, NativeArkWeb_OnJavaScriptProxyCallback* callback, int32_t size, bool needRefresh)](#oh_nativearkweb_registerjavascriptproxy) | - | Registers the JavaScript object and method list. |
| [void OH_NativeArkWeb_UnregisterJavaScriptProxy(const char* webTag, const char* objName)](#oh_nativearkweb_unregisterjavascriptproxy) | - | Deletes the registered object which th given name. |
| [void OH_NativeArkWeb_SetJavaScriptProxyValidCallback(const char* webTag, NativeArkWeb_OnValidCallback callback)](#oh_nativearkweb_setjavascriptproxyvalidcallback) | - | Registers the valid callback. |
| [NativeArkWeb_OnValidCallback OH_NativeArkWeb_GetJavaScriptProxyValidCallback(const char* webTag)](#oh_nativearkweb_getjavascriptproxyvalidcallback) | - | Get the valid callback. |
| [void OH_NativeArkWeb_SetDestroyCallback(const char* webTag, NativeArkWeb_OnDestroyCallback callback)](#oh_nativearkweb_setdestroycallback) | - | Registers the destroy callback. |
| [NativeArkWeb_OnDestroyCallback OH_NativeArkWeb_GetDestroyCallback(const char* webTag)](#oh_nativearkweb_getdestroycallback) | - | Get the destroy callback. |
| [ArkWeb_ErrorCode OH_NativeArkWeb_LoadData(const char* webTag, const char* data, const char* mimeType, const char* encoding, const char* baseUrl, const char* historyUrl)](#oh_nativearkweb_loaddata) | - | Loads the data or URL.This function should be called on main thread. |
| [void OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject, const char* permission)](#oh_nativearkweb_registerasyncthreadjavascriptproxy) | - | Registers a JavaScript object with callback methods, which may return values. This object will be injectedinto all frames of the current page, including all iframes, and will be accessible using the specifiedname in ArkWeb_ProxyObjectWithResult. The object will only be available in JavaScript after the nextload or reload.These methods will be executed in the ArkWeb worker thread. |
| [ArkWeb_BlanklessErrorCode OH_NativeArkWeb_SetBlanklessLoadingWithKey(const char* webTag, const char* key, bool isStarted)](#oh_nativearkweb_setblanklessloadingwithkey) | - | Sets whether to enable blankless loading. This API must be used together with the [OH_NativeArkWeb_GetBlanklessInfoWithKey](capi-native-interface-arkweb-h.md#oh_nativearkweb_getblanklessinfowithkey)API. |
| [void OH_NativeArkWeb_ClearBlanklessLoadingCache(const char* key[], uint32_t size)](#oh_nativearkweb_clearblanklessloadingcache) | - | Clears the blankless loading cache of the page with a specified key value. |
| [ArkWeb_BlanklessInfo OH_NativeArkWeb_GetBlanklessInfoWithKey(const char* webTag, const char* key)](#oh_nativearkweb_getblanklessinfowithkey) | - | Obtains the first screen loading prediction information, and starts to generate the loading transition frame.The application determines whether to enable blankless loading based on the information. For details, see [ArkWeb_BlanklessInfo](capi-web-arkweb-blanklessinfo.md). This API must be used together with the [OH_NativeArkWeb_SetBlanklessLoadingWithKey](capi-native-interface-arkweb-h.md#oh_nativearkweb_setblanklessloadingwithkey) API and must be calledbefore the page loading API is triggered and after **WebViewController** is bound to the **Web** component. |
| [uint32_t OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity(uint32_t capacity)](#oh_nativearkweb_setblanklessloadingcachecapacity) | - | Sets the persistent cache capacity of the blankless loading solution and returns the value that takes effect.The default cache capacity is 30 MB, and the maximum cache capacity is 100 MB. When this limit is exceeded,transition frames that are not frequently used are eliminated. |
| [ArkWeb_ErrorCode OH_ArkWebCookieManager_SaveCookieSync()](#oh_arkwebcookiemanager_savecookiesync) | - | Ensure that all cookies currently accessible via the CookieManager API have been persisted to disk.If you want to use this interface in a non-UI thread, you need to initialize the CookieManager interfaceusing OH_ArkWeb_GetNativeAPI first. |
| [void OH_ArkWebCookieManager_SaveCookieAsync(OH_ArkWeb_OnCookieSaveCallback callback)](#oh_arkwebcookiemanager_savecookieasync) | - | Ensure that all cookies currently accessible via the CookieManager API have been persisted to disk.Without initializing the CookieManager interface, this call will automatically be executed on the UI thread. |
| [void OH_NativeArkWeb_SetActiveWebEngineVersion(ArkWebEngineVersion webEngineVersion)](#oh_nativearkweb_setactivewebengineversion) | - |  |
| [ArkWebEngineVersion OH_NativeArkWeb_GetActiveWebEngineVersion()](#oh_nativearkweb_getactivewebengineversion) | - |  |
| [void OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager(bool lazy)](#oh_nativearkweb_lazyinitializewebengineincookiemanager) | - |  |
| [bool OH_NativeArkWeb_IsActiveWebEngineEvergreen()](#oh_nativearkweb_isactivewebengineevergreen) | - |  |

## Enum type description

### ArkWebEngineVersion

```c
enum ArkWebEngineVersion
```

**Description**

For details about the ArkWeb kernel version, see[Adaptation Guide for the M114 Kernel on OpenHarmony 6.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_6.0.md),[Adaptation Guide for the M114 Kernel on OpenHarmony 7.0](https://gitcode.com/openharmony-tpc/chromium_src/blob/master/web/ReleaseNote/CompatibleWithLegacyWebEngine_7.0.md).

**Since**: 20

| Enum item | Description |
| -- | -- |
| SYSTEM_DEFAULT = 0 | Default system kernel. For OpenHarmony 6.0, the default kernel is M132.<br>**Since**: 20 |
| ARKWEB_M114 = 1 | Legacy kernel of OpenHarmony 6.0. You can select this legacy kernel. If it does not exist, the settingis invalid.<br>**Since**: 20 |
| ARKWEB_M132 = 2 | Evergreen kernel of OpenHarmony 6.0, which is M132 by default. If it does not exist, the setting isinvalid.<br>**Since**: 20 |
| ARKWEB_M144 = 3 | Evergreen kernel of OpenHarmony 7.0, which is M144 by default. If it does not exist, the setting isinvalid.<br>**Since**: 26.0.0 |
| ARKWEB_EVERGREEN = 99999 | Evergreen kernel, which is the latest kernel of the system. You can choose to use the latest kernel foreach system version. This setting takes effect for OpenHarmony 6.1 and later versions.<br>**Since**: 23 |


## Function description

### NativeArkWeb_OnJavaScriptCallback()

```c
typedef void (*NativeArkWeb_OnJavaScriptCallback)(const char*)
```

**Description**

Defines the javascript callback of the web component.

**Since**: 11

### NativeArkWeb_OnJavaScriptProxyCallback()

```c
typedef char* (*NativeArkWeb_OnJavaScriptProxyCallback)(const char** argv, int32_t argc)
```

**Description**

Defines the javascript proxy callback of the web component.

**Since**: 11

### NativeArkWeb_OnValidCallback()

```c
typedef void (*NativeArkWeb_OnValidCallback)(const char*)
```

**Description**

Defines the valid callback of the web component.

**Since**: 11

### NativeArkWeb_OnDestroyCallback()

```c
typedef void (*NativeArkWeb_OnDestroyCallback)(const char*)
```

**Description**

Defines the destroy callback of the web component.

**Since**: 11

### OH_ArkWeb_OnCookieSaveCallback()

```c
typedef void (*OH_ArkWeb_OnCookieSaveCallback)(ArkWeb_ErrorCode errorCode)
```

**Description**

Defines the callback of save cookie.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ArkWeb_ErrorCode errorCode | {@link ARKWEB_SUCCESS} Save cookie success.{@link ARKWEB_COOKIE_MANAGER_INITIALIZE_FAILED} Cookie manager initialize failed.{@link ARKWEB_COOKIE_SAVE_FAILED} Save cookie failed. |

### OH_NativeArkWeb_RunJavaScript()

```c
void OH_NativeArkWeb_RunJavaScript(const char* webTag, const char* jsCode, NativeArkWeb_OnJavaScriptCallback callback)
```

**Description**

Loads a piece of code and execute JS code in the context of the currently displayed page.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| const char* jsCode | a piece of javascript code. |
| [NativeArkWeb_OnJavaScriptCallback](capi-native-interface-arkweb-h.md#nativearkweb_onjavascriptcallback) callback | Callbacks execute JavaScript script results. |

### OH_NativeArkWeb_RegisterJavaScriptProxy()

```c
void OH_NativeArkWeb_RegisterJavaScriptProxy(const char* webTag, const char* objName, const char** methodList, NativeArkWeb_OnJavaScriptProxyCallback* callback, int32_t size, bool needRefresh)
```

**Description**

Registers the JavaScript object and method list.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| const char* objName | The name of the registered object. |
| const char** methodList | The method of the application side JavaScript object participating in the registration. |
| [NativeArkWeb_OnJavaScriptProxyCallback](capi-native-interface-arkweb-h.md#nativearkweb_onjavascriptproxycallback)* callback | The callback function registered by developer is called back when HTML side uses. |
| int32_t size | The size of the callback. |
| bool needRefresh | if web need refresh. |

### OH_NativeArkWeb_UnregisterJavaScriptProxy()

```c
void OH_NativeArkWeb_UnregisterJavaScriptProxy(const char* webTag, const char* objName)
```

**Description**

Deletes the registered object which th given name.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| const char* objName | The name of the registered object. |

### OH_NativeArkWeb_SetJavaScriptProxyValidCallback()

```c
void OH_NativeArkWeb_SetJavaScriptProxyValidCallback(const char* webTag, NativeArkWeb_OnValidCallback callback)
```

**Description**

Registers the valid callback.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| [NativeArkWeb_OnValidCallback](capi-native-interface-arkweb-h.md#nativearkweb_onvalidcallback) callback | The callback in which we can register object. |

### OH_NativeArkWeb_GetJavaScriptProxyValidCallback()

```c
NativeArkWeb_OnValidCallback OH_NativeArkWeb_GetJavaScriptProxyValidCallback(const char* webTag)
```

**Description**

Get the valid callback.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |

**Returns**:

| Type | Description |
| -- | -- |
| [NativeArkWeb_OnValidCallback](capi-native-interface-arkweb-h.md#nativearkweb_onvalidcallback) | Return the valid callback function registered. If the valid callback function<br>         specified by the parameter webTag is not set, a null pointer is returned. |

### OH_NativeArkWeb_SetDestroyCallback()

```c
void OH_NativeArkWeb_SetDestroyCallback(const char* webTag, NativeArkWeb_OnDestroyCallback callback)
```

**Description**

Registers the destroy callback.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| [NativeArkWeb_OnDestroyCallback](capi-native-interface-arkweb-h.md#nativearkweb_ondestroycallback) callback | the destroy callback. |

### OH_NativeArkWeb_GetDestroyCallback()

```c
NativeArkWeb_OnDestroyCallback OH_NativeArkWeb_GetDestroyCallback(const char* webTag)
```

**Description**

Get the destroy callback.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |

**Returns**:

| Type | Description |
| -- | -- |
| [NativeArkWeb_OnDestroyCallback](capi-native-interface-arkweb-h.md#nativearkweb_ondestroycallback) | Return the destroy callback function registered. If the destroy callback<br>         function specified by the parameter webTag is not set,<br>         a null pointer is returned. |

### OH_NativeArkWeb_LoadData()

```c
ArkWeb_ErrorCode OH_NativeArkWeb_LoadData(const char* webTag, const char* data, const char* mimeType, const char* encoding, const char* baseUrl, const char* historyUrl)
```

**Description**

Loads the data or URL.This function should be called on main thread.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 15

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | The name of the web component. |
| const char* data | A string encoded according to "Base64" or "URL", should not be NULL. |
| const char* mimeType | Media type. For example: "text/html", should not be NULL. |
| const char* encoding | Encoding type. For example: "UTF-8", should not be NULL. |
| const char* baseUrl | A specified URL path ("http"/"https"/"data" protocol),which is assigned to window.origin by the Web component. |
| const char* historyUrl | History URL. When it is not empty, it can be managed byhistory records to realize the back and forth function. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | LoadData result code.<br>         {@link ARKWEB_SUCCESS} load data success.<br>         {@link ARKWEB_INVALID_PARAM} Mandatory parameters are left unspecified or<br>                                      Incorrect parameter types or Parameter verification failed.<br>         {@link ARKWEB_INIT_ERROR} Initialization error, can't get a valid Web for the webTag.<br>         {@link ARKWEB_LIBRARY_OPEN_FAILURE} Failed to open the library.<br>         {@link ARKWEB_LIBRARY_SYMBOL_NOT_FOUND} The required symbol was not found in the library. |

### OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy()

```c
void OH_NativeArkWeb_RegisterAsyncThreadJavaScriptProxy(const char* webTag, const ArkWeb_ProxyObjectWithResult* proxyObject, const char* permission)
```

**Description**

Registers a JavaScript object with callback methods, which may return values. This object will be injectedinto all frames of the current page, including all iframes, and will be accessible using the specifiedname in ArkWeb_ProxyObjectWithResult. The object will only be available in JavaScript after the nextload or reload.These methods will be executed in the ArkWeb worker thread.

**System capability**: SystemCapability.Web.Webview.Core

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | Name of the web component. |
| [const ArkWeb_ProxyObjectWithResult](capi-web-arkweb-proxyobjectwithresult.md)* proxyObject | JavaScript object to register, the object has callback functions with return value. |
| const char* permission | Optional JSON string(default is null) for JSBridge permission control,allowing URL whitelist configuration at object-level and method-level. |

### OH_NativeArkWeb_SetBlanklessLoadingWithKey()

```c
ArkWeb_BlanklessErrorCode OH_NativeArkWeb_SetBlanklessLoadingWithKey(const char* webTag, const char* key, bool isStarted)
```

**Description**

Sets whether to enable blankless loading. This API must be used together with the [OH_NativeArkWeb_GetBlanklessInfoWithKey](capi-native-interface-arkweb-h.md#oh_nativearkweb_getblanklessinfowithkey)API.

**Required permission**: ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | Name of the **Web** component. |
| const char* key | Key value that uniquely identifies the page. The value must be the same as the key value of the [OH_NativeArkWeb_GetBlanklessInfoWithKey](capi-native-interface-arkweb-h.md#oh_nativearkweb_getblanklessinfowithkey)API.The value cannot be empty and can contain a maximum of 2048 characters.When an invalid value is set, the error code {@link ArkWeb_BlanklessErrorCode} is returned and the frame insertiondoes not take effect. |
| bool isStarted | Whether to enable frame insertion. The value **true** indicates to enable frame insertion, and false** indicates the opposite.The default value is **false**. |

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_BlanklessErrorCode | Whether the API is successfully called. For details, see {@link ArkWeb_BlanklessErrorCode}. |

### OH_NativeArkWeb_ClearBlanklessLoadingCache()

```c
void OH_NativeArkWeb_ClearBlanklessLoadingCache(const char* key[], uint32_t size)
```

**Description**

Clears the blankless loading cache of the page with a specified key value.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* key[] | The list of key values of pages cached in the blankless loading solution. These key values arespecified in OH_NativeArkWeb_GetBlanklessInfoWithKey.The default value is the list of key values of all pages cached in the blankless loading solution.The key length cannot exceed 2048 characters, and the number of keys must be less than or equal to 100. TheURL is the same as that input to the Web component during page loading.When the key length exceeds 2048 characters, the key does not take effect. When the number of keys exceeds100, the first 100 keys are used. If this parameter is set to NULL, the default value is used. |
| uint32_t size | Size of the key array.The default value is **0**.The value ranges from 0 to 100. If the size exceeds 100, the first 100 keys are used.When an invalid value is set, the value **0** is used. |

### OH_NativeArkWeb_GetBlanklessInfoWithKey()

```c
ArkWeb_BlanklessInfo OH_NativeArkWeb_GetBlanklessInfoWithKey(const char* webTag, const char* key)
```

**Description**

Obtains the first screen loading prediction information, and starts to generate the loading transition frame.The application determines whether to enable blankless loading based on the information. For details, see [ArkWeb_BlanklessInfo](capi-web-arkweb-blanklessinfo.md). This API must be used together with the [OH_NativeArkWeb_SetBlanklessLoadingWithKey](capi-native-interface-arkweb-h.md#oh_nativearkweb_setblanklessloadingwithkey) API and must be calledbefore the page loading API is triggered and after **WebViewController** is bound to the **Web** component.

**Required permission**: ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char* webTag | Name of the **Web** component. |
| const char* key | Key value that uniquely identifies the page.The value cannot be empty and can contain a maximum of 2048 characters.Invalid values do not take effect. |

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWeb_BlanklessInfo](capi-web-arkweb-blanklessinfo.md) | Prediction information about blankless loading, including the first screen similarity and first screen<br> loading duration. The application determines whether to enable blankless loading based on the prediction information. |

### OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity()

```c
uint32_t OH_NativeArkWeb_SetBlanklessLoadingCacheCapacity(uint32_t capacity)
```

**Description**

Sets the persistent cache capacity of the blankless loading solution and returns the value that takes effect.The default cache capacity is 30 MB, and the maximum cache capacity is 100 MB. When this limit is exceeded,transition frames that are not frequently used are eliminated.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint32_t capacity | Persistent cache capacity, in MB. The maximum value is 100 MB.The default value is 30 MB.The value ranges from 0 to 100. If this parameter is set to **0**, no cache capacity is available and thefunctionality is disabled globally.When a value less than 0 is set, the value **0** takes effect. When a value greater than 100 is set, the value **100* takes effect. |

**Returns**:

| Type | Description |
| -- | -- |
| uint32_t | The effective value that ranges from 0 MB to 100 MB.<br> When a value less than 0 is set, the value 0 takes effect. When a value greater than 100 is set, the value 100<br>  takes effect. |

### OH_ArkWebCookieManager_SaveCookieSync()

```c
ArkWeb_ErrorCode OH_ArkWebCookieManager_SaveCookieSync()
```

**Description**

Ensure that all cookies currently accessible via the CookieManager API have been persisted to disk.If you want to use this interface in a non-UI thread, you need to initialize the CookieManager interfaceusing OH_ArkWeb_GetNativeAPI first.

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| ArkWeb_ErrorCode | Save cookie result code.<br>         {@link ARKWEB_SUCCESS} Save cookie success.<br>         {@link ARKWEB_COOKIE_SAVE_FAILED} Save cookie failed.<br>         {@link ARKWEB_COOKIE_MANAGER_INITIALIZE_FAILED} The CookieManager initialize failed.<br>         {@link ARKWEB_COOKIE_MANAGER_NOT_INITIALIZED} It is not allowed to call on a non-UI thread without<br>                                                       initializing the CookieManager interface. please<br>   													 initialize the CookieManager interface using<br>  													 OH_ArkWeb_GetNativeAPI first. |

### OH_ArkWebCookieManager_SaveCookieAsync()

```c
void OH_ArkWebCookieManager_SaveCookieAsync(OH_ArkWeb_OnCookieSaveCallback callback)
```

**Description**

Ensure that all cookies currently accessible via the CookieManager API have been persisted to disk.Without initializing the CookieManager interface, this call will automatically be executed on the UI thread.

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_ArkWeb_OnCookieSaveCallback](capi-native-interface-arkweb-h.md#oh_arkweb_oncookiesavecallback) callback | Callback execute when save cookie done. |

### OH_NativeArkWeb_SetActiveWebEngineVersion()

```c
void OH_NativeArkWeb_SetActiveWebEngineVersion(ArkWebEngineVersion webEngineVersion)
```

**Description**

**Since**: 20

**Parameters**:

| Parameter | Description |
| -- | -- |
| { | ArkWebEngineVersion } webEngineVersion - ArkWeb kernel version. For details, see [ArkWebEngineVersion](capi-native-interface-arkweb-h.md#arkwebengineversion). |

### OH_NativeArkWeb_GetActiveWebEngineVersion()

```c
ArkWebEngineVersion OH_NativeArkWeb_GetActiveWebEngineVersion()
```

**Description**

**Since**: 20

**Returns**:

| Type | Description |
| -- | -- |
| [ArkWebEngineVersion](capi-native-interface-arkweb-h.md#arkwebengineversion) | The current ArkWeb kernel version defined by [ArkWebEngineVersion](capi-native-interface-arkweb-h.md#arkwebengineversion). |

### OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager()

```c
void OH_NativeArkWeb_LazyInitializeWebEngineInCookieManager(bool lazy)
```

**Description**

**Since**: 22

**Parameters**:

| Parameter | Description |
| -- | -- |
| { | bool } lazy - Controls whether to delay the initialization of the web engine. |

### OH_NativeArkWeb_IsActiveWebEngineEvergreen()

```c
bool OH_NativeArkWeb_IsActiveWebEngineEvergreen()
```

**Description**

**Since**: 23

**Returns**:

| Type | Description |
| -- | -- |
| bool | Whether the kernel used by the application is the evergreen kernel. The value true indicates that the<br>         kernel used by the application is the evergreen kernel, and false indicates the opposite. |


