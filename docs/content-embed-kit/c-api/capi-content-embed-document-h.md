# content_embed_document.h

## Overview

Defines the content embed document APIs.

**Library**: libcontent_embed_ndk.so

**System capability**: SystemCapability.ContentEmbed.ObjectEditor

**Since**: 24

**Related module**: [ContentEmbed](capi-contentembed.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) | ContentEmbed_Document | Define the ContentEmbed_Document structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) | ContentEmbed_Storage | Define the ContentEmbed_Storage structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) | ContentEmbed_StorageElement | Define the ContentEmbed_StorageElement structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) | ContentEmbed_StorageElements | Define the ContentEmbed_StorageElements structure type.Provides methods for Content Embed Kit. |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) | ContentEmbed_Stream | Define the ContentEmbed_Stream structure type.Provides methods for Content Embed Kit. |

### Macro

| Name | Description |
| -- | -- |
| MAX_PATH_LENGTH (4 * 1024) | The maximum length of a file path.<br>**Since**: 24 |

### Function

| Name | Description |
| -- | -- |
| [ContentEmbed_ErrorCode OH_ContentEmbed_CreateDocumentByOEid(const char *oeid, ContentEmbed_Document **document)](#oh_contentembed_createdocumentbyoeid) | Create a new [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance using the provided oeid.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_CreateDocumentByFile(const char *srcFilePath, size_t length, bool isLinking, ContentEmbed_Document **document)](#oh_contentembed_createdocumentbyfile) | Create a new [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance from the source file.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_LoadDocumentFromFile(const char *srcFilePath, size_t length, ContentEmbed_Document **document)](#oh_contentembed_loaddocumentfromfile) | Load an instance of [ContentEmbed_Document](capi-contentembed-contentembed-document.md) from the source file.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_Read(uint8_t *buffer, size_t length, ContentEmbed_Document *document, size_t offset, size_t *readSize)](#oh_contentembed_document_read) | Reads a compound document from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetOEid(const ContentEmbed_Document *document, char *oeid)](#oh_contentembed_document_getoeid) | Get oeid from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_IsLinking(const ContentEmbed_Document *document, bool *isLinking)](#oh_contentembed_document_islinking) | whether the source file is linked to the [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetNativeFilePath(const ContentEmbed_Document *document, char *nativeFilePath)](#oh_contentembed_document_getnativefilepath) | Get native file path from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetRootStorage(ContentEmbed_Document *document, ContentEmbed_Storage **storage)](#oh_contentembed_document_getrootstorage) | Get the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) from a [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.The caller is responsible for destroying the storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Document_Flush(const ContentEmbed_Document *document)](#oh_contentembed_document_flush) | Flushes the content of the [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CreateStorage(const ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Storage **childStorage)](#oh_contentembed_storage_createstorage) | Create a new [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance.The caller is responsible for destroying the storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetStorage(const ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Storage **childStorage)](#oh_contentembed_storage_getstorage) | Obtain the child storage instance from its parent instance.The caller is responsible for destroying the child storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CreateStream(ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Stream **childStream)](#oh_contentembed_storage_createstream) | Create a new [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.The caller is responsible for destroying the stream by calling[OH_ContentEmbed_DestroyStream](capi-content-embed-document-h.md#oh_contentembed_destroystream) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetStream(ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Stream **childStream)](#oh_contentembed_storage_getstream) | Obtain the child stream instance from the parent storage instance.The caller is responsible for destroying the child stream by calling[OH_ContentEmbed_DestroyStream](capi-content-embed-document-h.md#oh_contentembed_destroystream) to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_DeleteEntry(ContentEmbed_Storage *parentStorage, const char *name)](#oh_contentembed_storage_deleteentry) | Delete a specific storage or stream directory entry in directory tree. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_DeleteAllEntry(ContentEmbed_Storage *storage)](#oh_contentembed_storage_deleteallentry) | Delete all entries of the storage from the directory tree to clear the storage. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyStorage(ContentEmbed_Storage *storage)](#oh_contentembed_destroystorage) | Destroy an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance and reclaims the memory occupied by the instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Read(ContentEmbed_Stream *stream, unsigned char **buffer, size_t length, size_t *num)](#oh_contentembed_stream_read) | Read the buffer data from an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.The caller is responsible for destroying the buffer to avoid memory leaks. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Write(ContentEmbed_Stream *stream, const unsigned char *data, size_t length, size_t *num)](#oh_contentembed_stream_write) | Write the buffer data to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Seek(ContentEmbed_Stream *stream, size_t position)](#oh_contentembed_stream_seek) | Sets the current read position of the stream to the specified offset. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Stream_GetPosition(ContentEmbed_Stream *stream, size_t *position)](#oh_contentembed_stream_getposition) | Retrieves the current position in the stream. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Stream_GetSize(ContentEmbed_Stream *stream, size_t *size)](#oh_contentembed_stream_getsize) | Retrieves the size of the data in the stream.This function attempts to determine the total size of the data available in the provided stream.If successful, the size is written to the memory location pointed to by the `size` parameter. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyStream(ContentEmbed_Stream *stream)](#oh_contentembed_destroystream) | Destroy an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance and reclaims the memory occupied by the instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_DestroyDocument(ContentEmbed_Document *document)](#oh_contentembed_destroydocument) | Destroy an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance and reclaims the memory occupied by the instance. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetOEid(ContentEmbed_Storage *storage, char *oeid, size_t oeidSize)](#oh_contentembed_storage_getoeid) | Gets the oeid of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_SetOEid(ContentEmbed_Storage *storage, char *oeid, size_t oeidSize)](#oh_contentembed_storage_setoeid) | Sets the oeid of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_Create(ContentEmbed_StorageElements **storageElements)](#oh_contentembed_storageelements_create) | Creates an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance and initializes it. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_Destroy(ContentEmbed_StorageElements *storageElements)](#oh_contentembed_storageelements_destroy) | Destroys an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance and reclaims the memory occupied by it. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetElements(const ContentEmbed_Storage *storage, ContentEmbed_StorageElements *storageElements)](#oh_contentembed_storage_getelements) | Gets the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_GetCount(const ContentEmbed_StorageElements *storageElements, size_t *count)](#oh_contentembed_storageelements_getcount) | Gets the count of elements in the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_GetElement(const ContentEmbed_StorageElements *storageElements, size_t index, ContentEmbed_StorageElement **storageElement)](#oh_contentembed_storageelements_getelement) | Gets the element at the specified index in the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetName(const ContentEmbed_StorageElement *storageElement, char *name, size_t nameSize)](#oh_contentembed_storageelement_getname) | Gets the name of the [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md). |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetCTime(const ContentEmbed_StorageElement *element, uint64_t *ctime)](#oh_contentembed_storageelement_getctime) | Get element create time. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetMTime(const ContentEmbed_StorageElement *element, uint64_t *mtime)](#oh_contentembed_storageelement_getmtime) | Get element modify time. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_IsStorage(const ContentEmbed_StorageElement *storageElement, bool *isStorage)](#oh_contentembed_storageelement_isstorage) | Checks whether the [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) is a storage. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_IsStream(const ContentEmbed_StorageElement *element, bool *isStream)](#oh_contentembed_storageelement_isstream) | Determine if an element is a stream type. |
| [ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CopyTo(ContentEmbed_Storage *srcStorage, ContentEmbed_Storage *destStorage)](#oh_contentembed_storage_copyto) | Copies the content of the source [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) to the destination [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md). |

## Function description

### OH_ContentEmbed_CreateDocumentByOEid()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_CreateDocumentByOEid(const char *oeid, ContentEmbed_Document **document)
```

**Description**

Create a new [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance using the provided oeid.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *oeid | Represents oeid value. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) **document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance which will be created. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_CreateDocumentByFile()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_CreateDocumentByFile(const char *srcFilePath, size_t length, bool isLinking, ContentEmbed_Document **document)
```

**Description**

Create a new [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance from the source file.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *srcFilePath | Represents source file path. |
| size_t length | Represents source file path length. |
| bool isLinking | Represents whether the source file is linked to the document. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) **document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance which will be created. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br>     [CE_ERR_INVALID_LINKING_PATH](capi-content-embed-common-h.md#contentembed_errorcode) - linking file is in application sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_LoadDocumentFromFile()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_LoadDocumentFromFile(const char *srcFilePath, size_t length, ContentEmbed_Document **document)
```

**Description**

Load an instance of [ContentEmbed_Document](capi-contentembed-contentembed-document.md) from the source file.The caller is responsible for destroying the instance by calling[OH_ContentEmbed_DestroyDocument](capi-content-embed-document-h.md#oh_contentembed_destroydocument) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| const char *srcFilePath | Represents source file path. |
| size_t length | Represents source file path length. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) **document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance which will be loaded. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_Read()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_Read(uint8_t *buffer, size_t length, ContentEmbed_Document *document, size_t offset, size_t *readSize)
```

**Description**

Reads a compound document from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| uint8_t *buffer | Represents the buffer data read from an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| size_t length | Represents the length of the buffer data. |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| size_t offset | Represents pointer position of reading. |
| size_t *readSize | Represents the length of the data actually read. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_GetOEid()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetOEid(const ContentEmbed_Document *document, char *oeid)
```

**Description**

Get oeid from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| char *oeid | Output parameter represents the oeid value. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_IsLinking()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_IsLinking(const ContentEmbed_Document *document, bool *isLinking)
```

**Description**

whether the source file is linked to the [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| bool *isLinking | Output parameter represents whether the source file is linked to the document. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_GetNativeFilePath()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetNativeFilePath(const ContentEmbed_Document *document, char *nativeFilePath)
```

**Description**

Get native file path from [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| char *nativeFilePath | Output parameter represents the path of the source file withinthe [ContentEmbed_Document](capi-contentembed-contentembed-document.md) on disk. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_GetRootStorage()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_GetRootStorage(ContentEmbed_Document *document, ContentEmbed_Storage **storage)
```

**Description**

Get the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) from a [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.The caller is responsible for destroying the storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) **storage | Output parameter represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Document_Flush()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Document_Flush(const ContentEmbed_Document *document)
```

**Description**

Flushes the content of the [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_FILE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the file operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_CreateStorage()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CreateStorage(const ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Storage **childStorage)
```

**Description**

Create a new [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance.The caller is responsible for destroying the storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *parentStorage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance.when an entry is to be deleted from the parent storage, invoke either[OH_ContentEmbed_Storage_DeleteEntry](capi-content-embed-document-h.md#oh_contentembed_storage_deleteentry) for a specific entry or[OH_ContentEmbed_Storage_DeleteAllEntry](capi-content-embed-document-h.md#oh_contentembed_storage_deleteallentry) to remove all entries,depending on the required operation. |
| const char *name | Represents the name of an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance which will be created. |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) **childStorage | Output parameter represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_GetStorage()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetStorage(const ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Storage **childStorage)
```

**Description**

Obtain the child storage instance from its parent instance.The caller is responsible for destroying the child storage by calling[OH_ContentEmbed_DestroyStorage](capi-content-embed-document-h.md#oh_contentembed_destroystorage) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *parentStorage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| const char *name | Represents the name of an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance which will be obtained. |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) **childStorage | Output parameter represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_CreateStream()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CreateStream(ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Stream **childStream)
```

**Description**

Create a new [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.The caller is responsible for destroying the stream by calling[OH_ContentEmbed_DestroyStream](capi-content-embed-document-h.md#oh_contentembed_destroystream) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *parentStorage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance.when an entry is to be deleted from the parent storage, invoke either[OH_ContentEmbed_Storage_DeleteEntry](capi-content-embed-document-h.md#oh_contentembed_storage_deleteentry) for a specific entry or[OH_ContentEmbed_Storage_DeleteAllEntry](capi-content-embed-document-h.md#oh_contentembed_storage_deleteallentry) to remove all entries,depending on the required operation. |
| const char *name | Represents the name of an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance which will be created. |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) **childStream | Output parameter represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_GetStream()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetStream(ContentEmbed_Storage *parentStorage, const char *name, ContentEmbed_Stream **childStream)
```

**Description**

Obtain the child stream instance from the parent storage instance.The caller is responsible for destroying the child stream by calling[OH_ContentEmbed_DestroyStream](capi-content-embed-document-h.md#oh_contentembed_destroystream) to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *parentStorage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| const char *name | Represents the name of an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance which will be obtained. |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) **childStream | Output parameter represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_DeleteEntry()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_DeleteEntry(ContentEmbed_Storage *parentStorage, const char *name)
```

**Description**

Delete a specific storage or stream directory entry in directory tree.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *parentStorage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| const char *name | Represents the name of a storage or stream which will be delete. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_FILE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the file operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_DeleteAllEntry()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_DeleteAllEntry(ContentEmbed_Storage *storage)
```

**Description**

Delete all entries of the storage from the directory tree to clear the storage.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *storage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyStorage()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyStorage(ContentEmbed_Storage *storage)
```

**Description**

Destroy an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *storage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Stream_Read()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Read(ContentEmbed_Stream *stream, unsigned char **buffer, size_t length, size_t *num)
```

**Description**

Read the buffer data from an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.The caller is responsible for destroying the buffer to avoid memory leaks.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| unsigned char **buffer | Output parameter represents the buffer data read from an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| size_t length | Represents the length of the buffer data. |
| size_t *num | Output parameter represents the num of the buffer data that has been read. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Stream_Write()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Write(ContentEmbed_Stream *stream, const unsigned char *data, size_t length, size_t *num)
```

**Description**

Write the buffer data to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| const unsigned char *data | Represents the data write to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| size_t length | Represents the length of the data. |
| size_t *num | Output parameter represents the num of the data that has been written. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Stream_Seek()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Stream_Seek(ContentEmbed_Stream *stream, size_t position)
```

**Description**

Sets the current read position of the stream to the specified offset.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance that will be modified. |
| size_t position | The offset in bytes from the beginning of the stream to which the position should be set. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Stream_GetPosition()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Stream_GetPosition(ContentEmbed_Stream *stream, size_t *position)
```

**Description**

Retrieves the current position in the stream.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to the [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance. |
| size_t *position | Represents a pointer to a size_t variable where the current position will be stored. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_FILE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the file operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Stream_GetSize()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Stream_GetSize(ContentEmbed_Stream *stream, size_t *size)
```

**Description**

Retrieves the size of the data in the stream.This function attempts to determine the total size of the data available in the provided stream.If successful, the size is written to the memory location pointed to by the `size` parameter.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to the [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance from whichthe size is to be retrieved. |
| size_t *size | Represents a pointer to a size_t variable where the size of the stream will be stored. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_STREAM_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the stream operation failed.<br>     [CE_ERR_FILE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the file operation failed.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyStream()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyStream(ContentEmbed_Stream *stream)
```

**Description**

Destroy an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) *stream | Represents a pointer to an [ContentEmbed_Stream](capi-contentembed-contentembed-stream.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_DestroyDocument()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_DestroyDocument(ContentEmbed_Document *document)
```

**Description**

Destroy an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance and reclaims the memory occupied by the instance.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Document](capi-contentembed-contentembed-document.md) *document | Represents a pointer to an [ContentEmbed_Document](capi-contentembed-contentembed-document.md) instance.After this call, the pointer becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_GetOEid()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetOEid(ContentEmbed_Storage *storage, char *oeid, size_t oeidSize)
```

**Description**

Gets the oeid of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *storage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| char *oeid | Output parameter represents a pointer to a char array where the oeid will be stored. |
| size_t oeidSize | Represents the size of the oeid buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_SetOEid()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_SetOEid(ContentEmbed_Storage *storage, char *oeid, size_t oeidSize)
```

**Description**

Sets the oeid of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *storage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| char *oeid | Input parameter represents a pointer to a char array containing the oeid to be set. |
| size_t oeidSize | Represents the size of the oeid buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElements_Create()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_Create(ContentEmbed_StorageElements **storageElements)
```

**Description**

Creates an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance and initializes it.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) **storageElements | Output parameter represents a pointer to a pointerto an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance.After this call, the pointer to the instance is stored in the 'storageElements' parameter. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElements_Destroy()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_Destroy(ContentEmbed_StorageElements *storageElements)
```

**Description**

Destroys an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance and reclaims the memory occupied by it.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) *storageElements | Represents a pointer to a pointer to an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance.After this call, the pointer to the instance becomes invalid and must not be used. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_GetElements()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_GetElements(const ContentEmbed_Storage *storage, ContentEmbed_StorageElements *storageElements)
```

**Description**

Gets the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) of the [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *storage | Represents a pointer to an [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) *storageElements | Output parameter represents a pointer to an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance.After this call, the pointer to the instance is stored in the 'storageElements' parameter. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElements_GetCount()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_GetCount(const ContentEmbed_StorageElements *storageElements, size_t *count)
```

**Description**

Gets the count of elements in the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) *storageElements | Represents a pointer to an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance. |
| size_t *count | Output parameter represents a pointer to a size_t variable where the count will be stored.After this call, the count of elements in the 'storageElements' instance is stored in the 'count' parameter. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElements_GetElement()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElements_GetElement(const ContentEmbed_StorageElements *storageElements, size_t index, ContentEmbed_StorageElement **storageElement)
```

**Description**

Gets the element at the specified index in the [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) *storageElements | Represents a pointer to an [ContentEmbed_StorageElements](capi-contentembed-contentembed-storageelements.md) instance. |
| size_t index | Represents the index of the element to be retrieved. |
| [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) **storageElement | Output parameter represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance.After this call, the pointer to the instance is stored in the 'storageElement' parameter. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElement_GetName()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetName(const ContentEmbed_StorageElement *storageElement, char *name, size_t nameSize)
```

**Description**

Gets the name of the [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) *storageElement | Represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance. |
| char *name | Output parameter represents a pointer to a character array where the name will be stored.After this call, the name of the 'storageElement' instance is stored in the 'name' parameter. |
| size_t nameSize | Represents the size of the 'name' buffer. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElement_GetCTime()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetCTime(const ContentEmbed_StorageElement *element, uint64_t *ctime)
```

**Description**

Get element create time.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) *element | Represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance. |
| uint64_t *ctime | Out param, represents the create time of element. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElement_GetMTime()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_GetMTime(const ContentEmbed_StorageElement *element, uint64_t *mtime)
```

**Description**

Get element modify time.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) *element | Represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance. |
| uint64_t *mtime | Out param, represents the modify time of element. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElement_IsStorage()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_IsStorage(const ContentEmbed_StorageElement *storageElement, bool *isStorage)
```

**Description**

Checks whether the [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) is a storage.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) *storageElement | Represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance. |
| bool *isStorage | Output parameter represents a pointer to a boolean variable where the result will be stored.After this call, the result of the check is stored in the 'isStorage' parameter. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_StorageElement_IsStream()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_StorageElement_IsStream(const ContentEmbed_StorageElement *element, bool *isStream)
```

**Description**

Determine if an element is a stream type.

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) *element | Represents a pointer to an [ContentEmbed_StorageElement](capi-contentembed-contentembed-storageelement.md) instance. |
| bool *isStream | Out param, represents it is true if the element is a stream type. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |

### OH_ContentEmbed_Storage_CopyTo()

```c
ContentEmbed_ErrorCode OH_ContentEmbed_Storage_CopyTo(ContentEmbed_Storage *srcStorage, ContentEmbed_Storage *destStorage)
```

**Description**

Copies the content of the source [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) to the destination [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md).

**Since**: 24

**Parameters**:

| Parameter | Description |
| -- | -- |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *srcStorage | Represents a pointer to the source [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |
| [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) *destStorage | Represents a pointer to the destination [ContentEmbed_Storage](capi-contentembed-contentembed-storage.md) instance. |

**Returns**:

| Type | Description |
| -- | -- |
| [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode) | Returns a specific error code.<br>     [CE_ERR_OK](capi-content-embed-common-h.md#contentembed_errorcode) - success.<br>     [CE_ERR_PARAM_INVALID](capi-content-embed-common-h.md#contentembed_errorcode) - parameter check failed.<br>     [CE_ERR_NULL_POINTER](capi-content-embed-common-h.md#contentembed_errorcode) - unexpected null pointer.<br>     [CE_ERR_STORAGE_OPERATION_FAILED](capi-content-embed-common-h.md#contentembed_errorcode) - the storage operation failed.<br>     [CE_ERR_DEVICE_NOT_SUPPORTED](capi-content-embed-common-h.md#contentembed_errorcode) - the device is not supported.<br>     [CE_ERR_IN_DLP_SANDBOX](capi-content-embed-common-h.md#contentembed_errorcode) - application is in dlp sandbox.<br> Specific error codes can be referenced [ContentEmbed_ErrorCode](capi-content-embed-common-h.md#contentembed_errorcode). |


