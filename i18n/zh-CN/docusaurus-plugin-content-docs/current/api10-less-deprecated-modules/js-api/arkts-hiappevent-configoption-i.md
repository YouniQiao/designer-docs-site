# ConfigOption

Provides the configuration items for application event logging.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent.ConfigOption

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## disable

```TypeScript
disable?: boolean
```

Application event logging switch. The value **true** means to disable the application event logging function, and the value **false** means the opposite.

**类型：** boolean

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent.ConfigOption#disable

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## maxStorage

```TypeScript
maxStorage?: string
```

Maximum size of the event file storage directory. The default value is **10M**. If the specified size is exceeded, the oldest event logging files in the directory will be deleted to free up space.

**类型：** string

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent.ConfigOption#maxStorage

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

