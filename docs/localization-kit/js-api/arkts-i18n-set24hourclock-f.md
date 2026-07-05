# set24HourClock

## set24HourClock

```TypeScript
export function set24HourClock(option: boolean): boolean
```

Sets the 24-hour clock.

**Since:** 7

**Deprecated since:** 9

**Substitute:** i18n.System.set24HourClock

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | boolean | Yes | Whether to enable the 24-hour clock. The value true means to enable the 24-hour  clock, and the value false means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true if the setting is successful, and false otherwise. |

