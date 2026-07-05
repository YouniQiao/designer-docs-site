# DeviceSelectResult

伴随设备选择回调的返回结果。用于在设备选择回调中返回用户选择的设备信息和扩展上下文。

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { companionDeviceAuth } from '@kit.UserAuthenticationKit';
```

## deviceKeys

```TypeScript
deviceKeys: DeviceKey[]
```

设备信息列表。包含用户选择的设备业务标识信息，每个DeviceKey包含设备ID类型、设备ID和设备用户ID。系统会根据这些信息执行后续的添加模板或认证操作。

**Type:** DeviceKey[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## selectionContext

```TypeScript
selectionContext?: Uint8Array
```

设备选择上下文。携带JSON格式的扩展信息，可用于传递设备选择过程中的额外参数，如认证配置、业务场景标识等。

**Type:** Uint8Array

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

