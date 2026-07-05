# off

## off('formUninstall')

```TypeScript
function off(type: 'formUninstall', callback?: Callback<string>): void
```

Unsubscribes from widget uninstall events. This API uses an asynchronous callback to return the result. > **NOTE** > > Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget > is automatically uninstalled.

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.app.form.formHost:formHost#off

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formUninstall' | Yes | Event type. The value 'formUninstall' indicates a widget uninstallation  event. |
| callback | Callback&lt;string> | No |  |

