# isPiPEnabled

## isPiPEnabled

```TypeScript
function isPiPEnabled(): boolean
```

判断当前设备是否支持画中画功能。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前系统是否支持画中画功能。true表示支持，false则表示不支持。 |

**Example**

```TypeScript
let enable: boolean = PiPWindow.isPiPEnabled(); // Check whether the PiP window is supported.
console.info('isPiPEnabled:' + enable);

```

