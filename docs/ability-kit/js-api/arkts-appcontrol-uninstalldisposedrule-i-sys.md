# UninstallDisposedRule

标识卸载处置规则。

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## want

```TypeScript
want: Want
```

指定应用被拦截时，跳转到的组件。

**Type:** Want

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## uninstallComponentType

```TypeScript
uninstallComponentType: UninstallComponentType
```

拦截时将拉起能力的类型。

**Type:** UninstallComponentType

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## priority

```TypeScript
priority: int
```

拦截规则的优先级，用于规则列表查询结果排序。取值为整数，数值越小，优先级越高，排序越靠前。

**Type:** int

**Since:** 15

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

