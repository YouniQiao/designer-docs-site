# on (System API)

## on('formUninstall')

```TypeScript
function on(type: 'formUninstall', callback: Callback<string>): void
```

Subscribes to widget uninstall events. This API uses an asynchronous callback to return the result.

> **NOTE**
>
> Widget uninstall is different from widget removal. When an application is uninstalled, the corresponding widget
> is automatically uninstalled.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** on

**System capability:** SystemCapability.Ability.Form

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'formUninstall' | Yes | Event type. The value **'formUninstall'** indicates a widget uninstallationevent. |
| callback | Callback&lt;string&gt; | Yes | Callback used to return the widget ID. |

