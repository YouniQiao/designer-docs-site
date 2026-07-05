# AdvertisingData

Describes the advertising data.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## includeDeviceName

```TypeScript
includeDeviceName?: boolean
```

Indicates whether the device name will be included. Default value: false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## manufacturerData

```TypeScript
manufacturerData?: ManufacturerData[]
```

The specified manufacturer data.

**Type:** ManufacturerData[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## serviceData

```TypeScript
serviceData?: ServiceData[]
```

The specified service data.

**Type:** ServiceData[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## serviceUuids

```TypeScript
serviceUuids?: string[]
```

The specified service UUIDs. The length of each UUID must be 36, The value consists of 36 hexadecimal digits and hyphens (-), for example, FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.

**Type:** string[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

