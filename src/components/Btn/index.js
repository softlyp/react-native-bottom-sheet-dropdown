import {TouchableNativeFeedback, View, StyleSheet, Text} from 'react-native';

const Btn = props => {
  let DefaultContent = {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  };

  let DefaultLabel = {
    color: 'white',
  };

  const {
    TouchContentStyle = DefaultContent,
    TouchLabelStyle = DefaultLabel,
    label = '',
  } = props;

  const styles = StyleSheet.create({
    BtnContent: TouchContentStyle,
    label: TouchLabelStyle,
  });

  return (
    <TouchableNativeFeedback {...props}>
      <View style={styles.BtnContent}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export {Btn};
