import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {Btn} from '../Btn';

const Dropdown = props => {
  const width = '100%';
  const height = '30%';

  let DefaultDropdownView = {
    backgroundColor: '#836fa9',
    alignSelf: 'center',
    alignItems: 'center',
    width: width,
    maxHeight: height,
    borderRadius: 5,
  };

  let DefaultHeaderStyle = {
    backgroundColor: '#b39ddb',
    width: width,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  };

  let DefaultItemStyle = {
    marginBottom: 5,
    marginTop: 5,
  };

  let DefaultLabelStyle = {
    color: 'white',
    fontSize: 15,
  };

  let DefaultHinStyle = {
    color: 'white',
  };
  const {
    DropdownHintStyle = DefaultHinStyle,
    DropdownLabelStyle = DefaultLabelStyle,
    DropdownItemStyle = DefaultItemStyle,
    DropdownHeaderStyle = DefaultHeaderStyle,
    DropdownViewStyle = DefaultDropdownView,
    TouchContentStyle,
    TouchLabelStyle,
    data = [],
    animationType = 2,
    persistent = false,
    closeTouch = false,
    position = 'end',
    hint = '',
    selected = null,
    onValueChange,
  } = props;
  const [visible, setModal] = useState(false);
  const [valueSelected, setValueSelected] = useState(selected);
  const onSelected = id => {
    onValueChange(id);
    setValueSelected(id);
    if (closeTouch) {
      setModal(false);
    }
  };

  const onGetNameValue = () => {
    const find = data.find(element => element.id == valueSelected);
    return find.name;
  };

  const Pos = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: Pos[position],
    },
    DropdownView: DropdownViewStyle,
    header: DropdownHeaderStyle,
    hint: DropdownHintStyle,
    item: DropdownItemStyle,
    label: DropdownLabelStyle,
    ScrollView: {
      width: '90%',
    },
  });

  return (
    <View>
      <Btn
        TouchContentStyle={TouchContentStyle}
        TouchLabelStyle={TouchLabelStyle}
        label={valueSelected ? onGetNameValue() : hint}
        onPress={() => setModal(!visible)}
      />
      <Modal
        animationType={animationType == 1 ? 'fade' : 'slide'}
        visible={visible}
        transparent={true}
        onRequestClose={() => setModal(false)}>
        <TouchableNativeFeedback
          onPress={() => (!persistent ? setModal(!visible) : null)}>
          <View style={styles.container}>
            <View style={styles.DropdownView}>
              <View style={styles.header}>
                <Text style={styles.hint}>{hint}</Text>
              </View>
              <ScrollView style={styles.ScrollView}>
                {data.map(item => {
                  return (
                    <TouchableOpacity
                      style={styles.item}
                      key={item.id}
                      onPress={() => onSelected(item.id)}>
                      <Text style={styles.label}>
                        {item.name} {valueSelected == item.id && '◄'}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </View>
  );
};
export {Dropdown};
