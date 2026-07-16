# @ohos.multimedia.drm

This module provides the DRM capability to multimedia player.

**Since:** 12

**System capability:** SystemCapability.Multimedia.Drm.Core

## Modules to Import

```TypeScript
import { drm } from '@kit.DrmKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [createMediaKeySystem](arkts-drm-createmediakeysystem-f.md#createmediakeysystem-1) | Creates a MediaKeySystem instance. |
| [getMediaKeySystemUuid](arkts-drm-getmediakeysystemuuid-f.md#getmediakeysystemuuid-1) | Get a MediaKeySystem's UUID. |
| [getMediaKeySystems](arkts-drm-getmediakeysystems-f.md#getmediakeysystems-1) | Get all media key systems supported. |
| [isMediaKeySystemSupported](arkts-drm-ismediakeysystemsupported-f.md#ismediakeysystemsupported-1) | Judge whether a system that specifies name, mimetype and content protection level is supported. |
| [isMediaKeySystemSupported](arkts-drm-ismediakeysystemsupported-f.md#ismediakeysystemsupported-2) | Judge whether a system that specifies name, mimetype is supported. |
| [isMediaKeySystemSupported](arkts-drm-ismediakeysystemsupported-f.md#ismediakeysystemsupported-3) | Judge whether a system that specifies name is supported. |

### Interfaces

| Name | Description |
| --- | --- |
| [EventInfo](arkts-drm-eventinfo-i.md) | Used to indicate the event info attached to specific event type. |
| [KeysInfo](arkts-drm-keysinfo-i.md) | Used to indicate the media key status with a key and its value. |
| [MediaKeyRequest](arkts-drm-mediakeyrequest-i.md) | Provides the drm media key request definitions. |
| [MediaKeySession](arkts-drm-mediakeysession-i.md) | Provide functions and keep a decrypt module. Before calling an MediaKeySession method, we mustuse MediaKeySystem's createMediaKeySession to get a MediaKeySession instance. |
| [MediaKeyStatus](arkts-drm-mediakeystatus-i.md) | Used to indicate the media key status. |
| [MediaKeySystem](arkts-drm-mediakeysystem-i.md) | Manages and record MediaKeySessions. Before calling an MediaKeySystem method, we must use getMediaKeySystemto get a MediaKeySystem instance, then we can call functions. |
| [MediaKeySystemDescription](arkts-drm-mediakeysystemdescription-i.md) | Name and UUID of DRM plugin. |
| [MediaKeySystemInfo](arkts-drm-mediakeysysteminfo-i.md) | Used to indicate the media key system info of media source. |
| [OptionsData](arkts-drm-optionsdata-i.md) | Provides the drm media key request info optional data. |
| [ProvisionRequest](arkts-drm-provisionrequest-i.md) | Provides the drm provision request definitions. |
| [StatisticKeyValue](arkts-drm-statistickeyvalue-i.md) | Used to indicate the statistic info. |

### Enums

| Name | Description |
| --- | --- |
| [CertificateStatus](arkts-drm-certificatestatus-e.md) | Enumerates certificate status. |
| [ContentProtectionLevel](arkts-drm-contentprotectionlevel-e.md) | Enumerates content protection level. |
| [DrmErrorCode](arkts-drm-drmerrorcode-e.md) | Enumerates DRM error codes. |
| [MediaKeyRequestType](arkts-drm-mediakeyrequesttype-e.md) | Enumerates media key request types. |
| [MediaKeyType](arkts-drm-mediakeytype-e.md) | Enumerates media key type. |
| [OfflineMediaKeyStatus](arkts-drm-offlinemediakeystatus-e.md) | Enumerates offline media key status. |
| [PreDefinedConfigName](arkts-drm-predefinedconfigname-e.md) | Enumerates the config names that can be obtained. |

