# OH_MediaKeySession_Callback

```c
typedef struct OH_MediaKeySession_Callback {...} OH_MediaKeySession_Callback
```

## Overview

MediaKeySession_Callback struct, used to listen event like key expired and key change etc..

**Since**: 12

**Related module**: [Drm](capi-drm.md)

**Header file**: [native_mediakeysession.h](capi-native-mediakeysession-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [OH_MediaKeySession_EventCallback](capi-native-mediakeysession-h.md#oh_mediakeysession_eventcallback) eventCallback | Normal event callback like key expired etc.. |
| [OH_MediaKeySession_KeyChangeCallback](capi-native-mediakeysession-h.md#oh_mediakeysession_keychangecallback) keyChangeCallback | Key change callback for keys change event. |


