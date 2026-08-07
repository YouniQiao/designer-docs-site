# native_audio_suite_download_manager.h

## Overview

Declare audio download manager related interfaces.

**Library**: libohaudiosuite.so

**System capability**: SystemCapability.Multimedia.Audio.SuiteEngine

**Since**: 26.0.0

**Related module**: [AudioSuite](capi-audiosuite.md)

## Summary

### Struct

| Name | typedef keyword | Description |
| -- | -- | -- |
| [OH_AudioSuite_DownloadStatusInfo](capi-audiosuite-oh-audiosuite-downloadstatusinfo.md) | OH_AudioSuite_DownloadStatusInfo | Define download status information structure. |
| [OH_AudioSuite_DownloadStatusInfoArray](capi-audiosuite-oh-audiosuite-downloadstatusinfoarray.md) | OH_AudioSuite_DownloadStatusInfoArray | Define download status information array structure. |
| [OH_AudioSuite_DownloadManagerStruct](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) | OH_AudioSuite_DownloadManager | Declare the audio download manager.The handle of audio download manager is used for download related functions. |

### Function

| Name | typedef keyword | Description |
| -- | -- | -- |
| [typedef void (\*OH_AudioSuite_DownloadCallback)(OH_AudioSuite_DownloadStatusInfoArray *downloadStatusInfoArray)](#oh_audiosuite_downloadcallback) | OH_AudioSuite_DownloadCallback | Callback function for download status update. |
| [int32_t OH_AudioSuite_GetDownloadManager(OH_AudioSuite_DownloadManager **downloadManager)](#oh_audiosuite_getdownloadmanager) | - | Get the audio download manager handle. |
| [int32_t OH_AudioSuite_RegisterDownloadCallback(OH_AudioSuite_DownloadManager *downloadManager, const OH_AudioSuite_DownloadCallback *callback)](#oh_audiosuite_registerdownloadcallback) | - | Register download status callback. |
| [int32_t OH_AudioSuite_UnregisterDownloadCallback(OH_AudioSuite_DownloadManager *downloadManager, const OH_AudioSuite_DownloadCallback *callback)](#oh_audiosuite_unregisterdownloadcallback) | - | Unregister download status callback. |
| [int32_t OH_AudioSuite_StartDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)](#oh_audiosuite_startdownload) | - | Start downloading a feature. |
| [int32_t OH_AudioSuite_CancelDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)](#oh_audiosuite_canceldownload) | - | Cancel downloading a feature. |
| [int32_t OH_AudioSuite_StartBackgroundDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)](#oh_audiosuite_startbackgrounddownload) | - | Start background downloading a feature. |
| [int32_t OH_AudioSuite_GetDownloadStatus(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName, OH_AudioSuite_DownloadStatusInfo *status)](#oh_audiosuite_getdownloadstatus) | - | Get download status of a feature. |
| [int32_t OH_AudioSuite_UninstallCloudRom(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)](#oh_audiosuite_uninstallcloudrom) | - | Uninstall a downloaded feature. |

## Function description

### OH_AudioSuite_DownloadCallback()

```c
typedef void (*OH_AudioSuite_DownloadCallback)(OH_AudioSuite_DownloadStatusInfoArray *downloadStatusInfoArray)
```

**Description**

Callback function for download status update.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| (OH_AudioSuite_DownloadStatusInfoArray \*downloadStatusInfoArray | Pointer to array of download status information. |

### OH_AudioSuite_GetDownloadManager()

```c
int32_t OH_AudioSuite_GetDownloadManager(OH_AudioSuite_DownloadManager **downloadManager)
```

**Description**

Get the audio download manager handle.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) **downloadManager | Pointer to receive the download manager handle. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager is nullptr.</li><br>         </ul> |

### OH_AudioSuite_RegisterDownloadCallback()

```c
int32_t OH_AudioSuite_RegisterDownloadCallback(OH_AudioSuite_DownloadManager *downloadManager, const OH_AudioSuite_DownloadCallback *callback)
```

**Description**

Register download status callback.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| [const OH_AudioSuite_DownloadCallback](capi-native-audio-suite-download-manager-h.md#oh_audiosuite_downloadcallback) *callback | Callback function to receive download status updates. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or callback is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |

### OH_AudioSuite_UnregisterDownloadCallback()

```c
int32_t OH_AudioSuite_UnregisterDownloadCallback(OH_AudioSuite_DownloadManager *downloadManager, const OH_AudioSuite_DownloadCallback *callback)
```

**Description**

Unregister download status callback.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| [const OH_AudioSuite_DownloadCallback](capi-native-audio-suite-download-manager-h.md#oh_audiosuite_downloadcallback) *callback | Callback function to unregister. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or callback is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |

### OH_AudioSuite_StartDownload()

```c
int32_t OH_AudioSuite_StartDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)
```

**Description**

Start downloading a feature.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| const char *featureName | Name of the feature to download. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or featureName is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |

### OH_AudioSuite_CancelDownload()

```c
int32_t OH_AudioSuite_CancelDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)
```

**Description**

Cancel downloading a feature.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| const char *featureName | Name of the feature to cancel. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or featureName is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_ILLEGAL_STATE} If the current state does not allow cancellation.</li><br>         </ul> |

### OH_AudioSuite_StartBackgroundDownload()

```c
int32_t OH_AudioSuite_StartBackgroundDownload(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)
```

**Description**

Start background downloading a feature.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| const char *featureName | Name of the feature to download. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or featureName is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |

### OH_AudioSuite_GetDownloadStatus()

```c
int32_t OH_AudioSuite_GetDownloadStatus(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName, OH_AudioSuite_DownloadStatusInfo *status)
```

**Description**

Get download status of a feature.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| const char *featureName | Name of the feature. |
| [OH_AudioSuite_DownloadStatusInfo](capi-audiosuite-oh-audiosuite-downloadstatusinfo.md) *status | Pointer to receive download status information. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager, featureName or status is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |

### OH_AudioSuite_UninstallCloudRom()

```c
int32_t OH_AudioSuite_UninstallCloudRom(OH_AudioSuite_DownloadManager *downloadManager, const char *featureName)
```

**Description**

Uninstall a downloaded feature.

**Since**: 26.0.0

**Parameters**:

| Parameter | Description |
| -- | -- |
| [OH_AudioSuite_DownloadManager](capi-audiosuite-oh-audiosuite-downloadmanagerstruct.md) *downloadManager | Download manager handle. |
| const char *featureName | Name of the feature to uninstall. |

**Returns**:

| Type | Description |
| -- | -- |
| int32_t | <ul><br>         <li>{@link AUDIOCOMMON_RESULT_SUCCESS} If the execution is successful.</li><br>         <li>202 if a non-system application calls this system API.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_INVALID_PARAM} If downloadManager or featureName is nullptr.</li><br>         <li>{@link AUDIOCOMMON_RESULT_ERROR_SYSTEM} If IPC communication fails or the operation fails.</li><br>         </ul> |


