# PacMap

用于存储数据的PacMap类型。

**Since:** 7

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

## key

```TypeScript
[key: string]: number | string | boolean | Array<string | number | boolean> | null
```

用于存储数据的PacMap类型。 如果自定义sequencable对象被放入PacMap对象中，并将跨进程传输，你必须调用BasePacMap.setClassLoader(ClassLoader)为自定义对象设置一个类加载器。 如果要将PacMap对象传输到非ohos进程，支持基本类型的值，但不支持自定义可序列对象。

**Type:** number | string | boolean | Array<string | number | boolean> | null

**Since:** 7

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Ability.AbilityRuntime.FAModel

