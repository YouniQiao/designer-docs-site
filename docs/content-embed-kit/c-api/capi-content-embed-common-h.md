# content_embed_common.h

## Overview

Declare the common types for the native ContentEmbed.

**Library**: libcontent_embed_ndk.so

**System capability**: SystemCapability.ContentEmbed.ObjectEditor

**Since**: 24

**Related module**: [ContentEmbed](capi-contentembed.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [ContentEmbed_ErrorCode](#contentembed_errorcode) | ContentEmbed_ErrorCode | The value type of command data. |
| [ContentEmbed_CapabilityCode](#contentembed_capabilitycode) | ContentEmbed_CapabilityCode | The value type of capability code. |

### Macro

| Name | Description |
| -- | -- |
| MAX_OEID_LENGTH (1 * 40) | The maximum length of an oeid.<br>**Since**: 24 |

## Enum type description

### ContentEmbed_ErrorCode

```c
enum ContentEmbed_ErrorCode
```

**Description**

The value type of command data.

**Since**: 24

| Enum item | Description |
| -- | -- |
| CE_ERR_OK = 0 | The error code in the correct case.<br>**Since**: 24 |
| CE_PERMISSION_DENIED = 201 |  The error code when permission verification failed.<br>**Since**: 24 |
| CE_ERR_PARAM_INVALID = 401 | The error code when parameter check failed.<br>**Since**: 24 |
| CE_ERR_DEVICE_NOT_SUPPORTED = 801 | The error code when the device is not supported.<br>**Since**: 24 |
| CE_ERR_NULL_POINTER = 35300001 | The error code when unexpected null pointer.<br>**Since**: 24 |
| CE_ERR_CLIENT_CALLBACK_NOT_REGISTERED = 35300002 | The error code when the client callback is not registered.<br>**Since**: 24 |
| CE_ERR_EXTENSION_ERROR = 35300003 | The error code when an error occurred in the extension application.<br>**Since**: 24 |
| CE_ERR_SYSTEM_ABNORMAL = 35300004 | The error code when the system service works abnormally.<br>**Since**: 24 |
| CE_ERR_STORAGE_OPERATION_FAILED = 35300005 | The error code when the storage operation failed.<br>**Since**: 24 |
| CE_ERR_STREAM_OPERATION_FAILED = 35300006 | The error code when the stream operation failed.<br>**Since**: 24 |
| CE_ERR_FILE_OPERATION_FAILED = 35300007 | The error code when the file operation failed.<br>**Since**: 24 |
| CE_ERR_IN_DLP_SANDBOX = 35300008 | The error code when application is in dlp sandbox.<br>**Since**: 24 |
| CE_ERR_IMAGE_PACKER_OPERATION_FAILED = 35300009 | The error code when the image packer operation failed.<br>**Since**: 24 |
| CE_ERR_CLIENT_CALLBACK_FAILED = 35300010 | The error code is returned when the client callback fails.<br>**Since**: 24 |
| CE_ERR_EXTENSION_ABNORMAL_EXIT = 35300011 | The error code is returned when the extension abnormal exit.<br>**Since**: 24 |
| CE_ERR_INVALID_LINKING_PATH = 35300012 | The error code when linking file is in application sandbox.<br>**Since**: 24 |
| CE_ERR_CONNECT_LIMIT_EXCEED = 35300013 | The error code when the number of OE Extension connections exceeds the limit.<br>**Since**: 24 |
| CE_ERR_FILE_NOT_GRANT = 35300014 | The error code when the file is not authorized.<br>**Since**: 24 |
| CE_ERR_DISK_FULL = 35300015 | The error code when the disk is full.<br>**Since**: 24 |
| CE_ERR_EXTENSION_NOT_SUPPORT = 35300016 | The error code when the capability is not supported by OE Extension.<br>**Since**: 24 |

### ContentEmbed_CapabilityCode

```c
enum ContentEmbed_CapabilityCode
```

**Description**

The value type of capability code.

**Since**: 24

| Enum item | Description |
| -- | -- |
| CE_CAPABILITY_SUPPORT_SNAPSHOT = 1 << 0 | The code means application supports document snapshot capture. |
| CE_CAPABILITY_SUPPORT_DO_EDIT = 1 << 1 | The code means application supports document editing. |


