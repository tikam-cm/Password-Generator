import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {object, number} from 'yup'

const passwordSchema = object().shape({
  password: number()
  .min(3,'Password length must be atleast 3 characters long')
  .max(8,'Password length must be atleast 8 characters long')
  .required('Password is required')
})
export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const generatePasswordString = (passwordLength : number) => {
  let characterList = ''

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%^&*()'

    if(uppercase)
      characterList += uppercaseChars
    if(lowercase)
      characterList += lowercaseChars
    if(number)
      characterList += numberChars
    if(symbol)
      characterList += symbolChars

    const password =  createPassword(characterList, passwordLength)

    setPassword(password)
    setIsPasswordGenerated(true)

  }

  const createPassword = (characters : string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < characters.length; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    //Reset all fields using methods to initial state
    setPassword('')
    setIsPasswordGenerated(false)
    setLowercase(true)
    setNumber(false)
    setUppercase(false)
    setSymbol(false)
  }

  return (
    <View>
      <Text>Password Generator</Text>
    </View>
  )
}

const styles = StyleSheet.create({})