# react-native-bottom-sheet-dropdown

``` javascript
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Dropdown} from './src/components';

const App = () => {
  const [dataValue, setDataValue] = useState(0);
  const [paises, setPaises] = useState([
    {id: 1, name: 'Chile'},
    {id: 2, name: 'Mexico'},
    {id: 3, name: 'Colombia'},
    {id: 4, name: 'Peru'},
    {id: 5, name: 'Guatemala'},
    {id: 6, name: 'Argentina'},
    {id: 7, name: 'Brasil'},
  ]);

  const onValueChange = id => {
    setDataValue(id);
  };

  let TouchContentStyle = {
    backgroundColor: '#836fa9',
    padding: 10,
    alignItems: 'center',
    margin: 5,
    borderRadius: 15,
  };

  let TouchLabelStyle = {
    color: 'white',
  };
  let DropdownHintStyle = {
    fontSize: 16,
  };

  let DropdownLabelStyle = {
    fontSize: 16,
  };

  let DropdownItemStyle = {
    marginBottom: 7,
    marginTop: 7,
  };

  return (
    <SafeAreaView>
      <Dropdown
        DropdownItemStyle={DropdownItemStyle}
        DropdownLabelStyle={DropdownLabelStyle}
        DropdownHintStyle={DropdownHintStyle}
        TouchContentStyle={TouchContentStyle}
        TouchLabelStyle={TouchLabelStyle}
        animationType={1}
        persistent={true}
        closeTouch={true}
        hint="Seleccione Pais"
        onValueChange={onValueChange}
        selected={dataValue}
        data={paises}
      />
    </SafeAreaView>
  );
};

export default App;
```
![image](https://user-images.githubusercontent.com/54526418/190272780-428198fd-a946-4aeb-a52e-5e28d9d4bdc3.png)

![image](https://user-images.githubusercontent.com/54526418/190272860-3aed457a-873a-4944-86bd-b3875bbe41e2.png)

