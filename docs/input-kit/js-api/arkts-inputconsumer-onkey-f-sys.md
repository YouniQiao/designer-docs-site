# onKey

## onKey

```TypeScript
function onKey(keyOptions: KeyOptions, callback:KeyCommandCallback): void
```

订阅组合按键（按键命令模式），支持通过triggerType指定不同的触发模式。当满足条件的组合按键输入事件发生时，使用callback异步回调。 与 [inputConsumer.on('key')]inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>) 现有接口的区别： - 本接口的keyOptions支持triggerType参数，可选择按键按下触发、重复按下触发、重复按下或抬起均会触发等模式。 - 本接口回调参数为KeyCommandCallback类型，同时接收KeyOptions和KeyEvent对象。 - 本接口采用事件消费机制，可通过事件消费阻止按键事件向后传递。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.MultimodalInput.Input.InputConsumer

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyOptions | KeyOptions | Yes | 组合键选项，支持triggerType参数。 |
| callback | KeyCommandCallback | Yes | 回调函数，返回组合键选项和按键事件数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission denied, non-system app called system api. |

