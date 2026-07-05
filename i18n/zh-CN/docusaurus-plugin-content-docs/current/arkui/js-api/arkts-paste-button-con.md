# Constants

## PasteButton

```TypeScript
declare const PasteButton: PasteButtonInterface
```

安全控件的粘贴控件。用户点击粘贴控件，应用可以临时获取读取剪贴板权限。 <br>**说明**</br> <ul><li>###### 核心枚举类型</li> <li>**[PasteIconStyle](arkts-pasteiconstyle-e.md#PasteIconStyle)：** 粘贴控件图标风格枚举，用于指定控件展示的图标风格。</li> <li>**[PasteDescription](arkts-pastedescription-e.md#PasteDescription)：** 粘贴控件文本描述枚举，用于指定控件展示的文本描述。</li> <li>**[PasteButtonOnClickResult](arkts-pastebuttononclickresult-e.md#PasteButtonOnClickResult)：** 粘贴控件点击结果枚举，用于表示点击后授权是否成功。</li> <li>###### 核心接口类型</li> <li>**[PasteButtonOptions](arkts-pastebuttonoptions-i.md#PasteButtonOptions)：** 粘贴控件配置对象，用于指定图标、文字和按钮类型等元素属性。</li> <li>**[PasteButtonCallback](arkts-pastebuttoncallback-t.md#PasteButtonCallback)：** 粘贴控件点击回调类型，用于返回点击事件、授权结果和错误信息。</li> <li>###### 子组件</li> <li>不支持</li></ul>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## PasteButtonInstance

```TypeScript
declare const PasteButtonInstance: PasteButtonAttribute
```

安全粘贴控件实例。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

