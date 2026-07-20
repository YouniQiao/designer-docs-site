# AdvertiseData

Describes the advertising data.

**Since:** 10

<!--Device-ble-interface AdvertiseData--><!--Device-ble-interface AdvertiseData-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## Modules to Import

```TypeScript
import { ble } from '@kit.ConnectivityKit';
```

## advertiseName

```TypeScript
advertiseName?: string
```

Indicates the local name data type in the advertisement packet. If both the property and{@link AdvertiseData#includeDeviceName} property are used together,the {@link AdvertiseData#advertiseName} property will ultimately take effect.

**Type:** string

**Since:** 23

**Required permissions:** ohos.permission.MANAGE_BLUETOOTH_ADVERTISER_NAME

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-AdvertiseData-advertiseName?: string--><!--Device-AdvertiseData-advertiseName?: string-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## includeDeviceName

```TypeScript
includeDeviceName?: boolean
```

Indicates whether the device name will be included in the advertisement packet.

**Type:** boolean

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdvertiseData-includeDeviceName?: boolean--><!--Device-AdvertiseData-includeDeviceName?: boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## includeTxPower

```TypeScript
includeTxPower?: boolean
```

Indicates whether the tx power will be included in the advertisement packet.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AdvertiseData-includeTxPower?: boolean--><!--Device-AdvertiseData-includeTxPower?: boolean-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## manufactureData

```TypeScript
manufactureData: Array<ManufactureData>
```

The specified manufacturer data list to this advertisement

**Type:** Array<ManufactureData>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdvertiseData-manufactureData: Array<ManufactureData>--><!--Device-AdvertiseData-manufactureData: Array<ManufactureData>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceData

```TypeScript
serviceData: Array<ServiceData>
```

The specified service data list to this advertisement

**Type:** Array<ServiceData>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdvertiseData-serviceData: Array<ServiceData>--><!--Device-AdvertiseData-serviceData: Array<ServiceData>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

## serviceUuids

```TypeScript
serviceUuids: Array<string>
```

The specified service UUID list to this advertisement

**Type:** Array<string>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AdvertiseData-serviceUuids: Array<string>--><!--Device-AdvertiseData-serviceUuids: Array<string>-End-->

**System capability:** SystemCapability.Communication.Bluetooth.Core

