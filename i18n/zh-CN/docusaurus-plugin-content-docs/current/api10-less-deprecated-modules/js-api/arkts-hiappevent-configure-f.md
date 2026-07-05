# configure

## configure

```TypeScript
function configure(config: ConfigOption): boolean
```

Configures the application event logging function, such as setting the event logging switch and maximum size of the directory that stores the event logging files.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.hiviewdfx.hiAppEvent/hiAppEvent#configure

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| config | ConfigOption | 是 | Configuration items for application event logging. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the configuration is successful; returns false otherwise. |

**示例：**

```TypeScript
// 配置应用事件打点功能开关
let config1: hiAppEvent.ConfigOption = {
  disable: true,
};
hiAppEvent.configure(config1);

// 配置事件文件目录存储限额大小
let config2: hiAppEvent.ConfigOption = {
  maxStorage: '100M',
};
hiAppEvent.configure(config2);

```

