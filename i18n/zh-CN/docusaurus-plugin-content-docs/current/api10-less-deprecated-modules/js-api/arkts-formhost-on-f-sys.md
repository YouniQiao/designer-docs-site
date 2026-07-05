# on

## on('formUninstall')

```TypeScript
function on(type: 'formUninstall', callback: Callback<string>): void
```

Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.app.form.formHost:formHost#on

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'formUninstall' | 是 | Event type. The value 'formUninstall' indicates a widget uninstallation  event. |
| callback | Callback&lt;string> | 是 | Callback used to return the widget ID. |

