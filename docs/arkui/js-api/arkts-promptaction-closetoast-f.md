# closeToast

## closeToast

```TypeScript
function closeToast(toastId: number): void
```

关闭即时反馈。 > **说明：** > > 直接使用closeToast可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，建议使用 UIContext中的getPromptAction方法获取 > 到PromptAction对象，再通过该对象调用 > [closeToast](docroot://reference/apis-arkui/arkts-apis-uicontext-promptaction.md#closetoast18)实现。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toastId | number | Yes | openToast返回的id。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 103401 | Cannot find the toast. |

