# DeviceStatus

设备状态信息。用于描述伴随设备的当前状态，包括设备业务标识、用户名、型号信息、设备名、在线状态以及支持的业务ID列表等。

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@kit.UserAuthenticationKit';
```

## deviceUserName

```TypeScript
deviceUserName: string
```

设备用户名。设备上当前用户的显示名称，用于在设备选择界面展示。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## deviceModelInfo

```TypeScript
deviceModelInfo: string
```

设备模型信息。设备的型号标识，如产品型号、设备类型等信息。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## deviceKey

```TypeScript
deviceKey: DeviceKey
```

设备关键信息。包含设备ID类型、设备ID和设备用户ID，作为设备的唯一标识。

**Type:** DeviceKey

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## isOnline

```TypeScript
isOnline: boolean
```

设备在线状态。true表示设备处于在线状态，可以与主设备通信；false表示设备处于离线状态，无法进行认证交互。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## supportedBusinessIds

```TypeScript
supportedBusinessIds: int[]
```

设备支持的业务ID列表。表示该设备支持的业务场景范围，如解锁锁屏、解锁应用锁等。不同设备因认证安全性差异，支持的业务范围不同。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## deviceName

```TypeScript
deviceName: string
```

设备名。设备的名称或别名，用于在设备列表中展示给用户。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

