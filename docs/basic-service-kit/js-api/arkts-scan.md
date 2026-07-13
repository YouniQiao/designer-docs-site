# @ohos.scan

This module provides JavaScript APIs of the scan framework for discovering and connecting to scanners.

> **NOTE**
> > This topic describes only public APIs provided by the module.

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
| [cancelScan](arkts-basicservices-cancelscan-f.md#cancelscan-1) | Cancels scanning. This API uses a promise to return the result. |
| [closeScanner](arkts-basicservices-closescanner-f.md#closescanner-1) | Closes a scanner. This API uses a promise to return the result. |
| [exit](arkts-basicservices-exit-f.md#exit-1) | Exits the scan service. This API uses a promise to return the result. |
| [getPictureScanProgress](arkts-basicservices-getpicturescanprogress-f.md#getpicturescanprogress-1) | Obtains the progress of scanning a picture. This API uses a promise to return the result. |
| [getScannerCurrentSetting](arkts-basicservices-getscannercurrentsetting-f.md#getscannercurrentsetting-1) | Obtains the current scanner settings. This API uses a promise to return the result. |
| [getScannerParameter](arkts-basicservices-getscannerparameter-f.md#getscannerparameter-1) | Obtains scanner parameters. This API uses a promise to return the result. |
| [init](arkts-basicservices-init-f.md#init-1) | Initializes the scan service. This API uses a promise to return the result. |
| [off](arkts-basicservices-off-f.md#off-1) | Unregisters a callback used to listen for the scanner discovery event. This API uses an asynchronous callback toreturn the result. |
| [off](arkts-basicservices-off-f.md#off-2) | Unregisters a callback used to listen for the scanner sync event. This API uses an asynchronous callback toreturn the result. |
| [on](arkts-basicservices-on-f.md#on-1) | Registers a callback used to listen for the scanner discovery event. This API uses an asynchronous callback toreturn the result. |
| [on](arkts-basicservices-on-f.md#on-2) | Registers a callback used to listen for the scanner sync event. This API uses an asynchronous callback to returnthe result. |
| [openScanner](arkts-basicservices-openscanner-f.md#openscanner-1) | Opens a scanner. This API uses a promise to return the result. |
| [setScanAutoOption](arkts-basicservices-setscanautooption-f.md#setscanautooption-1) | Sets the scan option to auto mode. This API uses a promise to return the result. |
| [setScannerParameter](arkts-basicservices-setscannerparameter-f.md#setscannerparameter-1) | Sets scanner parameters. This API uses a promise to return the result. |
| [startScan](arkts-basicservices-startscan-f.md#startscan-1) | Starts scanning. This API uses a promise to return the result. |
| [startScannerDiscovery](arkts-basicservices-startscannerdiscovery-f.md#startscannerdiscovery-1) | Starts scanner discovery. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addScanner](arkts-basicservices-addscanner-f-sys.md#addscanner-1) | Adds a scanner. This API uses a promise to return the result. |
| [deleteScanner](arkts-basicservices-deletescanner-f-sys.md#deletescanner-1) | Deletes a scanner. This API uses a promise to return the result. |
| [getAddedScanners](arkts-basicservices-getaddedscanners-f-sys.md#getaddedscanners-1) | Obtains the added scanners. This API uses a promise to return the result. |
| [off](arkts-basicservices-off-f-sys.md#off-3) | Unregisters the callback used to listen for the scanner addition event. This API uses an asynchronous callback toreturn the result. |
| [off](arkts-basicservices-off-f-sys.md#off-4) | Unregisters the callback used to listen for the scanner deletion event. This API uses an asynchronous callback toreturn the result. |
| [on](arkts-basicservices-on-f-sys.md#on-3) | Registers a callback used to listen for the scanner addition event. This API uses an asynchronous callback toreturn the result. |
| [on](arkts-basicservices-on-f-sys.md#on-4) | Registers a callback used to listen for the scanner deletion event. This API uses an asynchronous callback toreturn the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PictureScanProgress](arkts-basicservices-picturescanprogress-i.md) | Defines the progress of scanning pictures. |
| [Range](arkts-basicservices-range-i.md) | Defines the range. |
| [ScannerDevice](arkts-basicservices-scannerdevice-i.md) | Defines the scanner. |
| [ScannerOptionValue](arkts-basicservices-scanneroptionvalue-i.md) | Defines the scanner option value. |
| [ScannerParameter](arkts-basicservices-scannerparameter-i.md) | Defines the scanner parameters. |
| [ScannerSyncDevice](arkts-basicservices-scannersyncdevice-i.md) | Defines the device to be synced from the scanner. |

### Enums

| Name | Description |
| --- | --- |
| [ConstraintType](arkts-basicservices-constrainttype-e.md) | Enumerates the parameter constraint types. |
| [OptionValueType](arkts-basicservices-optionvaluetype-e.md) | Enumerates the option value types. |
| [PhysicalUnit](arkts-basicservices-physicalunit-e.md) | Enumerates the physical units. |
| [ScanErrorCode](arkts-basicservices-scanerrorcode-e.md) | Enumerates the scan error codes. |
| [ScannerDiscoveryMode](arkts-basicservices-scannerdiscoverymode-e.md) | Enumerates the scanner discovery modes. |
| [ScannerSyncMode](arkts-basicservices-scannersyncmode-e.md) | Enumerates the scanner sync codes. |

