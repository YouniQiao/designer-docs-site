# enableAlertBeforeBackPage

## enableAlertBeforeBackPage

```TypeScript
function enableAlertBeforeBackPage(options: EnableAlertOptions): void
```

开启页面返回询问对话框。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [showAlertBeforeBackPage](arkts-router-c.md#showAlertBeforeBackPage)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.arkui.UIContext:Router#showAlertBeforeBackPage

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EnableAlertOptions | Yes | 文本弹窗信息描述。 |

**Example**

```TypeScript
router.enableAlertBeforeBackPage({
  message: 'Message Info'
});


router.enableAlertBeforeBackPage({
  message: 'Message Info'
});

```

