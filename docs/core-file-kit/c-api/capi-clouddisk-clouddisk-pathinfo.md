# CloudDisk_PathInfo

```c
typedef struct CloudDisk_PathInfo {...} CloudDisk_PathInfo
```

## Overview

A struct that encapsulates the file path information.

**Since**: 21

**Related module**: [CloudDisk](capi-clouddisk.md)

**Header file**: [oh_cloud_disk_manager.h](capi-oh-cloud-disk-manager-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| char *value | Pointer to the file path, which ends with '\0'.<br>**Since**: 21 |
| size_t length | Length of the file path, excluding the '\0' character at the end.<br>**Since**: 21 |


