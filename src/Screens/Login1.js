// import React, {Component} from 'react';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   KeyboardAvoidingView,
//   Picker,
//   Text,
//   Button,
// } from 'react-native';
// import Header from '../components/Header';
// import Input from '../components/Input';
// import Touchable from '../components/Touchable';
// import login_logo from '../assest/LoginLogo.png';
// import Validation from 'react-validation-utils';
// import { requiredRule, lengthRule } from 'react-validation-utils/build/rules';

// //const login_logo ="require('../src/assest/login_logo.png')"
// // export class LoginForm extends Component {
// //     render() {
// // class Login extends Component {
// //     render() {
// //         return (
// //             <SafeAreaView  style={container}>
// //                 <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} >
// //                     <Header />
// //                     <View  >
// //                         <Input placeholder="Email" icon='email' />
// //                         <Input placeholder="Password" icon='lock' type='pass' secureText='true' />
// //                         <Touchable  style={btn} label='Login'  onPress={()=>navigation.navigate('Signup', { name: 'Jane' })} />
// //                     </View>
// //                 </KeyboardAvoidingView>
// //             </SafeAreaView>
// //         )
// //     }
// // }

// // export default Login
// const validator = new Validator({
//     email: [
//       {
//         rule: requiredRule,
//         message: 'Please enter an email'
//       },
//       {
//         rule: emailRule,
//         message: 'Please enter a valid email'
//       }
//     ],
//     password: [
//       {
//         rule: requiredRule,
//         message: 'Please enter password'
//       }
//     ]
//   });

// class Login1 extends Component {
//     constructor() {
//         super();
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
    
//         // add validation storage to state (this will create this.state.validationStorage object)
//         // and prevalidate all fields
//         this.state = Validator.addValidation({
//           email: '',
//           password: ''
//         });
//       }
//       onChange(e) {
//         const { name, value } = e.target;
//         // validate the field and save results in validationStorage
//         this.setState(Validator.validate({ [name]: value }));
//       }
    
//       onSubmit(e) {
//         e.preventDefault();
//         // check validated and prevalidated fields
//         if (!Validator.isFormValid(this.state)) {
//           // validate all fields in the state to show all error messages
//           return this.setState(Validator.validate());
//         }
//         this.props.onSubmit(this.state);
//       }

//   validateEmail = (text) => {
//     console.log(text);
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (reg.test(text) === false) {
//       console.log('Email is Not Correct');
//       this.setState({email: text, emailerr: 'Email is Not Correct'});
//       return false;
//     } else {
//       this.setState({email: text, emailerr: 'Email is Correct'});
//       console.log('Email is Correct');
//     }
//   };

//   validatePass = (text) => {
// //    console.log(text);

//     if (text === false) {
//       //console.log('Password should not be null');
//       this.setState({password: text, emailerr: 'Password should not be null'});
//       return false;
//     } else {
//       this.setState({password: text, emailerr: 'Password should not be null'});
//       //console.log('');
//     }
//   };
//   render() {
//     const {container, regcontainer, regbtn, btn, text} = style;
//     const { login, password } = this.state;
//     // get error messages from invalid fields, if they were validated.
//     // prevalidated fields will receive no error messages, but they cause Validator.isFormValid to return false
//     const errors = Validator.getErrors(this.state);
//     return (
//       <SafeAreaView style={container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
//           <Header image={login_logo} />
//           <View>
//             <Input
//               placeholder="Email"
//               icon="email"
//               onChange={this.onChange}
//               value={this.state.email}
//               emailerror={this.state.emailerr}
//             />
//             <Input
//               placeholder="Password"
//               icon="lock"
//               type="pass"
//               onChange={this.onChange}
//               secureText="true"
//             />
//             <Touchable
//               style={btn}
//               label="Login"
//             //   onPress={() =>
//             //     this.props.navigation.navigate('Auth', {
//             //       email: this.state.email,
//             //       password : this.state.password 
//             //     })
//             onPress={this.onSubmit}
//             />
//           </View>
//           <View style={regcontainer}>
//             <Text style={text}>Not Registered Yet!!</Text>
//             <Button
//               title="Click Here"
//               style={regbtn}
//               onPress={() =>
//                 this.props.navigation.navigate('Signup', {name: 'Jane'})
//               }
//             />
//           </View>
//           {/* <View style={regcontainer}>
//             <Text style={text}>Go to storage page!!</Text>
//             <Button
//               title="Storage"
//               style={regbtn}
//               onPress={() =>
//                 this.props.navigation.navigate('Auth', {
//                   email: 'sandy@gmail.com'
//                 })
//               }
//             />
//           </View> */}
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }

// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   form: {
//     height: 400,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderRadius: 50,
//   },
//   btn: {
//     marginLeft: 100,
//   },
//   regcontainer: {
//     flexDirection: 'row',
//     marginTop: 25,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: '300',
//     color: 'black',
//     marginRight: 20,
//   },
//   regbtn: {
//     height: 20,
//     width: 70,
//     borderRadius: 50,
//   },
// });

// export default Login1;
