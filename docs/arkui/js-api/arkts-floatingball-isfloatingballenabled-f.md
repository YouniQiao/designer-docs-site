# isFloatingBallEnabled

## isFloatingBallEnabled

```TypeScript
function isFloatingBallEnabled(): boolean
```

判断当前设备是否支持闪控球功能。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前设备是否支持闪控球功能。true表示支持，false则表示不支持。 |

**Example**

```TypeScript
let enable: boolean = floatingBall.isFloatingBallEnabled();
console.info('Floating ball enabled is: ' + enable);

```

