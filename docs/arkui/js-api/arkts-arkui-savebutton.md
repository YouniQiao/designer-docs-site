# SaveButton

Defines the interface for setting a save button.

## SaveButton

```TypeScript
SaveButton()
```

Creates a **SaveButton** component with an icon, text, and background. When the user taps the save button for the first time, a dialog will pop up. Once the user grants permission, the app obtains temporary authorization to access media library APIs. No dialog box will appear for subsequent uses. <br>In API version 19 or earlier, authorization remains valid for 10 seconds. After authorization expires, existing file handles acquired during the valid period remain available for read and write operations. <br>In API version 20 or later, authorization remains valid for 1 minute. After authorization expires, existing file handles acquired during the valid period remain available for read and write operations. <br>**Description**</br> <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures caused by incompliant styles.</li></ul>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SaveButton

```TypeScript
SaveButton(options: SaveButtonOptions)
```

Creates a save button with the specified icon, text and button type. When the user taps the save button for the first time, a dialog will pop up. Once the user grants permission, the app obtains temporary authorization to access media library APIs. No dialog box will appear for subsequent uses. <br>In API version 19 or earlier, authorization remains valid for 10 seconds. After authorization expires, existing file handles acquired during the valid period remain available for read and write operations. <br>In API version 20 or later, authorization remains valid for 1 minute. After authorization expires, existing file handles acquired during the valid period remain available for read and write operations. <br>**Description**</br> <ul><li>You may want to learn the [restrictions on security component styles](docroot://security/AccessToken/security-component-overview.md#constraints) to avoid authorization failures caused by incompliant styles.</li></ul>

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | SaveButtonOptions | Yes | Configuration options for the save button, used to set properties such asicon, text and button type.<br>You are advised to explicitly set at least one of **icon** and **text** to help users identify the button.If both are not specified, the component uses the default style. |

## Summary

- [SaveButtonOptions](arkts-arkui-savebutton-savebuttonoptions-i.md)
- [SaveButtonCallback](arkts-arkui-savebutton-savebuttoncallback-t.md)
- [SaveButtonOnClickResult](arkts-arkui-savebutton-savebuttononclickresult-e.md)
- [SaveDescription](arkts-arkui-savebutton-savedescription-e.md)
- [SaveIconStyle](arkts-arkui-savebutton-saveiconstyle-e.md)
