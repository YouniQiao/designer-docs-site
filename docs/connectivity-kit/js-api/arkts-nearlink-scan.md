# @ohos.nearlink.scan

提供扫描和发现附近设备的方法。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## Summary

### Functions

| Name | Description |
| --- | --- |
| [offDeviceFound](arkts-scan-offdevicefound-f.md#offDeviceFound-1) | 取消订阅星闪扫描结果。 |
| [onDeviceFound](arkts-scan-ondevicefound-f.md#onDeviceFound-1) | 订阅NearLink扫描结果。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。 |
| [startScan](arkts-scan-startscan-f.md#startScan-1) | 开始使用过滤器扫描指定的NearLink设备。 如果不想使用过滤器，可以将过滤器参数设置为{@code null}。 |
| [stopScan](arkts-scan-stopscan-f.md#stopScan-1) | 停止扫描。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ScanFilters](arkts-scan-scanfilters-i.md) | 扫描过滤器。 |
| [ScanOptions](arkts-scan-scanoptions-i.md) | 扫描参数。 |
| [ScanResults](arkts-scan-scanresults-i.md) | 扫描结果的内容。 |

### Enums

| Name | Description |
| --- | --- |
| [ScanMode](arkts-scan-scanmode-e.md) | 扫描模式的枚举。 |

