# content_embed_extension.h

## Overview

Defines the content embed extension APIs.

**Library**: libcontent_embed_ndk.so

**System capability**: SystemCapability.ContentEmbed.ObjectEditor

**Since**: 24

**Related module**: [ContentEmbed](capi-contentembed.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) | ContentEmbed_Document | Define the ContentEmbed_Document structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) | ContentEmbed_ExtensionContext | Define the ContentEmbed_ExtensionContext structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_ExtensionContext*](capi-contentembed-contentembed-extensioncontext8h.md) | ContentEmbed_ExtensionContextHandle | Define the ContentEmbed_ExtensionContextHandle type.Provides methods for Content Embed Kit. |
| [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) | ContentEmbed_ExtensionInstance | Define the ContentEmbed_ExtensionInstance structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_ExtensionInstance*](capi-contentembed-contentembed-extensioninstance8h.md) | ContentEmbed_ExtensionInstanceHandle | Define the ContentEmbed_ExtensionInstanceHandle type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Object](capi-contentembed-contentembed-object.md) | ContentEmbed_Object | Define the ContentEmbed_Object structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Object*](capi-contentembed-contentembed-object8h.md) | ContentEmbed_ObjectHandle | Define the ContentEmbed_ObjectHandle type.Provides methods for Content Embed Kit. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContentEmbedContext(ContentEmbed_ExtensionInstanceHandle ceInstance, ContentEmbed_ExtensionContextHandle *ceContext)](#oh_contentembed_extension_getcontentembedcontext) | - | Get the extension context from the content embed extension instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContext(ContentEmbed_ExtensionContextHandle ceContext, AbilityRuntime_ContextHandle *context)](#oh_contentembed_extension_getcontext) | - | Get the ability runtime context from the content embed extension context. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetExtensionInstance(AbilityRuntime_ExtensionInstanceHandle baseInstance, ContentEmbed_ExtensionInstanceHandle *ceInstance)](#oh_contentembed_extension_getextensioninstance) | - | Get content embed extension instance from base extension instance. |
| [typedef void (\*OH_ContentEmbed_Extension_OnCreateFunc)(ContentEmbed_ExtensionInstanceHandle instance, AbilityBase_Want *want)](#oh_contentembed_extension_oncreatefunc) | OH_ContentEmbed_Extension_OnCreateFunc | Called when the content embed extension instance is created.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnCreateFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnDestroyFunc)(ContentEmbed_ExtensionInstanceHandle instance)](#oh_contentembed_extension_ondestroyfunc) | OH_ContentEmbed_Extension_OnDestroyFunc | Called when the content embed extension instance is destroyed.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnDestroyFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnObjectAttachFunc)(ContentEmbed_ExtensionInstanceHandle instance, ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_onobjectattachfunc) | OH_ContentEmbed_Extension_OnObjectAttachFunc | Called when the content embed extension instance is attached to a content embed object.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnObjectAttachFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnObjectDetachFunc)(ContentEmbed_ExtensionInstanceHandle instance, ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_onobjectdetachfunc) | OH_ContentEmbed_Extension_OnObjectDetachFunc | Called when the content embed extension instance is detached from a content embed object.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnObjectDetachFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnWriteToDataStreamFunc)(ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_onwritetodatastreamfunc) | OH_ContentEmbed_Extension_OnWriteToDataStreamFunc | Called when the content embed object instance writes to the data stream.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnWriteToDataStreamFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnGetSnapshotFunc)(ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_ongetsnapshotfunc) | OH_ContentEmbed_Extension_OnGetSnapshotFunc | Called when content embed object instance gets a snapshot.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetSnapshotFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnDoEditFunc)(ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_ondoeditfunc) | OH_ContentEmbed_Extension_OnDoEditFunc | Called when the content embed object instance edits.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnDoEditFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnGetEditStatusFunc)(ContentEmbed_ObjectHandle object, bool *isEditing, bool *isModified)](#oh_contentembed_extension_ongeteditstatusfunc) | OH_ContentEmbed_Extension_OnGetEditStatusFunc | Called when the content embed object instance gets the edit status.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetEditStatusFunc} to complete the registration. |
| [typedef void (\*OH_ContentEmbed_Extension_OnGetCapabilityFunc)(ContentEmbed_ObjectHandle object, uint32_t *bitmask)](#oh_contentembed_extension_ongetcapabilityfunc) | OH_ContentEmbed_Extension_OnGetCapabilityFunc | Called when the content embed object instance gets a capability.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetCapabilityFunc} to complete the registration. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnCreateFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnCreateFunc onCreateFunc)](#oh_contentembed_extension_registeroncreatefunc) | - | Register function [OH_ContentEmbed_Extension_OnCreateFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_oncreatefunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnDestroyFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnDestroyFunc onDestroyFunc)](#oh_contentembed_extension_registerondestroyfunc) | - | Register function [OH_ContentEmbed_Extension_OnDestroyFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondestroyfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnObjectAttachFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnObjectAttachFunc onObjectAttachFunc)](#oh_contentembed_extension_registeronobjectattachfunc) | - | Register function [OH_ContentEmbed_Extension_OnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectattachfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).The [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) can unregister the onObjectAttach function by calling[OH_ContentEmbed_Extension_UnRegisterOnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_unregisteronobjectattachfunc) |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_UnRegisterOnObjectAttachFunc(ContentEmbed_ExtensionInstanceHandle instance)](#oh_contentembed_extension_unregisteronobjectattachfunc) | - | UnRegister the OnObjectAttach function for the [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnObjectDetachFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnObjectDetachFunc onObjectDetachFunc)](#oh_contentembed_extension_registeronobjectdetachfunc) | - | Register function [OH_ContentEmbed_Extension_OnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectdetachfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).The [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) can unregister the OnObjectDetach function by calling[OH_ContentEmbed_Extension_UnRegisterOnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_unregisteronobjectdetachfunc) |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_UnRegisterOnObjectDetachFunc(ContentEmbed_ExtensionInstanceHandle instance)](#oh_contentembed_extension_unregisteronobjectdetachfunc) | - | UnRegister the OnObjectDetach function for the [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnWriteToDataStreamFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnWriteToDataStreamFunc onWriteToDataStreamFunc)](#oh_contentembed_extension_registeronwritetodatastreamfunc) | - | Register function [OH_ContentEmbed_Extension_OnWriteToDataStreamFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onwritetodatastreamfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetSnapshotFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetSnapshotFunc onGetSnapshotFunc)](#oh_contentembed_extension_registerongetsnapshotfunc) | - | Register function [OH_ContentEmbed_Extension_OnGetSnapshotFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetsnapshotfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnDoEditFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnDoEditFunc onDoEditFunc)](#oh_contentembed_extension_registerondoeditfunc) | - | Register function [OH_ContentEmbed_Extension_OnDoEditFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondoeditfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetEditStatusFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetEditStatusFunc onGetEditStatusFunc)](#oh_contentembed_extension_registerongeteditstatusfunc) | - | Register function [OH_ContentEmbed_Extension_OnGetEditStatusFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongeteditstatusfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetCapabilityFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetCapabilityFunc onGetCapabilityFunc)](#oh_contentembed_extension_registerongetcapabilityfunc) | - | Register function [OH_ContentEmbed_Extension_OnGetCapabilityFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetcapabilityfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContentEmbedDocument(ContentEmbed_ObjectHandle object, ContentEmbed_Document **ceDocument)](#oh_contentembed_extension_getcontentembeddocument) | - | Get the content embed document from the content embed object. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnUpdate(ContentEmbed_ObjectHandle object)](#oh_contentembed_extension_callbacktoonupdate) | - | Invoke the OnUpdate callback registered by the client. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnError(ContentEmbed_ObjectHandle object, ContentEmbed_ErrorCode code)](#oh_contentembed_extension_callbacktoonerror) | - | Invoke the OnError callback registered by the client. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnEditingFinished(ContentEmbed_ObjectHandle object, bool dataModified)](#oh_contentembed_extension_callbacktooneditingfinished) | - | Invoke the OnEditingFinished callback registered by the client. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnExtensionStopped(ContentEmbed_ExtensionInstanceHandle instance)](#oh_contentembed_extension_callbacktoonextensionstopped) | - | Invoke the OnExtensionStopped callback registered by the client. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_SetSnapshot(ContentEmbed_ObjectHandle object, OH_PixelmapNative *pixelMap)](#oh_contentembed_extension_setsnapshot) | - | Send the document snapshot to the client application. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextStartSelfUIAbility(ContentEmbed_ExtensionContextHandle context, AbilityBase_Want *want)](#oh_contentembed_extension_contextstartselfuiability) | - | Starts self UIAbility. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextStartSelfUIAbilityWithStartOptions(ContentEmbed_ExtensionContextHandle context, AbilityBase_Want *want, AbilityRuntime_StartOptions *options)](#oh_contentembed_extension_contextstartselfuiabilitywithstartoptions) | - | Starts self UIAbility with start options. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextTerminateAbility(ContentEmbed_ExtensionContextHandle context)](#oh_contentembed_extension_contextterminateability) | - | Terminate self UIAbility. |

## Function description

### OH_ContentEmbed_Extension_GetContentEmbedContext()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContentEmbedContext(ContentEmbed_ExtensionInstanceHandle ceInstance, ContentEmbed_ExtensionContextHandle *ceContext)
```

**Description**

Get the extension context from the content embed extension instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) ceInstance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance. |
| [ContentEmbed_ExtensionContextHandle](capi-contentembed-contentembed-extensioncontext8h.md) *ceContext | Represents a pointer to an [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) instance that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_GetContext()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContext(ContentEmbed_ExtensionContextHandle ceContext, AbilityRuntime_ContextHandle *context)
```

**Description**

Get the ability runtime context from the content embed extension context.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionContextHandle](capi-contentembed-contentembed-extensioncontext8h.md) ceContext | Represents a pointer to an [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) instance. |
| AbilityRuntime_ContextHandle *context | Represents a pointer to an [AbilityRuntime_Context](../AbilityKit/capi-abilityruntime-abilityruntime-context.md) instance that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_GetExtensionInstance()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetExtensionInstance(AbilityRuntime_ExtensionInstanceHandle baseInstance, ContentEmbed_ExtensionInstanceHandle *ceInstance)
```

**Description**

Get content embed extension instance from base extension instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| AbilityRuntime_ExtensionInstanceHandle baseInstance | Represents a pointer to an [AbilityRuntime_ExtensionInstance](../AbilityKit/capi-abilityruntime-abilityruntime-extensioninstance.md) instance. |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) *ceInstance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_OnCreateFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnCreateFunc)(ContentEmbed_ExtensionInstanceHandle instance, AbilityBase_Want *want)
```

**Description**

Called when the content embed extension instance is created.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnCreateFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionInstanceHandle instance | Represents a pointer to an[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance which will be set in. |
| AbilityBase_Want \*want | Represents a pointer to an [AbilityBase_Want](../AbilityKit/capi-abilitybase-abilitybase-want.md) instance. |

### OH_ContentEmbed_Extension_OnDestroyFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnDestroyFunc)(ContentEmbed_ExtensionInstanceHandle instance)
```

**Description**

Called when the content embed extension instance is destroyed.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnDestroyFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionInstanceHandle instance | Represents a pointer to an[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance which will be set in. |

### OH_ContentEmbed_Extension_OnObjectAttachFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnObjectAttachFunc)(ContentEmbed_ExtensionInstanceHandle instance, ContentEmbed_ObjectHandle object)
```

**Description**

Called when the content embed extension instance is attached to a content embed object.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnObjectAttachFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionInstanceHandle instance | Represents a pointer to an[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance which will be set in. |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_Object](capi-contentembed-contentembed-object.md) instance. |

### OH_ContentEmbed_Extension_OnObjectDetachFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnObjectDetachFunc)(ContentEmbed_ExtensionInstanceHandle instance, ContentEmbed_ObjectHandle object)
```

**Description**

Called when the content embed extension instance is detached from a content embed object.You need to implement this function, set it to [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) through {@linkOH_ContentEmbed_Extension_RegisterOnObjectDetachFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ExtensionInstanceHandle instance | Represents a pointer to an[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance which will be set in. |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_Object](capi-contentembed-contentembed-object.md) instance. |

### OH_ContentEmbed_Extension_OnWriteToDataStreamFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnWriteToDataStreamFunc)(ContentEmbed_ObjectHandle object)
```

**Description**

Called when the content embed object instance writes to the data stream.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnWriteToDataStreamFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ObjectHandle object | Represents a pointer to an[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object which will be set in. |

### OH_ContentEmbed_Extension_OnGetSnapshotFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnGetSnapshotFunc)(ContentEmbed_ObjectHandle object)
```

**Description**

Called when content embed object instance gets a snapshot.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetSnapshotFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ObjectHandle object | Represents a pointer to an[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object which will be set in. |

### OH_ContentEmbed_Extension_OnDoEditFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnDoEditFunc)(ContentEmbed_ObjectHandle object)
```

**Description**

Called when the content embed object instance edits.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnDoEditFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ObjectHandle object | Represents a pointer to an[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object which will be set in. |

### OH_ContentEmbed_Extension_OnGetEditStatusFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnGetEditStatusFunc)(ContentEmbed_ObjectHandle object, bool *isEditing, bool *isModified)
```

**Description**

Called when the content embed object instance gets the edit status.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetEditStatusFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ObjectHandle object | Represents a pointer to an[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object which will be set in. |
| bool \*isEditing | Indicates that the content embed document is being edited. |
| bool \*isModified | Indicates that the content embed document has been modified. |

### OH_ContentEmbed_Extension_OnGetCapabilityFunc()

```c
typedef void (*OH_ContentEmbed_Extension_OnGetCapabilityFunc)(ContentEmbed_ObjectHandle object, uint32_t *bitmask)
```

**Description**

Called when the content embed object instance gets a capability.You need to implement this function, set it to [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) through {@linkOH_ContentEmbed_Extension_RegisterOnGetCapabilityFunc} to complete the registration.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| (ContentEmbed_ObjectHandle object | Represents a pointer to an[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object which will be set in. |
| uint32_t \*bitmask | Indicates the capabilities possessed by a content embed extension instance. |

### OH_ContentEmbed_Extension_RegisterOnCreateFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnCreateFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnCreateFunc onCreateFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnCreateFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_oncreatefunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instancewhich will be set function in. |
| [OH_ContentEmbed_Extension_OnCreateFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_oncreatefunc) onCreateFunc | Represents function [OH_ContentEmbed_Extension_OnCreateFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_oncreatefunc) which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnDestroyFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnDestroyFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnDestroyFunc onDestroyFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnDestroyFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondestroyfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instancewhich will be set function in. |
| [OH_ContentEmbed_Extension_OnDestroyFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondestroyfunc) onDestroyFunc | Represents function [OH_ContentEmbed_Extension_OnDestroyFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondestroyfunc) which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnObjectAttachFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnObjectAttachFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnObjectAttachFunc onObjectAttachFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectattachfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).The [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) can unregister the onObjectAttach function by calling[OH_ContentEmbed_Extension_UnRegisterOnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_unregisteronobjectattachfunc)

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instancewhich will be set function in. |
| [OH_ContentEmbed_Extension_OnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectattachfunc) onObjectAttachFunc | Represents function [OH_ContentEmbed_Extension_OnObjectAttachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectattachfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_UnRegisterOnObjectAttachFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_UnRegisterOnObjectAttachFunc(ContentEmbed_ExtensionInstanceHandle instance)
```

**Description**

UnRegister the OnObjectAttach function for the [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnObjectDetachFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnObjectDetachFunc(ContentEmbed_ExtensionInstanceHandle instance, OH_ContentEmbed_Extension_OnObjectDetachFunc onObjectDetachFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectdetachfunc) into[ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).The [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) can unregister the OnObjectDetach function by calling[OH_ContentEmbed_Extension_UnRegisterOnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_unregisteronobjectdetachfunc)

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instancewhich will be set function in. |
| [OH_ContentEmbed_Extension_OnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectdetachfunc) onObjectDetachFunc | Represents function [OH_ContentEmbed_Extension_OnObjectDetachFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onobjectdetachfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_UnRegisterOnObjectDetachFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_UnRegisterOnObjectDetachFunc(ContentEmbed_ExtensionInstanceHandle instance)
```

**Description**

UnRegister the OnObjectDetach function for the [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnWriteToDataStreamFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnWriteToDataStreamFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnWriteToDataStreamFunc onWriteToDataStreamFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnWriteToDataStreamFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onwritetodatastreamfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) objectwhich will be set function in. |
| [OH_ContentEmbed_Extension_OnWriteToDataStreamFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onwritetodatastreamfunc) onWriteToDataStreamFunc | Represents function [OH_ContentEmbed_Extension_OnWriteToDataStreamFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_onwritetodatastreamfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnGetSnapshotFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetSnapshotFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetSnapshotFunc onGetSnapshotFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnGetSnapshotFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetsnapshotfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) objectwhich will be set function in. |
| [OH_ContentEmbed_Extension_OnGetSnapshotFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetsnapshotfunc) onGetSnapshotFunc | Represents function [OH_ContentEmbed_Extension_OnGetSnapshotFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetsnapshotfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnDoEditFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnDoEditFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnDoEditFunc onDoEditFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnDoEditFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondoeditfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) objectwhich will be set function in. |
| [OH_ContentEmbed_Extension_OnDoEditFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondoeditfunc) onDoEditFunc | Represents function [OH_ContentEmbed_Extension_OnDoEditFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ondoeditfunc) which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnGetEditStatusFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetEditStatusFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetEditStatusFunc onGetEditStatusFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnGetEditStatusFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongeteditstatusfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) objectwhich will be set function in. |
| [OH_ContentEmbed_Extension_OnGetEditStatusFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongeteditstatusfunc) onGetEditStatusFunc | Represents function [OH_ContentEmbed_Extension_OnGetEditStatusFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongeteditstatusfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_RegisterOnGetCapabilityFunc()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_RegisterOnGetCapabilityFunc(ContentEmbed_ObjectHandle object, OH_ContentEmbed_Extension_OnGetCapabilityFunc onGetCapabilityFunc)
```

**Description**

Register function [OH_ContentEmbed_Extension_OnGetCapabilityFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetcapabilityfunc) into[ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) objectwhich will be set function in. |
| [OH_ContentEmbed_Extension_OnGetCapabilityFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetcapabilityfunc) onGetCapabilityFunc | Represents function [OH_ContentEmbed_Extension_OnGetCapabilityFunc](capi-content-embed-extension-h.md#oh_contentembed_extension_ongetcapabilityfunc)which will be set in. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_GetContentEmbedDocument()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_GetContentEmbedDocument(ContentEmbed_ObjectHandle object, ContentEmbed_Document **ceDocument)
```

**Description**

Get the content embed document from the content embed object.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) **ceDocument | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) ceDocument that is a output param. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_CallbackToOnUpdate()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnUpdate(ContentEmbed_ObjectHandle object)
```

**Description**

Invoke the OnUpdate callback registered by the client.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED](capi-content-embed-common-h.md#contentembed_errorcode) - client callback not registered.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_CLIENT_CALLBACK_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the client callback fails.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_CallbackToOnError()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnError(ContentEmbed_ObjectHandle object, ContentEmbed_ErrorCode code)
```

**Description**

Invoke the OnError callback registered by the client.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object. |
| ContentEmbed_ErrorCode code | Indicates the error code. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED](capi-content-embed-common-h.md#contentembed_errorcode) - client callback not registered.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_CLIENT_CALLBACK_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the client callback fails.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_CallbackToOnEditingFinished()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnEditingFinished(ContentEmbed_ObjectHandle object, bool dataModified)
```

**Description**

Invoke the OnEditingFinished callback registered by the client.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object. |
| bool dataModified | Indicates whether the document data has been modified. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED](capi-content-embed-common-h.md#contentembed_errorcode) - client callback not registered.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_CLIENT_CALLBACK_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the client callback fails.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_CallbackToOnExtensionStopped()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_CallbackToOnExtensionStopped(ContentEmbed_ExtensionInstanceHandle instance)
```

**Description**

Invoke the OnExtensionStopped callback registered by the client.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionInstanceHandle](capi-contentembed-contentembed-extensioninstance8h.md) instance | Represents a pointer to an [ContentEmbed_ExtensionInstance](capi-contentembed-contentembed-extensioninstance.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED](capi-content-embed-common-h.md#contentembed_errorcode) - client callback not registered.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_CLIENT_CALLBACK_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the client callback fails.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox. |

### OH_ContentEmbed_Extension_SetSnapshot()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_SetSnapshot(ContentEmbed_ObjectHandle object, OH_PixelmapNative *pixelMap)
```

**Description**

Send the document snapshot to the client application.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object | Represents a pointer to an [ContentEmbed_ObjectHandle](capi-contentembed-contentembed-object8h.md) object. |
| [OH_PixelmapNative](../ImageKit/capi-image-nativemodule-oh-pixelmapnative.md) *pixelMap | Document Snapshot. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br>     [CE_ERR_IMAGE_PACKER_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the image packer operation failed. |

### OH_ContentEmbed_Extension_ContextStartSelfUIAbility()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextStartSelfUIAbility(ContentEmbed_ExtensionContextHandle context, AbilityBase_Want *want)
```

**Description**

Starts self UIAbility.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionContextHandle](capi-contentembed-contentembed-extensioncontext8h.md) context | Represents a pointer to an [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) instance. |
| AbilityBase_Want *want | The arguments passed to start self UIAbility.For details, see [AbilityBase_Want](../AbilityKit/capi-abilitybase-abilitybase-want.md). |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> For details, see [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Extension_ContextStartSelfUIAbilityWithStartOptions()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextStartSelfUIAbilityWithStartOptions(ContentEmbed_ExtensionContextHandle context, AbilityBase_Want *want, AbilityRuntime_StartOptions *options)
```

**Description**

Starts self UIAbility with start options.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionContextHandle](capi-contentembed-contentembed-extensioncontext8h.md) context | Represents a pointer to an [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) instance. |
| AbilityBase_Want *want | The arguments passed to start self UIAbility.For details, see [AbilityBase_Want](../AbilityKit/capi-abilitybase-abilitybase-want.md). |
| AbilityRuntime_StartOptions *options | The start options passed to start self UIAbility.For details, see {@link AbilityRuntime_StartOptions}. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> For details, see [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Extension_ContextTerminateAbility()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Extension_ContextTerminateAbility(ContentEmbed_ExtensionContextHandle context)
```

**Description**

Terminate self UIAbility.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_ExtensionContextHandle](capi-contentembed-contentembed-extensioncontext8h.md) context | Represents a pointer to an [ContentEmbed_ExtensionContext](capi-contentembed-contentembed-extensioncontext.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| ContentEmbed_ErrorCode | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_SYSTEM_ABNORMAL](capi-content-embed-common-h.md#contentembed_errorcode) - the system service works abnormally.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> For details, see [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |


