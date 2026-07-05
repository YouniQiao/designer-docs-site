# DLPSandboxInfo

表示DLP沙箱的信息。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## appIndex

```TypeScript
appIndex: number
```

表示DLP沙箱应用索引。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## tokenID

```TypeScript
tokenID: number
```

表示DLP沙箱应用的tokenID。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## bindAppIndex

```TypeScript
bindAppIndex?: number
```

表示被绑定的DLP沙箱应用的应用索引。默认不返回，仅当沙箱应用是预览时返回。

**Type:** number

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

