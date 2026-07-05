# set24HourClock

## set24HourClock

```TypeScript
export function set24HourClock(option: boolean): boolean
```

Sets the 24-hour clock.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** i18n.System.set24HourClock

**需要权限：** 

 ohos.permission.UPDATE_CONFIGURATION

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| option | boolean | 是 | Whether to enable the 24-hour clock. The value true means to enable the 24-hour  clock, and the value false means the opposite. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the setting is successful, and false otherwise. |

