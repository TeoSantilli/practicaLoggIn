    import React, {Component} from 'react'
    import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { auth } from '../firebase/config';

    class Register extends Component{
        constructor(){
            super()
            this.state={
                email:'',
                username:'',
                password:'',
            }
        }

        register(mail, pass){
            console.log(this.state);

            auth.createUserWithEmailAndPassword(mail, pass)
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }

        render(){
            return(
                <View style={styles.container}>

                    <Text style={styles.title}>Register</Text>

                    <TextInput
                    style={styles.inputs} 
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={text=> this.setState({email:text})}
                    />

                    <TextInput 
                    style={styles.inputs} 
                    keyboardType='default'
                    placeholder='Username'
                    onChangeText={text=> this.setState({username:text})}
                    />

                    <TextInput 
                    style={styles.inputs} 
                    keyboardType='default'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text=> this.setState({password:text})}
                    />

                    <TouchableOpacity style={styles.boton} onPress={()=>this.register(this.state.email, this.state.password)}>
                        <Text style={styles.textoBoton}>Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login') }>
                    <Text>Tengo cuenta</Text>
                </TouchableOpacity>
                </View>
            )
        }



    }
    const styles = StyleSheet.create({
        container:{
            paddingHorizontal: 20,
            borderColor:'#28a745',
            borderRadius:4,
            paddingVertical: 20,
            marginTop:20,
            borderWidth:1.5,
        },

        title:{
            fontSize: 25,
            color: '#28a745'
        },

        inputs:{
            height:20,
            paddingVertical:15,
            paddingHorizontal:10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 6,
            marginVertical: 10,
        },

        boton:{
            backgroundColor:'#28a745',
            paddingHorizontal: 10,
            paddingVertical:6,
            alignItems: "center",
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#28a745'
        },

        textoBoton:{
            color: '#fff'
        }
    }) 

    export default Register