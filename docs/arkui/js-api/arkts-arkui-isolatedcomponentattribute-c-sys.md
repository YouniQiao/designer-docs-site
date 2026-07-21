# IsolatedComponentAttribute (System API)

Define the attribute functions of IsolatedComponent.

**Inheritance/Implementation:** IsolatedComponentAttribute extends [CommonMethod<IsolatedComponentAttribute>](CommonMethod<IsolatedComponentAttribute>)

**Since:** 12

<!--Device-unnamed-declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute>--><!--Device-unnamed-declare class IsolatedComponentAttribute extends CommonMethod<IsolatedComponentAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="onerror"></a>
## onError

```TypeScript
onError(
    callback: ErrorCallback
  ): IsolatedComponentAttribute
```

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-IsolatedComponentAttribute-onError(
    callback: ErrorCallback
  ): IsolatedComponentAttribute--><!--Device-IsolatedComponentAttribute-onError(
    callback: ErrorCallback
  ): IsolatedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [ErrorCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-errorcallback-i.md) | Yes | called when some error occurred except disconnected from IsolatedAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| [IsolatedComponentAttribute](arkts-arkui-isolatedcomponentattribute-c-sys.md) | @syscap SystemCapability.ArkUI.ArkUI.Full@systemapi@stagemodelonly |

