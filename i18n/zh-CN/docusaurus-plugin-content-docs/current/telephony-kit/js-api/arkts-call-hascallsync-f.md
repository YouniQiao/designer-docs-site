# hasCallSync

## hasCallSync

```TypeScript
function hasCallSync(): boolean
```

Checks whether a call is ongoing.

**起始版本：** 10

**系统能力：** SystemCapability.Telephony.CallManager

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if at least one call is not in the {@link CallState#CALL_STATE_IDLE}  state; returns {@code false} otherwise. |

**示例：**

```TypeScript
let hasCall: boolean = call.hasCallSync();
console.info(`hasCallSync success, has call is ` + hasCall);

```

