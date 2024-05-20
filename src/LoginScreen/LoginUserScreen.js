import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export default function LoginUserScreen(props) {
  const navigation = useNavigation();
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  // console.log(props.route.params, "This is props");

  // Function to check if user exists and send OTP
  async function checkUserAndSendOTP() {
    try {
      // const response = await axios.post(
      //   'http://192.168.113.177:8080/api/check-user', // Endpoint to check if user exists
      //   {
      //     mobile_number: mobileNumber,
      //     name: userName,
      //   }
      // );
const amount = props.route.params;
      
        // User exists, proceed to send OTP
       const response =  await axios.post(
          'http://192.168.113.177:8080/api/send-otp',
          {
            mobile_number: mobileNumber,
            user_name: userName,
          }
        );
        if (response.status === 200) {
        // Navigate to OTP verification screen with the entered mobile number and userName
        //navigation.navigate('HomeMainScreen');
        navigation.navigate('OTPVerificationScreen', { mobileNumber, userName, amount });
      } else {
        // User doesn't exist
        setMessage('User does not exist. Please check your details.');
      }
    } catch (error) {
      setMessage(`Error occurred: ${error.message}`);
    }
  }

  return (
    <>
      <View style={styles.lus}>
        <Image
          source={require('../images/LoginPage.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
        <View style={{ marginTop: moderateVerticalScale(-700) }}>
          <View>
            <Image
              source={require('../images/puja.png')}
              style={{
                width: 140,
                height: 140,
                marginLeft: moderateScale(20),
                backgroundColor: 'white',
                borderRadius: 80,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              color: 'white',
              marginLeft: moderateScale(20),
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginLeft: moderateScale(20),
              marginTop: moderateVerticalScale(10),
            }}
          >
            Enter your phone number
          </Text>
          <TextInput
            style={{
              width: '94%',
              height: 50,
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 15,
              borderRadius: 10,
              marginLeft: 10,
              color: 'white',
            }}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={setMobileNumber}
            value={mobileNumber}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              marginLeft: moderateScale(20),
              marginTop: moderateVerticalScale(10),
            }}
          >
            Enter your name
          </Text>
          <TextInput
            style={{
              width: '94%',
              height: 50,
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 15,
              borderRadius: 10,
              marginLeft: 10,
              color: 'white',
            }}
            placeholder="Enter your name"
            maxLength={20}
            onChangeText={setUserName}
            value={userName}
          />
        </View>

        <TouchableOpacity
          onPress={checkUserAndSendOTP}
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#C6BCFF',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 15,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
            Send OTP
          </Text>
        </TouchableOpacity>

        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </>
  );
}

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  lus: {
    height: HEIGHT,
    width: WIDTH,
  },
  message: {
    marginTop: moderateVerticalScale(15),
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
});











// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import React, { useState } from 'react';
// import {
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View
// } from 'react-native';
// import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';

// export default function LoginUserScreen() {
//   const navigation = useNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [userName, setUserName] = useState('');
//   const [message, setMessage] = useState('');


//   // Function to handle mobile number verification and OTP sending
//   async function fetchData() {
//     try {
//       const otpResponse = await axios.post(
//         'http://192.168.113.177:8080/send-otp',
//         {
//           mobile_number: mobileNumber,
//           user_name: userName,
//         }
//       );
//       if (otpResponse.status === 200) {
//         console.log("Hitting api");
//         console.log(mobileNumber);
//         console.log(userName);
//         navigation.navigate('OTPVerificationScreen', { mobileNumber, userName });
//         } else {
//           console.log(otpResponse.status);
//           setMessage(otpResponse.data.error || 'Failed to send OTP. Please try again.');
//         }
//       }catch (error) {
//       console.error('Error in fetchData:', error.message);
//       setMessage(`An error occurred: ${error.message}`);
//     }
//   }
//   console.log(mobileNumber,"This is Mobile number");
//   console.log(userName,"This is Mobile numberrrrrrrrr");

//   // Render the component
//   return (
//     <>
//       <View style={styles.lus}>
//         <Image
//           source={require('../images/LoginPage.jpg')}
//           style={{width: '100%', height: '100%'}}
//         />
//         <View style={{marginTop: moderateVerticalScale(-700)}}>
//           <View>
//             <Image
//               source={require('../images/puja.png')}
//               style={{
//                 width: 140,
//                 height: 140,
//                 marginLeft: moderateScale(20),
//                 backgroundColor: 'white',
//                 borderRadius: 80,
//               }}
//             />
//           </View>
//           <Text
//             style={{
//               fontSize: 25,
//               color: 'white',
//               marginLeft: moderateScale(20),
//             }}>
//             Create an account
//           </Text>
//           <Text
//             style={{
//               fontSize: 15,
//               color: 'white',
//               marginLeft: moderateScale(20),
//               marginTop: moderateVerticalScale(10),
//             }}>
//             Enter your phone number
//           </Text>
//           <TextInput
//             style={{
//               width: '94%',
//               height: 50,
//               borderColor: 'white',
//               borderWidth: 1,
//               marginTop: 15,
//               borderRadius: 10,
//               marginLeft: 10,
//               color: 'white',
//             }}
//             placeholder="Enter your phone number"
//             keyboardType="phone-pad"
//             maxLength={10}
//             //onFocus={_onPhoneNumberPressed}
//             onChangeText={setMobileNumber}
//             value={mobileNumber}
//           />
//           <Text
//             style={{
//               fontSize: 15,
//               color: 'white',
//               marginLeft: moderateScale(20),
//               marginTop: moderateVerticalScale(10),
//             }}>
//             Enter your Name
//           </Text>
//           <TextInput
//             style={{
//               width: '94%',
//               height: 50,
//               borderColor: 'white',
//               borderWidth: 1,
//               marginTop: 15,
//               borderRadius: 10,
//               marginLeft: 10,
//               color: 'white',
//             }}
//             placeholder="Enter your Name"
//             //keyboardType="phone-pad"
//             maxLength={20}
//             // //onFocus={_onPhoneNumberPressed}
//             onChangeText={setUserName}
//             value={userName}
//           />
//         </View>
//         <TouchableOpacity
//           onPress={fetchData}
//           style={{
//             width: 100,
//             height: 50,
//             backgroundColor: '#C6BCFF',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: 10,
//             marginTop: 15,
//             marginLeft: 10,
//           }}>
//           <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
//             Verify
//           </Text>
//         </TouchableOpacity>
//         {/* Display messages to the user */}
//         {message && <Text style={styles.message}>{message}</Text>}
//       </View>
//     </>
//   );
// }

// // Define styles
// const HEIGHT = Dimensions.get('screen').height;
// const WIDTH = Dimensions.get('screen').width;
// const styles = StyleSheet.create({
//   lus: {
//     height: HEIGHT,
//     width: WIDTH,
//   },
//   message: {
//     marginTop: moderateVerticalScale(15),
//     fontSize: 16,
//     color: 'red',
//     textAlign: 'center',
//   },
// });