# @ohos.nearlink.advertising

Provides methods related to advertising. Nearby devices can scan and discover this device.

**Since:** 26.0.0

<!--Device-unnamed-declare namespace advertising--><!--Device-unnamed-declare namespace advertising-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { advertising } from '@kit.ConnectivityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [offAdvertisingStateChange](arkts-connectivity-advertising-offadvertisingstatechange-f.md#offadvertisingstatechange-1) | Unsubscribes from the advertising state change event. |
| [onAdvertisingStateChange](arkts-connectivity-advertising-onadvertisingstatechange-f.md#onadvertisingstatechange-1) | Subscribes to the advertising state change event.This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission. |
| [startAdvertising](arkts-connectivity-advertising-startadvertising-f.md#startadvertising-1) | Starts advertising. |
| [stopAdvertising](arkts-connectivity-advertising-stopadvertising-f.md#stopadvertising-1) | Stops advertising with advertising ID. |

### Interfaces

| Name | Description |
| --- | --- |
| [AdvertisingData](arkts-connectivity-advertising-advertisingdata-i.md) | Describes the advertising data. |
| [AdvertisingParams](arkts-connectivity-advertising-advertisingparams-i.md) | Describes the advertising parameters. |
| [AdvertisingSettings](arkts-connectivity-advertising-advertisingsettings-i.md) | Describes the settings for advertising. |
| [AdvertisingStateChangeInfo](arkts-connectivity-advertising-advertisingstatechangeinfo-i.md) | Advertising state change information. |
| [ManufacturerData](arkts-connectivity-advertising-manufacturerdata-i.md) | Describes the manufacturer data. |
| [ServiceData](arkts-connectivity-advertising-servicedata-i.md) | Describes the service data. |

### Enums

| Name | Description |
| --- | --- |
| [AdvertisingState](arkts-connectivity-advertising-advertisingstate-e.md) | The enum of advertising state. |
| [TxPowerMode](arkts-connectivity-advertising-txpowermode-e.md) | The enum of advertising mode. |

