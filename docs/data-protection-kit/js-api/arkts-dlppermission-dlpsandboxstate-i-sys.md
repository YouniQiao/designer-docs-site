# DLPSandboxState

DLP沙箱的状态信息。

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

## bundleName

```TypeScript
bundleName: string
```

表示应用包名。最小7字节，最大128字节。超出此范围抛出错误码19100001。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

