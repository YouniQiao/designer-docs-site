# TemplateStatus

用于描述已注册的伴随设备认证模板的完整状态信息，包括模板ID、数据确认状态、有效性、用户ID、添加时间、支持的业务范围以及关联的设备状态等。

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@kit.UserAuthenticationKit';
```

## enabledBusinessIds

```TypeScript
enabledBusinessIds: int[]
```

支持的业务ID列表。该模板已启用的业务场景范围，可通过[updateEnabledBusinessIds]companionDeviceAuth.updateEnabledBusinessIds接口更 新。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## isValid

```TypeScript
isValid: boolean
```

模板有效性。true表示模板有效，可用于认证；false表示模板无效，可能已被删除或失效，无法用于认证。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## addedTime

```TypeScript
addedTime: Date
```

模板添加时间。模板创建的时间戳，格式为Unix时间戳，即自1970年1月1日起经过的毫秒数。

**Type:** Date

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## isConfirmed

```TypeScript
isConfirmed: boolean
```

数据确认状态。true表示数据是实时数据，已与设备确认同步；false表示数据是缓存数据，可能与设备实际状态存在差异。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## localUserId

```TypeScript
localUserId: int
```

本地用户ID。主设备上与该模板关联的用户标识，为大于等于0的正整数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## templateId

```TypeScript
templateId: Uint8Array
```

模板ID。伴随设备认证模板的唯一标识，用于在更新业务范围或订阅认证状态时指定目标模板。

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## deviceStatus

```TypeScript
deviceStatus: DeviceStatus
```

设备状态信息。与该模板关联的伴随设备的当前状态，包括在线状态、设备名等。

**Type:** DeviceStatus

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

