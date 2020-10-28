import React, { RefObject } from 'react';
import { TextInput, TextInputProperties } from 'react-native';
declare type Validation = {
    status: boolean;
    message: string;
};
interface Props extends TextInputProperties {
    textInputStyle?: object | object[];
    children?: Element;
    underneathText?: string;
    underneathTextStyle?: object | object[];
    label?: string;
    labelStyle?: object | object[];
    isRequired?: boolean;
    value: string;
    customValidation?: () => Validation;
    asterik?: boolean;
    ref: RefObject<TextInput>;
}
declare const FormItem: React.ForwardRefExoticComponent<Pick<Props, "asterik" | "label" | "style" | "hitSlop" | "onLayout" | "pointerEvents" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityComponentType" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityTraits" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "children" | "allowFontScaling" | "numberOfLines" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "textInputStyle" | "underneathText" | "underneathTextStyle" | "labelStyle" | "isRequired" | "value" | "customValidation" | "autoCapitalize" | "autoCorrect" | "autoFocus" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "defaultValue" | "editable" | "keyboardType" | "maxLength" | "multiline" | "onBlur" | "onChange" | "onChangeText" | "onContentSizeChange" | "onEndEditing" | "onFocus" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "autoCompleteType" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus"> & React.RefAttributes<unknown>>;
export declare const containsError: (keyboardType: "default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" | undefined, isRequired: boolean, value: string, extraValidation?: Validation | undefined) => {
    status: boolean;
    message: string;
};
export default FormItem;
