# GcStats

```TypeScript
type GcStats = Record<string, long>
```

Describes the key-value pair used to store GC statistics. This type does not support multi-thread operations. If this type is operated by multiple threads at the same time in an application, use a lock for it.

**起始版本：** 12

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**属性类型：** Record<string, long>

