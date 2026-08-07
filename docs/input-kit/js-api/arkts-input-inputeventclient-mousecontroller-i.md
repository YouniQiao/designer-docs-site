# MouseController

Provides the capability of simulating mouse operations. The simulated mouse operation sequence must meet the following requirements:

1. A mouse button can be pressed only when it is in the released state.2. A mouse button can only be released after it has been pressed.3. A valid axis event sequence must begin with a **beginAxis** call, followed by zero or more **updateAxis** calls,and end with an **endAxis** call.4. Only one axis event sequence can be in progress at a time.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

<!--Device-inputEventClient-interface MouseController--><!--Device-inputEventClient-interface MouseController-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

## beginAxis

ArkTS-Dyn:
```TypeScript
beginAxis(axis: Axis, value: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
beginAxis(axis: Axis, value: int): Promise<void>
```

Starts an axis event. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-beginAxis(axis: Axis, value: int): Promise<void>--><!--Device-MouseController-beginAxis(axis: Axis, value: int): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Axis type. |
| value | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Axis value. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The axis event in progress. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## endAxis

```TypeScript
endAxis(axis: Axis): Promise<void>
```

Ends an axis event. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-endAxis(axis: Axis): Promise<void>--><!--Device-MouseController-endAxis(axis: Axis): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Axis type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The axis event is not in progress. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## moveTo

ArkTS-Dyn:
```TypeScript
moveTo(displayId: number, displayX: number, displayY: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
moveTo(displayId: int, displayX: int, displayY: int): Promise<void>
```

Moves the mouse cursor to the specified display coordinates. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-moveTo(displayId: int, displayX: int, displayY: int): Promise<void>--><!--Device-MouseController-moveTo(displayId: int, displayX: int, displayY: int): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| displayId | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | ID of the target display. |
| displayX | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | X coordinate relative to the left edge of the display, in px. If the value exceeds the valid range of the display, the actual coordinate will be clamped to the valid range [0, display width - 1]. |
| displayY | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Y coordinate relative to the top edge of the display, in px. If the value exceeds the valid range of the display, the actual coordinate will be clamped to the valid range [0, display height - 1]. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300002](../errorcode-inputeventclient.md#4300002-display-does-not-exist) | The display does not exist. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## pressButton

```TypeScript
pressButton(button: Button): Promise<void>
```

Presses a mouse button. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-pressButton(button: Button): Promise<void>--><!--Device-MouseController-pressButton(button: Button): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| button | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Mouse button to be pressed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The mouse button is already pressed. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## releaseButton

```TypeScript
releaseButton(button: Button): Promise<void>
```

Release a mouse button. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-releaseButton(button: Button): Promise<void>--><!--Device-MouseController-releaseButton(button: Button): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| button | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Mouse button to be released. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The mouse button is not pressed. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

## updateAxis

ArkTS-Dyn:
```TypeScript
updateAxis(axis: Axis, value: number): Promise<void>
```

ArkTS-Sta:
```TypeScript
updateAxis(axis: Axis, value: int): Promise<void>
```

Updates an axis event. This API uses a promise to return the result.

**Since:** 26.0.0

**ArkTS mode:** Both ArkTS-Dyn and ArkTS-Sta, since version 26.0.0.

**Required permissions:** ohos.permission.CONTROL_DEVICE

**Model restriction:** This API can be used only in the stage model.

<!--Device-MouseController-updateAxis(axis: Axis, value: int): Promise<void>--><!--Device-MouseController-updateAxis(axis: Axis, value: int): Promise<void>-End-->

**System capability:** SystemCapability.MultimodalInput.Input.InputSimulator

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| axis | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Axis type. |
| value | ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：int | Yes | Axis value. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [4300001](../errorcode-inputeventclient.md#4300001-status-error) | The axis event is not in progress. |
| [3800001](../errorcode-infraredemitter.md#3800001-multimodal-input-service-internal-error) | Input service exception. |

