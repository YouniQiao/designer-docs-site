# kill

## kill

```TypeScript
function kill(signal: number, pid: number): boolean
```

发送信号到指定进程，结束该进程。

**Since:** 7

**Deprecated since:** 9

**Substitute:** process.ProcessManager.kill

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| signal | number | Yes | 发送的信号。 |
| pid | number | Yes | 进程的 id。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 信号发送成功返回 true，失败返回 false。 |

**Example**

```TypeScript
let pres = process.pid;
let result = process.kill(28, pres);

```

