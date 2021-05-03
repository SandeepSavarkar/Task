import React from 'react';
// import ReactNativeSettingsPage, {
// 	SectionRow,
// 	NavigateRow,
// 	CheckRow,SwitchRow,SliderRow
// } from 'react-native-settings-page';
import {
  SectionRow,
  SettingsPage,
  NavigateRow,
  BaseRow,CheckRow,SwitchRow
} from 'react-native-settings-view';
import {StyleSheet} from 'react-native'

class Settings extends React.Component {
  // TODO: implement your navigationOptionssa
  render() {
      return (
    <SettingsPage>
      
      <SectionRow title='Setting' titleStyle={{textAlign:'center' ,backgroundColor :'white',color:'black',fontSize:25,marginTop:20}} >
      <NavigateRow
          text="Parent Profile"
          leftIcon={{
            name: 'file-document',
            type: 'material-community',
          }}
          onPress={() => console.log('terms')}
        />
        <NavigateRow
          text="Terms and conditions"
          leftIcon={{
            name: 'file-document',
            type: 'material-community',
          }}
          onPress={() => console.log('terms')}
        />
        <NavigateRow
          text="Privacy Policy"
          leftIcon={{
            name: 'folder-lock',
            type: 'material-community',
          }}
          onPress={() => console.log('policy')}
        />
        <NavigateRow
          text="Contact us"
          leftIcon={{
            name: 'users',
            type: 'font-awesome',
          }}
          onPress={() => console.log('contact')}
        />
        <CheckRow
          text="Notifications"
          checked
          leftIcon={{
            name: 'ios-notifications',
            type: 'ionicon',
          }}
          onValueChange={(isChecked) => console.log('checked', isChecked)}
        />
        <SwitchRow
          text="Do not disturb"
          enabled
          leftIcon={{
            name: 'do-not-disturb',
            type: 'material-community',
          }}
          onValueChange={(isEnabled) => console.log('checked', isEnabled)}
        />
        {/* <BaseRow
          text={i18n.t('version')}
          leftIcon={{
            name: 'tag',
            type: 'font-awesome',
          }}
          rightContent={<Text>0.1.0</Text>}
        /> */}
      </SectionRow>
    </SettingsPage>
      )}
}

const styles =StyleSheet.create({
    section:{
        flex: 1
        
    }
})

export default Settings;
