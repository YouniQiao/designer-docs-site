# styled_string

## Summary

### Classes

| Name | Description |
| --- | --- |
| [BackgroundColorStyle](arkts-arkui-backgroundcolorstyle-c.md) | Describes the text background color style. |
| [BaselineOffsetStyle](arkts-arkui-baselineoffsetstyle-c.md) | Describes the text baseline offset style. |
| [CustomSpan](arkts-arkui-customspan-c.md) | Describes the custom span. Only the base class is provided. You need to define the specific implementation.  The drag preview of a custom span is blank. |
| [DecorationStyle](arkts-arkui-decorationstyle-c.md) | Describes the text decorative line style. |
| [GestureStyle](arkts-arkui-gesturestyle-c.md) | Describes the event gesture style. |
| [ImageAttachment](arkts-arkui-imageattachment-c.md) | Describes the image attachment. |
| [LeadingMarginSpan](arkts-arkui-leadingmarginspan-c.md) | Defines custom indentation for text paragraphs. Only a base class is provided; the specific implementation is left to developers. |
| [LetterSpacingStyle](arkts-arkui-letterspacingstyle-c.md) | Describes the letter spacing style. |
| [LineHeightStyle](arkts-arkui-lineheightstyle-c.md) | Describes the text line height style. |
| [LineSpacingStyle](arkts-arkui-linespacingstyle-c.md) | Describes the text line spacing style. |
| [MutableStyledString](arkts-arkui-mutablestyledstring-c.md) | Inherits from the [StyledString](arkts-arkui-styledstring-c.md) class.  > **An exception is thrown in the following cases:**  >  > If the values of **start** and **length** are out of the acceptable range or if any mandatory parameter is passed  > as **undefined**, an exception is thrown.  >  > **styledKey** or **styledValue** is set to an invalid value or they do not match. |
| [ParagraphStyle](arkts-arkui-paragraphstyle-c.md) | Describes the text paragraph style.  Except the first paragraph, all paragraphs are formed using the escape character '\n'.  The style of a paragraph is the one (if any) set for the first element or the paragraph style of the bound component.  Before API version 26.0.0, if the first placeholder in a paragraph of the styled string is a [CustomSpan](arkts-arkui-customspan-c.md) or [ImageAttachment](arkts-arkui-imageattachment-c.md), the paragraph style set for that paragraph does not take effect. From API version 26.0.0, the paragraph style takes effect. |
| [StyledString](arkts-arkui-styledstring-c.md) | StyledString |
| [TextShadowStyle](arkts-arkui-textshadowstyle-c.md) | Describes the text shadow style. |
| [TextStyle](arkts-arkui-textstyle-c.md) | Describes the text style. |
| [UrlStyle](arkts-arkui-urlstyle-c.md) | Describes the hyperlink style.  The default color, font size, and font weight are **'#ff0a59f7'**, **'16fp'**, and **'FontWeight.Regular'**,respectively. If the styled string has **TextStyle** set, the **TextStyle** settings take precedence. |
| [UserDataSpan](arkts-arkui-userdataspan-c.md) | Implements a **UserDataSpan** object for storing and obtaining user data. Only the base class is provided. You need to define the specific implementation.  The extended user data does not affect the display effect. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [StyledString](arkts-arkui-styledstring-c-sys.md) | StyledString |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [CustomSpanDrawInfo](arkts-arkui-customspandrawinfo-i.md) | Defines the CustomSpanDrawInfo interface. |
| [CustomSpanMeasureInfo](arkts-arkui-customspanmeasureinfo-i.md) | Defines the CustomSpanMeasureInfo interface. |
| [CustomSpanMetrics](arkts-arkui-customspanmetrics-i.md) | Defines the CustomSpanMetrics interface. |
| [DecorationOptions](arkts-arkui-decorationoptions-i.md) | Provides additional configuration options for the text decoration line style. |
| [DecorationStyleInterface](arkts-arkui-decorationstyleinterface-i.md) | Describes the API object for text decoration line styles. |
| [GestureStyleInterface](arkts-arkui-gesturestyleinterface-i.md) | Defines the Gesture Events. |
| [ImageAttachmentInterface](arkts-arkui-imageattachmentinterface-i.md) | Defines the ImageAttachmentInterface. |
| [ImageAttachmentLayoutStyle](arkts-arkui-imageattachmentlayoutstyle-i.md) | Defines the ImageAttachment Layout Style. |
| [LeadingMarginSpanDrawInfo](arkts-arkui-leadingmarginspandrawinfo-i.md) | Provides the custom drawing information. |
| [ParagraphStyleInterface](arkts-arkui-paragraphstyleinterface-i.md) | ParagraphStyleInterface |
| [ResourceImageAttachmentOptions](arkts-arkui-resourceimageattachmentoptions-i.md) | Defines the settings for images of the ResourceStr type. |
| [SpanStyle](arkts-arkui-spanstyle-i.md) | Describes the span style. |
| [StyleOptions](arkts-arkui-styleoptions-i.md) | Describes the style options. |
| [TextStyleInterface](arkts-arkui-textstyleinterface-i.md) | TextStyleInterface |

### Enums

| Name | Description |
| --- | --- |
| [StyledStringKey](arkts-arkui-styledstringkey-e.md) | Sets the style for a range styled string. |

### Types

| Name | Description |
| --- | --- |
| [AttachmentType](arkts-arkui-attachmenttype-t.md) | Defines the image attachment type, which is used to set images of PixelMap or [ResourceStr](arkts-arkui-resourcestr-t.md) type for styled strings. |
| [ColorFilterType](arkts-arkui-colorfiltertype-t.md) | Defines the type for image color filter settings. |
| [StyledStringValue](arkts-arkui-styledstringvalue-t.md) | Defines the style for a styled string. |

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [StyledStringMarshallCallback](arkts-arkui-styledstringmarshallcallback-t-sys.md) | Defines a callback for marshalling [StyledStringMarshallingValue](arkts-arkui-styledstringmarshallingvalue-t-sys.md). |
| [StyledStringMarshallingValue](arkts-arkui-styledstringmarshallingvalue-t-sys.md) | Defines a custom marshalling object for styled strings, which you need to define marshalling and unmarshalling methods. |
| [StyledStringUnmarshallCallback](arkts-arkui-styledstringunmarshallcallback-t-sys.md) | Defines a callback for unmarshalling an ArrayBuffer to obtain [StyledStringMarshallingValue](arkts-arkui-styledstringmarshallingvalue-t-sys.md). |
<!--DelEnd-->

