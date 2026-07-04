# content_embed_proxy.h

## Overview

Defines the content embed proxy APIs.

**Library**: libcontent_embed_ndk.so

**System capability**: SystemCapability.ContentEmbed.ObjectEditor

**Since**: 24

**Related module**: [ContentEmbed](capi-contentembed.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_Info](capi-contentembed-contentembed-info.md) | ContentEmbed_Info | Define the ContentEmbed_Info structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Format](capi-contentembed-contentembed-format.md) | ContentEmbed_Format | Define the ContentEmbed_Format structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) | ContentEmbed_ExtensionProxy | Define the ContentEmbed_ExtensionProxy structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) | ContentEmbed_Document | Define the ContentEmbed_Document structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Capability](capi-contentembed-contentembed-capability.md) | ContentEmbed_Capability | Define the ContentEmbed_Capability structure type.Provides methods for Content Embed Kit. |

### Macro

| Name | Description |
| -- | -- |
| MAX_NAME_LENGTH (1 * 1024) | The maximum length of a name.<br>**Since**: 24 |
| MAX_DESCRIPTION_LENGTH (1 * 1024) | The maximum length of a description.<br>**Since**: 24 |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_ErrorCode OH_ContentEmbed_CreateContentEmbedInfo(ContentEmbed_Info **info)](#oh_contentembed_createcontentembedinfo) | - | Create a new [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyContentEmbedInfo](capi-content-embed-proxy-h.md#oh_contentembed_destroycontentembedinfo) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyContentEmbedInfo(ContentEmbed_Info *info)](#oh_contentembed_destroycontentembedinfo) | - | Destroy an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance and reclaims the memory occupied by the instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetContentEmbedInfo(const char *locale, ContentEmbed_Info *info)](#oh_contentembed_getcontentembedinfo) | - | Get an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance based on the locale. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetFormatCountFromInfo(const ContentEmbed_Info *info, uint32_t *count)](#oh_contentembed_getformatcountfrominfo) | - | Get format count from an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetFormatFromInfo(const ContentEmbed_Info *info, uint32_t index, ContentEmbed_Format **format)](#oh_contentembed_getformatfrominfo) | - | Get [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance from an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance using an index. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_CreateContentEmbedFormat(ContentEmbed_Format **format)](#oh_contentembed_createcontentembedformat) | - | Create a new [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyContentEmbedFormat](capi-content-embed-proxy-h.md#oh_contentembed_destroycontentembedformat) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyContentEmbedFormat(ContentEmbed_Format *format)](#oh_contentembed_destroycontentembedformat) | - | Destroy an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance and reclaims the memory occupied by the instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetContentEmbedFormatByOEidAndLocale(const char *oeid, const char *locale, ContentEmbed_Format *format)](#oh_contentembed_getcontentembedformatbyoeidandlocale) | - | Get a [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance using oeid and locale. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetOEidFromFormat(const ContentEmbed_Format *format, char *oeid)](#oh_contentembed_getoeidfromformat) | - | Get oeid from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetNameAndDescriptionFromFormat(const ContentEmbed_Format *format, char *name, char *description)](#oh_contentembed_getnameanddescriptionfromformat) | - | Get name and description from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_GetIconFromFormat(const ContentEmbed_Format *format, OH_PixelmapNative **icon)](#oh_contentembed_geticonfromformat) | - | Get icon from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.The caller is responsible for destroying the icon by calling{@link OH_PixelmapNative_Destroy} to avoid memory leaks. |
| [char** OH_ContentEmbed_GetFileNameExtensionsFromFormat(const ContentEmbed_Format *format, unsigned int *count)](#oh_contentembed_getfilenameextensionsfromformat) | - | Get all file name extensions in the [ContentEmbed_Format](capi-contentembed-contentembed-format.md) data. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_CreateExtensionProxy(ContentEmbed_Document *document, ContentEmbed_ExtensionProxy **proxy, void *contextPtr)](#oh_contentembed_createextensionproxy) | - | Create a new [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance through [ContentEmbed_Document](capi-contentembed-contentembed-document.md) object.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyExtensionProxy](capi-content-embed-proxy-h.md#oh_contentembed_destroyextensionproxy) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyExtensionProxy(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_destroyextensionproxy) | - | Destroy an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance and reclaims the memory occupied by the instance. |
| [typedef void (\*OH_ContentEmbed_ClientCallbackOnUpdateFunc)(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_clientcallbackonupdatefunc) | OH_ContentEmbed_ClientCallbackOnUpdateFunc | Called when the server notifies the client to update the content embed document.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnUpdateFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_ClientCallbackOnErrorFunc)(ContentEmbed_ExtensionProxy *proxy, ContentEmbed_ErrorCode error)](#oh_contentembed_clientcallbackonerrorfunc) | OH_ContentEmbed_ClientCallbackOnErrorFunc | Called when the server notifies the client that an error has occurred.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnErrorFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc)(ContentEmbed_ExtensionProxy *proxy, bool dataModified)](#oh_contentembed_clientcallbackoneditingfinishedfunc) | OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc | Called when content embed document editing is completed.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnEditingFinishedFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc)(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_clientcallbackonextensionstoppedfunc) | OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc | Called when the content embed document extension is stopped.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnExtensionStoppedFunc} to complete the registration. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnUpdateFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnUpdateFunc onUpdateFunc)](#oh_contentembed_proxy_registeronupdatefunc) | - | Register function [OH_ContentEmbed_ClientCallbackOnUpdateFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonupdatefunc) into [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnErrorFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnErrorFunc onErrorFunc)](#oh_contentembed_proxy_registeronerrorfunc) | - | Register function [OH_ContentEmbed_ClientCallbackOnErrorFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonerrorfunc) into [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnEditingFinishedFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc onEditingFinishedFunc)](#oh_contentembed_proxy_registeroneditingfinishedfunc) | - | Register function [OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackoneditingfinishedfunc) into[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnExtensionStoppedFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc onExtensionStoppedFunc)](#oh_contentembed_proxy_registeronextensionstoppedfunc) | - | Register function [OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonextensionstoppedfunc) into[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_StartWork(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_proxy_startwork) | - | Start the server application. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_StopWork(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_proxy_stopwork) | - | Stop the server application. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetSnapshot(ContentEmbed_ExtensionProxy *proxy, OH_PixelmapNative **snapshot)](#oh_contentembed_proxy_getsnapshot) | - | Get the document snapshot from the server application. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_DoEdit(ContentEmbed_ExtensionProxy *proxy)](#oh_contentembed_proxy_doedit) | - | Client notifies the server to edit the document. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetEditStatus(ContentEmbed_ExtensionProxy *proxy, bool *isEditing, bool *isModified)](#oh_contentembed_proxy_geteditstatus) | - | Client retrieves document editing status from the server. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetCapability(ContentEmbed_ExtensionProxy *proxy, uint32_t *bitmask)](#oh_contentembed_proxy_getcapability) | - | Client obtains server capabilities. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetDocument(ContentEmbed_ExtensionProxy *proxy, ContentEmbed_Document **ceDocument)](#oh_contentembed_proxy_getdocument) | - | Get the document from the [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance.The document can be created by calling {@link OH_ContentEmbed_CreateDocumentByOEid},{@link OH_ContentEmbed_CreateDocumentByFile}, or {@link OH_ContentEmbed_LoadDocumentFromFile}.The document should be destroyed by calling{@link OH_ContentEmbed_DestroyDocument} when it is no longer needed. |

## Function description

### OH_ContentEmbed_CreateContentEmbedInfo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_CreateContentEmbedInfo(ContentEmbed_Info **info)
```

**Description**

Create a new [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyContentEmbedInfo](capi-content-embed-proxy-h.md#oh_contentembed_destroycontentembedinfo) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Info](capi-contentembed-contentembed-info.md) **info | Represents a pointer to an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance which will be created. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyContentEmbedInfo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyContentEmbedInfo(ContentEmbed_Info *info)
```

**Description**

Destroy an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Info](capi-contentembed-contentembed-info.md) *info | Represents a pointer to an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetContentEmbedInfo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetContentEmbedInfo(const char *locale, ContentEmbed_Info *info)
```

**Description**

Get an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance based on the locale.

**Required permission**: ohos.permission.CONNECT_OBJECTEDITOR_EXTENSION

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *locale | Represents locale value. |
| [ContentEmbed_Info](capi-contentembed-contentembed-info.md) *info | Represents a pointer to an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_PERMISSION_DENIED](capi-content-embed-common-h.md#contentembed_errorcode) - permission verification failed.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetFormatCountFromInfo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetFormatCountFromInfo(const ContentEmbed_Info *info, uint32_t *count)
```

**Description**

Get format count from an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Info](capi-contentembed-contentembed-info.md) *info | Represents a pointer to an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |
| uint32_t *count | Output parameter indicating the number of [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instancesin the [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetFormatFromInfo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetFormatFromInfo(const ContentEmbed_Info *info, uint32_t index, ContentEmbed_Format **format)
```

**Description**

Get [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance from an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance using an index.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Info](capi-contentembed-contentembed-info.md) *info | Represents a pointer to an [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |
| uint32_t index | Represents the index of the internal array within the [ContentEmbed_Info](capi-contentembed-contentembed-info.md) instance. |
| [ContentEmbed_Format](capi-contentembed-contentembed-format.md) **format | Output parameter represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_CreateContentEmbedFormat()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_CreateContentEmbedFormat(ContentEmbed_Format **format)
```

**Description**

Create a new [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyContentEmbedFormat](capi-content-embed-proxy-h.md#oh_contentembed_destroycontentembedformat) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Format](capi-contentembed-contentembed-format.md) **format | Represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance which will be created. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyContentEmbedFormat()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyContentEmbedFormat(ContentEmbed_Format *format)
```

**Description**

Destroy an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetContentEmbedFormatByOEidAndLocale()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetContentEmbedFormatByOEidAndLocale(const char *oeid, const char *locale, ContentEmbed_Format *format)
```

**Description**

Get a [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance using oeid and locale.

**Required permission**: ohos.permission.CONNECT_OBJECTEDITOR_EXTENSION

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *oeid | Represents the oeid value. |
| const char *locale | Represents the locale value. |
| [ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Output parameter represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_PERMISSION_DENIED](capi-content-embed-common-h.md#contentembed_errorcode) - permission verification failed.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetOEidFromFormat()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetOEidFromFormat(const ContentEmbed_Format *format, char *oeid)
```

**Description**

Get oeid from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |
| char *oeid | Output parameter represents the oeid value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetNameAndDescriptionFromFormat()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetNameAndDescriptionFromFormat(const ContentEmbed_Format *format, char *name, char *description)
```

**Description**

Get name and description from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |
| char *name | Output parameter represents the name value. |
| char *description | Output parameter represents the description value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetIconFromFormat()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_GetIconFromFormat(const ContentEmbed_Format *format, OH_PixelmapNative **icon)
```

**Description**

Get icon from [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance.The caller is responsible for destroying the icon by calling{@link OH_PixelmapNative_Destroy} to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Represents a pointer to an [ContentEmbed_Format](capi-contentembed-contentembed-format.md) instance. |
| OH_PixelmapNative **icon | The output pixel map of the application. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_GetFileNameExtensionsFromFormat()

```c
char** OH_ContentEmbed_GetFileNameExtensionsFromFormat(const ContentEmbed_Format *format, unsigned int *count)
```

**Description**

Get all file name extensions in the [ContentEmbed_Format](capi-contentembed-contentembed-format.md) data.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Format](capi-contentembed-contentembed-format.md) *format | Represents a pointer to an instance of [ContentEmbed_Format](capi-contentembed-contentembed-format.md). |
| unsigned int *count | Represents the file name extensions count that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| char** | Returns string array that in [ContentEmbed_Format](capi-contentembed-contentembed-format.md) when input parameters valid,<br>         otherwise return nullptr. |

### OH_ContentEmbed_CreateExtensionProxy()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_CreateExtensionProxy(ContentEmbed_Document *document, ContentEmbed_ExtensionProxy **proxy, void *contextPtr)
```

**Description**

Create a new [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance through [ContentEmbed_Document](capi-contentembed-contentembed-document.md) object.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyExtensionProxy](capi-content-embed-proxy-h.md#oh_contentembed_destroyextensionproxy) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) **proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be created. |
| void *contextPtr | Represents a pointer to an context instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyExtensionProxy()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyExtensionProxy(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Destroy an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_ClientCallbackOnUpdateFunc()

```c
typedef void (*OH_ContentEmbed_ClientCallbackOnUpdateFunc)(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Called when the server notifies the client to update the content embed document.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnUpdateFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionProxy \*proxy | Represents a pointer to an[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set in. |

### OH_ContentEmbed_ClientCallbackOnErrorFunc()

```c
typedef void (*OH_ContentEmbed_ClientCallbackOnErrorFunc)(ContentEmbed_ExtensionProxy *proxy, ContentEmbed_ErrorCode error)
```

**Description**

Called when the server notifies the client that an error has occurred.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnErrorFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionProxy \*proxy | Represents a pointer to an[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set in. |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) error | Indicates that the Specific error codes. |

### OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc()

```c
typedef void (*OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc)(ContentEmbed_ExtensionProxy *proxy, bool dataModified)
```

**Description**

Called when content embed document editing is completed.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnEditingFinishedFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionProxy \*proxy | Represents a pointer to an[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set in. |
| bool dataModified | Indicates whether the data has been modified. |

### OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc()

```c
typedef void (*OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc)(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Called when the content embed document extension is stopped.You need to implement this function, set it to [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) through {@linkOH_ContentEmbed_Proxy_RegisterOnExtensionStoppedFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionProxy \*proxy | Represents a pointer to an[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set in. |

### OH_ContentEmbed_Proxy_RegisterOnUpdateFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnUpdateFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnUpdateFunc onUpdateFunc)
```

**Description**

Register function [OH_ContentEmbed_ClientCallbackOnUpdateFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonupdatefunc) into [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set function in. |
| [OH_ContentEmbed_ClientCallbackOnUpdateFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonupdatefunc) onUpdateFunc | Represents function [OH_ContentEmbed_ClientCallbackOnUpdateFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonupdatefunc) which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_RegisterOnErrorFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnErrorFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnErrorFunc onErrorFunc)
```

**Description**

Register function [OH_ContentEmbed_ClientCallbackOnErrorFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonerrorfunc) into [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set function in. |
| [OH_ContentEmbed_ClientCallbackOnErrorFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonerrorfunc) onErrorFunc | Represents function [OH_ContentEmbed_ClientCallbackOnErrorFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonerrorfunc) which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_RegisterOnEditingFinishedFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnEditingFinishedFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc onEditingFinishedFunc)
```

**Description**

Register function [OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackoneditingfinishedfunc) into[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set function in. |
| [OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackoneditingfinishedfunc) onEditingFinishedFunc | Represents function [OH_ContentEmbed_ClientCallbackOnEditingFinishedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackoneditingfinishedfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_RegisterOnExtensionStoppedFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_RegisterOnExtensionStoppedFunc(ContentEmbed_ExtensionProxy *proxy, OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc onExtensionStoppedFunc)
```

**Description**

Register function [OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonextensionstoppedfunc) into[ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance which will be set function in. |
| [OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonextensionstoppedfunc) onExtensionStoppedFunc | Represents function [OH_ContentEmbed_ClientCallbackOnExtensionStoppedFunc](capi-content-embed-proxy-h.md#oh_contentembed_clientcallbackonextensionstoppedfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_StartWork()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_StartWork(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Start the server application.

**Required permission**: ohos.permission.CONNECT_OBJECTEDITOR_EXTENSION

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_PERMISSION_DENIED](capi-content-embed-common-h.md#contentembed_errorcode) - permission verification failed.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED](capi-content-embed-common-h.md#contentembed_errorcode) - the client callback is not registered.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br>     [CE_ERR_CONNECT_LIMIT_EXCEED](capi-content-embed-common-h.md#contentembed_errorcode) - connections exceeds the limit.<br>     [CE_ERR_FILE_NOT_GRANT](capi-content-embed-common-h.md#contentembed_errorcode) - file is not authorized.<br>     [CE_ERR_DISK_FULL](capi-content-embed-common-h.md#contentembed_errorcode) - the disk is full.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_StopWork()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_StopWork(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Stop the server application.

**Required permission**: ohos.permission.CONNECT_OBJECTEDITOR_EXTENSION

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_PERMISSION_DENIED](capi-content-embed-common-h.md#contentembed_errorcode) - permission verification failed.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_GetSnapshot()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetSnapshot(ContentEmbed_ExtensionProxy *proxy, OH_PixelmapNative **snapshot)
```

**Description**

Get the document snapshot from the server application.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |
| OH_PixelmapNative **snapshot | The output document snapshot of the document. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_EXTENSION_ERROR](capi-content-embed-common-h.md#contentembed_errorcode) - an error occurred in the extension application.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br>     [CE_ERR_EXTENSION_NOT_SUPPORT](capi-content-embed-common-h.md#contentembed_errorcode) - the capability is not supported by OE Extension.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_DoEdit()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_DoEdit(ContentEmbed_ExtensionProxy *proxy)
```

**Description**

Client notifies the server to edit the document.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_EXTENSION_ERROR](capi-content-embed-common-h.md#contentembed_errorcode) - an error occurred in the extension application.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br>     [CE_ERR_EXTENSION_NOT_SUPPORT](capi-content-embed-common-h.md#contentembed_errorcode) - the capability is not supported by OE Extension.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_GetEditStatus()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetEditStatus(ContentEmbed_ExtensionProxy *proxy, bool *isEditing, bool *isModified)
```

**Description**

Client retrieves document editing status from the server.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |
| bool *isEditing | Output parameter indicating that the content embed document is being edited. |
| bool *isModified | Output parameter indicating that the content embed document has been modified. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_EXTENSION_ERROR](capi-content-embed-common-h.md#contentembed_errorcode) - an error occurred in the extension application.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_GetCapability()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetCapability(ContentEmbed_ExtensionProxy *proxy, uint32_t *bitmask)
```

**Description**

Client obtains server capabilities.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |
| uint32_t *bitmask | Output parameter indicating the capabilities of a content embed extension instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_EXTENSION_ERROR](capi-content-embed-common-h.md#contentembed_errorcode) - an error occurred in the extension application.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Proxy_GetDocument()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Proxy_GetDocument(ContentEmbed_ExtensionProxy *proxy, ContentEmbed_Document **ceDocument)
```

**Description**

Get the document from the [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance.The document can be created by calling {@link OH_ContentEmbed_CreateDocumentByOEid},{@link OH_ContentEmbed_CreateDocumentByFile}, or {@link OH_ContentEmbed_LoadDocumentFromFile}.The document should be destroyed by calling{@link OH_ContentEmbed_DestroyDocument} when it is no longer needed.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) *proxy | Represents a pointer to an [ContentEmbed_ExtensionProxy](capi-contentembed-contentembed-extensionproxy.md) instance. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) **ceDocument | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |


