# PasteButton

Defines the interface for setting a paste button.

## PasteButton

```TypeScript
PasteButton()
```

Creates a **PasteButton** component with an icon, text, and background by default. After creation, the system triggers an authorization check when the button is tapped. Upon successful authorization, the application gains permission to read the current clipboard content. <br>**Description**</br> <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures caused by incompliant styles.</li></ul>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## PasteButton

```TypeScript
PasteButton(options: PasteButtonOptions)
```

Creates a paste button with the specified icon, text and button type. After creation, the system triggers an authorization check when the button is tapped. Upon successful authorization, the app gains temporary permission to read the clipboard. <br>**Description**</br> <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures caused by incompliant styles.</li></ul>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | PasteButtonOptions | Yes | Configuration options for the paste button, used to set properties such asicon, text and button type.<br>You are advised to explicitly set at least one of **icon** or **text** to help users identify the button.<br>If neither **icon** nor **text** is specified, **options** does not take effect and the button is displayedin the default style.<br>{<br>icon: PasteIconStyle.LINES,<br>text:PasteDescription.PASTE,<br>buttonType: ButtonType.Capsule <br>}. |

## Summary

- [PasteButtonOptions](arkts-arkui-pastebutton-pastebuttonoptions-i.md)
- [PasteButtonCallback](arkts-arkui-pastebutton-pastebuttoncallback-t.md)
- [PasteButtonOnClickResult](arkts-arkui-pastebutton-pastebuttononclickresult-e.md)
- [PasteDescription](arkts-arkui-pastebutton-pastedescription-e.md)
- [PasteIconStyle](arkts-arkui-pastebutton-pasteiconstyle-e.md)
