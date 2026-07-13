# raw_file_manager.h

## Overview

Provides file management functions for the **rawfile** directory. You can use the **ResourceManager** to opena rawfile and perform operations such as data search and reading.

**Library**: librawfile.z.so

**System capability**: SystemCapability.Global.ResourceManager

**Since**: 8

**Related module**: [rawfile](capi-rawfile.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [NativeResourceManager](capi-rawfile-nativeresourcemanager.md) | NativeResourceManager | Represents the native **ResourceManager**. This class encapsulates the native implementation of theJavaScript **ResourceManager**. The pointer to **ResourceManager** can be obtained by using{@link OH_ResourceManager_InitNativeResourceManager}. |

### Function

| Name | Description |
| -- | -- |
| [NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)](#oh_resourcemanager_initnativeresourcemanager) | Obtains the native **ResourceManager** based on the JavaScript **ResourceManager** to implement rawfile-specific functions. |
| [void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)](#oh_resourcemanager_releasenativeresourcemanager) | Releases the native **ResourceManager**. |
| [RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)](#oh_resourcemanager_openrawdir) | Traverses all files in the **rawfile** directory. |
| [RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile) | Opens a rawfile and reads the data in it. |
| [RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)](#oh_resourcemanager_openrawfile64) | Opens a large rawfile and reads the data in it. |
| [bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)](#oh_resourcemanager_israwdir) | Checks whether the path of a raw file is a subdirectory in the **rawfile** directory. |

## Function description

### OH_ResourceManager_InitNativeResourceManager()

```c
NativeResourceManager *OH_ResourceManager_InitNativeResourceManager(napi_env env, napi_value jsResMgr)
```

**Description**

Obtains the native **ResourceManager** based on the JavaScript **ResourceManager** to implement rawfile-specific functions.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| napi_env env | Pointer to the JavaScript Native API (napi) environment. |
| napi_value jsResMgr | JavaScript **ResourceManager** object. |

**Returns**:

| Type | Description |
| -- | -- |
| [NativeResourceManager *](capi-rawfile-nativeresourcemanager.md) | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md). If the operation fails, a null pointer is returned. |

### OH_ResourceManager_ReleaseNativeResourceManager()

```c
void OH_ResourceManager_ReleaseNativeResourceManager(NativeResourceManager *resMgr)
```

**Description**

Releases the native **ResourceManager**.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [NativeResourceManager](capi-rawfile-nativeresourcemanager.md) *resMgr | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md). |

### OH_ResourceManager_OpenRawDir()

```c
RawDir *OH_ResourceManager_OpenRawDir(const NativeResourceManager *mgr, const char *dirName)
```

**Description**

Traverses all files in the **rawfile** directory.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const NativeResourceManager](capi-rawfile-nativeresourcemanager.md) *mgr | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md), which is obtained by calling[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager). |
| const char *dirName | Pointer to the name of the directory to open. If this field is left empty, the root directory will beopened. |

**Returns**:

| Type | Description |
| -- | -- |
| RawDir * | Pointer to [RawDir](capi-rawfile-rawdir.md). After using the pointer, call [OH_ResourceManager_CloseRawDir](capi-raw-dir-h.md#oh_resourcemanager_closerawdir) to release<br>     it. If the operation fails or mgr is empty, a null pointer is returned. |

**Reference**:

[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager)
[OH_ResourceManager_CloseRawDir](capi-raw-dir-h.md#oh_resourcemanager_closerawdir)


### OH_ResourceManager_OpenRawFile()

```c
RawFile *OH_ResourceManager_OpenRawFile(const NativeResourceManager *mgr, const char *fileName)
```

**Description**

Opens a rawfile and reads the data in it.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const NativeResourceManager](capi-rawfile-nativeresourcemanager.md) *mgr | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md), which is obtained by calling[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager). |
| const char *fileName | Pointer to the name of the file in the relative path of the **rawfile** root directory. |

**Returns**:

| Type | Description |
| -- | -- |
| [RawFile *](capi-rawfile-rawfile.md) | Pointer to [RawFile](capi-rawfile-rawfile.md). After using the pointer, call [OH_ResourceManager_CloseRawFile](capi-raw-file-h.md#oh_resourcemanager_closerawfile) to release<br>     it. If the operation fails or mgr or fileName is empty, a null pointer is returned. |

**Reference**:

[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager)
[OH_ResourceManager_CloseRawFile](capi-raw-file-h.md#oh_resourcemanager_closerawfile)


### OH_ResourceManager_OpenRawFile64()

```c
RawFile64 *OH_ResourceManager_OpenRawFile64(const NativeResourceManager *mgr, const char *fileName)
```

**Description**

Opens a large rawfile and reads the data in it.

**Since**: 11

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const NativeResourceManager](capi-rawfile-nativeresourcemanager.md) *mgr | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md), which is obtained by calling[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager). |
| const char *fileName | Pointer to the name of the file in the relative path of the **rawfile** root directory. |

**Returns**:

| Type | Description |
| -- | -- |
| [RawFile64 *](capi-rawfile-rawfile64.md) | Pointer to [RawFile64](capi-rawfile-rawfile64.md). After using this pointer, call [OH_ResourceManager_CloseRawFile64](capi-raw-file-h.md#oh_resourcemanager_closerawfile64) to<br>     release it. If the operation fails or mgr or fileName is empty, a null pointer is returned. |

**Reference**:

[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager)
[OH_ResourceManager_CloseRawFile64](capi-raw-file-h.md#oh_resourcemanager_closerawfile64)


### OH_ResourceManager_IsRawDir()

```c
bool OH_ResourceManager_IsRawDir(const NativeResourceManager *mgr, const char *path)
```

**Description**

Checks whether the path of a raw file is a subdirectory in the **rawfile** directory.

**Since**: 12

**Parameters**:

| Parameter | Description |
| -- | -- |
| [const NativeResourceManager](capi-rawfile-nativeresourcemanager.md) *mgr | Pointer to [NativeResourceManager](capi-rawfile-nativeresourcemanager.md), which is obtained by calling[OH_ResourceManager_InitNativeResourceManager](capi-raw-file-manager-h.md#oh_resourcemanager_initnativeresourcemanager). |
| const char *path | Path of a rawfile. |

**Returns**:

| Type | Description |
| -- | -- |
| bool | true if the path is a subdirectory in the rawfile directory; false otherwise. |


