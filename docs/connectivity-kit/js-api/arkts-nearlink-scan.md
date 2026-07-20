# @ohos.nearlink.scan

Provides methods for scanning and discovering nearby devices.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace scan--><!--Device-unnamed-declare namespace scan-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { scan } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [offDeviceFound](arkts-connectivity-scan-offdevicefound-f.md#offdevicefound-1) | Unsubscribes from NearLink scan results. |
| [onDeviceFound](arkts-connectivity-scan-ondevicefound-f.md#ondevicefound-1) | Subscribes to NearLink scan results.This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned. |
| [startScan](arkts-connectivity-scan-startscan-f.md#startscan-1) | Starts scanning for specified NearLink devices with filters.It is allowed to set filter parameter to {@code null} if you do not want to use filter. |
| [stopScan](arkts-connectivity-scan-stopscan-f.md#stopscan-1) | Stops scanning. |

### Interfaces

| Name | Description |
| --- | --- |
| [ScanFilters](arkts-connectivity-scan-scanfilters-i.md) | Describes the scan filters. |
| [ScanOptions](arkts-connectivity-scan-scanoptions-i.md) | Describes the parameters for scan. |
| [ScanResults](arkts-connectivity-scan-scanresults-i.md) | Describes the contents of the scan results. |

### Enums

| Name | Description |
| --- | --- |
| [ScanMode](arkts-connectivity-scan-scanmode-e.md) | The enum of scan mode. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ScanMode](arkts-connectivity-scan-scanmode-e-sys.md) | The enum of scan mode. |
<!--DelEnd-->

