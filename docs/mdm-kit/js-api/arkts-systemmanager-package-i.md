# Package

系统更新包详情。

**Since:** 12

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

## path

```TypeScript
path: string
```

系统更新包文件路径。若传入fd参数，该参数传入更新包文件名。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## type

```TypeScript
type: PackageType
```

系统更新包类型。

**Type:** PackageType

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## fd

```TypeScript
fd?: number
```

系统更新包文件句柄。当前不支持只传入path参数，需要传入fd。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

