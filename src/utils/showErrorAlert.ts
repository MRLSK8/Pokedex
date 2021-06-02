import { Alert } from 'react-native';

const showErrorAlert = (message: string): void => {
  Alert.alert(
    "Error!",
    message,
    [
      { text: "OK", onPress: () => { } }
    ]
  );
}

export default showErrorAlert;
