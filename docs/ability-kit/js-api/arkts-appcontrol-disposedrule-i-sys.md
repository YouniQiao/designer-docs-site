# DisposedRule

标识拦截规则。

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## componentType

```TypeScript
componentType: ComponentType
```

拦截时将提升的能力的类型。

**Type:** ComponentType

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## controlType

```TypeScript
controlType: ControlType
```

拦截指定应用程序的不同策略。

**Type:** ControlType

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## want

```TypeScript
want: Want
```

指定应用被拦截时，跳转到的页面。

**Type:** Want

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## priority

```TypeScript
priority: int
```

拦截规则的优先级，用于规则列表查询结果排序。取值为整数，数值越小，优先级越高，排序越靠前。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## elementList

```TypeScript
elementList: Array<ElementName>
```

拦截指定应用程序能力的列表。

**Type:** Array<ElementName>

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## disposedType

```TypeScript
disposedType: DisposedType
```

对应用的拦截规则。

**Type:** DisposedType

**Since:** 11

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

