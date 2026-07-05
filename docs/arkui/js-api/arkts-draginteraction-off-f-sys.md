# off

## off('drag')

```TypeScript
function off(type: 'drag', callback?: Callback<DragState>): void
```

取消监听拖拽状态。

**Since:** 10

**System capability:** SystemCapability.Msdp.DeviceStatus.Drag

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drag' | Yes | 监听类型，固定取值为 'drag'。 |
| callback | Callback&lt;DragState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2.Incorrect parameter types.3.Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**Example**

```TypeScript
// Unregister a single callback.
function single_callback(event: dragInteraction.DragState) {
  console.info(`Drag interaction event: ${event}`);
  return false;
}
try {
  dragInteraction.on('drag', single_callback);
  dragInteraction.off("drag", single_callback);
} catch (error) {
  console.error(`Execute failed, code: ${error.code}, message: ${error.message}`);
}


// Unregister all callbacks.
function all_callback(event: dragInteraction.DragState) {
  console.info(`Drag interaction event: ${event}`);
  return false;
}
try {
  dragInteraction.on('drag', all_callback);
  dragInteraction.off("drag");
} catch (error) {
  console.error(`Execute failed, code: ${error.code}, message: ${error.message}`);
}

```

