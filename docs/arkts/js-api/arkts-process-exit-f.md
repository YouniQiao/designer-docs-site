# exit

## exit

```TypeScript
function exit(code: number): void
```

终止程序。 请谨慎使用此接口。调用此接口后应用将退出。如果输入参数非 0，可能会导致数据丢失或出现异常。

**Since:** 7

**Deprecated since:** 9

**Substitute:** process.ProcessManager.exit

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | 进程的退出码。 |

**Example**

```TypeScript
process.exit(0);

```

