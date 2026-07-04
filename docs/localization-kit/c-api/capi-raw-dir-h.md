# raw_dir.h

## Overview

Provides functions related to rawfile directories, including traversing and closing rawfile directories.

**Library**: librawfile.z.so

**System capability**: SystemCapability.Global.ResourceManager

**Since**: 8

**Related module**: [rawfile](capi-rawfile.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [RawDir](capi-rawfile-rawdir.md) | RawDir | Provides access to the **rawfile** directory. |

### Function

| Name | Description |
| -- | -- |
| [const char *OH_ResourceManager_GetRawFileName(RawDir *rawDir, int index)](#oh_resourcemanager_getrawfilename) | Obtains the name of a file in **rawfile** based on the index. You can use this function to traverse the rawfile** directory. |
| [int OH_ResourceManager_GetRawFileCount(RawDir *rawDir)](#oh_resourcemanager_getrawfilecount) | Obtains the number of rawfiles in [RawDir](capi-rawfile-rawdir.md). You can use this function to obtain available indexes in[OH_ResourceManager_GetRawFileName](capi-raw-dir-h.md#oh_resourcemanager_getrawfilename). |
| [void OH_ResourceManager_CloseRawDir(RawDir *rawDir)](#oh_resourcemanager_closerawdir) | Closes an opened [RawDir](capi-rawfile-rawdir.md) and releases all associated resources. |

## Function description

### OH_ResourceManager_GetRawFileName()

```c
const char *OH_ResourceManager_GetRawFileName(RawDir *rawDir, int index)
```

**Description**

Obtains the name of a file in **rawfile** based on the index. You can use this function to traverse the rawfile** directory.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [RawDir](capi-rawfile-rawdir.md) *rawDir | Pointer to [RawDir](capi-rawfile-rawdir.md). |
| int index | Index of the rawfile in [RawDir](capi-rawfile-rawdir.md). |

**Returns**:

| Type | Description |
| -- | -- |
| const char * | File name obtained if the rawfile exists in the directory. The file name returned can be used as the input<br>     parameter of {@link OH_ResourceManager_OpenRawFile}.<br>     <br>If no file is found after all files in the directory are traversed, NULL is returned. |

**Reference**:

OH_ResourceManager_OpenRawFile


### OH_ResourceManager_GetRawFileCount()

```c
int OH_ResourceManager_GetRawFileCount(RawDir *rawDir)
```

**Description**

Obtains the number of rawfiles in [RawDir](capi-rawfile-rawdir.md). You can use this function to obtain available indexes in[OH_ResourceManager_GetRawFileName](capi-raw-dir-h.md#oh_resourcemanager_getrawfilename).

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [RawDir](capi-rawfile-rawdir.md) *rawDir | Pointer to [RawDir](capi-rawfile-rawdir.md). |

**Returns**:

| Type | Description |
| -- | -- |
| int | Number of files in rawDir. If rawDir is empty, 0 is returned. |

**Reference**:

[OH_ResourceManager_GetRawFileName](capi-raw-dir-h.md#oh_resourcemanager_getrawfilename)


### OH_ResourceManager_CloseRawDir()

```c
void OH_ResourceManager_CloseRawDir(RawDir *rawDir)
```

**Description**

Closes an opened [RawDir](capi-rawfile-rawdir.md) and releases all associated resources.

**Since**: 8

**Parameters**:

| Parameter | Description |
| -- | -- |
| [RawDir](capi-rawfile-rawdir.md) *rawDir | Pointer to [RawDir](capi-rawfile-rawdir.md). |

**Reference**:

OH_ResourceManager_OpenRawDir



