# ScanResults

扫描结果的内容。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## rssi

```TypeScript
rssi: int
```

外围设备的RSSI。 单位为： 分贝毫瓦，取值范围为全体整数，取值为127时表示无效值。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## address

```TypeScript
address: string
```

远端设备的地址。 长度为17，由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## data

```TypeScript
data: ArrayBuffer
```

原始数据。

**Type:** ArrayBuffer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## isConnectable

```TypeScript
isConnectable: boolean
```

广播是否可连接。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## deviceClass

```TypeScript
deviceClass?: nearlinkConstant.DeviceClass
```

设备类型。

**Type:** nearlinkConstant.DeviceClass

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

## deviceName

```TypeScript
deviceName: string
```

外围设备的设备名称。 最大长度为26。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

