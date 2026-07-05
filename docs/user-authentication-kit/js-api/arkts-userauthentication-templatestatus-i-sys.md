# TemplateStatus (System API)

Provides the template status maintained by the **companionDeviceAuth** module.

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@ohos.userIAM.companionDeviceAuth';
```

## addedTime

```TypeScript
addedTime: Date
```

Template adding time. The value is a Unix timestamp, that is, the number of milliseconds elapsed since the Unix epoch.

**Type:** Date

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## deviceStatus

```TypeScript
deviceStatus: DeviceStatus
```

Device status information.

**Type:** DeviceStatus

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## enabledBusinessIds

```TypeScript
enabledBusinessIds: number[]
```

List of supported service IDs.

**Type:** number[]

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## isConfirmed

```TypeScript
isConfirmed: boolean
```

Whether the data is real-time data. The options are as follows: **true**: The data is real-time data. **false**: The data is cached data.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## isValid

```TypeScript
isValid: boolean
```

Whether the template is valid. The options are as follows: **true**: The template is valid. **false**: The template is invalid.

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## localUserId

```TypeScript
localUserId: number
```

Local user ID.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## templateId

```TypeScript
templateId: Uint8Array
```

Template ID.

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

