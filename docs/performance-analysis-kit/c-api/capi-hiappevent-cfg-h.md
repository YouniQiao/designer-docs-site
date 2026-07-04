# hiappevent_cfg.h

## Overview

Defines the names of all the configuration items of the event logging configuration function.If you want to configure the event logging function, you can directly use the configuration item constants.Sample code:<pre>bool res = OH_HiAppEvent_Configure(MAX_STORAGE, "100M");</pre>

**Library**: libhiappevent_ndk.z.so

**System capability**: SystemCapability.HiviewDFX.HiAppEvent

**Since**: 8

**Related module**: [HiAppEvent](capi-hiappevent.md)

## Summary

### Macro

| Name | Description |
| -- | -- |
| DISABLE "disable" | Event logging switch.<br>**Since**: 8 |
| MAX_STORAGE "max_storage"#ifdef __cplusplus} | Event file directory storage quota size.<br>**Since**: 8 |

