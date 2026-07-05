# RetentionPolicy

```TypeScript
export const enum RetentionPolicy
```

描述注解类型保留策略的枚举类型。其枚举值和Retention结合使用，以指定注解的生命周期。

**Since:** 24

**System capability:** SystemCapability.Utils.Lang

## SOURCE

```TypeScript
SOURCE = 'source'
```

注解将在编译期被移除。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

## BYTECODE

```TypeScript
BYTECODE = 'bytecode'
```

注解将保留到编译产物中。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Utils.Lang

