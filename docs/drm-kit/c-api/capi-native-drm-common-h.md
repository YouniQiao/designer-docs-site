# native_drm_common.h

## Overview

Defines the Drm common struct.

**Library**: libnative_drm.so

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

**Related module**: [Drm](capi-drm.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [DRM_MediaKeyRequestInfo](capi-drm-drm-mediakeyrequestinfo.md) | DRM_MediaKeyRequestInfo | Media key request info. |
| [DRM_MediaKeyRequest](capi-drm-drm-mediakeyrequest.md) | DRM_MediaKeyRequest | Media key request. |
| [DRM_Statistics](capi-drm-drm-statistics.md) | DRM_Statistics | Statistics of MediaKeySystem. |
| [DRM_OfflineMediakeyIdArray](capi-drm-drm-offlinemediakeyidarray.md) | DRM_OfflineMediakeyIdArray | Offline media key ids array. |
| [DRM_KeysInfo](capi-drm-drm-keysinfo.md) | DRM_KeysInfo | Media key info. |
| [DRM_MediaKeyStatus](capi-drm-drm-mediakeystatus.md) | DRM_MediaKeyStatus | Media key status like policy etc. |
| [DRM_PsshInfo](capi-drm-drm-psshinfo.md) | DRM_PsshInfo | PSSH info by uuid. |
| [DRM_MediaKeySystemInfo](capi-drm-drm-mediakeysysteminfo.md) | DRM_MediaKeySystemInfo | MediaKeySystemInfo used for player to get media key system info from media source. |
| [DRM_MediaKeySystemDescription](capi-drm-drm-mediakeysystemdescription.md) | DRM_MediaKeySystemDescription | Name and UUID of DRM plugin. |
| [MediaKeySystem](capi-drm-mediakeysystem.md) | MediaKeySystem | Media key system struct. |
| [MediaKeySession](capi-drm-mediakeysession.md) | MediaKeySession | Media key session struct. |

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [DRM_EventType](#drm_eventtype) | DRM_EventType | Enumerates event types of listener. |
| [DRM_ContentProtectionLevel](#drm_contentprotectionlevel) | DRM_ContentProtectionLevel | Content protection level. |
| [DRM_MediaKeyType](#drm_mediakeytype) | DRM_MediaKeyType | Media key type. |
| [DRM_MediaKeyRequestType](#drm_mediakeyrequesttype) | DRM_MediaKeyRequestType | Media key request type. |
| [DRM_OfflineMediaKeyStatus](#drm_offlinemediakeystatus) | DRM_OfflineMediaKeyStatus | Offline media key status. |
| [DRM_CertificateStatus](#drm_certificatestatus) | DRM_CertificateStatus | Certificate status. |

### Macro

| Name | Description |
| -- | -- |
| MAX_MEDIA_KEY_REQUEST_OPTION_COUNT 16 | Max count of media key request option.<br>**Since**: 11 |
| MAX_MEDIA_KEY_REQUEST_OPTION_NAME_LEN 64 | Max len of media key request option name.<br>**Since**: 11 |
| MAX_MEDIA_KEY_REQUEST_OPTION_DATA_LEN 128 | Max len of media key request option data.<br>**Since**: 11 |
| MAX_INIT_DATA_LEN 2048 | Max len of media key request init data.<br>**Since**: 11 |
| MAX_MIMETYPE_LEN 64 | Max len of media mimetype.<br>**Since**: 11 |
| MAX_MEDIA_KEY_REQUEST_DATA_LEN 8192 | Max len of media key request.<br>**Since**: 11 |
| MAX_DEFAULT_URL_LEN 2048 | Max len of URL.<br>**Since**: 11 |
| MAX_STATISTICS_COUNT 10 | Max count of statistics item.<br>**Since**: 11 |
| MAX_STATISTICS_NAME_LEN 64 | Max len of statistics item name.<br>**Since**: 11 |
| MAX_STATISTICS_BUFFER_LEN 256 | Max len of statistics item buffer.<br>**Since**: 11 |
| MAX_OFFLINE_MEDIA_KEY_ID_COUNT 512 | Max count of offline media key id.<br>**Since**: 11 |
| MAX_OFFLINE_MEDIA_KEY_ID_LEN 64 | Max len of offline media key id.<br>**Since**: 11 |
| MAX_KEY_INFO_COUNT 64 | Max count of key info.<br>**Since**: 11 |
| MAX_KEY_ID_LEN 16 | Max len of key id.<br>**Since**: 11 |
| MAX_KEY_STATUS_VALUE_LEN 128 | Max len of key status value.<br>**Since**: 11 |
| MAX_MEDIA_KEY_STATUS_COUNT 64 | Max count of media key status.<br>**Since**: 11 |
| MAX_MEDIA_KEY_STATUS_NAME_LEN 64 | Max len of media key status name.<br>**Since**: 11 |
| MAX_MEDIA_KEY_STATUS_VALUE_LEN 256 | Max len of media key status value.<br>**Since**: 11 |
| DRM_UUID_LEN 16 | Drm system uuid len.<br>**Since**: 11 |
| MAX_PSSH_DATA_LEN 2048 | Max len of PSSH data.<br>**Since**: 11 |
| MAX_PSSH_INFO_COUNT 8 | Max count of PSSH info.<br>**Since**: 11 |
| MAX_MEDIA_KEY_SYSTEM_NAME_LEN 128 | Max len of media key system name.<br>**Since**: 12 |
| MAX_MEDIA_KEY_SYSTEM_NUM 8 | Max num of media key system supported<br>**Since**: 12 |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*DRM_MediaKeySystemInfoCallback)(DRM_MediaKeySystemInfo *mediaKeySystemInfo)](#drm_mediakeysysteminfocallback) | DRM_MediaKeySystemInfoCallback | Callback for getting media key system information from media source. |

## Enum type description

### DRM_EventType

```c
enum DRM_EventType
```

**Description**

Enumerates event types of listener.

**Since**: 11

| Enum item | Description |
| -- | -- |
| EVENT_DRM_BASE = 200 | DRM event base. |
| EVENT_PROVISION_REQUIRED = 201 | Provision required event. |
| EVENT_KEY_REQUIRED = 202 | Media key required event. |
| EVENT_KEY_EXPIRED = 203 | Media key expired event. |
| EVENT_VENDOR_DEFINED = 204 | Vendor defined event. |
| EVENT_EXPIRATION_UPDATE = 206 | Expiration update event. |

### DRM_ContentProtectionLevel

```c
enum DRM_ContentProtectionLevel
```

**Description**

Content protection level.

**Since**: 11

| Enum item | Description |
| -- | -- |
| CONTENT_PROTECTION_LEVEL_UNKNOWN = 0 | Content protection level unknown. |
| CONTENT_PROTECTION_LEVEL_SW_CRYPTO | Content protection level software crypto. |
| CONTENT_PROTECTION_LEVEL_HW_CRYPTO | Content protection level hardware crypto. |
| CONTENT_PROTECTION_LEVEL_ENHANCED_HW_CRYPTO | Content protection level enhanced hardware crypto. |
| CONTENT_PROTECTION_LEVEL_MAX | Content protection level max stub. |

### DRM_MediaKeyType

```c
enum DRM_MediaKeyType
```

**Description**

Media key type.

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

| Enum item | Description |
| -- | -- |
| MEDIA_KEY_TYPE_OFFLINE = 0 | Media key type offline. |
| MEDIA_KEY_TYPE_ONLINE | Media key type online |

### DRM_MediaKeyRequestType

```c
enum DRM_MediaKeyRequestType
```

**Description**

Media key request type.

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

| Enum item | Description |
| -- | -- |
| MEDIA_KEY_REQUEST_TYPE_UNKNOWN = 0 | Media key request type unknown. |
| MEDIA_KEY_REQUEST_TYPE_INITIAL | Media key request type initial. |
| MEDIA_KEY_REQUEST_TYPE_RENEWAL | Media key request type renewal. |
| MEDIA_KEY_REQUEST_TYPE_RELEASE | Media key request type release. |
| MEDIA_KEY_REQUEST_TYPE_NONE | Media key request type none. |
| MEDIA_KEY_REQUEST_TYPE_UPDATE | Media key request type update. |

### DRM_OfflineMediaKeyStatus

```c
enum DRM_OfflineMediaKeyStatus
```

**Description**

Offline media key status.

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

| Enum item | Description |
| -- | -- |
| OFFLINE_MEDIA_KEY_STATUS_UNKNOWN = 0 | Offline media key status unknown. |
| OFFLINE_MEDIA_KEY_STATUS_USABLE | Offline media key status usable. |
| OFFLINE_MEDIA_KEY_STATUS_INACTIVE | Offline media key status inactive. |

### DRM_CertificateStatus

```c
enum DRM_CertificateStatus
```

**Description**

Certificate status.

**System capability**: SystemCapability.Multimedia.Drm.Core

**Since**: 11

| Enum item | Description |
| -- | -- |
| CERT_STATUS_PROVISIONED = 0 | Device already provisioned. |
| CERT_STATUS_NOT_PROVISIONED | Device not provisioned. |
| CERT_STATUS_EXPIRED | Cert already expired. |
| CERT_STATUS_INVALID | Certs are invalid. |
| CERT_STATUS_UNAVAILABLE | Get certs status failed. |


## Function description

### DRM_MediaKeySystemInfoCallback()

```c
typedef void (*DRM_MediaKeySystemInfoCallback)(DRM_MediaKeySystemInfo *mediaKeySystemInfo)
```

**Description**

Callback for getting media key system information from media source.

**Since**: 11


