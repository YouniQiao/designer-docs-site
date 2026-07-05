# @ohos.scan

该模块为扫描框架的js-api接口文档，提供发现和连接扫描仪的能力。 > **说明：** > > 当前界面仅包含本模块的公开接口。

**Since:** 20

**System capability:** SystemCapability.Print.PrintFramework

## Modules to Import

```TypeScript
import { scan } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[addScanner](arkts-scan-addscanner-f-sys.md#addScanner-1) | 添加扫描仪（系统API）。使用Promise异步回调。 |
| [cancelScan](arkts-scan-cancelscan-f.md#cancelScan-1) | 取消扫描。使用Promise异步回调。 |
| [closeScanner](arkts-scan-closescanner-f.md#closeScanner-1) | 关闭扫描仪。使用Promise异步回调。 |
| <!--DelRow-->[deleteScanner](arkts-scan-deletescanner-f-sys.md#deleteScanner-1) | 删除扫描仪（系统API）。使用Promise异步回调。 |
| [exit](arkts-scan-exit-f.md#exit-1) | 退出扫描服务。使用Promise异步回调。 |
| <!--DelRow-->[getAddedScanners](arkts-scan-getaddedscanners-f-sys.md#getAddedScanners-1) | 获取已添加的扫描仪（系统API）。使用Promise异步回调。 |
| [getPictureScanProgress](arkts-scan-getpicturescanprogress-f.md#getPictureScanProgress-1) | 获取图片扫描进度。使用Promise异步回调。 |
| [getScannerCurrentSetting](arkts-scan-getscannercurrentsetting-f.md#getScannerCurrentSetting-1) | 获取当前扫描仪设置。使用Promise异步回调。 |
| [getScannerParameter](arkts-scan-getscannerparameter-f.md#getScannerParameter-1) | 获取扫描仪参数。使用Promise异步回调。 |
| [init](arkts-scan-init-f.md#init-1) | 初始化扫描服务。使用Promise异步回调。 |
| [off](arkts-scan-off-f.md#off-1) | 取消注册扫描仪设备发现事件回调。使用callback异步回调。 |
| [off](arkts-scan-off-f.md#off-2) | 取消注册扫描仪设备同步事件回调。使用callback异步回调。 |
| <!--DelRow-->[off](arkts-scan-off-f-sys.md#off-1) | 取消注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。 |
| <!--DelRow-->[off](arkts-scan-off-f-sys.md#off-2) | 取消注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。 |
| <!--DelRow-->[offScanDeviceAdd](arkts-scan-offscandeviceadd-f-sys.md#offScanDeviceAdd-1) | Unregister event callback for scanner device add (system API). |
| <!--DelRow-->[offScanDeviceDel](arkts-scan-offscandevicedel-f-sys.md#offScanDeviceDel-1) | Unregister event callback for scanner device delete (system API). |
| [offScanDeviceFound](arkts-scan-offscandevicefound-f.md#offScanDeviceFound-1) | Unregister event callback for scanner device found. |
| [offScanDeviceSync](arkts-scan-offscandevicesync-f.md#offScanDeviceSync-1) | Unregister event callback for scanner device sync. |
| [on](arkts-scan-on-f.md#on-1) | 注册扫描仪设备发现事件回调。使用callback异步回调。 |
| [on](arkts-scan-on-f.md#on-2) | 注册扫描仪设备同步事件回调。使用callback异步回调。 |
| <!--DelRow-->[on](arkts-scan-on-f-sys.md#on-1) | 注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。 |
| <!--DelRow-->[on](arkts-scan-on-f-sys.md#on-2) | 注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。 |
| <!--DelRow-->[onScanDeviceAdd](arkts-scan-onscandeviceadd-f-sys.md#onScanDeviceAdd-1) | Register event callback for scanner device add (system API). |
| <!--DelRow-->[onScanDeviceDel](arkts-scan-onscandevicedel-f-sys.md#onScanDeviceDel-1) | Register event callback for scanner device delete (system API). |
| [onScanDeviceFound](arkts-scan-onscandevicefound-f.md#onScanDeviceFound-1) | Register event callback for scanner device found. |
| [onScanDeviceSync](arkts-scan-onscandevicesync-f.md#onScanDeviceSync-1) | Register event callback for scanner device sync. |
| [openScanner](arkts-scan-openscanner-f.md#openScanner-1) | 打开扫描仪。使用Promise异步回调。 |
| [setScanAutoOption](arkts-scan-setscanautooption-f.md#setScanAutoOption-1) | 设置扫描选项为自动模式。使用Promise异步回调。 |
| [setScannerParameter](arkts-scan-setscannerparameter-f.md#setScannerParameter-1) | 设置扫描仪参数。使用Promise异步回调。 |
| [startScan](arkts-scan-startscan-f.md#startScan-1) | 开始扫描。使用Promise异步回调。 |
| [startScannerDiscovery](arkts-scan-startscannerdiscovery-f.md#startScannerDiscovery-1) | 开始发现扫描仪。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [PictureScanProgress](arkts-scan-picturescanprogress-i.md) | 定义图片扫描进度的接口。 |
| [Range](arkts-scan-range-i.md) | 定义范围的接口。 |
| [ScannerDevice](arkts-scan-scannerdevice-i.md) | 定义扫描仪设备的接口。 |
| [ScannerOptionValue](arkts-scan-scanneroptionvalue-i.md) | 定义扫描仪选项值的接口。 |
| [ScannerParameter](arkts-scan-scannerparameter-i.md) | 定义扫描仪参数的接口。 |
| [ScannerSyncDevice](arkts-scan-scannersyncdevice-i.md) | 定义扫描仪同步设备的接口。 |

### Enums

| Name | Description |
| --- | --- |
| [ConstraintType](arkts-scan-constrainttype-e.md) | 定义参数限制类型的枚举。 |
| [OptionValueType](arkts-scan-optionvaluetype-e.md) | 定义选项值类型的枚举。 |
| [PhysicalUnit](arkts-scan-physicalunit-e.md) | 定义物理单位的枚举。 |
| [ScanErrorCode](arkts-scan-scanerrorcode-e.md) | 定义扫描错误码的枚举。 |
| [ScannerDiscoveryMode](arkts-scan-scannerdiscoverymode-e.md) | 定义扫描仪发现方式的枚举。 |
| [ScannerSyncMode](arkts-scan-scannersyncmode-e.md) | 定义扫描仪同步码的枚举。 |

