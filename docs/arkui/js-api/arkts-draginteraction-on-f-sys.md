# on

## on('drag')

```TypeScript
function on(type: 'drag', callback: Callback<DragState>): void
```

注册监听拖拽状态。

**Since:** 10

**System capability:** SystemCapability.Msdp.DeviceStatus.Drag

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drag' | Yes | 监听类型，固定取值为 'drag'。 |
| callback | Callback&lt;DragState> | Yes | 回调函数，异步返回拖拽状态消息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2.Incorrect parameter types.3.Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**Example**

```TypeScript
try {
  dragInteraction.on('drag', (data: dragInteraction.DragState) => {
    console.info(`Drag interaction event: ${data}`);
  });
} catch (error) {
  console.error(`Register failed, code: ${error.code}, message: ${error.message}`);
}

```

