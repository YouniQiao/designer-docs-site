# ConfigOption

Provides the configuration items for application event logging.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** ConfigOption

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## disable

```TypeScript
disable?: boolean
```

Application event logging switch. The value **true** means to disable the application event logging function, and the value **false** means the opposite.

**Type:** boolean

**Since:** 7

**Deprecated since:** 9

**Substitutes:** disable

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

## maxStorage

```TypeScript
maxStorage?: string
```

Maximum size of the event file storage directory. The default value is **10M**. If the specified size is exceeded, the oldest event logging files in the directory will be deleted to free up space.

**Type:** string

**Since:** 7

**Deprecated since:** 9

**Substitutes:** maxStorage

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

