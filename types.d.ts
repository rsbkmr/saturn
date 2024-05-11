/// <reference types="nativewind/types" />
import 'lottie-react-native';

declare module 'lottie-react-native' {
  interface LottieViewProps {
    className?: string;
    tw?: string;
  }
}
