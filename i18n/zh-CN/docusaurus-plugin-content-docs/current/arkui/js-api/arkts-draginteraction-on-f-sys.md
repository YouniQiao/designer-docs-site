# on

## on('drag')

```TypeScript
function on(type: 'drag', callback: Callback<DragState>): void
```

注册监听拖拽状态。

**起始版本：** 10

**系统能力：** SystemCapability.Msdp.DeviceStatus.Drag

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'drag' | 是 | 监听类型，固定取值为 'drag'。 |
| callback | Callback&lt;DragState> | 是 | 回调函数，异步返回拖拽状态消息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2.Incorrect parameter types.3.Parameter verification failed. |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12] |

**示例：**

```TypeScript
try {
  dragInteraction.on('drag', (data: dragInteraction.DragState) => {
    console.info(`Drag interaction event: ${data}`);
  });
} catch (error) {
  console.error(`Register failed, code: ${error.code}, message: ${error.message}`);
}

```

