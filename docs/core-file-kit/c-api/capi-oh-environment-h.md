# oh_environment.h

## Overview

Provide environment APIS.

**Library**: libohenvironment.so

**System capability**: SystemCapability.FileManagement.File.Environment.FolderObtain

**Since**: 12

**Related module**: [Environment](capi-environment.md)

## Summary

### Function

| Name | Description |
| -- | -- |
| [FileManagement_ErrCode OH_Environment_GetUserDownloadDir(char **result)](#oh_environment_getuserdownloaddir) | Obtains the sandbox path of the Download root directory. |
| [FileManagement_ErrCode OH_Environment_GetUserDesktopDir(char **result)](#oh_environment_getuserdesktopdir) | Obtains the sandbox path of the Desktop root directory. |
| [FileManagement_ErrCode OH_Environment_GetUserDocumentDir(char **result)](#oh_environment_getuserdocumentdir) | Obtains the sandbox path of the Document root directory. |

## Function description

### OH_Environment_GetUserDownloadDir()

```c
FileManagement_ErrCode OH_Environment_GetUserDownloadDir(char **result)
```

**Description**

Obtains the sandbox path of the Download root directory.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char **result | Double pointer to the path of the Download root directory. You also need to include malloc.h anduse free() to release the memory allocated. |

**Returns**:

| Type | Description |
| -- | -- |
| [FileManagement_ErrCode](../ArkUI/capi-error-code-h.md#filemanagement_errcode) | Return the status code of the execution.<br>         [ERR_INVALID_PARAMETER](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 401 - Invalid input parameter, pointer is null.<br>         [ERR_DEVICE_NOT_SUPPORTED](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 801 - Device not supported.<br>         [ERR_ENOMEM](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 13900011 - Failed to apply for memory. |

### OH_Environment_GetUserDesktopDir()

```c
FileManagement_ErrCode OH_Environment_GetUserDesktopDir(char **result)
```

**Description**

Obtains the sandbox path of the Desktop root directory.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char **result | Double pointer to the path of the Desktop root directory. You also need to include malloc.h anduse free() to release the memory allocated. |

**Returns**:

| Type | Description |
| -- | -- |
| [FileManagement_ErrCode](../ArkUI/capi-error-code-h.md#filemanagement_errcode) | Return the status code of the execution.<br>         [ERR_INVALID_PARAMETER](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 401 - Invalid input parameter, pointer is null.<br>         [ERR_DEVICE_NOT_SUPPORTED](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 801 - Device not supported.<br>         [ERR_ENOMEM](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 13900011 - Failed to apply for memory. |

### OH_Environment_GetUserDocumentDir()

```c
FileManagement_ErrCode OH_Environment_GetUserDocumentDir(char **result)
```

**Description**

Obtains the sandbox path of the Document root directory.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| char **result | Double pointer to the path of the Document root directory. You also need to include malloc.h anduse free() to release the memory allocated. |

**Returns**:

| Type | Description |
| -- | -- |
| [FileManagement_ErrCode](../ArkUI/capi-error-code-h.md#filemanagement_errcode) | Return the status code of the execution.<br>         [ERR_INVALID_PARAMETER](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 401 - Invalid input parameter, pointer is null.<br>         [ERR_DEVICE_NOT_SUPPORTED](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 801 - Device not supported.<br>         [ERR_ENOMEM](../ArkUI/capi-error-code-h.md#filemanagement_errcode) 13900011 - Failed to apply for memory. |


