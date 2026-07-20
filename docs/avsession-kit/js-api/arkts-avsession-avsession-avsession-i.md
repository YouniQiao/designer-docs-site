# AVSession

AVSession object.

**Since:** 10

<!--Device-avSession-interface AVSession--><!--Device-avSession-interface AVSession-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## Modules to Import

```TypeScript
import { avSession } from '@kit.AVSessionKit';
```

## activate

```TypeScript
activate(callback: AsyncCallback<void>): void
```

Activate the session, indicating that the session can accept control commands

**Since:** 10

<!--Device-AVSession-activate(callback: AsyncCallback<void>): void--><!--Device-AVSession-activate(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the session is activated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## activate

```TypeScript
activate(): Promise<void>
```

Activate the session, indicating that the session can accept control commands

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-activate(): Promise<void>--><!--Device-AVSession-activate(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void result promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## deactivate

```TypeScript
deactivate(callback: AsyncCallback<void>): void
```

Deactivate the session, indicating that the session not ready to accept control commands

**Since:** 10

<!--Device-AVSession-deactivate(callback: AsyncCallback<void>): void--><!--Device-AVSession-deactivate(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the session is deactivated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## deactivate

```TypeScript
deactivate(): Promise<void>
```

Deactivate the session, indicating that the session not ready to accept control commands

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-deactivate(): Promise<void>--><!--Device-AVSession-deactivate(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## destroy

```TypeScript
destroy(callback: AsyncCallback<void>): void
```

Destroy this session, the server will clean up the session resources

**Since:** 10

<!--Device-AVSession-destroy(callback: AsyncCallback<void>): void--><!--Device-AVSession-destroy(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## destroy

```TypeScript
destroy(): Promise<void>
```

Destroy this session, the server will clean up the session resources

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-destroy(): Promise<void>--><!--Device-AVSession-destroy(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Dispatch the session event of this session.

**Since:** 10

<!--Device-AVSession-dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void--><!--Device-AVSession-dispatchSessionEvent(event: string, args: {[key: string]: Object}, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | {[key: string]: Object} | Yes | The parameters of session event |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## dispatchSessionEvent

```TypeScript
dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>
```

Dispatch the session event of this session.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>--><!--Device-AVSession-dispatchSessionEvent(event: string, args: {[key: string]: Object}): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | Session event name to dispatch |
| args | {[key: string]: Object} | Yes | The parameters of session event |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## enableDesktopLyric

```TypeScript
enableDesktopLyric(enable: boolean): Promise<void>
```

Enable desktop lyric for this session.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-enableDesktopLyric(enable: boolean): Promise<void>--><!--Device-AVSession-enableDesktopLyric(enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | The enable status indicating to using system desktop lyric feature or not |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600111](../errorcode-avsession.md#6600111-desktop-lyrics-not-supported-for-the-current-device) | The desktop lyrics feature is not supported. |

## getAVCastController

```TypeScript
getAVCastController(callback: AsyncCallback<AVCastController>): void
```

Get the cast controller when the session is casted to remote device.If the avsession is not under casting state, the controller will return null.

**Since:** 10

<!--Device-AVSession-getAVCastController(callback: AsyncCallback<AVCastController>): void--><!--Device-AVSession-getAVCastController(callback: AsyncCallback<AVCastController>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AVCastController> | Yes | async callback for the AVCastController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

## getAVCastController

```TypeScript
getAVCastController(): Promise<AVCastController>
```

Get the cast controller when the session is casted to remote device.If the avsession is not under casting state, the controller will return null.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-getAVCastController(): Promise<AVCastController>--><!--Device-AVSession-getAVCastController(): Promise<AVCastController>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AVCastController> | Promise for the AVCastController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

## getAllCastDisplays

```TypeScript
getAllCastDisplays(): Promise<Array<CastDisplayInfo>>
```

Get all the current virtual display information for extended display.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-getAllCastDisplays(): Promise<Array<CastDisplayInfo>>--><!--Device-AVSession-getAllCastDisplays(): Promise<Array<CastDisplayInfo>>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<CastDisplayInfo>> | Promise for the CastDisplayInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## getController

```TypeScript
getController(callback: AsyncCallback<AVSessionController>): void
```

Get the current session's own controller

**Since:** 10

<!--Device-AVSession-getController(callback: AsyncCallback<AVSessionController>): void--><!--Device-AVSession-getController(callback: AsyncCallback<AVSessionController>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<AVSessionController> | Yes | async callback for the AVSessionController. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## getController

```TypeScript
getController(): Promise<AVSessionController>
```

Get the current session's own controller

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-getController(): Promise<AVSessionController>--><!--Device-AVSession-getController(): Promise<AVSessionController>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<AVSessionController> | Promise for the AVSessionController |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## getDesktopLyricState

```TypeScript
getDesktopLyricState(): Promise<DesktopLyricState>
```

Get desktop lyric state such as lock state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-getDesktopLyricState(): Promise<DesktopLyricState>--><!--Device-AVSession-getDesktopLyricState(): Promise<DesktopLyricState>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<DesktopLyricState> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600110](../errorcode-avsession.md#6600110-desktop-lyrics-not-enabled-for-the-application) | The desktop lyrics feature of this application is not enabled. |
| [6600111](../errorcode-avsession.md#6600111-desktop-lyrics-not-supported-for-the-current-device) | The desktop lyrics feature is not supported. |

## getOutputDevice

```TypeScript
getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void
```

Get output device information

**Since:** 10

<!--Device-AVSession-getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void--><!--Device-AVSession-getOutputDevice(callback: AsyncCallback<OutputDeviceInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<OutputDeviceInfo> | Yes | async callback for the OutputDeviceInfo. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## getOutputDevice

```TypeScript
getOutputDevice(): Promise<OutputDeviceInfo>
```

Get output device information

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-getOutputDevice(): Promise<OutputDeviceInfo>--><!--Device-AVSession-getOutputDevice(): Promise<OutputDeviceInfo>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<OutputDeviceInfo> | Promise for the OutputDeviceInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## getOutputDeviceSync

```TypeScript
getOutputDeviceSync(): OutputDeviceInfo
```

Get output device information

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-getOutputDeviceSync(): OutputDeviceInfo--><!--Device-AVSession-getOutputDeviceSync(): OutputDeviceInfo-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [OutputDeviceInfo](arkts-avsession-avsession-outputdeviceinfo-i.md) | the OutputDeviceInfo |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## isDesktopLyricVisible

```TypeScript
isDesktopLyricVisible(): Promise<boolean>
```

Query desktop lyric visible state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-isDesktopLyricVisible(): Promise<boolean>--><!--Device-AVSession-isDesktopLyricVisible(): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | return desktop lyric visible state |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600110](../errorcode-avsession.md#6600110-desktop-lyrics-not-enabled-for-the-application) | The desktop lyrics feature of this application is not enabled. |
| [6600111](../errorcode-avsession.md#6600111-desktop-lyrics-not-supported-for-the-current-device) | The desktop lyrics feature is not supported. |

## off('play')

```TypeScript
off(type: 'play', callback?: () => void): void
```

Unregister play command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'play', callback?: () => void): void--><!--Device-AVSession-off(type: 'play', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' | Yes | Command to register 'play'. |
| callback | () => void | No | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('pause')

```TypeScript
off(type: 'pause', callback?: () => void): void
```

Unregister pause command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'pause', callback?: () => void): void--><!--Device-AVSession-off(type: 'pause', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pause' | Yes | Command to register 'pause'. |
| callback | () => void | No | Used to handle ('pause') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('stop')

```TypeScript
off(type: 'stop', callback?: () => void): void
```

Unregister stop command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'stop', callback?: () => void): void--><!--Device-AVSession-off(type: 'stop', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stop' | Yes | Command to register 'stop'. |
| callback | () => void | No | Used to handle ('stop') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('playNext')

```TypeScript
off(type: 'playNext', callback?: () => void): void
```

Unregister playNext command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'playNext', callback?: () => void): void--><!--Device-AVSession-off(type: 'playNext', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playNext' | Yes | Command to register 'playNext'. |
| callback | () => void | No | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('playPrevious')

```TypeScript
off(type: 'playPrevious', callback?: () => void): void
```

Unregister playPrevious command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'playPrevious', callback?: () => void): void--><!--Device-AVSession-off(type: 'playPrevious', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playPrevious' | Yes | Command to register 'playPrevious'. |
| callback | () => void | No | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('fastForward')

```TypeScript
off(type: 'fastForward', callback?: () => void): void
```

Unregister fastForward command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'fastForward', callback?: () => void): void--><!--Device-AVSession-off(type: 'fastForward', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fastForward' | Yes | Command to register 'fastForward'. |
| callback | () => void | No | Used to handle ('fastForward') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('rewind')

```TypeScript
off(type: 'rewind', callback?: () => void): void
```

Unregister rewind command callback.When canceling the callback, need to update the supported commands list.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'rewind', callback?: () => void): void--><!--Device-AVSession-off(type: 'rewind', callback?: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rewind' | Yes | Command to register 'rewind'. |
| callback | () => void | No | Used to handle ('rewind') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('playFromAssetId')

```TypeScript
off(type: 'playFromAssetId', callback?: (assetId: number) => void): void
```

Unregister playFromAssetId command callback.

**Since:** 11

**Deprecated since:** 20

**Substitutes:** off

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'playFromAssetId', callback?: (assetId: number) => void): void--><!--Device-AVSession-off(type: 'playFromAssetId', callback?: (assetId: number) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | Yes | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | No | Used to handle ('playFromAssetId') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('playWithAssetId')

```TypeScript
off(type: 'playWithAssetId', callback?: Callback<string>): void
```

Unsubscribes from playWithAssetId events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AVSession-off(type: 'playWithAssetId', callback?: Callback<string>): void--><!--Device-AVSession-off(type: 'playWithAssetId', callback?: Callback<string>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<string> | No | Callback used to handle the 'playWithAssetId' command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('seek')

```TypeScript
off(type: 'seek', callback?: (time: number) => void): void
```

Unregister seek command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'seek', callback?: (time: long) => void): void--><!--Device-AVSession-off(type: 'seek', callback?: (time: long) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seek' | Yes | Registration Type 'seek' |
| callback | (time: number) => void | No | Used to handle seek command.The callback provides the seek time(ms) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('setSpeed')

```TypeScript
off(type: 'setSpeed', callback?: (speed: number) => void): void
```

Unregister setSpeed command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'setSpeed', callback?: (speed: double) => void): void--><!--Device-AVSession-off(type: 'setSpeed', callback?: (speed: double) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSpeed' | Yes | Registration Type 'setSpeed' |
| callback | (speed: number) => void | No | Used to handle setSpeed command.The callback provides the speed value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('setLoopMode')

```TypeScript
off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void
```

Unregister setLoopMode command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void--><!--Device-AVSession-off(type: 'setLoopMode', callback?: (mode: LoopMode) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setLoopMode' | Yes | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | No | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('setTargetLoopMode')

```TypeScript
off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void
```

Unregister setTargetLoopMode command callback

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AVSession-off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void--><!--Device-AVSession-off(type: 'setTargetLoopMode', callback?: Callback<LoopMode>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | Yes | Registration Type 'setTargetLoopMode' |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<LoopMode> | No | Used to handle setTargetLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('toggleFavorite')

```TypeScript
off(type: 'toggleFavorite', callback?: (assetId: string) => void): void
```

Unregister toggle favorite command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'toggleFavorite', callback?: (assetId: string) => void): void--><!--Device-AVSession-off(type: 'toggleFavorite', callback?: (assetId: string) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | Yes | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | No | Used to handle toggleFavorite command.The callback provides the assetId for which the favorite status needs to be switched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('handleKeyEvent')

```TypeScript
off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void
```

Unregister media key handling callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void--><!--Device-AVSession-off(type: 'handleKeyEvent', callback?: (event: KeyEvent) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | Yes | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | No | Used to handle key events.The callback provides the KeyEvent |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('outputDeviceChange')

```TypeScript
off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Unregister session output device change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void--><!--Device-AVSession-off(type: 'outputDeviceChange', callback?: (state: ConnectionState, device: OutputDeviceInfo) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | No | Used to handle output device changed.The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |

## off('commonCommand')

```TypeScript
off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void
```

Unregister session custom command change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void--><!--Device-AVSession-off(type: 'commonCommand', callback?: (command: string, args: {[key: string]: Object}) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'commonCommand' | Yes | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | No | Used to cancel a specific listener The callback provide the command name and command args |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('skipToQueueItem')

```TypeScript
off(type: 'skipToQueueItem', callback?: (itemId: number) => void): void
```

Unregister the item to play from the playlist change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'skipToQueueItem', callback?: (itemId: int) => void): void--><!--Device-AVSession-off(type: 'skipToQueueItem', callback?: (itemId: int) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | Yes | Registration Type 'skipToQueueItem' |
| callback | (itemId: number) => void | No | Used to handle the item to be played.The callback provide the new device info {@link OutputDeviceInfo} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('answer')

```TypeScript
off(type: 'answer', callback?: Callback<void>): void
```

Unregister answer command callback.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'answer', callback?: Callback<void>): void--><!--Device-AVSession-off(type: 'answer', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'answer' | Yes | Command to register 'answer'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | Used to handle ('answer') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('hangUp')

```TypeScript
off(type: 'hangUp', callback?: Callback<void>): void
```

Unregister hangUp command callback.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'hangUp', callback?: Callback<void>): void--><!--Device-AVSession-off(type: 'hangUp', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hangUp' | Yes | Command to register 'hangUp'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | Used to handle ('hangUp') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('toggleCallMute')

```TypeScript
off(type: 'toggleCallMute', callback?: Callback<void>): void
```

Unregister toggleCallMute command callback.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'toggleCallMute', callback?: Callback<void>): void--><!--Device-AVSession-off(type: 'toggleCallMute', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | Yes | Command to register 'toggleCallMute'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | No | Used to handle ('toggleCallMute') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## off('castDisplayChange')

```TypeScript
off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void
```

Unregister listener for cast display information changed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void--><!--Device-AVSession-off(type: 'castDisplayChange', callback?: Callback<CastDisplayInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | Yes | Type of the 'castDisplayChange' to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CastDisplayInfo> | No | Callback used to return cast display information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |

## off('customDataChange')

```TypeScript
off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void
```

Unsubscribes from custom data changes.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AVSession-off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void--><!--Device-AVSession-off(type: 'customDataChange', callback?: Callback<Record<string, Object>>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'customDataChange' | Yes | Custom data type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Record<string, Object>> | No | Callback used to return the custom data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offDesktopLyricStateChanged

```TypeScript
offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void
```

Unregister desktop lyric state changed callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void--><!--Device-AVSession-offDesktopLyricStateChanged(callback?: Callback<DesktopLyricState>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<DesktopLyricState> | No | a callback to receive desktop lyric state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offDesktopLyricVisibilityChanged

```TypeScript
offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void
```

Unregister desktop lyric visible state change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void--><!--Device-AVSession-offDesktopLyricVisibilityChanged(callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | No | a callback to receive desktop lyric window visible state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offFastForward

```TypeScript
offFastForward(callback?: TwoParamCallback<number, CommandInfo>): void
```

Unregister fastForward command callback.When canceling the callback, need to update the supported commands list.

**Since:** 22

<!--Device-AVSession-offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void--><!--Device-AVSession-offFastForward(callback?: TwoParamCallback<long, CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TwoParamCallback](arkts-avsession-avsession-twoparamcallback-t.md)<number, CommandInfo> | No | Used to handle ('fastForward') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offPlay

```TypeScript
offPlay(callback?: Callback<CommandInfo>): void
```

Unregister play command callback.When canceling the callback, need to update the supported commands list.

**Since:** 22

<!--Device-AVSession-offPlay(callback?: Callback<CommandInfo>): void--><!--Device-AVSession-offPlay(callback?: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | No | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offPlayNext

```TypeScript
offPlayNext(callback?: Callback<CommandInfo>): void
```

Unregister playNext command callback.When canceling the callback, need to update the supported commands list.

**Since:** 22

<!--Device-AVSession-offPlayNext(callback?: Callback<CommandInfo>): void--><!--Device-AVSession-offPlayNext(callback?: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | No | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offPlayPrevious

```TypeScript
offPlayPrevious(callback?: Callback<CommandInfo>): void
```

Unregister playPrevious command callback.When canceling the callback, need to update the supported commands list.

**Since:** 22

<!--Device-AVSession-offPlayPrevious(callback?: Callback<CommandInfo>): void--><!--Device-AVSession-offPlayPrevious(callback?: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | No | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## offRewind

```TypeScript
offRewind(callback?: TwoParamCallback<number, CommandInfo>): void
```

Unregister rewind command callback.When canceling the callback, need to update the supported commands list.

**Since:** 22

<!--Device-AVSession-offRewind(callback?: TwoParamCallback<long, CommandInfo>): void--><!--Device-AVSession-offRewind(callback?: TwoParamCallback<long, CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TwoParamCallback](arkts-avsession-avsession-twoparamcallback-t.md)<number, CommandInfo> | No | Used to handle ('rewind') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('play')

```TypeScript
on(type: 'play', callback: () => void): void
```

Register play command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'play', callback: () => void): void--><!--Device-AVSession-on(type: 'play', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'play' | Yes | Command to register 'play'. |
| callback | () => void | Yes | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('pause')

```TypeScript
on(type: 'pause', callback: () => void): void
```

Register pause command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'pause', callback: () => void): void--><!--Device-AVSession-on(type: 'pause', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pause' | Yes | Command to register 'pause'. |
| callback | () => void | Yes | Used to handle ('pause') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('stop')

```TypeScript
on(type: 'stop', callback: () => void): void
```

Register stop command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'stop', callback: () => void): void--><!--Device-AVSession-on(type: 'stop', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stop' | Yes | Command to register 'stop'. |
| callback | () => void | Yes | Used to handle ('stop') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('playNext')

```TypeScript
on(type: 'playNext', callback: () => void): void
```

Register playNext command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'playNext', callback: () => void): void--><!--Device-AVSession-on(type: 'playNext', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playNext' | Yes | Command to register 'playNext'. |
| callback | () => void | Yes | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('playPrevious')

```TypeScript
on(type: 'playPrevious', callback: () => void): void
```

Register playPrevious command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'playPrevious', callback: () => void): void--><!--Device-AVSession-on(type: 'playPrevious', callback: () => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playPrevious' | Yes | Command to register 'playPrevious'. |
| callback | () => void | Yes | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('fastForward')

```TypeScript
on(type: 'fastForward', callback: (time ?: number) => void): void
```

Register fastForward command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'fastForward', callback: (time ?: long) => void): void--><!--Device-AVSession-on(type: 'fastForward', callback: (time ?: long) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fastForward' | Yes | Command to register 'fastForward'. |
| callback | (time ?: number) => void | Yes | Used to handle ('fastForward') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('rewind')

```TypeScript
on(type: 'rewind', callback: (time ?: number) => void): void
```

Register rewind command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'rewind', callback: (time ?: long) => void): void--><!--Device-AVSession-on(type: 'rewind', callback: (time ?: long) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rewind' | Yes | Command to register 'rewind'. |
| callback | (time ?: number) => void | Yes | Used to handle ('rewind') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('playFromAssetId')

```TypeScript
on(type: 'playFromAssetId', callback: (assetId: number) => void): void
```

Register playFromAssetId command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}When canceling the callback, need to update the supported commands list.Each playback command only supports registering one callback,and the new callback will replace the previous one.

**Since:** 11

**Deprecated since:** 20

**Substitutes:** on

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'playFromAssetId', callback: (assetId: number) => void): void--><!--Device-AVSession-on(type: 'playFromAssetId', callback: (assetId: number) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playFromAssetId' | Yes | Command to register 'playFromAssetId'. |
| callback | (assetId: number) => void | Yes | Used to handle ('playFromAssetId') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('playWithAssetId')

```TypeScript
on(type: 'playWithAssetId', callback: Callback<string>): void
```

Subscribes to playWithAssetId events.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AVSession-on(type: 'playWithAssetId', callback: Callback<string>): void--><!--Device-AVSession-on(type: 'playWithAssetId', callback: Callback<string>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'playWithAssetId' | Yes | Event type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<string> | Yes | Callback used to handle the 'playWithAssetId' command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('seek')

```TypeScript
on(type: 'seek', callback: (time: number) => void): void
```

Register seek command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'seek', callback: (time: long) => void): void--><!--Device-AVSession-on(type: 'seek', callback: (time: long) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'seek' | Yes | Registration Type 'seek' |
| callback | (time: number) => void | Yes | Used to handle seek command.The callback provides the seek time(ms) |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('setSpeed')

```TypeScript
on(type: 'setSpeed', callback: (speed: number) => void): void
```

Register setSpeed command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'setSpeed', callback: (speed: double) => void): void--><!--Device-AVSession-on(type: 'setSpeed', callback: (speed: double) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setSpeed' | Yes | Registration Type 'setSpeed' |
| callback | (speed: number) => void | Yes | Used to handle setSpeed command.The callback provides the speed value |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('setLoopMode')

```TypeScript
on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void
```

Register setLoopMode command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void--><!--Device-AVSession-on(type: 'setLoopMode', callback: (mode: LoopMode) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setLoopMode' | Yes | Registration Type 'setLoopMode' |
| callback | (mode: LoopMode) => void | Yes | Used to handle setLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('setTargetLoopMode')

```TypeScript
on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void
```

Register setTargetLoopMode command callback Application should change playmode to the loopmode which is requested.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-AVSession-on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void--><!--Device-AVSession-on(type: 'setTargetLoopMode', callback: Callback<LoopMode>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'setTargetLoopMode' | Yes | Registration Type 'setTargetLoopMode' |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<LoopMode> | Yes | Used to handle setTargetLoopMode command.The callback provides the {@link LoopMode} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('toggleFavorite')

```TypeScript
on(type: 'toggleFavorite', callback: (assetId: string) => void): void
```

Register toggle favorite command callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'toggleFavorite', callback: (assetId: string) => void): void--><!--Device-AVSession-on(type: 'toggleFavorite', callback: (assetId: string) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleFavorite' | Yes | Registration Type 'toggleFavorite' |
| callback | (assetId: string) => void | Yes | Used to handle toggleFavorite command.The callback provides the assetId for which the favorite status needs to be switched. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('handleKeyEvent')

```TypeScript
on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void
```

Register media key handling callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void--><!--Device-AVSession-on(type: 'handleKeyEvent', callback: (event: KeyEvent) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'handleKeyEvent' | Yes | Registration Type 'handleKeyEvent' |
| callback | (event: KeyEvent) => void | Yes | Used to handle key events.The callback provides the KeyEvent |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('outputDeviceChange')

```TypeScript
on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void
```

Register session output device change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void--><!--Device-AVSession-on(type: 'outputDeviceChange', callback: (state: ConnectionState, device: OutputDeviceInfo) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'outputDeviceChange' | Yes | Registration Type 'outputDeviceChange' |
| callback | (state: ConnectionState, device: OutputDeviceInfo) => void | Yes | Used to handle output device changed.The callback provide the new device info {@link OutputDeviceInfo} and related connection state {@link ConnectionState}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |

## on('commonCommand')

```TypeScript
on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void
```

Register session custom command change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void--><!--Device-AVSession-on(type: 'commonCommand', callback: (command: string, args: {[key: string]: Object}) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'commonCommand' | Yes | Registration Type 'commonCommand' |
| callback | (command: string, args: {[key: string]: Object}) => void | Yes | Used to handle event when the common command is received The callback provide the command name and command args |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('skipToQueueItem')

```TypeScript
on(type: 'skipToQueueItem', callback: (itemId: number) => void): void
```

Register the item to play from the playlist change callback

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'skipToQueueItem', callback: (itemId: int) => void): void--><!--Device-AVSession-on(type: 'skipToQueueItem', callback: (itemId: int) => void): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'skipToQueueItem' | Yes | Registration Type 'skipToQueueItem' |
| callback | (itemId: number) => void | Yes | Used to handle the item to be played.The callback provide the new device info {@link OutputDeviceInfo} |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('answer')

```TypeScript
on(type: 'answer', callback: Callback<void>): void
```

Register answer command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'answer', callback: Callback<void>): void--><!--Device-AVSession-on(type: 'answer', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'answer' | Yes | Command to register 'answer'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Used to handle ('answer') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('hangUp')

```TypeScript
on(type: 'hangUp', callback: Callback<void>): void
```

Register hangUp command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'hangUp', callback: Callback<void>): void--><!--Device-AVSession-on(type: 'hangUp', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'hangUp' | Yes | Command to register 'hangUp'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Used to handle ('hangUp') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('toggleCallMute')

```TypeScript
on(type: 'toggleCallMute', callback: Callback<void>): void
```

Register toggleCallMute command callback.As long as it is registered, it means that the ability supports this command.If you cancel the callback, you need to call off {@link off}

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'toggleCallMute', callback: Callback<void>): void--><!--Device-AVSession-on(type: 'toggleCallMute', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toggleCallMute' | Yes | Command to register 'toggleCallMute'. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | Used to handle ('toggleCallMute') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## on('castDisplayChange')

```TypeScript
on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void
```

Register listener for cast display information changed.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void--><!--Device-AVSession-on(type: 'castDisplayChange', callback: Callback<CastDisplayInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.ExtendedDisplayCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'castDisplayChange' | Yes | Type of the 'castDisplayChange' to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CastDisplayInfo> | Yes | Callback used to return cast display information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist |

## on('customDataChange')

```TypeScript
on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void
```

Register listener for custom data sent from remote device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AVSession-on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void--><!--Device-AVSession-on(type: 'customDataChange', callback: Callback<Record<string, Object>>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'customDataChange' | Yes | Type of the 'customDataChange' to listen for. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<Record<string, Object>> | Yes | Callback used to retrieve custom data. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onDesktopLyricStateChanged

```TypeScript
onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void
```

Register desktop lyric state changed callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void--><!--Device-AVSession-onDesktopLyricStateChanged(callback: Callback<DesktopLyricState>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<DesktopLyricState> | Yes | a callback to receive desktop lyric state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onDesktopLyricVisibilityChanged

```TypeScript
onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void
```

Register desktop lyric visible state change callback.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void--><!--Device-AVSession-onDesktopLyricVisibilityChanged(callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | Yes | a callback to receive desktop lyric window visible state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onFastForward

```TypeScript
onFastForward(callback: TwoParamCallback<number, CommandInfo>): void
```

Register fastForward command callback.The application will receive forward time and {@link CommandInfo} from a controller.

**Since:** 22

<!--Device-AVSession-onFastForward(callback: TwoParamCallback<long, CommandInfo>): void--><!--Device-AVSession-onFastForward(callback: TwoParamCallback<long, CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TwoParamCallback](arkts-avsession-avsession-twoparamcallback-t.md)<number, CommandInfo> | Yes | Used to handle ('fastForward') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onPlay

```TypeScript
onPlay(callback: Callback<CommandInfo>): void
```

Register play command callback.The application will receive {@link CommandInfo} from a controller.

**Since:** 22

<!--Device-AVSession-onPlay(callback: Callback<CommandInfo>): void--><!--Device-AVSession-onPlay(callback: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | Yes | Used to handle ('play') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onPlayNext

```TypeScript
onPlayNext(callback: Callback<CommandInfo>): void
```

Register playNext command callback.The application will receive {@link CommandInfo} from a controller.

**Since:** 22

<!--Device-AVSession-onPlayNext(callback: Callback<CommandInfo>): void--><!--Device-AVSession-onPlayNext(callback: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | Yes | Used to handle ('playNext') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onPlayPrevious

```TypeScript
onPlayPrevious(callback: Callback<CommandInfo>): void
```

Register playPrevious command callback.The application will receive {@link CommandInfo} from a controller.

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-AVSession-onPlayPrevious(callback: Callback<CommandInfo>): void--><!--Device-AVSession-onPlayPrevious(callback: Callback<CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<CommandInfo> | Yes | Used to handle ('playPrevious') command |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## onRewind

```TypeScript
onRewind(callback: TwoParamCallback<number, CommandInfo>): void
```

Register rewind command callback.The application will receive rewind time and {@link CommandInfo} from a controller.

**Since:** 22

<!--Device-AVSession-onRewind(callback: TwoParamCallback<long, CommandInfo>): void--><!--Device-AVSession-onRewind(callback: TwoParamCallback<long, CommandInfo>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TwoParamCallback](arkts-avsession-avsession-twoparamcallback-t.md)<number, CommandInfo> | Yes | Used to handle ('rewind') command, described by milliseconds. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## sendCustomData

```TypeScript
sendCustomData(data: Record<string, Object>): Promise<void>
```

Sends custom data to a remote device.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-AVSession-sendCustomData(data: Record<string, Object>): Promise<void>--><!--Device-AVSession-sendCustomData(data: Record<string, Object>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, Object> | Yes | Custom data populated by the application. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception.You are advised to:1.Scheduled retry.2.Destroy the current session or session controller and re-create it. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void
```

Set the call state of this session.

**Since:** 11

<!--Device-AVSession-setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void--><!--Device-AVSession-setAVCallState(state: AVCallState, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [AVCallState](arkts-avsession-avsession-avcallstate-i.md) | Yes | {@link AVCallState} |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVCallState

```TypeScript
setAVCallState(state: AVCallState): Promise<void>
```

Set the call state of this session.

**Since:** 11

<!--Device-AVSession-setAVCallState(state: AVCallState): Promise<void>--><!--Device-AVSession-setAVCallState(state: AVCallState): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [AVCallState](arkts-avsession-avsession-avcallstate-i.md) | Yes | {@link AVCallState} |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void
```

Set the metadata of this session.In addition to the required properties, users can fill in partially supported properties

**Since:** 10

<!--Device-AVSession-setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void--><!--Device-AVSession-setAVMetadata(data: AVMetadata, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [AVMetadata](arkts-avsession-avsession-avmetadata-i.md) | Yes | { |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVMetadata

```TypeScript
setAVMetadata(data: AVMetadata): Promise<void>
```

Set the metadata of this session.In addition to the required properties, users can fill in partially supported properties

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setAVMetadata(data: AVMetadata): Promise<void>--><!--Device-AVSession-setAVMetadata(data: AVMetadata): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [AVMetadata](arkts-avsession-avsession-avmetadata-i.md) | Yes | { |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void
```

Set the playback state of this session.

**Since:** 10

<!--Device-AVSession-setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void--><!--Device-AVSession-setAVPlaybackState(state: AVPlaybackState, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [AVPlaybackState](arkts-avsession-avsession-avplaybackstate-i.md) | Yes | { |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVPlaybackState

```TypeScript
setAVPlaybackState(state: AVPlaybackState): Promise<void>
```

Set the playback state of this session.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setAVPlaybackState(state: AVPlaybackState): Promise<void>--><!--Device-AVSession-setAVPlaybackState(state: AVPlaybackState): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [AVPlaybackState](arkts-avsession-avsession-avplaybackstate-i.md) | Yes | { |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**Since:** 10

<!--Device-AVSession-setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void--><!--Device-AVSession-setAVQueueItems(items: Array<AVQueueItem>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<AVQueueItem> | Yes | An array of the AVQueueItem |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVQueueItems

```TypeScript
setAVQueueItems(items: Array<AVQueueItem>): Promise<void>
```

Set the playlist of queueItem. Identifies the content of the playlist presented by this session.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setAVQueueItems(items: Array<AVQueueItem>): Promise<void>--><!--Device-AVSession-setAVQueueItems(items: Array<AVQueueItem>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<AVQueueItem> | Yes | An array of the AVQueueItem |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string, callback: AsyncCallback<void>): void
```

Set the name of the playlist presented by this session.

**Since:** 10

<!--Device-AVSession-setAVQueueTitle(title: string, callback: AsyncCallback<void>): void--><!--Device-AVSession-setAVQueueTitle(title: string, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | The name of the playlist |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setAVQueueTitle

```TypeScript
setAVQueueTitle(title: string): Promise<void>
```

Set the name of the playlist presented by this session.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setAVQueueTitle(title: string): Promise<void>--><!--Device-AVSession-setAVQueueTitle(title: string): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | string | Yes | The name of the playlist |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setBackgroundPlayMode

```TypeScript
setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>
```

Set the background playback mode.It is recommended that you associate it with the background playback switch in the app.If not set, the default value for 'audio' session is {@link ENABLE_BACKGROUND_PLAY} and the default value for 'video' session is {@link DISENABLE_BACKGROUND_PLAY}.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>--><!--Device-AVSession-setBackgroundPlayMode(mode: BackgroundPlayMode): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [BackgroundPlayMode](arkts-avsession-avsession-backgroundplaymode-e.md) | Yes | Background play mode |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void
```

Set the metadata related with current call.

**Since:** 11

<!--Device-AVSession-setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void--><!--Device-AVSession-setCallMetadata(data: CallMetadata, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [CallMetadata](arkts-avsession-avsession-callmetadata-i.md) | Yes | {@link CallMetadata} |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setCallMetadata

```TypeScript
setCallMetadata(data: CallMetadata): Promise<void>
```

Set the metadata related with current call.

**Since:** 11

<!--Device-AVSession-setCallMetadata(data: CallMetadata): Promise<void>--><!--Device-AVSession-setCallMetadata(data: CallMetadata): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [CallMetadata](arkts-avsession-avsession-callmetadata-i.md) | Yes | {@link CallMetadata} |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setDesktopLyricState

```TypeScript
setDesktopLyricState(state: DesktopLyricState): Promise<void>
```

Set desktop lyric state such as lock state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-setDesktopLyricState(state: DesktopLyricState): Promise<void>--><!--Device-AVSession-setDesktopLyricState(state: DesktopLyricState): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | [DesktopLyricState](arkts-avsession-avsession-desktoplyricstate-i.md) | Yes | The desktop lyric state |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600110](../errorcode-avsession.md#6600110-desktop-lyrics-not-enabled-for-the-application) | The desktop lyrics feature of this application is not enabled. |
| [6600111](../errorcode-avsession.md#6600111-desktop-lyrics-not-supported-for-the-current-device) | The desktop lyrics feature is not supported. |

## setDesktopLyricVisible

```TypeScript
setDesktopLyricVisible(visible: boolean): Promise<void>
```

Set desktop lyric visible state for this session.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-setDesktopLyricVisible(visible: boolean): Promise<void>--><!--Device-AVSession-setDesktopLyricVisible(visible: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| visible | boolean | Yes | make desktop lyric window visible or not |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |
| [6600110](../errorcode-avsession.md#6600110-desktop-lyrics-not-enabled-for-the-application) | The desktop lyrics feature of this application is not enabled. |
| [6600111](../errorcode-avsession.md#6600111-desktop-lyrics-not-supported-for-the-current-device) | The desktop lyrics feature is not supported. |

## setExtras

```TypeScript
setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void
```

Set the custom media packets for this session.

**Since:** 10

<!--Device-AVSession-setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void--><!--Device-AVSession-setExtras(extras: {[key: string]: Object}, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | Yes | The custom media packets |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setExtras

```TypeScript
setExtras(extras: {[key: string]: Object}): Promise<void>
```

Set the custom media packets for this session.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setExtras(extras: {[key: string]: Object}): Promise<void>--><!--Device-AVSession-setExtras(extras: {[key: string]: Object}): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| extras | {[key: string]: Object} | Yes | The custom media packets |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void
```

Set the ability to start the session corresponding to

**Since:** 10

<!--Device-AVSession-setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void--><!--Device-AVSession-setLaunchAbility(ability: WantAgent, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [WantAgent](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-reminderagent-wantagent-i.md) | Yes | The WantAgent for launch the ability |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | The asyncCallback triggered when the command is executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setLaunchAbility

```TypeScript
setLaunchAbility(ability: WantAgent): Promise<void>
```

Set the ability to start the session corresponding to

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-setLaunchAbility(ability: WantAgent): Promise<void>--><!--Device-AVSession-setLaunchAbility(ability: WantAgent): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ability | [WantAgent](../../apis-background-tasks-kit/arkts-apis/arkts-backgroundtasks-reminderagent-wantagent-i.md) | Yes | The WantAgent for launch the ability |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | parameter check failed. 1.Mandatory parameters are left unspecified.2.Parameter verification failed. |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setMediaCenterControlType

```TypeScript
setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>
```

Set media control types that can be displayed on the media center.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-AVSession-setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>--><!--Device-AVSession-setMediaCenterControlType(type: Array<AVMediaCenterControlType>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<AVMediaCenterControlType> | Yes | The control types that can be displayed on the media center.If the priority of control type is not set, the media center will display based on {@link AVSessionType}.The control type set must be registered by {@link on}, the media center prioritizes displaying the set control type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception. |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setSupportedLoopModes

```TypeScript
setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>
```

Set supported loop modes supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AVSession-setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>--><!--Device-AVSession-setSupportedLoopModes(loopModes: Array<LoopMode>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loopModes | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<LoopMode> | Yes | supported loop modes |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## setSupportedPlaySpeeds

```TypeScript
setSupportedPlaySpeeds(speeds: Array<number>): Promise<void>
```

Set supported speeds supplied by application.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-AVSession-setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>--><!--Device-AVSession-setSupportedPlaySpeeds(speeds: Array<double>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| speeds | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | supported speeds |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600101](../errorcode-avsession.md#6600101-session-service-exception) | Session service exception |
| [6600102](../errorcode-avsession.md#6600102-session-does-not-exist) | The session does not exist. |

## stopCasting

```TypeScript
stopCasting(callback: AsyncCallback<void>): void
```

Stop current cast and disconnect device connection.

**Since:** 10

<!--Device-AVSession-stopCasting(callback: AsyncCallback<void>): void--><!--Device-AVSession-stopCasting(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | A callback instance used to return when cast stopped completed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

## stopCasting

```TypeScript
stopCasting(): Promise<void>
```

Stop current cast and disconnect device connection.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-stopCasting(): Promise<void>--><!--Device-AVSession-stopCasting(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.AVSession.AVCast

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | void result promise when executed successfully |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [6600109](../errorcode-avsession.md#6600109-remote-session-does-not-exist) | The remote connection is not established |

## sessionId

```TypeScript
readonly sessionId: string
```

unique session Id

**Type:** string

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-readonly sessionId: string--><!--Device-AVSession-readonly sessionId: string-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## sessionTag

```TypeScript
readonly sessionTag: string
```

Current session tag.

**Type:** string

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-AVSession-readonly sessionTag: string--><!--Device-AVSession-readonly sessionTag: string-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

## sessionType

```TypeScript
readonly sessionType: AVSessionType
```

Get current session type

**Type:** AVSessionType

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-AVSession-readonly sessionType: AVSessionType--><!--Device-AVSession-readonly sessionType: AVSessionType-End-->

**System capability:** SystemCapability.Multimedia.AVSession.Core

