# ScanFilters

扫描过滤器。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## rssi

```TypeScript
rssi?: int
```

接收信号强度指示。 单位为： 分贝毫瓦，取值应为[-128,127]内的整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## address

```TypeScript
address?: string
```

设备地址。 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## manufacturerDataMask

```TypeScript
manufacturerDataMask?: ArrayBuffer
```

制造商数据掩码。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## manufacturerId

```TypeScript
manufacturerId?: int
```

厂商ID。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## manufacturerData

```TypeScript
manufacturerData?: ArrayBuffer
```

制造商数据。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## deviceName

```TypeScript
deviceName?: string
```

设备名称。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

